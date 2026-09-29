import type { Artifact } from './content';

export interface ResolvedLink {
	ref: string;
	href?: string;
	title: string;
	kind?: string;
}

// Resolve a related_* reference (a canonical path or an artifact ID) to a link.
export function resolveRef(ref: string, all: Artifact[]): ResolvedLink {
	const match = all.find((e) => e.data.canonical_path === ref || e.data.id === ref);
	if (!match) return { ref, href: ref.startsWith('/') ? ref : undefined, title: ref };
	return {
		ref,
		href: match.data.canonical_path,
		title: match.data.title,
		kind: match.data.artifact_type,
	};
}

export function relatedGroups(entry: Artifact, all: Artifact[]) {
	const d = entry.data as Record<string, unknown>;
	const list = (v: unknown): string[] => (Array.isArray(v) ? (v as string[]) : v ? [v as string] : []);
	const groups: Record<string, string[]> = {
		Disclosures: [...list(d.related_disclosures), ...list(d.linked_disclosure)],
		'Interactive Primer': list(d.related_primer),
		'Testable Credentials': list(d.related_credentials),
		Concepts: list(d.related_concepts),
		'Related artifacts': list(d.related_artifacts),
	};
	return Object.entries(groups)
		.filter(([, refs]) => refs.length > 0)
		.map(([label, refs]) => ({ label, links: refs.map((r) => resolveRef(r, all)) }));
}
