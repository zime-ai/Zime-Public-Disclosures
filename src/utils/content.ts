import { getCollection, type CollectionEntry } from 'astro:content';

export type ArtifactCollection =
	| 'disclosures'
	| 'future-proofs'
	| 'primers'
	| 'credentials'
	| 'concepts'
	| 'amendments'
	| 'reference';

export type Artifact = CollectionEntry<ArtifactCollection>;

// States that may appear on the public site. Drafts, reviews, approvals and staged
// artifacts only render in previews (PUBLIC_SHOW_UNPUBLISHED=true), never in production.
export const PUBLIC_STATES = new Set(['published', 'amended', 'superseded', 'withdrawn']);

export const showUnpublished = import.meta.env.PUBLIC_SHOW_UNPUBLISHED === 'true';

export function isRenderable(entry: Artifact): boolean {
	return showUnpublished || PUBLIC_STATES.has(entry.data.status);
}

export async function getArtifacts<C extends ArtifactCollection>(collection: C) {
	const entries = (await getCollection(collection)) as Artifact[];
	return entries
		.filter(isRenderable)
		.sort((a, b) => dateOf(b) - dateOf(a)) as CollectionEntry<C>[];
}

export async function getAllArtifacts(): Promise<Artifact[]> {
	const names: ArtifactCollection[] = [
		'disclosures',
		'future-proofs',
		'primers',
		'credentials',
		'concepts',
		'amendments',
		'reference',
	];
	const lists = await Promise.all(names.map((n) => getCollection(n) as Promise<Artifact[]>));
	return lists.flat();
}

export function dateOf(entry: Artifact): number {
	const d = entry.data.updated_date ?? entry.data.publication_date;
	return d ? d.valueOf() : 0;
}

export function formatDate(d?: Date): string {
	return d ? d.toISOString().slice(0, 10) : '—';
}

// Static routes use the entry id; canonical_path must match (enforced by validate-content).
export function routeParams(entry: Artifact) {
	return { params: { slug: entry.id }, props: { entry } };
}
