import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getArtifacts } from '../utils/content';

export async function GET(context: APIContext) {
	const items = [...(await getArtifacts('disclosures')), ...(await getArtifacts('future-proofs'))];
	return rss({
		title: 'Zime Public Disclosures',
		description: 'Disclosures and Future Proofs from Zime.',
		site: context.site!,
		items: items.map((e) => ({
			title: e.data.title,
			description: e.data.summary,
			link: e.data.canonical_path,
			pubDate: e.data.publication_date,
		})),
	});
}
