---
id: "ZIME-CRED-2026-001"
title: "Testable Credentials: Zime Launches Behavior Graph for Sales"
summary: "Claims, evidence paths, qualifications, inquiry prompts, and revision information for the associated Disclosure."
artifact_type: testable_credentials
status: withdrawn
visibility: public
version: "0.2"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
publication_date: 2026-10-15
updated_date: 2026-11-26
review_by: 2026-11-15
canonical_path: "/credentials/zime-launches-behavior-graph-for-sales/"
for_artifact: "ZIME-DISC-2026-001"
claims:
  - claim_id: CLM-ZIME-001
    statement: "Zime, the Behavioral AI for Sales Execution company, today launched Behavior Graph for Sales, its flagship product."
    claim_type: institutional_fact
    status: withdrawn
    scope: "Launch announced October 15, 2026."
    evidence_paths:
      - "https://zime.ai/products/behavior-graph-for-sales"
    confirmation_conditions:
      - "The product page is live and describes Behavior Graph for Sales as available."
    disconfirmation_conditions:
      - "The product is not available to customers on or after the launch date."
    independent_references: []
  - claim_id: CLM-ZIME-002
    statement: "Zime calls the category Behavioral AI for Sales Execution: AI that encodes how a company sells and turns it into behaviors reps run, not AI that reports on selling."
    claim_type: category_interpretation
    status: withdrawn
    scope: "A category proposition by Zime. It is not presented as independent analyst or market consensus."
    evidence_paths: []
    confirmation_conditions:
      - "Independent analysts or buyers adopt the category term with a compatible definition."
    disconfirmation_conditions:
      - "The term was in prior use with a different meaning, or independent sources treat it as a subset of an existing category."
    independent_references: []
  - claim_id: CLM-ZIME-003
    statement: "Each behavior it produces is the move to run for a role, product, stage and competitor. Each carries its conditions, evidence, source and version, so leaders can trace the move back to the strategy and the people behind it. Reps get the behavior in their workflow, including during the call, and leaders see which reps ran which behavior, and what happened to the deal next."
    claim_type: verified_fact
    status: withdrawn
    scope: "Product capability of Behavior Graph for Sales at launch."
    evidence_paths:
      - "https://zime.ai/products/behavior-graph-for-sales"
    confirmation_conditions:
      - "In a product demonstration, each behavior record shows its conditions, evidence, source and version; reps receive behaviors in their workflow, including during calls; and leaders can see which reps ran which behavior and the subsequent deal outcome."
    disconfirmation_conditions:
      - "Behaviors are shown without conditions, evidence, source or version, are not delivered during calls, or execution is not attributable to individual reps."
    independent_references: []
  - claim_id: CLM-ZIME-004
    statement: "In Zime's own benchmark, adoption reaches 80% of eligible reps within 90 days. Zime counts adoption as reps running a behavior in a live deal, not logging in."
    claim_type: verified_fact
    status: withdrawn
    scope: "Zime's own benchmark, not an independent measurement. Adoption is defined as reps running the behavior in live deals, not logging in. Customer cohort, measurement period and the definition of 'eligible' are not stated in the release."
    evidence_paths: []
    confirmation_conditions:
      - "The benchmark's cohort, period and definition of 'eligible' are published, and the figure holds across them."
    disconfirmation_conditions:
      - "The figure comes from a single customer or a selected subset, or 'running a behavior' is measured by activity short of executing it in a live deal."
    independent_references: []
  - claim_id: CLM-ZIME-005
    statement: "HFS Research selected Zime as an HFS Services-as-Software Hot Tech in July 2026."
    claim_type: institutional_fact
    status: withdrawn
    scope: "Selection as named by HFS Research. The HFS page for Zime is dated July 8, 2026."
    evidence_paths:
      - "https://www.hfsresearch.com/research/hfs-services-as-software-hot-tech-zime/"
    confirmation_conditions:
      - "HFS Research lists Zime as an HFS Services-as-Software Hot Tech."
    disconfirmation_conditions:
      - "HFS Research does not list Zime as a Services-as-Software Hot Tech, or lists it under a different name or date."
    independent_references: []
  - claim_id: CLM-ZIME-006
    statement: "Zime was named Startup of the Year at SaaStr Annual 2026."
    claim_type: institutional_fact
    status: withdrawn
    scope: "Recognition as named by SaaStr. The evidence path is Zime's own announcement, not a SaaStr listing."
    evidence_paths:
      - "https://zime.ai/zime-wins-startup-of-the-year-saastr-2026"
    confirmation_conditions:
      - "SaaStr lists Zime as Startup of the Year at SaaStr Annual 2026."
    disconfirmation_conditions:
      - "SaaStr does not list Zime, or lists it under a different award or year."
    independent_references: []
prompt_sets:
  - persona: skeptical_researcher
    prompt: "Read the Zime disclosure ZIME-DISC-2026-001 and its Testable Credentials. The 80% adoption figure comes from Zime's own benchmark. What cohort, period and definitions would you need to evaluate it, and what independent evidence, if any, supports or conflicts with it?"
  - persona: cro
    prompt: "Compare how Zime distinguishes a Behavior Graph from a context graph with how other sales execution and revenue intelligence vendors describe their products. Where do the descriptions overlap, where do they differ, and what would you test to tell them apart?"
  - persona: gtm_engineer
    prompt: "Based on Zime's public description of Behavior Graph for Sales, what inputs, integrations and maintenance would a behavior require, and what limitations or failure modes should be tested before rollout?"
revision_record: []
---

## Withdrawn

Zime withdrew this Testable Credentials page on November 26, 2026. Its claims are no longer current Zime statements and should not be cited as such.

The withdrawal is recorded in [/amendments/withdraw-behavior-graph-for-sales-release/](/amendments/withdraw-behavior-graph-for-sales-release/). The text as published (version 0.1, October 15, 2026) is preserved in this repository's version history.

For Zime's current statements, see [/disclosures/zime-launches-enterprise-sales-harness-execution-gap/](/disclosures/zime-launches-enterprise-sales-harness-execution-gap/) and [/disclosures/zime-defines-the-execution-gap/](/disclosures/zime-defines-the-execution-gap/).

Questions: [/inquiry/](/inquiry/). Corrections: [/corrections/](/corrections/).
