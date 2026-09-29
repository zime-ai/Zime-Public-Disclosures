// Internal links fail the build; external links are checked only when LINKS_CHECK_EXTERNAL=1
// (the scheduled links workflow) and only warn (Hand-Off Kit §5, "Links").
import { loadEntries, reporter, STATIC_PATHS } from './lib/content.mjs';

const r = reporter('validate:links');
const entries = loadEntries().filter((e) => e.data);
const known = new Set([...STATIC_PATHS, ...entries.map((e) => e.data.canonical_path)]);
const external = new Set();

for (const e of entries) {
	for (const [, target] of e.body.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
		if (/^https?:\/\//.test(target)) { external.add(target); continue; }
		if (!target.startsWith('/')) continue;
		const path = target.split('#')[0];
		const normalized = path.endsWith('/') || path.includes('.') ? path : `${path}/`;
		if (!known.has(normalized) && !normalized.startsWith('/assets/')) r.error(e.file, `broken internal link "${target}"`);
	}
}

if (process.env.LINKS_CHECK_EXTERNAL === '1') {
	for (const url of external) {
		try {
			const res = await fetch(url, { method: 'HEAD', redirect: 'follow', signal: AbortSignal.timeout(10000) });
			if (res.status >= 400) r.warn('external', `${url} returned ${res.status}`);
		} catch (err) {
			r.warn('external', `${url} failed: ${err.message}`);
		}
	}
}

console.log(`checked ${entries.length} artifact(s), ${external.size} external link(s)${process.env.LINKS_CHECK_EXTERNAL === '1' ? '' : ' (not fetched)'}`);
r.finish();
