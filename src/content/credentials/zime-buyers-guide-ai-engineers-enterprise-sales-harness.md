---
id: "ZIME-CRED-2026-008"
title: "Testable Credentials: Zime Buyer's Guide for AI Engineers (Enterprise Sales Harness)"
summary: "Claims, evidence paths, qualifications, frequently asked questions and inquiry prompts for the Zime buyer's guide for AI engineers on the Enterprise Sales Harness and Zime Workbench."
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
canonical_path: "/credentials/zime-buyers-guide-ai-engineers-enterprise-sales-harness/"
for_artifact: "ZIME-GUIDE-2026-003"
related_artifacts:
- "/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/"
related_claims:
- CLM-ZIME-033
- CLM-ZIME-034
- CLM-ZIME-035
- CLM-ZIME-036
- CLM-ZIME-037
- CLM-ZIME-038
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
- claim_id: "CLM-ZIME-057"
  statement: "Zime runs as a judgment-and-behavior layer above an existing agent stack: the company keeps its models, frameworks, agents, connectors and data; identity, environments, model selection and release approval stay with the enterprise; the layer connects to agents through MCP with permissions preserved and delivers into the CRM, Slack, Microsoft Teams and CI/CD pipelines; Private Deployment runs it on hardware the customer controls."
  claim_type: verified_fact
  status: qualified
  scope: "Zime's published architecture. No page names specific supported models. Compatibility must be verified for the exact model, runtime and version. See CLM-ZIME-034."
  evidence_paths:
  - "https://zime.ai/solutions/ai-engineers"
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/products/workbench"
  - "https://zime.ai/primers/devops-for-revops"
  confirmation_conditions:
  - "The same package runs on the buyer's chosen model and runtime with its contract, evaluations, authority and telemetry intact (acceptance test 4)."
  disconfirmation_conditions:
  - "The layer requires replacing the buyer's models, frameworks or agents, or runs only in a Zime-only runtime."
  independent_references: []
- claim_id: "CLM-ZIME-058"
  statement: "Zime Workbench runs Judgment Evals and behavior tests in the customer's environment, covering complex deals and exception cases, with regression testing across skill, model and context changes, rot detection for stale or degraded knowledge, and a gate between evaluate and promote; a change that fails its Judgment Evals does not reach the field."
  claim_type: verified_fact
  status: qualified
  scope: "As described on the Workbench and AI Engineers pages. The sample result the page shows (46 of 48 passed, 2 failed on a pricing exception, 1 regression on competitor entry, promotion blocked) is illustrative."
  evidence_paths:
  - "https://zime.ai/products/workbench"
  - "https://zime.ai/solutions/ai-engineers"
  confirmation_conditions:
  - "In Gate 1, evaluations run in the buyer's environment on co-authored scenarios, and a planted regression is blocked or triggers rollback (acceptance test 7)."
  disconfirmation_conditions:
  - "Evaluations run only in Zime's environment or on Zime's scenarios, or a failing change reaches the field."
  independent_references: []
- claim_id: "CLM-ZIME-059"
  statement: "Zime's product page lists seven parts in a capability package; Zime's primer specifies an eleven-part Governed Deal Motion Package. Four of the eleven parts (trigger, authority, telemetry, rollback) have no named home in the seven."
  claim_type: assessment
  status: qualified
  scope: "The guide's comparison of two Zime pages. It does not mean the product lacks these parts: the harness page documents guardrail states, tracing and rollback at the platform level. See CLM-ZIME-033."
  evidence_paths:
  - "https://zime.ai/products/deployable-capabilities"
  - "https://zime.ai/primers/devops-for-revops"
  - "https://zime.ai/products/enterprise-harness"
  confirmation_conditions:
  - "Zime opens a package in the working session and points to where each of the eleven parts lives."
  disconfirmation_conditions:
  - "One or more of trigger, authority, telemetry or rollback cannot be located for a shipped package."
  independent_references: []
- claim_id: "CLM-ZIME-060"
  statement: "Central policy assigns every agent one of four guardrail states (Recommend, Act, Escalate, Request approval), and no harness sets its own; authority attaches to the package, not the agent, on a three-level ladder with evidence gates; each prompt passes a policy and security check before it runs, with defenses against prompt injection."
  claim_type: verified_fact
  status: qualified
  scope: "As described on the Enterprise Harness page and the DevOps for RevOps primer. In live deals, Zime guides and the person acts. See CLM-ZIME-035."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/primers/devops-for-revops"
  confirmation_conditions:
  - "A promoted package's authority falls automatically or through a named control path after a simulated threshold breach, without a redeploy (acceptance test 6)."
  disconfirmation_conditions:
  - "Authority is global to the agent, cannot be reduced without a redeploy, or a prompt runs without a policy check."
  independent_references: []
- claim_id: "CLM-ZIME-061"
  statement: "The harness shows inference cost across endpoints, LLMs and MCP calls as it accrues, attributed by team, workflow, initiative, agent or user, and selects, routes and substitutes models by task, sensitivity, quality and cost."
  claim_type: verified_fact
  status: qualified
  scope: "As described on the Enterprise Harness and Workbench pages."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/products/workbench"
  confirmation_conditions:
  - "In Gate 1, the platform owner sees cost per agent and workflow and an eval delta and cost per recommendation for the same package on two models."
  disconfirmation_conditions:
  - "Cost appears only in aggregate or on the monthly bill, or routing cannot be set by task or sensitivity."
  independent_references: []
- claim_id: "CLM-ZIME-062"
  statement: "In the GISTICS planning model, a customer-built equivalent of this layer takes about 6,900 build hours over 5 months at pilot scale, 15,900 over 9 months at department scale and 36,700 over 15 months at enterprise scale, with recurring labor of about 33, 39 and 48 percent of the build each year. At pilot scale, engineering roles account for about 2,700 of 6,900 hours. A pilot costs about $843,000 up front and $1.63 million over three years (range $1.09 million to $2.92 million). A 500-motion deal library adds about 10,336 build hours and 1,498 upkeep hours per quarter."
  claim_type: assessment
  status: qualified
  scope: "Planning ranges anchored to BLS wages from the GISTICS Behavioral Graph Cost Model (22 September 2026), not vendor quotes or implementation benchmarks. The model recommends a four to six week discovery estimate before funding production."
  evidence_paths: []
  confirmation_conditions:
  - "The buyer's own discovery estimate, with its own rates and scope, lands within the model's ranges."
  disconfirmation_conditions:
  - "Independent estimates for the same scope fall materially below the model's low range."
  independent_references: []
- claim_id: "CLM-ZIME-063"
  statement: "Five Zime pages carry the same figures: 1,200+ GTM behaviors trained with 50K+ human-in-the-loop hours; about 5 minutes to go live; 80 percent of reps running behaviors in 90 days, resulting in a 20 percent uplift in deals won."
  claim_type: assessment
  status: qualified
  scope: "Zime-reported figures. No page states the sample, baseline, period or attribution method behind them, and no page defines what go live means. Zime's primer labels public outcome metrics Zime-reported and says revenue causality requires a measurement design. See CLM-ZIME-038 and CLM-ZIME-045."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/products/workbench"
  - "https://zime.ai/solutions/ai-engineers"
  - "https://zime.ai/products/deployable-capabilities"
  - "https://zime.ai/products/programmatic-adoption"
  confirmation_conditions:
  - "Gate 2 reproduces the four-level adoption shape on the buyer's pipeline against a pre-deployment baseline."
  disconfirmation_conditions:
  - "The figures cannot be tied to a stated sample, baseline and method, or Gate 2 does not reproduce them."
  independent_references: []
- claim_id: "CLM-ZIME-064"
  statement: "Zime's primer formalizes the proof as Gate 1 at 21 days (one package in production-adjacent conditions, with eight exit criteria) and Gate 2 at 90 days (adoption, behavior and movement against thresholds set before the proof starts), with eleven acceptance tests that can be run on any vendor or on an internal build."
  claim_type: offer
  status: qualified
  scope: "Proposed verification gates, not guaranteed results. Zime targets about three weeks to first evidence and substantial value by day 90, and makes no revenue promise. See CLM-ZIME-036 and CLM-ZIME-037."
  evidence_paths:
  - "https://zime.ai/primers/devops-for-revops"
  - "https://zime.ai/products/deployable-capabilities"
  - "https://zime.ai/solutions/ai-engineers"
  confirmation_conditions:
  - "The named enterprise owner observes and accepts every Gate 1 exit criterion on day 21 (acceptance test 10)."
  disconfirmation_conditions:
  - "The proof ends in a slide, a demo on synthetic data or a vendor-only sandbox, or thresholds are set after results arrive."
  independent_references: []
- claim_id: "CLM-ZIME-065"
  statement: "Zime has not published pricing for the subscription, delivery paths or forward-deployed engineers; a release hold or pinning mechanism; what telemetry leaves the customer environment or whether Zime learns across customers; whether the layer records keystrokes, time on tool or message content outside the authorized context; specific supported models; or what the customer keeps and can export on cancellation."
  claim_type: open_question
  status: qualified
  scope: "Items the guide marks UNSOURCED as of the pages read on 26 October 2026. The guide recommends writing each into the order form."
  evidence_paths:
  - "https://zime.ai/products/enterprise-harness"
  - "https://zime.ai/products/workbench"
  - "https://zime.ai/products/deployable-capabilities"
  - "https://zime.ai/solutions/ai-engineers"
  - "https://zime.ai/primers/devops-for-revops"
  confirmation_conditions:
  - "Zime publishes each item, or states it in writing in the order form."
  disconfirmation_conditions:
  - "Not applicable until Zime publishes or declines to publish each item."
  independent_references: []
prompt_sets:
- persona: gtm_engineer
  prompt: "Read Zime's buyer's guide ZIME-GUIDE-2026-003 and its Testable Credentials. Locate our internal agent build on the guide's eleven waypoints, then list which of the eleven acceptance tests our build passes today and which we would ask Zime, or any vendor, to demonstrate in Gate 1."
- persona: ai_platform_architect
  prompt: "Compare Zime's shared control table and four guardrail states with how we currently govern agent permissions, release approval and rollback. Using each vendor's own documentation, what controls would stay ours, what would move to a vendor, and what must be written into an order form?"
- persona: skeptical_researcher
  prompt: "Zime's pages report 1,200+ behaviors, about 5 minutes to go live and 80 percent adoption with a 20 percent uplift, without a published sample or method. What evidence would you need to evaluate each figure, and what independent sources on agent evaluation and AI risk management support or conflict with the guide's acceptance tests?"
revision_record: []
---

## What this page is

This page lists the material claims in the [Zime Buyer's Guide for AI Engineers](/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/), the evidence behind them, what limits them and how to test them. The questions below are answered in full sentences so each answer can be read on its own.

## Frequently asked questions

### Do we have to replace our models, frameworks or agents?

No, according to Zime. The layer runs above the stack you keep, connects to your agents through MCP with permissions preserved, and delivers into the CRM, Slack, Teams and CI/CD. Compatibility must be verified for your exact runtime (CLM-ZIME-057).

### Where do the evals run?

In your environment, according to the Workbench page, covering complex deals and exceptions, with regression on skill, model and context change, rot detection, and a gate before promotion (CLM-ZIME-058).

### What is in a capability package?

Seven published parts on the product page. The primer specifies eleven; trigger, authority, telemetry and rollback have no named home in the seven, so ask Zime to show where each lives (CLM-ZIME-059).

### How does Zime stop an agent committing us to terms?

Four guardrail states set centrally, authority bound to the package on a three-level ladder, and a policy and security check before every prompt. Test it with acceptance test 6 (CLM-ZIME-060).

### Can we see what each agent costs?

Yes, according to Zime: cost across endpoints, LLMs and MCP calls, attributed by team, workflow, initiative, agent or user as it accrues, with routing by task, sensitivity, quality and cost (CLM-ZIME-061).

### What does an in-house build cost?

About 6,900 hours and $843,000 up front at pilot scale and 36,700 hours over 15 months at enterprise scale in the GISTICS planning model, with recurring labor of a third to half the build every year (CLM-ZIME-062).

### How should we read Zime's headline figures?

As Zime-reported. No page states the sample, baseline, period or attribution method for 1,200+ behaviors, 5 minutes to go live, or 80 percent adoption with a 20 percent uplift (CLM-ZIME-063).

### What does the proof look like?

Gate 1 at 21 days and Gate 2 at 90 days, with eleven acceptance tests and thresholds set before the proof starts. They are proposed gates, not guaranteed results (CLM-ZIME-064).

### What has Zime not published?

Pricing, release hold and pinning, the telemetry and data-flow boundary, whether the layer records content outside the authorized context, specific supported models, and exit terms on cancellation (CLM-ZIME-065).

## Scope, constraints and qualifications

- This is a voluntary commercial disclosure. Zime wrote the guide and has a commercial interest in the products it describes.
- Figures tagged [M] come from the GISTICS planning model and are planning ranges, not quotes or benchmarks.
- Zime's outcome figures are Zime-reported; the 21-day and 90-day proofs are proposed verification gates, not guaranteed results.
- The trace, eval result and scale recommendation shown on Zime's pages are illustrative examples, not customer records.
- Chatbot output is not proof. Use the prompts above to compare sources and surface limitations.
