---
# Copy to src/content/disclosures/<slug>.md. Replace every <...>.
id: "ZIME-DISC-2026-NNN"
title: "<Headline>"
summary: "<Plain-language summary, 1 to 3 sentences.>"
artifact_type: disclosure
subtype: product # category | product | partnership | customer_evidence | research | leadership | amendment
status: draft # draft → under_review → approved → staged → published
visibility: public
version: "0.1"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
  declaration_authority: "<Role authorized to make this disclosure>"
accountable_owner:
  role: "Publisher"
commercial_interest: "<What Zime stands to gain, stated plainly.>"
publication_date: 2026-01-01
updated_date: 2026-01-01
effective_date: 2026-01-01
review_by: 2026-02-01
canonical_path: "/disclosures/<slug>/"
claims:
  - claim_id: CLM-ZIME-NNN
    claim_type: verified_fact
    public_status: qualified
    credentials_path: "/credentials/<slug>/"
related_primer: "/primers/<slug>/"
related_credentials: "/credentials/<slug>/"
related_concepts: []
related_entities:
  - ENT-ZIME-001
ai_assistance:
  used: true
  roles: [structure, drafting_assistance]
  human_review: required
structured_data_type: NewsArticle
---

**<City>, <Date>.** <Lead: who, what, when, where, in one or two sentences.>

<Nut graph: why this matters and to whom.>

<Beat 1: detail, with the source or scope of every number.>

<Beat 2: detail.>

> "<Attributed quote>," said <Name>, <Title> at Zime.

<What is not included, conditions, availability, limitations.>

## About Zime

<Institutional profile (boilerplate), kept in sync with src/content/reference.>

## Contact

<Name, role, and how to reach them.> Questions or challenges: [/inquiry/](/inquiry/). Corrections: [/corrections/](/corrections/).
