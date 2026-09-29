// Publication Manifest (Hand-Off Kit §7). Written to public/publication-manifest.json at
// build time so each deployment serves a record of what it published and from which commit.
import { createHash } from 'node:crypto';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { execSync } from 'node:child_process';
import { ROOT, loadEntries, PUBLIC_STATES } from './lib/content.mjs';

const site = process.env.SITE_URL ?? 'https://zime.ai';
const git = (cmd) => {
	try { return execSync(cmd, { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { return null; }
};

const artifacts = loadEntries()
	.filter((e) => e.data && PUBLIC_STATES.includes(e.data.status))
	.map((e) => ({
		artifact_id: e.data.id,
		source_path: e.file,
		source_commit: git(`git log -1 --format=%h -- "${e.file}"`),
		source_version: e.data.version,
		content_hash: `sha256:${createHash('sha256').update(e.text).digest('hex')}`,
		canonical_url: new URL(e.data.canonical_path, site).toString(),
		publication_status: e.data.status,
		accountable_owner: e.data.accountable_owner?.role ?? null,
		principles_version: e.data.principles_version ?? null,
		related_credentials: e.data.related_credentials ?? null,
	}));

const manifest = {
	generated_at: new Date().toISOString(),
	build_commit: process.env.VERCEL_GIT_COMMIT_SHA ?? git('git rev-parse --short HEAD'),
	deployment: {
		host: process.env.VERCEL ? 'vercel' : 'local',
		deployment_id: process.env.VERCEL_DEPLOYMENT_ID ?? null,
		environment: process.env.VERCEL_ENV ?? null,
	},
	artifacts,
};

writeFileSync(join(ROOT, 'public/publication-manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`build:manifest: ${artifacts.length} published artifact(s)`);
