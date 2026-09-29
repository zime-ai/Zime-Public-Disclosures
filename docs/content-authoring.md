# Content authoring

## Where things go

| You are writing | Folder | Template |
|---|---|---|
| A press release / announcement (a **Disclosure**) | `src/content/disclosures/` | [disclosure.md](templates/disclosure.md) |
| The **Backgrounder** for a release (longer explanation, extra citations) | `src/content/primers/` | [primer.md](templates/primer.md) |
| The **FAQ with testable claims and AI prompts** | `src/content/credentials/` | [credentials.md](templates/credentials.md) |
| A conditional future-state argument (**Future Proof**) | `src/content/future-proofs/` | [future-proof.md](templates/future-proof.md) |
| A term definition (**Glossary**, 75 to 250 words) | `src/content/concepts/glossary/` | [concept.md](templates/concept.md) |
| A long monograph on a key concept (**Thesaurus**) | `src/content/concepts/thesaurus/` | [concept.md](templates/concept.md) |
| An entity record (Zime, a product, a partner) | `src/content/concepts/entities/` | [concept.md](templates/concept.md) |
| A change to anything already published (**Amendment**) | `src/content/amendments/` | [amendment.md](templates/amendment.md) |
| Fact sheet, institutional profile, media contact | `src/content/reference/` | [disclosure.md](templates/disclosure.md) with `artifact_type: reference` |

A typical release is a set of three files that link to each other: the Disclosure, its Primer (backgrounder) and its Testable Credentials (FAQ).

## Naming

- File name = URL slug. `src/content/disclosures/zime-launches-x.md` → `/disclosures/zime-launches-x/`.
- `canonical_path` must equal that URL. The build fails if it doesn't.
- IDs are stable and never reused:

| Artifact | ID pattern |
|---|---|
| Disclosure | `ZIME-DISC-YYYY-NNN` |
| Future Proof | `ZIME-FP-YYYY-NNN` |
| Interactive Primer | `ZIME-PRIMER-YYYY-NNN` |
| Testable Credentials | `ZIME-CRED-YYYY-NNN` |
| Concept | `CONCEPT-ZIME-NNN` |
| Amendment | `AMD-ZIME-YYYY-NNN` |
| Claim | `CLM-ZIME-NNN` |
| Entity | `ENT-ZIME-NNN` (Zime itself is `ENT-ZIME-001`) |

## Claim discipline

Each material claim gets a `claim_id` and a `claim_type`, so readers and AI systems can tell what kind of statement it is:

`verified_fact` · `institutional_fact` · `assessment` · `interpretation` · `category_interpretation` · `promise` · `offer` · `assumption` · `scenario` · `forecast` · `design_intent` · `open_question`

- Facts must not masquerade as forecasts, and design intent must not masquerade as present capability.
- A category proposition must not be presented as independent consensus.
- Rankings and superlatives ("the leading", "number one") need a named, checkable source and scope, or they don't go in.
- Customer quotes need the customer's permission, and are never simulated.
- Wire syndication is not independent corroboration.
- Evidence and permissions are recorded in the private workspace. Only the public evidence path goes here.

## Consequential disclosures

`category`, `product`, `partnership`, `customer_evidence` and `research` disclosures, and every Future Proof, must have:

- `principles_version`
- `related_credentials` (a Testable Credentials page)
- `related_concepts` for category and research disclosures and Future Proofs (a warning if missing)

## AI assistance

AI may help with structure, drafting, extraction, formatting and validation. It may not invent facts, citations, metrics, quotes, customers, partners, approvals or credentials, and it may not publish. Record its use:

```yaml
ai_assistance:
  used: true
  roles: [structure, drafting_assistance, validation_assistance]
  human_review: completed
```

## Inquiry prompts

Prompts in Testable Credentials must invite source comparison, limitations and conflicting evidence. Never write a prompt that asks a model to confirm Zime's claim. Chatbot output is not proof.

## Check before you open a pull request

```bash
npm run validate
npm run build
```
