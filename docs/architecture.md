# Architecture

Zime Public Disclosures is a governed corpus, not a content site. The site is a rendered surface of the Markdown in this repository.

## System topology

```text
PRIVATE WORKSPACE (separate private repository)
Session Journals · source dossiers · Evidence Ledgers · approvals · drafts
        ↓  approved, non-sensitive artifacts only
THIS REPOSITORY (canonical public source)
Markdown · MDX · front matter · schemas
        ↓
VALIDATION (GitHub Actions)
content · relationships · public boundary · links · build
        ↓
RENDERING (Astro + Starlight)  →  DEPLOYMENT (Vercel: previews + production)
        ↓
DELIVERY SURFACES
Zime Public Disclosures site · zime.ai press page (CMS adapter) · newswire · partner and category sites
        ↓
INQUIRY AND LEARNING
inquiry and correction issues · AI inquiry probes · amendments
```

## Source-of-truth rules

- Markdown and front matter in this repository are the canonical editorial source.
- The rendered site is the canonical human-facing URL, until the canonical domain decision says otherwise.
- The zime.ai press page and any newswire copy are delivery surfaces. They must not become separate, ungoverned editorial sources. Substantive edits made there must come back here as a source change.
- Private material (evidence, transcripts, approvals, internal deliberation, credentials) never enters this repository, including deleted files and old branches.

## Layers

| Layer | Implementation |
|---|---|
| Canonical public content | `src/content/**` Markdown/MDX with front matter |
| Content model | `src/content.config.ts` (Zod, enforced at build) and `schemas/*.schema.json` (interoperability) |
| Validation | `scripts/validate-*.mjs`, run by `.github/workflows/*` |
| Rendering | Astro + Starlight, `src/layouts`, `src/components`, `src/pages` |
| Structured data | `src/utils/jsonld.ts`, only for content that is visible on the page |
| Publication record | `scripts/build-manifest.mjs` → `/publication-manifest.json` on every deploy |
| Deployment | Vercel Git integration, `vercel.json` |

## Lifecycle

```text
draft → under_review → approved → staged → published
                                              ├── amended
                                              ├── superseded
                                              └── withdrawn
```

- Only `published`, `amended`, `superseded` and `withdrawn` render in production. Set `PUBLIC_SHOW_UNPUBLISHED=true` on Vercel preview deployments to review drafts.
- `validate:content` rejects invalid transitions by comparing against `origin/main`.
- A material change after approval returns the artifact to `under_review`.

## Differences from the reference implementation

This repository follows the Public Disclosures Capability Hand-Off Kit (PD-HANDOFF-2026-001, v0.1), with these deliberate differences:

| Hand-Off Kit | Here | Why |
|---|---|---|
| `src/content/config.ts` | `src/content.config.ts` | Current Astro (v7) location for content config |
| Node 20 in CI | Node 22 | Required by current Astro |
| `commons/` content and pages | Not included | The Generative Trust Commons doctrine is maintained in its own repository, not in a client corpus |
| `linked_argument_brief` pointing to a private URI | `linked_argument_brief_id` (ID only) | The public-boundary rule forbids private URIs in public front matter |
| Starlight `src/content/docs` | `src/content/site` | Keeps site copy separate from artifact collections, as in the Hand-Off Kit skeleton |
