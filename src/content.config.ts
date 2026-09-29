// Content model for Zime Public Disclosures (Hand-Off Kit §4 and §5).
// Zod is the build-time enforcement layer. The JSON Schema files in /schemas mirror
// these shapes for interoperability; keep both in sync when a field changes.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { docsSchema } from '@astrojs/starlight/schema';

export const LIFECYCLE = [
	'draft',
	'under_review',
	'approved',
	'staged',
	'published',
	'amended',
	'superseded',
	'withdrawn',
] as const;

export const CLAIM_TYPES = [
	'verified_fact',
	'institutional_fact',
	'assessment',
	'interpretation',
	'category_interpretation',
	'promise',
	'offer',
	'assumption',
	'scenario',
	'forecast',
	'design_intent',
	'open_question',
] as const;

const markdown = (base: string) => glob({ pattern: '**/*.{md,mdx}', base });

const party = z.object({
	name: z.string(),
	entity_id: z.string().regex(/^ENT-[A-Z0-9-]+$/),
	declaration_authority: z.string().optional(),
});

// Common base fields (Hand-Off Kit §4, "Common base fields").
// "private" visibility is not allowed in this repository: private material lives in the
// separate private workspace.
const base = {
	id: z.string().regex(/^[A-Z0-9]+(-[A-Z0-9]+)+$/),
	title: z.string().min(1),
	summary: z.string().min(1),
	status: z.enum(LIFECYCLE),
	visibility: z.enum(['public', 'shared']).default('public'),
	version: z.string(),
	principles_version: z.string().optional(),
	declaring_party: party,
	accountable_owner: z.object({ role: z.string() }).optional(),
	publication_date: z.coerce.date().optional(),
	updated_date: z.coerce.date().optional(),
	effective_date: z.coerce.date().optional(),
	review_by: z.coerce.date().optional(),
	canonical_path: z.string().startsWith('/').endsWith('/'),
	canonical_url: z.url().optional(),
	related_artifacts: z.array(z.string()).default([]),
	related_concepts: z.array(z.string()).default([]),
	related_entities: z.array(z.string()).default([]),
	related_claims: z.array(z.string()).default([]),
	supersedes: z.string().optional(),
	superseded_by: z.string().optional(),
	inquiry_url: z.string().default('/inquiry/'),
	correction_url: z.string().default('/corrections/'),
	ai_assistance: z
		.object({
			used: z.boolean(),
			roles: z.array(z.string()).default([]),
			human_review: z.enum(['required', 'completed', 'not_required']),
		})
		.optional(),
	structured_data_type: z.string().optional(),
};

const disclosureClaim = z.object({
	claim_id: z.string().regex(/^CLM-[A-Z0-9-]+$/),
	claim_type: z.enum(CLAIM_TYPES),
	public_status: z.enum(['verified', 'qualified', 'contested', 'withdrawn']),
	credentials_path: z.string().optional(),
});

const disclosures = defineCollection({
	loader: markdown('./src/content/disclosures'),
	schema: z.object({
		...base,
		artifact_type: z.literal('disclosure'),
		subtype: z.enum([
			'category',
			'product',
			'partnership',
			'customer_evidence',
			'research',
			'leadership',
			'amendment',
		]),
		commercial_interest: z.string().optional(),
		claims: z.array(disclosureClaim).default([]),
		related_primer: z.string().optional(),
		related_credentials: z.string().optional(),
	}),
});

const futureProofs = defineCollection({
	loader: markdown('./src/content/future-proofs'),
	schema: z.object({
		...base,
		artifact_type: z.literal('future_proof'),
		subtype: z.enum(['cultural', 'category', 'product', 'operating_model', 'infrastructure', 'convergence']),
		future_horizon: z.string(),
		scenario_conditions: z.array(z.string()).min(1),
		assumption_confidence: z.enum(['low', 'medium', 'high']),
		// ID only. The Argumentation Brief itself stays in the private workspace.
		linked_argument_brief_id: z.string().optional(),
		linked_disclosure: z.string().optional(),
		related_credentials: z.string().optional(),
	}),
});

const primers = defineCollection({
	loader: markdown('./src/content/primers'),
	schema: z.object({
		...base,
		artifact_type: z.literal('interactive_primer'),
		related_disclosures: z.array(z.string()).default([]),
		related_credentials: z.array(z.string()).default([]),
		visuals: z
			.array(
				z.object({
					asset_id: z.string(),
					src: z.string().optional(),
					alt: z.string().min(1),
					caption: z.string().optional(),
					notes: z.string().optional(),
				}),
			)
			.default([]),
	}),
});

const credentials = defineCollection({
	loader: markdown('./src/content/credentials'),
	schema: z.object({
		...base,
		artifact_type: z.literal('testable_credentials'),
		for_artifact: z.string(),
		claims: z
			.array(
				z.object({
					claim_id: z.string().regex(/^CLM-[A-Z0-9-]+$/),
					statement: z.string(),
					claim_type: z.enum(CLAIM_TYPES),
					status: z.enum(['verified', 'qualified', 'contested', 'withdrawn']),
					evidence_paths: z.array(z.string()).default([]),
					scope: z.string(),
					confirmation_conditions: z.array(z.string()).default([]),
					disconfirmation_conditions: z.array(z.string()).default([]),
					independent_references: z.array(z.string()).default([]),
				}),
			)
			.default([]),
		prompt_sets: z
			.array(z.object({ persona: z.string(), prompt: z.string().optional() }))
			.default([]),
		revision_record: z
			.array(z.object({ version: z.string(), date: z.coerce.date(), change: z.string() }))
			.default([]),
	}),
});

const concepts = defineCollection({
	loader: markdown('./src/content/concepts'),
	schema: z.object({
		...base,
		artifact_type: z.literal('concept'),
		concept_type: z.enum(['glossary', 'thesaurus', 'entity', 'relationship']),
		// Concepts are defined by the corpus steward; declaring_party is optional here.
		declaring_party: party.optional(),
		aliases: z.array(z.string()).default([]),
	}),
});

const amendments = defineCollection({
	loader: markdown('./src/content/amendments'),
	schema: z.object({
		...base,
		artifact_type: z.literal('amendment'),
		affects: z.array(z.string()).min(1),
		amendment_class: z.enum(['clarification', 'procedural', 'substantive', 'emergency_safeguard']),
		prior_version: z.string(),
		reason: z.string(),
	}),
});

const reference = defineCollection({
	loader: markdown('./src/content/reference'),
	schema: z.object({
		...base,
		artifact_type: z.literal('reference'),
	}),
});

// Starlight's own pages (Start here and other site copy) live in src/content/site.
const docs = defineCollection({
	loader: markdown('./src/content/site'),
	schema: docsSchema(),
});

export const collections = {
	disclosures,
	'future-proofs': futureProofs,
	primers,
	credentials,
	concepts,
	amendments,
	reference,
	docs,
};
