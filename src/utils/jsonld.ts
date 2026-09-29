import type { Artifact } from './content';

// Structured data must match visible page content (Hand-Off Kit §6, JSON-LD policy).
// Structured data does not guarantee AI citation; never claim that it does.
const TYPE_BY_ARTIFACT: Record<string, string> = {
	disclosure: 'NewsArticle',
	future_proof: 'Article',
	interactive_primer: 'Article',
	testable_credentials: 'Article',
	amendment: 'Article',
	reference: 'Article',
};

export function jsonLdFor(entry: Artifact, site: URL | undefined) {
	const d = entry.data;
	const url = site ? new URL(d.canonical_path, site).toString() : d.canonical_path;
	if (d.artifact_type === 'concept') {
		return {
			'@context': 'https://schema.org',
			'@type': 'DefinedTerm',
			name: d.title,
			description: d.summary,
			url,
		};
	}
	return {
		'@context': 'https://schema.org',
		'@type': d.structured_data_type ?? TYPE_BY_ARTIFACT[d.artifact_type] ?? 'Article',
		headline: d.title,
		description: d.summary,
		url,
		datePublished: d.publication_date?.toISOString(),
		dateModified: (d.updated_date ?? d.publication_date)?.toISOString(),
		publisher: d.declaring_party ? { '@type': 'Organization', name: d.declaring_party.name } : undefined,
		version: d.version,
	};
}

export function jsonLdHead(entry: Artifact, site: URL | undefined) {
	return [
		{
			tag: 'script' as const,
			attrs: { type: 'application/ld+json' },
			content: JSON.stringify(jsonLdFor(entry, site)),
		},
	];
}
