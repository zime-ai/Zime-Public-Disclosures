---
id: "ZIME-CRED-2026-002"
title: "Testable Credentials: Zime Launches Enterprise Sales Harness"
summary: "Claims, evidence paths, qualifications, inquiry prompts, and revision information for the associated Disclosure."
artifact_type: testable_credentials
status: published
visibility: public
version: "0.1"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
publication_date: 2026-10-23
updated_date: 2026-10-23
review_by: 2026-11-23
canonical_path: "/credentials/zime-launches-enterprise-sales-harness/"
for_artifact: "ZIME-DISC-2026-002"
related_claims:
  - CLM-ZIME-004
claims:
  - claim_id: CLM-ZIME-007
    statement: "Zime, the Behavioral AI for Sales Execution company, today launched the Zime Enterprise Sales Harness, which keeps a revenue team's in-house go-to-market agents current with strategy, products and competitors by shipping sales behaviors as versioned skills that are tested, released and rolled back."
    claim_type: institutional_fact
    status: qualified
    scope: "Launch announced October 23, 2026."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "The product page is live and describes the Enterprise Sales Harness as available."
    disconfirmation_conditions:
      - "The product is not available to customers on or after the launch date."
    independent_references: []
  - claim_id: CLM-ZIME-008
    statement: "Engineering teams have built their own sales agents, and enterprise AI harnesses, a category that took shape this quarter, connect those agents to context, tools and models. A harness a team writes for itself peaks the day it ships."
    claim_type: assessment
    status: qualified
    scope: "Zime's assessment of the market. Not independent market research."
    evidence_paths: []
    confirmation_conditions:
      - "Independent sources describe enterprise AI harnesses as an emerging category in the same period."
    disconfirmation_conditions:
      - "Independent sources date the category earlier, or describe in-house harnesses as staying current without a central release process."
    independent_references: []
  - claim_id: CLM-ZIME-009
    statement: "Zime calls the discipline DevOps for RevOps: the release practice software teams use, applied to revenue operations, so sales behaviors ship as versioned skills that are tested, released and rolled back."
    claim_type: category_interpretation
    status: qualified
    scope: "A framing by Zime. It is not presented as independent consensus."
    evidence_paths: []
    confirmation_conditions:
      - "Practitioners or analysts adopt the term with a compatible meaning."
    disconfirmation_conditions:
      - "The term is in prior use with a different meaning."
    independent_references: []
  - claim_id: CLM-ZIME-010
    statement: "Hub-and-spoke propagation carries an improved behavior to every deployed harness from a hub Zime maintains, while the customer's tenant, configuration and data stay in place. Revenue Brain records which reps ran which behaviors and what happened to their deals. Evals score every harness release against deal outcomes across Zime's installed base. With Memories, Zime rewrites the skills, documents and workflows inside a harness from what the evals learn."
    claim_type: verified_fact
    status: qualified
    scope: "Product capabilities at launch. Evals draw on Zime's installed base; its size is not stated in the release."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "A product demonstration shows a behavior update propagating from the hub to deployed harnesses without moving customer data, per-rep execution records, release scoring against deal outcomes, and skill rewrites driven by eval results."
    disconfirmation_conditions:
      - "Any of the four properties is not available at launch, or customer data leaves the customer's tenant during propagation."
    independent_references: []
  - claim_id: CLM-ZIME-011
    statement: "Each skill is tested, approved, versioned and rolled back from the hub, and every recommendation traces to its source, its approver and its version. Private Deployment runs Zime on hardware the customer controls."
    claim_type: verified_fact
    status: qualified
    scope: "Product capabilities at launch."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "A product demonstration shows test, approval, versioning and rollback of a skill, and source, approver and version on each recommendation."
    disconfirmation_conditions:
      - "Rollback or traceability is not available, or Private Deployment is not offered."
    independent_references: []
  - claim_id: CLM-ZIME-012
    statement: "By Zime's own benchmark, 80% of eligible reps within 90 days run the behaviors Zime delivers."
    claim_type: verified_fact
    status: qualified
    scope: "Zime's own benchmark, not an independent measurement. The same benchmark as CLM-ZIME-004. It describes behaviors Zime delivers, not the Enterprise Sales Harness specifically."
    evidence_paths:
      - "/credentials/zime-launches-behavior-graph-for-sales/"
    confirmation_conditions:
      - "The benchmark's cohort, period and definition of 'eligible' are published, and the figure holds across them."
    disconfirmation_conditions:
      - "The figure comes from a selected subset, or running a behavior is measured by activity short of executing it in a live deal."
    independent_references: []
  - claim_id: CLM-ZIME-013
    statement: "The harness covers 100+ skills, workflows, and MCP servers, governed as one system."
    claim_type: verified_fact
    status: qualified
    scope: "Count at launch. The breakdown between skills, workflows and MCP servers is not stated in the release."
    evidence_paths: []
    confirmation_conditions:
      - "A published list or product view shows more than 100 governed skills, workflows and MCP servers."
    disconfirmation_conditions:
      - "The governed total is under 100."
    independent_references: []
  - claim_id: CLM-ZIME-014
    statement: "Zime's About page lists its HFS Research 2026 Services-as-Software Hot Tech recognition (July 2026) and its Startup of the Year award at SaaStr Annual 2026."
    claim_type: institutional_fact
    status: qualified
    scope: "Recognitions as named by HFS Research and SaaStr. The evidence paths include Zime's own pages."
    evidence_paths:
      - "https://zime.ai/about-us"
      - "https://www.hfsresearch.com/research/hfs-services-as-software-hot-tech-zime/"
      - "https://zime.ai/zime-wins-startup-of-the-year-saastr-2026"
    confirmation_conditions:
      - "HFS Research and SaaStr each list Zime under the named recognition."
    disconfirmation_conditions:
      - "Either body does not list Zime, or lists it under a different name or date."
    independent_references: []
  - claim_id: CLM-ZIME-015
    statement: "Zime's trust center lists SOC 2 Type II, GDPR and HIPAA."
    claim_type: institutional_fact
    status: qualified
    scope: "As listed in Zime's trust center. Report scope and dates are held there."
    evidence_paths:
      - "https://trust.zime.ai/"
    confirmation_conditions:
      - "The trust center lists a current SOC 2 Type II report and GDPR and HIPAA materials."
    disconfirmation_conditions:
      - "The SOC 2 Type II report has lapsed, or the listing is missing."
    independent_references: []
  - claim_id: CLM-ZIME-016
    statement: "The Zime Enterprise Sales Harness runs with Claude, ChatGPT, Slack, Microsoft Teams, Salesforce, HubSpot, Microsoft Dynamics and Gemini."
    claim_type: verified_fact
    status: qualified
    scope: "Platforms at launch. Depth of each integration is not stated in the release."
    evidence_paths: []
    confirmation_conditions:
      - "The harness can deliver and govern a skill in each named platform."
    disconfirmation_conditions:
      - "Any named platform is not supported at launch."
    independent_references: []
  - claim_id: CLM-ZIME-017
    statement: "Zime sells the Zime Enterprise Sales Harness as one annual subscription, priced per rep seat, with four ways to put it to work: do it yourself; do it with you in Peer Cafe labs; do it with you in paired development with a Zime engineer; and do it for you, a white-glove installation. Zime does not publish list prices. Zime delivers the first cohort itself, to Claude-native revenue teams."
    claim_type: offer
    status: qualified
    scope: "Commercial terms at launch. List prices are not published."
    evidence_paths: []
    confirmation_conditions:
      - "Zime's order forms match the subscription and engagement models described."
    disconfirmation_conditions:
      - "The product is sold on different terms."
    independent_references: []
prompt_sets:
  - persona: skeptical_researcher
    prompt: "Read Zime disclosure ZIME-DISC-2026-002 and its Testable Credentials. Which claims rest only on Zime's own pages or benchmarks, which have independent sources, and what evidence would confirm or contradict each?"
  - persona: cro
    prompt: "Compare the Zime Enterprise Sales Harness with maintaining in-house sales agents and with other vendors' agent governance tools. What would you test to see whether behaviors stay current with strategy, and what are the limitations?"
  - persona: gtm_engineer
    prompt: "Based on Zime's public description, how would the Enterprise Sales Harness interact with MCP servers, agents and skills your team already built? What failure modes, data residency and rollback cases should you test?"
revision_record: []
---

## What this page is

This page lists the material claims in the associated Disclosure, the evidence behind them, what limits them, and how to test them.

## Frequently asked questions

### What did Zime launch?

The Zime Enterprise Sales Harness. It keeps a revenue team's in-house go-to-market agents current by shipping sales behaviors as versioned skills that are tested, released and rolled back. See CLM-ZIME-007 and the [product page](https://zime.ai/products/enterprise-harness).

### Does it replace a harness my team built?

No. In Zime's description, a company that already runs its own harness should keep it, along with the MCP servers, agents, skills and workflows it built. The Enterprise Sales Harness versions and governs the behaviors those harnesses run.

### What is "DevOps for RevOps"?

Zime's name for applying software release practice to revenue operations, so sales behaviors ship as versioned skills that are tested, released and rolled back. It is Zime's framing, not an independent standard (CLM-ZIME-009).

### Does customer data leave our environment?

The release says hub-and-spoke propagation leaves the customer's tenant, configuration and data in place, and that Private Deployment runs Zime on hardware the customer controls (CLM-ZIME-010, CLM-ZIME-011).

### What does the 80% figure measure?

Reps running the behaviors Zime delivers, from Zime's own benchmark. It is the same benchmark cited in the Behavior Graph for Sales release (CLM-ZIME-004), not a measurement specific to this product.

### How is it priced?

As one annual subscription, priced per rep seat. Zime does not publish list prices (CLM-ZIME-017).

## Scope, constraints, and qualifications

- This is a voluntary commercial disclosure. Zime has a commercial interest in the product and the discipline it describes.
- The 80% adoption figure is a Zime benchmark. Its cohort and period are not stated.
- Third-party names describe where the harness runs. They do not imply affiliation or endorsement.
