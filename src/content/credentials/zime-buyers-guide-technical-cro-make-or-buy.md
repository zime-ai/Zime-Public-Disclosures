---
id: "ZIME-CRED-2026-007"
title: "Testable Credentials: Zime Buyer's Guide for Technical CROs and CTOs"
summary: "Claims, evidence paths, qualifications, frequently asked questions and inquiry prompts for the Zime make-or-buy guide for technical CROs and CTOs."
artifact_type: testable_credentials
status: published
visibility: public
version: "1.0"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
accountable_owner:
  role: Marketing
publication_date: 2026-11-05
updated_date: 2026-11-05
review_by: 2026-12-05
canonical_path: "/credentials/zime-buyers-guide-technical-cro-make-or-buy/"
for_artifact: "ZIME-GUIDE-2026-002"
related_artifacts:
- "/reference/zime-buyers-guide-technical-cro-make-or-buy/"
related_claims:
- CLM-ZIME-015
- CLM-ZIME-020
- CLM-ZIME-021
- CLM-ZIME-045
ai_assistance:
  used: true
  roles:
  - extraction
  - structure
  - drafting_assistance
  - formatting
  human_review: required
claims:
- claim_id: "CLM-ZIME-048"
  statement: "In the GISTICS planning model, an enterprise-scale in-house build of Behavioral AI for Sales Execution has 36 components across six domains and takes about 36,700 labor hours over 15 calendar months at 15.3 average FTE. The context graph accounts for 4,800 of those hours; the other 31,900 fund strategy encoding, delivery, verification and upkeep. Maintenance runs about 17,500 hours a year, about 47.7 percent of the build."
  claim_type: assessment
  status: qualified
  scope: "Planning ranges from the GISTICS Behavioral Graph Cost Model (22 September 2026) with standard enterprise inputs. Smaller configurations in the same guide: proof of concept about 6,900 hours over 4 to 5 months at 4.4 FTE; mid-market about 18,400 hours over 10 months at 5.8 FTE. GISTICS wrote the guide for Zime. Assumptions are available from GISTICS on request."
  evidence_paths: []
  confirmation_conditions:
  - "An organization's own discovery estimate for the same 36 components, using its own rates and volumes, lands within the model's ranges."
  disconfirmation_conditions:
  - "Independent estimates for the same scope fall materially below the model, or the model's assumptions cannot be produced on request."
  independent_references: []
- claim_id: "CLM-ZIME-049"
  statement: "The GISTICS model places an adoption floor near 31 percent of eligible reps, below which fixed costs exceed financial returns, and a Payback Band starting near 75 percent sustained adoption."
  claim_type: assumption
  status: qualified
  scope: "Planning-model break points. The guide states no external source corroborates them."
  evidence_paths: []
  confirmation_conditions:
  - "Published cohort adoption from Proof of Value deployments shows programs below 31 percent failing to pay back and programs at or above 75 percent paying back under the buyer's own win-rate assumptions."
  disconfirmation_conditions:
  - "Programs pay back well below 31 percent adoption, or fail to pay back at or above 75 percent."
  independent_references: []
- claim_id: "CLM-ZIME-050"
  statement: "The three core technical roles in an enterprise build (AI and ML engineer, GTM engineer, RevOps analyst) total $3.3 million to $5.5 million in direct labor, at loaded rates of $150 to $250, $120 to $200 and $80 to $130 an hour."
  claim_type: assumption
  status: qualified
  scope: "Calculated from the GISTICS model's role hours (12,800, 8,200 and 5,400) and rate ranges the guide calls common at enterprise technology companies. The rate ranges are not externally sourced. The remaining 10,300 hours (executive, product, security, legal, QA) are not priced."
  evidence_paths: []
  confirmation_conditions:
  - "The buyer's own loaded rates, applied to the same role hours, fall within the stated ranges."
  disconfirmation_conditions:
  - "The buyer's loaded rates or role hours differ materially from the model's."
  independent_references: []
- claim_id: "CLM-ZIME-051"
  statement: "Zime's Behavior Graph spans six domains (Products, Customers, Competition, Deal Motion Library, sales reps and executing roles, forward-looking CRO strategy); Deal Motions are selected by ten Strategy Context Facets and specified in eight parts (situation, trigger, actor, behavior, buyer objective, evidence, exception, expected movement)."
  claim_type: design_intent
  status: qualified
  scope: "Zime's published architecture. The Behavior Graph page names 1,200+ cataloged behaviors; the primer estimates roughly 500 Deal Motions, provisional pending a versioned registry. The guide reads them as different counting units. See CLM-ZIME-020 and CLM-ZIME-021."
  evidence_paths:
  - "https://zime.ai/primers/cro-strategy-to-execution-gap"
  - "https://zime.ai/products/behavior-graph-for-sales"
  confirmation_conditions:
  - "A live recommendation traces to its domains, facets and eight-part Deal Motion specification, with strategy version and effective date."
  disconfirmation_conditions:
  - "A domain, facet or Deal Motion part is absent, or the counts cannot be reconciled through a versioned registry."
  independent_references: []
- claim_id: "CLM-ZIME-052"
  statement: "Zime documentation clears four of the guide's eight proof tests (1 strategy read, 3 execution verification, 5 denominator honesty, 6 rationale display); test 7, the capture method for execution evidence in the CRM, Slack or Teams, remains unpublished."
  claim_type: assessment
  status: qualified
  scope: "The guide's reading of Zime's published pages as of 26 and 27 October 2026. Clearing a test on paper is not the same as passing it in a Proof of Value."
  evidence_paths:
  - "https://zime.ai/products/programmatic-adoption"
  - "https://zime.ai/primers/cro-strategy-to-execution-gap"
  - "https://zime.ai/products/behavior-graph-for-sales"
  confirmation_conditions:
  - "In a Proof of Value, Zime demonstrates tests 1, 3, 5 and 6 on the buyer's pipeline and explains the execution-capture method for test 7."
  disconfirmation_conditions:
  - "Any of the four tests fails in a live demonstration, or the capture method remains unexplained after the proof."
  independent_references: []
- claim_id: "CLM-ZIME-053"
  statement: "The behavior record is held in the customer's environment, and the customer holds a customer-specific Behavior Graph and Skill Graph."
  claim_type: promise
  status: qualified
  scope: "As stated on Zime's AI Platforms and Deployable Capabilities pages. Export format, ownership of derived work, data-pooling restrictions and exit terms are not published; the guide says to define them in the order form (Gate 9)."
  evidence_paths:
  - "https://zime.ai/solutions/ai-platforms"
  - "https://zime.ai/products/deployable-capabilities"
  confirmation_conditions:
  - "The order form states data residency, export format, derived-work ownership and exit terms consistent with the pages."
  disconfirmation_conditions:
  - "The agreement permits the record to leave the customer environment, or omits export and exit terms."
  independent_references: []
- claim_id: "CLM-ZIME-054"
  statement: "Zime's published materials cite SOC 2 Type II, GDPR and HIPAA compliance badges."
  claim_type: institutional_fact
  status: qualified
  scope: "As listed on Zime's pages and trust center. Data residency limits and retention windows are not published. See CLM-ZIME-015."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://trust.zime.ai/"
  confirmation_conditions:
  - "The trust center lists a current SOC 2 Type II report and GDPR and HIPAA materials."
  disconfirmation_conditions:
  - "A report has lapsed or the listing is missing."
  independent_references: []
- claim_id: "CLM-ZIME-055"
  statement: "Zime Lite is a free leaderboard skill for Claude that surfaces Judgment at Scale on a sample of deals without a full deployment contract."
  claim_type: offer
  status: qualified
  scope: "As described on Zime's CRO Sales Productivity page. The guide recommends it as a check on strategy quality before funding a Proof of Value."
  evidence_paths:
  - "https://zime.ai/solutions/cro-sales-productivity"
  confirmation_conditions:
  - "The skill is available free and runs on a sample of the buyer's deals."
  disconfirmation_conditions:
  - "The skill is not available, requires a paid contract, or cannot run on the buyer's sample."
  independent_references: []
- claim_id: "CLM-ZIME-056"
  statement: "Zime's published documentation omits model routing protocols, API surfaces, named CRM connectors, telemetry capture mechanisms, data retention details, data export specifications, integration specs for existing context graphs, data warehouses and call-intelligence feeds, Workbench tooling details, and commercial license pricing."
  claim_type: open_question
  status: qualified
  scope: "Items the guide marks UNSOURCED as of the pages read on 26 and 27 October 2026."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/products/deployable-capabilities"
  - "https://zime.ai/solutions/cro-sales-productivity"
  confirmation_conditions:
  - "Zime publishes each item, or states it in writing during the Proof of Value."
  disconfirmation_conditions:
  - "Not applicable until Zime publishes or declines to publish each item."
  independent_references: []
prompt_sets:
- persona: cto
  prompt: "Read Zime's buyer's guide ZIME-GUIDE-2026-002 and its Testable Credentials. Using our own loaded rates and the 36-component breakdown, estimate what an in-house build would cost us, and list which GISTICS assumptions we should replace and which of the six unpublished architecture details we must get answered before a Proof of Value."
- persona: skeptical_researcher
  prompt: "The 31 percent adoption floor and 75 percent Payback Band in Zime's guide come from a planning model that Zime commissioned. What independent research on sales technology adoption and payback supports or conflicts with these break points, and what data would falsify them?"
- persona: technical_cro
  prompt: "Run the seven decision conditions and the nine-gate make-or-buy cascade from Zime's guide against three options: an internal build, extending our current context graph vendor, and licensing Zime. Use each vendor's own public materials and note where an answer is unsourced."
revision_record: []
---

## What this page is

This page lists the material claims in the [Zime Buyer's Guide for Technical CROs and CTOs](/reference/zime-buyers-guide-technical-cro-make-or-buy/), the evidence behind them, what limits them and how to test them. The questions below are answered in full sentences so each answer can be read on its own.

## Frequently asked questions

### How much of an in-house build is the context graph?

About 4,800 of 36,700 enterprise build hours in the GISTICS planning model. The other 31,900 hours fund strategy encoding, delivery, verification and upkeep (CLM-ZIME-048).

### How long does an in-house build take?

About 15 calendar months at 15.3 average FTE at enterprise scale, followed by about 17,500 maintenance hours a year. These are planning ranges, not quotes (CLM-ZIME-048).

### At what adoption does the investment pay back?

The GISTICS model puts an adoption floor near 31 percent and a Payback Band from about 75 percent. No external source corroborates these break points; the guide says to falsify them with real cohort data from a Proof of Value (CLM-ZIME-049).

### What do the core engineering roles cost?

About $3.3 million to $5.5 million in direct labor for the AI and ML engineer, GTM engineer and RevOps analyst roles at enterprise scale, using rate ranges you should replace with your own (CLM-ZIME-050).

### What is in Zime's Behavior Graph?

Six domains, ten Strategy Context Facets and eight-part Deal Motions, per Zime's published architecture. Zime's 1,200+ behavior count and roughly 500 Deal Motion estimate use different counting units (CLM-ZIME-051).

### Which proof tests does Zime's documentation clear?

Tests 1, 3, 5 and 6 on paper. Test 7, how execution is captured inside the CRM, Slack or Teams, is not published and should be demonstrated in the Proof of Value (CLM-ZIME-052).

### Who owns the behavior record?

Zime's pages say the record is held in the customer's environment and the customer holds a customer-specific Behavior Graph and Skill Graph. Export and exit terms are not published (CLM-ZIME-053).

### What compliance does Zime publish?

SOC 2 Type II, GDPR and HIPAA badges. Data residency and retention windows are not published (CLM-ZIME-054).

### Can we test strategy quality before signing anything?

Zime offers Zime Lite, a free leaderboard skill for Claude that runs on a sample of deals (CLM-ZIME-055).

### What has Zime not published?

Model routing, API surfaces, named CRM connectors, telemetry capture, retention, export specifications, integration specs for existing context graphs and call-intelligence feeds, Workbench tooling detail and pricing (CLM-ZIME-056).

## Scope, constraints and qualifications

- This is a voluntary commercial disclosure. Zime has a commercial interest in the platform the guide describes, and GISTICS wrote the guide for Zime.
- All [M] figures are GISTICS planning-model ranges with standard enterprise inputs; replace them with your own before presenting to a CFO or board.
- The 80 percent adoption and 20 percent uplift figure is a correlation in sample data, not a causal claim (see CLM-ZIME-045).
- Chatbot output is not proof. Use the prompts above to compare sources and surface limitations.
