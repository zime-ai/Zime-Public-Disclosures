---
id: "ZIME-CRED-2026-010"
title: "Testable Credentials: Zime Launches the Enterprise Sales Harness to Keep AI Sales Agents on Strategy"
summary: "Claims, evidence paths, qualifications, frequently asked questions and inquiry prompts for the Zime disclosure launching the Enterprise Sales Harness to keep AI sales agents on strategy after launch day."
artifact_type: testable_credentials
status: published
visibility: public
version: "0.1"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
publication_date: 2026-11-26
updated_date: 2026-11-26
review_by: 2026-12-26
canonical_path: "/credentials/zime-launches-enterprise-sales-harness-execution-gap/"
for_artifact: "ZIME-DISC-2026-004"
supersedes: "ZIME-CRED-2026-002"
related_artifacts:
  - "/disclosures/zime-launches-enterprise-sales-harness-execution-gap/"
  - "/reference/zime-launches-enterprise-sales-harness-execution-gap-fact-sheet/"
  - "/disclosures/zime-launches-enterprise-sales-harness/"
  - "/credentials/zime-launches-enterprise-sales-harness/"
  - "/disclosures/zime-defines-the-execution-gap/"
related_concepts:
  - "/concepts/glossary/execution-gap/"
related_claims:
  - CLM-ZIME-007
  - CLM-ZIME-066
ai_assistance:
  used: true
  roles: [extraction, structure, drafting_assistance, formatting, validation_assistance]
  human_review: completed
claims:
  - claim_id: CLM-ZIME-077
    statement: "Zime, the Behavioral AI for Sales Execution company, today launched Zime Enterprise Sales Harness, a control plane that tests, versions and governs selling behaviors for every human seller and AI agent on an enterprise revenue team, and records what each use cost and produced."
    claim_type: institutional_fact
    status: qualified
    scope: "Launch announced November 26, 2026. Zime's description of its own product. An earlier Zime release about the same product, ZIME-DISC-2026-002 (October 23, 2026), remains on the record."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
      - "/disclosures/zime-launches-enterprise-sales-harness/"
    confirmation_conditions:
      - "The product page is live and describes testing, versioning, governance and cost tracking for human sellers and AI agents."
    disconfirmation_conditions:
      - "The product does not cover human sellers and agents alike, or does not record cost and outcome per use."
    independent_references: []
  - claim_id: CLM-ZIME-078
    statement: "Google Cloud's 2025 DORA research, drawn from nearly 5,000 technology professionals, found that AI acts as an amplifier: it raises software delivery throughput but still increases delivery instability, and its gains depend on strong internal platforms."
    claim_type: verified_fact
    status: verified
    scope: "Survey of nearly 5,000 technology professionals plus more than 100 hours of qualitative data. The research concerns software delivery, not sales; the release uses it as an analogy, not as evidence about revenue teams or Zime."
    evidence_paths:
      - "https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf"
    confirmation_conditions:
      - "The report states the sample, describes AI as an amplifier, and reports higher throughput alongside continued delivery instability."
    disconfirmation_conditions:
      - "The report states a different sample or finds AI reduces delivery instability."
    independent_references:
      - "https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf"
  - claim_id: CLM-ZIME-079
    statement: "A forthcoming Zime-sponsored GISTICS white paper finds a build-versus-run gap in sales: revenue teams spin up prompts and CRM agents in minutes, then watch reps ignore them or agents go off-playbook on live calls. The paper calls an untested prompt or outdated positioning that quotes wrong pricing or mishandles an objection in front of a buyer a live deal outage."
    claim_type: assessment
    status: qualified
    scope: "GISTICS analysis, not survey data. The paper is sponsored by Zime and written by Michael Jay Moon, who serves as Zime's chief marketing officer, so it is not independent of Zime. 'Live deal outage' is a term coined in the paper. The paper is not yet public; Zime will add its link to this page when it is."
    evidence_paths: []
    confirmation_conditions:
      - "The published paper contains the build-versus-run analysis and the live deal outage definition as stated."
      - "Independent research on revenue teams reports low rep use of AI agents or agents diverging from the sales playbook."
    disconfirmation_conditions:
      - "The published paper does not contain these findings, or independent research finds revenue-team agents stay adopted and on-playbook after launch."
    independent_references: []
  - claim_id: CLM-ZIME-080
    statement: "Databricks and Salesforce both describe an agent as a model plus a harness: the software that wraps around the model and manages its context, tools and safety limits."
    claim_type: verified_fact
    status: verified
    scope: "Databricks writes 'Agent = Model + Harness' and describes the harness as the software infrastructure that wraps around a large language model. Salesforce describes the harness as the software infrastructure that wraps around an AI model to manage its lifecycle, context and interactions. Salesforce also sells its own agent harness."
    evidence_paths:
      - "https://www.databricks.com/blog/ai-harness"
      - "https://www.salesforce.com/agentforce/ai-agents/agent-harness/"
    confirmation_conditions:
      - "Both pages describe the harness as the software around the model that manages context, tools and safety."
    disconfirmation_conditions:
      - "Either page is withdrawn or defines a harness differently."
    independent_references:
      - "https://www.databricks.com/blog/ai-harness"
      - "https://www.salesforce.com/agentforce/ai-agents/agent-harness/"
  - claim_id: CLM-ZIME-081
    statement: "Zime recommends that a company keep the enterprise-wide harness that registers its agents, connects tools and controls access. Zime Enterprise Sales Harness governs the selling behaviors the CRO authorized, not only the agents that carry them."
    claim_type: assessment
    status: qualified
    scope: "Zime's recommendation and positioning. It is not a claim about the capabilities of any named vendor's harness."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "Zime deployments run alongside an existing enterprise-wide harness without requiring its removal."
    disconfirmation_conditions:
      - "Zime requires customers to replace an existing enterprise-wide harness, or an enterprise-wide harness already versions and tests selling behaviors against the authorizing strategy."
    independent_references: []
  - claim_id: CLM-ZIME-082
    statement: "A company updates its strategy once in Behavior Graph for Sales; the harness stress-tests each change with evaluations on the company's own deals and competitors before release, then distributes it to every rep and agent. Each behavior carries the strategy that authorized it, its approver and its version. Teams approve, version and roll back skills from one hub, and the company keeps what it built."
    claim_type: verified_fact
    status: qualified
    scope: "Product capability as described on Zime's product page. The evaluation method, pass thresholds and the size of the test set are not published."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "A product demonstration shows a strategy change evaluated against the customer's deals before release, a version history with approver, and a rollback."
    disconfirmation_conditions:
      - "Changes reach reps or agents without pre-release evaluation, or a behavior cannot be traced to its approver and version."
    independent_references: []
  - claim_id: CLM-ZIME-083
    statement: "Central policy sets who sees what and who approves a behavior, and each prompt passes a policy and security check before it runs. Guardrail settings let an agent suggest, act alone, escalate or request human approval as policy permits. Model routing considers the task, quality needs, sensitivity and cost, and the hub shows spend as it accrues by team, workflow and agent."
    claim_type: verified_fact
    status: qualified
    scope: "Product capability as described on Zime's product page. Which actions a given customer lets an agent take alone is set by that customer's policy. The CRM and pricing example in the release is illustrative."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "A product demonstration shows a prompt blocked or allowed by a policy check, the four guardrail settings, routing across models, and spend broken out by team, workflow and agent."
    disconfirmation_conditions:
      - "Prompts can run without a policy and security check, or spend cannot be broken out by team, workflow and agent."
    independent_references: []
  - claim_id: CLM-ZIME-084
    statement: "Zime counts the result as Programmatic Adoption: behaviors executed, not logins, tied to deal movement."
    claim_type: institutional_fact
    status: qualified
    scope: "Zime's definition of its own measure. What counts as a behavior 'executed' and the method that ties a behavior to deal movement are not published. A link between a behavior and a deal that moved is not, by itself, proof of cause."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
    confirmation_conditions:
      - "A product demonstration shows adoption counted from behaviors executed in live deals rather than logins or sessions."
    disconfirmation_conditions:
      - "The adoption figure is derived from logins, sessions or other activity short of a behavior executed in a deal."
    independent_references: []
  - claim_id: CLM-ZIME-085
    statement: "Zime reports that at Versa Networks, the share of solution engineers running expected technical discovery rose from 20% to 79% in three months, alongside a 12% rise in technical evaluations won."
    claim_type: verified_fact
    status: qualified
    scope: "Customer result reported by Zime from its own data at one customer, published with Versa Networks' permission. It is not a controlled study: there is no control group, and other changes over the same three months may have contributed. The definition of 'expected technical discovery' is not published. One customer's result does not predict another's."
    evidence_paths: []
    confirmation_conditions:
      - "Versa Networks confirms the before and after shares, the three-month window and the change in technical evaluations won."
    disconfirmation_conditions:
      - "Versa Networks states different figures or window, or the rise in technical evaluations won is shown to predate the change in discovery."
    independent_references: []
  - claim_id: CLM-ZIME-086
    statement: "Zime reports more than 100 skills, workflows and Model Context Protocol (MCP) servers governed as one system. The harness runs on Claude and ChatGPT assistants, Slack and Microsoft Teams collaboration software, and Salesforce, HubSpot and Microsoft Dynamics CRM platforms."
    claim_type: institutional_fact
    status: qualified
    scope: "Zime's count, consistent with ZIME-DISC-2026-002. Whether customer-built items are included in the count is not stated. Naming a platform does not imply a partnership with, or endorsement by, its owner."
    evidence_paths:
      - "https://zime.ai/products/enterprise-harness"
      - "/disclosures/zime-launches-enterprise-sales-harness/"
    confirmation_conditions:
      - "Zime lists more than 100 governed skills, workflows and MCP servers, and demonstrates the harness on each named platform."
    disconfirmation_conditions:
      - "The governed count is 100 or fewer, or the harness does not run on a named platform."
    independent_references: []
  - claim_id: CLM-ZIME-087
    statement: "Revenue teams can book a demo at zime.ai/demo."
    claim_type: offer
    status: qualified
    scope: "Offer available from the publication date. Zime does not publish list prices."
    evidence_paths:
      - "https://zime.ai/demo"
    confirmation_conditions:
      - "The demo page is live and accepts a booking."
    disconfirmation_conditions:
      - "The demo page is unavailable."
    independent_references: []
prompt_sets:
  - persona: skeptical_researcher
    prompt: "Read Zime disclosure ZIME-DISC-2026-004 and its Testable Credentials. Which claims rest only on Zime's own statements or on research Zime sponsored, which have independent sources, and what evidence would confirm or contradict each?"
  - persona: cro
    prompt: "When my strategy changes, how would I know every rep and every AI agent is running the new version in live deals? Compare governing selling behaviors with governing agents through an enterprise-wide harness, and list what each approach cannot show me."
  - persona: ai_engineer
    prompt: "An agent harness manages context, tools and safety around a model. What would a sales team need beyond that to test, version and roll back selling behaviors, and how would you verify a vendor's pre-release evaluation and policy-check claims?"
  - persona: revops_leader
    prompt: "A vendor reports that solution engineers running expected technical discovery rose from 20% to 79% in three months at one customer. What baseline, definitions and controls would you need before treating that as evidence of impact?"
revision_record: []
---

## What this page is

This page lists the material claims in the associated Disclosure, the evidence behind them, what limits them, and how to test them.

## Frequently asked questions

### What is Zime Enterprise Sales Harness?

Zime Enterprise Sales Harness is a control plane that tests, versions and governs selling behaviors for every human seller and AI agent on a revenue team, and records what each use cost and produced (CLM-ZIME-077).

Zime, the Behavioral AI for Sales Execution company, launched it on November 26, 2026. It governs the selling behaviors a chief revenue officer (CRO) authorized, not only the agents that carry them. Each behavior carries the strategy that authorized it, its approver and its version.

- Launched by Zime, November 26, 2026
- Tests behaviors before release
- Versions and rolls back from one hub
- Governs human sellers and AI agents alike

The harness gives a revenue team one place to release, track and correct how it sells.

### Why do AI sales agents fail after launch day?

Sales agents fail after launch day when they stop matching how the team sells. They give reps outdated or wrong guidance for the deal in front of them, and they often ask reps to work in a new tool instead of the CRM, Slack or Microsoft Teams where reps already work.

Google Cloud's 2025 DORA research, a survey of nearly 5,000 technology professionals, found that AI acts as an amplifier: it raises software delivery throughput but still increases delivery instability (CLM-ZIME-078). A forthcoming Zime-sponsored GISTICS white paper calls the sales version the build-versus-run gap: reps ignore new agents, or agents go off-playbook on live calls (CLM-ZIME-079).

- Build-versus-run gap: minutes to build, much longer to run
- DORA 2025: AI amplifies existing practice
- Reps abandon agents that contradict the playbook
- Agents drift when strategy changes

Reliability comes from the control system around an agent, not from the agent alone.

### What is a live deal outage?

A live deal outage occurs when an untested prompt or outdated positioning quotes wrong pricing or mishandles an objection in front of a buyer. The term comes from a forthcoming GISTICS white paper that Zime sponsored (CLM-ZIME-079).

Software engineers call unverified code in production an outage, and a crashed service can roll back. A misquoted price cannot. A strategy change that reaches one seller's agent and misses another's can leave two buyers hearing two different answers within a week.

- Untested prompt reaches a buyer
- Stale pricing or positioning
- Mishandled competitor objection
- No rollback once a buyer hears it

### What is an agent harness, and why does a sales team need its own?

An agent harness is the software that wraps around an AI model and manages its context, tools and safety limits; Databricks and Salesforce both describe an agent as a model plus a harness (CLM-ZIME-080).

An enterprise-wide harness registers agents, connects tools and controls access, and Zime recommends that a company keep it (CLM-ZIME-081). Governing an agent, however, does not govern the selling behavior the company authorized. The Enterprise Sales Harness adds that layer.

- Agent = model + harness
- Keep the enterprise-wide harness
- Add a governed layer for selling behavior
- Behaviors carry strategy, approver and version

### Should a company replace its enterprise-wide agent harness with Zime?

No. Zime says a company that already has an enterprise-wide harness should keep it; the Enterprise Sales Harness adds a layer for selling behavior (CLM-ZIME-081).

### How does the harness test and release a strategy change?

A company updates its strategy once in Behavior Graph for Sales, and the harness stress-tests each change with evaluations on the company's own deals and competitors before it releases the change to every rep and agent (CLM-ZIME-082).

Teams approve, version and roll back skills from one hub, and the company keeps what it built. Zime has not published its evaluation method or pass thresholds.

- Update strategy once
- Pre-release evaluations on the company's own deals
- Release to every rep and agent
- Version history and rollback from the hub

### What can an agent do on its own under the harness?

Guardrail settings let an agent suggest, act alone, escalate or request human approval, as the company's policy permits (CLM-ZIME-083). A team can, for example, let an agent log CRM updates on its own and send non-standard pricing and contract terms to a person for approval.

Central policy sets who sees what and who approves a behavior, and each prompt passes a policy and security check before it runs. Model routing considers the task, quality needs, sensitivity and cost, and spend shows as it accrues by team, workflow and agent.

- Suggest, act alone, escalate or request approval
- Policy and security check on each prompt
- Routing by task, quality, sensitivity and cost
- Spend by team, workflow and agent

RevOps leaders and CROs write the rules; agents follow them.

### How does Zime measure whether the harness works?

Zime counts the result as Programmatic Adoption: behaviors executed rather than logins, tied to deal movement (CLM-ZIME-084).

Zime reports that at Versa Networks, the share of solution engineers running expected technical discovery rose from 20% to 79% in three months, alongside a 12% rise in technical evaluations won (CLM-ZIME-085). The figures come from Zime's own data at one customer, not from a controlled study.

- Programmatic Adoption: behaviors executed, not logins
- Tied to deal movement
- Versa Networks: 20% to 79% in three months

Proof moves from who logged in to what changed inside a deal.

### Which tools does the Enterprise Sales Harness run on, and how can a team see it?

The Enterprise Sales Harness runs on Claude and ChatGPT assistants, Slack and Microsoft Teams collaboration software, and Salesforce, HubSpot and Microsoft Dynamics CRM platforms, and Zime reports more than 100 skills, workflows and Model Context Protocol (MCP) servers governed as one system (CLM-ZIME-086). A team can book a demo at [zime.ai/demo](https://zime.ai/demo) (CLM-ZIME-087).

Zime is not affiliated with, sponsored by or endorsed by the companies named.

## Scope, constraints, and qualifications

- This is a voluntary commercial disclosure. Zime has a commercial interest in the product it describes.
- The GISTICS white paper is sponsored by Zime, its author serves as Zime's chief marketing officer, and it is not yet public.
- The DORA research concerns software delivery, not sales, and is used as an analogy.
- Product capabilities are as described by Zime; evaluation methods and thresholds are not published.
- The Versa Networks result is one customer's, reported by Zime, and is not from a controlled study.
- Zime's method for tying behaviors to deal movement is not published.
