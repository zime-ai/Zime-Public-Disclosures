// Front matter, IDs, dates, lifecycle, canonical paths (Hand-Off Kit §5).
import { loadEntries, expectedPath, baseVersion, reporter, LIFECYCLE, PUBLIC_STATES, CONSEQUENTIAL } from './lib/content.mjs';

const r = reporter('validate:content');
const entries = loadEntries();
const ids = new Map();
const paths = new Map();

// Allowed lifecycle transitions (Hand-Off Kit §5, lifecycle state machine).
const NEXT = {
	draft: ['under_review'],
	under_review: ['draft', 'approved'],
	approved: ['under_review', 'staged', 'published'],
	staged: ['under_review', 'published'],
	published: ['amended', 'superseded', 'withdrawn'],
	amended: ['amended', 'superseded', 'withdrawn'],
	superseded: [],
	withdrawn: [],
};

for (const e of entries) {
	const d = e.data;
	if (!d) { r.error(e.file, 'missing front matter'); continue; }

	for (const f of ['id', 'title', 'summary', 'artifact_type', 'status', 'version', 'canonical_path']) {
		if (d[f] === undefined || d[f] === '') r.error(e.file, `missing required field "${f}"`);
	}
	if (d.artifact_type && d.artifact_type !== e.cfg.type) {
		r.error(e.file, `artifact_type "${d.artifact_type}" does not belong in ${e.cfg.dir} (expected "${e.cfg.type}")`);
	}
	if (d.status && !LIFECYCLE.includes(d.status)) r.error(e.file, `invalid status "${d.status}"`);
	if (d.visibility === 'private') r.error(e.file, 'visibility "private" is not allowed in the public repository');

	if (d.id) {
		if (ids.has(d.id)) r.error(e.file, `duplicate id "${d.id}" (also in ${ids.get(d.id)})`);
		ids.set(d.id, e.file);
	}
	if (d.canonical_path) {
		if (paths.has(d.canonical_path)) r.error(e.file, `duplicate canonical_path "${d.canonical_path}" (also in ${paths.get(d.canonical_path)})`);
		paths.set(d.canonical_path, e.file);
		if (d.canonical_path !== expectedPath(e)) r.error(e.file, `canonical_path must be "${expectedPath(e)}" to match the file location`);
	}

	if (e.collection !== 'concepts' && !d.declaring_party?.entity_id) r.error(e.file, 'missing declaring_party.name / entity_id');

	if (PUBLIC_STATES.includes(d.status)) {
		if (!d.publication_date) r.error(e.file, `status "${d.status}" requires publication_date`);
		if (!d.updated_date) r.error(e.file, `status "${d.status}" requires updated_date`);
		if (!d.review_by) r.warn(e.file, 'no review_by date');
	}

	const consequential = (e.collection === 'disclosures' && CONSEQUENTIAL.has(d.subtype)) || e.collection === 'future-proofs';
	if (consequential && !d.principles_version) r.error(e.file, 'consequential artifact is missing principles_version');

	if (d.ai_assistance?.used && !['completed', 'not_required'].includes(d.ai_assistance.human_review) && PUBLIC_STATES.includes(d.status)) {
		r.warn(e.file, 'AI assistance used but human_review is not "completed"');
	}

	const prev = baseVersion(e.file);
	if (prev?.status && d.status && prev.status !== d.status && !NEXT[prev.status]?.includes(d.status)) {
		r.error(e.file, `invalid lifecycle transition ${prev.status} → ${d.status}`);
	}
	if (prev && PUBLIC_STATES.includes(prev.status) && prev.version === d.version && prev.summary !== d.summary) {
		r.error(e.file, 'published summary changed without a version bump. Publish an amendment instead of overwriting.');
	}
}

console.log(`checked ${entries.length} artifact(s)`);
r.finish();
