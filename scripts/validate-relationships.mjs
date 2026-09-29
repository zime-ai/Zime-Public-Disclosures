// Related artifact integrity, credentials requirement, concept linking, version links (Hand-Off Kit §5).
import { loadEntries, reporter, STATIC_PATHS, PUBLIC_STATES, CONSEQUENTIAL } from './lib/content.mjs';

const r = reporter('validate:relationships');
const entries = loadEntries().filter((e) => e.data);
const byRef = new Map();
for (const e of entries) {
	byRef.set(e.data.id, e);
	byRef.set(e.data.canonical_path, e);
}
const resolves = (ref) => byRef.has(ref) || STATIC_PATHS.includes(ref) || /^https?:\/\//.test(ref);
const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);

for (const e of entries) {
	const d = e.data;
	const live = PUBLIC_STATES.includes(d.status);
	const flag = live ? r.error : r.warn;

	const refs = [
		...list(d.related_artifacts), ...list(d.related_concepts), ...list(d.related_primer),
		...list(d.related_credentials), ...list(d.related_disclosures), ...list(d.linked_disclosure),
		...list(d.for_artifact), ...list(d.affects), ...list(d.supersedes), ...list(d.superseded_by),
		...list(d.claims).map((c) => c.credentials_path).filter(Boolean),
	];
	for (const ref of refs) if (!resolves(ref)) flag(e.file, `reference "${ref}" does not resolve`);

	for (const ent of list(d.related_entities)) {
		const known = entries.some((x) => x.data.concept_type === 'entity' && x.data.id === ent) || ent === d.declaring_party?.entity_id;
		if (!known) r.warn(e.file, `entity "${ent}" has no entity record in concepts/entities`);
	}

	if (e.collection === 'disclosures' && CONSEQUENTIAL.has(d.subtype) && !d.related_credentials) {
		flag(e.file, `consequential "${d.subtype}" disclosure has no related_credentials`);
	}
	if ((['category', 'research'].includes(d.subtype) || e.collection === 'future-proofs') && list(d.related_concepts).length === 0) {
		r.warn(e.file, 'category, research or Future Proof artifact has no related_concepts');
	}
	if (d.status === 'superseded' && !d.superseded_by) r.warn(e.file, 'status "superseded" but no superseded_by');
	if (d.superseded_by) {
		const next = byRef.get(d.superseded_by);
		if (next && next.data.supersedes !== d.id && next.data.supersedes !== d.canonical_path) {
			r.warn(e.file, `successor ${d.superseded_by} does not link back with "supersedes"`);
		}
	}
	if (e.collection === 'amendments' && list(d.affects).length === 0) r.warn(e.file, 'amendment does not reference an affected artifact');
}

console.log(`checked ${entries.length} artifact(s)`);
r.finish();
