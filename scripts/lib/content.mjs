// Shared loader for the validation scripts. Reads Markdown/MDX front matter directly so
// checks run without an Astro build.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { execSync } from 'node:child_process';
import { parse } from 'yaml';

export const ROOT = new URL('../../', import.meta.url).pathname;

// collection -> { dir, route } ; route is the URL prefix the canonical_path must use.
export const COLLECTIONS = {
	disclosures: { dir: 'src/content/disclosures', route: '/disclosures/', type: 'disclosure' },
	'future-proofs': { dir: 'src/content/future-proofs', route: '/future-proofs/', type: 'future_proof' },
	primers: { dir: 'src/content/primers', route: '/primers/', type: 'interactive_primer' },
	credentials: { dir: 'src/content/credentials', route: '/credentials/', type: 'testable_credentials' },
	concepts: { dir: 'src/content/concepts', route: '/concepts/', type: 'concept' },
	amendments: { dir: 'src/content/amendments', route: '/amendments/', type: 'amendment' },
	reference: { dir: 'src/content/reference', route: '/reference/', type: 'reference' },
};

export const STATIC_PATHS = [
	'/', '/start-here/', '/disclosures/', '/future-proofs/', '/primers/', '/credentials/',
	'/concepts/glossary/', '/concepts/thesaurus/', '/amendments/', '/reference/',
	'/inquiry/', '/corrections/', '/rss.xml',
];

export const LIFECYCLE = ['draft', 'under_review', 'approved', 'staged', 'published', 'amended', 'superseded', 'withdrawn'];
export const PUBLIC_STATES = ['published', 'amended', 'superseded', 'withdrawn'];

// Subtypes that need the Consequential Disclosure Package (Report, "Consequential Disclosure Package").
export const CONSEQUENTIAL = new Set(['category', 'product', 'partnership', 'customer_evidence', 'research']);

function walk(dir) {
	if (!existsSync(dir)) return [];
	return readdirSync(dir).flatMap((name) => {
		const p = join(dir, name);
		if (statSync(p).isDirectory()) return walk(p);
		return ['.md', '.mdx'].includes(extname(p)) ? [p] : [];
	});
}

export function splitFrontMatter(text) {
	const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!m) return { data: null, body: text };
	return { data: parse(m[1]) ?? {}, body: m[2] };
}

export function loadEntries() {
	const entries = [];
	for (const [collection, cfg] of Object.entries(COLLECTIONS)) {
		for (const abs of walk(join(ROOT, cfg.dir))) {
			const file = relative(ROOT, abs);
			const slug = relative(join(ROOT, cfg.dir), abs).replace(/\.(md|mdx)$/, '').replace(/\/index$/, '');
			const text = readFileSync(abs, 'utf8');
			const { data, body } = splitFrontMatter(text);
			entries.push({ collection, cfg, file, slug, data, body, text });
		}
	}
	return entries;
}

export function expectedPath(entry) {
	return `${entry.cfg.route}${entry.slug}/`;
}

// Previous version of a file on the base branch, for lifecycle-transition checks.
export function baseVersion(file) {
	const ref = process.env.BASE_REF ?? 'origin/main';
	try {
		const text = execSync(`git show ${ref}:${file}`, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString();
		return splitFrontMatter(text).data;
	} catch {
		return null;
	}
}

export function reporter(name) {
	const errors = [];
	const warnings = [];
	return {
		error: (file, msg) => errors.push(`${file}: ${msg}`),
		warn: (file, msg) => warnings.push(`${file}: ${msg}`),
		finish() {
			for (const w of warnings) console.warn(`  warn  ${w}`);
			for (const e of errors) console.error(`  error ${e}`);
			console.log(`${name}: ${errors.length} error(s), ${warnings.length} warning(s)`);
			if (errors.length) process.exit(1);
		},
	};
}
