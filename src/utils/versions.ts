import type { Artifact } from './content';
import { formatDate } from './content';

export interface VersionEvent {
	label: string;
	date?: string;
	href?: string;
}

// Amendments, corrections, supersessions and withdrawals stay visible (non-negotiable rule 7).
export function versionEvents(entry: Artifact, all: Artifact[]): VersionEvent[] {
	const d = entry.data;
	const events: VersionEvent[] = [];
	if (d.publication_date) events.push({ label: `First published (v${d.version})`, date: formatDate(d.publication_date) });
	if (d.updated_date && d.updated_date.valueOf() !== d.publication_date?.valueOf()) {
		events.push({ label: 'Last updated', date: formatDate(d.updated_date) });
	}
	for (const a of all.filter((x) => x.data.artifact_type === 'amendment')) {
		const affects = (a.data as { affects?: string[] }).affects ?? [];
		if (affects.includes(d.id) || affects.includes(d.canonical_path)) {
			events.push({ label: `Amended: ${a.data.title}`, date: formatDate(a.data.effective_date), href: a.data.canonical_path });
		}
	}
	const link = (ref?: string) => all.find((x) => x.data.id === ref || x.data.canonical_path === ref);
	if (d.supersedes) events.push({ label: 'Supersedes', href: link(d.supersedes)?.data.canonical_path ?? d.supersedes });
	if (d.superseded_by) events.push({ label: 'Superseded by', href: link(d.superseded_by)?.data.canonical_path ?? d.superseded_by });
	if (d.status === 'withdrawn') events.push({ label: 'Withdrawn' });
	return events;
}
