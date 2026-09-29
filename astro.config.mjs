// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Canonical public domain is not decided yet (Journal DEF-003).
// Set SITE_URL in Vercel once it is, e.g. https://zime.ai or a press subdomain.
const site = process.env.SITE_URL ?? 'https://zime.ai';

export default defineConfig({
	site,
	trailingSlash: 'always',
	integrations: [
		starlight({
			title: 'Zime Public Disclosures',
			description:
				'News, releases, research, reference materials, and ways to examine what we are building and why it matters.',
			customCss: ['./src/styles/custom.css'],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/zime-ai/Zime-Public-Disclosures',
				},
			],
			sidebar: [
				{ label: 'Start here', slug: 'start-here' },
				{ label: 'Disclosures', link: '/disclosures/' },
				{ label: 'Future Proofs', link: '/future-proofs/' },
				{ label: 'Interactive Primers', link: '/primers/' },
				{ label: 'Testable Credentials', link: '/credentials/' },
				{
					label: 'Concepts',
					items: [
						{ label: 'Glossary', link: '/concepts/glossary/' },
						{ label: 'Thesaurus', link: '/concepts/thesaurus/' },
					],
				},
				{ label: 'Amendments', link: '/amendments/' },
				{ label: 'Inquiry', link: '/inquiry/' },
				{ label: 'Corrections', link: '/corrections/' },
			],
		}),
	],
});
