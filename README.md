# Zime Public Disclosures

News, releases, research, reference materials, and ways to examine what Zime is building and why it matters.

Structured for human inquiry, public accountability, and AI-mediated verification.

> **Status: pre-release (v0.1).** Structure and wording may change. Every change is recorded.

## What this is

This repository is the canonical public source for Zime's disclosures. Each disclosure is a dated, attributable, versioned Markdown file that people and AI research agents can read, compare, question and cite. The website is built from these files.

A Public Disclosure is a voluntary commercial disclosure by Zime. It is not a regulatory filing unless it is explicitly labeled as one, and it is not legal, financial or investment advice.

## What you will find

| Folder | Contents |
|---|---|
| [`src/content/disclosures/`](src/content/disclosures/) | Disclosures: releases and announcements |
| [`src/content/primers/`](src/content/primers/) | Interactive Primers: layered explanations (backgrounders) |
| [`src/content/credentials/`](src/content/credentials/) | Testable Credentials: claims, evidence paths, constraints, FAQs, inquiry prompts |
| [`src/content/future-proofs/`](src/content/future-proofs/) | Future Proofs: conditional future-state arguments |
| [`src/content/concepts/`](src/content/concepts/) | Glossary, Thesaurus monographs, entities, relationships |
| [`src/content/amendments/`](src/content/amendments/) | Every amendment, correction, supersession and withdrawal |
| [`src/content/reference/`](src/content/reference/) | Fact sheet, institutional profile, media contact |

## Question anything

- Ask a question or challenge a claim: open an issue labeled `inquiry`.
- Report an error: open an issue labeled `correction`.

See [docs/contribution-guide.md](docs/contribution-guide.md).

## Rules this repository follows

1. Canonical public content lives here as Markdown/MDX with validated front matter.
2. Confidential evidence, transcripts, approvals, private prompts, credentials, keys, client data and internal deliberation never live here.
3. Every public disclosure has a stable ID, declaring party, artifact type, status, version, dates, canonical URL, and an inquiry or correction route.
4. Every consequential disclosure links to Testable Credentials, relevant concepts, and an Interactive Primer where complexity warrants it.
5. Nothing is published from an unreviewed branch.
6. AI can assist extraction, drafting, formatting, validation and testing. It cannot fabricate evidence, approve claims, impersonate authority, or publish.
7. Amendments, corrections, supersessions and withdrawals are visible. Material public facts are never silently overwritten.
8. Client-specific differences are configuration, not forks of the content model.

## For authors and maintainers

Requires Node 22.12 or newer.

```bash
npm install
npm run dev        # local site at http://localhost:4321
npm run validate   # content, relationships, public boundary, links
npm run build      # manifest + static site in dist/
```

| Doc | Purpose |
|---|---|
| [docs/content-authoring.md](docs/content-authoring.md) | Where files go, naming, IDs, claim discipline |
| [docs/templates/](docs/templates/) | Starter files for every artifact type |
| [docs/publication-runbook.md](docs/publication-runbook.md) | From approved draft to published, on every surface |
| [docs/correction-runbook.md](docs/correction-runbook.md) | Amend, supersede, withdraw |
| [docs/architecture.md](docs/architecture.md) | System topology, lifecycle, differences from the reference kit |

### Repository layout

```text
.
├── astro.config.mjs        Astro + Starlight site config
├── vercel.json             Vercel deployment config
├── public/                 robots.txt, favicon, assets
├── src/
│   ├── content.config.ts   Content model (Zod schemas)
│   ├── content/            Canonical Markdown corpus
│   ├── components/         DisclosureMeta, PrinciplesDeclaration, TestableCredentialsPanel, ...
│   ├── layouts/            Disclosure, Primer, Credentials, Concept
│   ├── pages/              Routes, RSS
│   ├── styles/
│   └── utils/              content, relationships, jsonld, versions, prompts
├── schemas/                JSON Schema mirrors of the content model
├── scripts/                Validators and publication-manifest builder
├── .github/workflows/      validate, links, build, preview-check
└── docs/                   Runbooks, guides, templates
```

### Deployment

- `main` is the production branch. Work happens in feature branches through pull requests.
- Vercel builds a preview for every pull request. Set `PUBLIC_SHOW_UNPUBLISHED=true` for previews to review drafts.
- Set `SITE_URL` once the canonical domain is decided.

## License

Not yet decided. Until a license is added, all rights are reserved by Zime.
