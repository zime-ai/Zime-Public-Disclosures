---
id: "ZIME-GUIDE-2026-002"
title: "Zime Buyer's Guide for Technical CROs and CTOs: Make or Buy Behavioral AI for Sales Productivity"
summary: "A make-or-buy guide for technical CROs and CTOs deciding whether to build or license Behavioral AI for Sales Execution: seven decision conditions, a nine-gate make-or-buy cascade, a 36-component build cost model, the eight proof tests, the Zime Outcome Register and an eight-rung action plan."
artifact_type: reference
status: published
visibility: public
version: "1.0"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
accountable_owner:
  role: Marketing
publication_date: 2026-11-05
updated_date: 2026-11-05
review_by: 2026-12-05
canonical_path: "/reference/zime-buyers-guide-technical-cro-make-or-buy/"
related_artifacts:
  - "/reference/zime-buyers-guide-cro-sales-productivity/"
  - "/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/"
  - "/credentials/zime-buyers-guide-technical-cro-make-or-buy/"
  - "/disclosures/zime-launches-behavior-graph-for-sales/"
  - "/disclosures/zime-launches-enterprise-sales-harness/"
  - "https://zime.ai/primers/cro-strategy-to-execution-gap"
related_entities:
  - "ENT-ZIME-001"
structured_data_type: "TechArticle"
ai_assistance:
  used: true
  roles: [structure, formatting, validation_assistance]
  human_review: required
---

**Zime Buyer's Guide · Make or Buy: Behavioral AI for Sales Productivity**

*A buyer's guide for technical CROs and CTOs.*

## Key facts at a glance

This summary restates the guide's main points with their source tags, so a reader or an AI assistant can find them quickly. The full guide follows.

- **Who it is for:** technical CROs and CTOs who manage software budgets and build sales AI agents. The revenue-owning CRO should read the [CRO guide](/reference/zime-buyers-guide-cro-sales-productivity/); AI and GTM engineers should read the [Enterprise Sales Harness guide](/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/).
- **The core finding:** context graphs track deal history but miss current strategy and do not change seller actions during live calls.
- **The bar:** 80 percent of eligible reps running governed Deal Motions in live deals within 90 days, with logins, seats and sessions excluded [V: programmatic-adoption].
- **Build cost (GISTICS planning model):** 36 components in six domains, about 36,700 labor hours over 15 months at 15.3 average FTE for an enterprise build; the context graph is only 4,800 of those hours; maintenance is about 17,500 hours a year, close to half the build [M].
- **Adoption economics (GISTICS planning model):** an adoption floor near 31 percent, below which fixed costs exceed returns, and a Payback Band starting near 75 percent sustained adoption [M]. No external source corroborates these break points.
- **Decision tools:** seven decision conditions (Section 0), a nine-gate Make-or-Buy Cascade (Section 4), eight proof tests (Section 7.4) and eight action rungs (Section 9).
- **When building wins:** full model ownership is required (Gate 4), the encoding logic is a trade secret (Gate 5), and the organization has the scale to absorb the cost (Gate 6).
- **Time to first evidence:** a Proof of Value of about three weeks ending in Go, Revise, or Stop, then a 90-day scale decision [V: deployable-capabilities; cro-sales-productivity].
- **What Zime does not promise:** revenue. "Evidence of contribution. No promise of revenue. Each customer sets targets from a baseline." [V: cro-sales-productivity]
- **Not published (UNSOURCED):** license pricing, export and exit terms, data residency and retention windows, telemetry capture method, model routing protocols, API surfaces and named CRM connectors.

Your team builds context graphs. Turning graphs into live sales behaviors consumes time and money. Enterprise builds require 36,700 labor hours over 15 months under the GISTICS planning model [M].

The initial graph demands 4,800 hours [M]. Ongoing maintenance takes nearly 17,500 hours annually [M].

A licensed Proof of Value evaluates live pipelines within three weeks [V: deployable-capabilities].

This guide calculates build costs. It sets evidence standards for software licenses.

> **At a Glance: Where the Build Hours Go.** The graph accounts for 4,800 of 36,700 build hours. The cost and the risk sit in the other 31,900, and in the upkeep that follows every year.

**Target Audience:** Technical CROs and CTOs managing software budgets and building sales AI agents.

## Questions this guide answers

Short answers first; each points to the section with the full reasoning and sources.

**Why isn't our context graph enough?**
Context graphs track deal history. They miss current strategy and do not change seller actions during live calls. In the GISTICS planning model the graph is 4,800 of 36,700 enterprise build hours; the cost and risk sit in the other 31,900 [M]. *Sections 3 and 5.*

**What does it cost to build Behavioral AI for Sales Execution in house?**
36 components across six domains: about 36,700 labor hours, 15 calendar months, and 15.3 average FTE at enterprise scale, then about 17,500 maintenance hours a year. The three core technical roles alone total $3.3 million to $5.5 million in direct labor [M]. *Section 5.*

**When does building win?**
When regulation requires full ownership of model weights and code (Gate 4), when the strategy-encoding logic is a trade secret (Gate 5), and when deal volume and seller count absorb the cost (Gate 6). *Sections 4 and 7.1.*

**What conditions must any option clear?**
Seven: sustained adoption, reads the conversation, guides the live deal, carries your strategy, the record stays yours, someone answers for year two, and a fast, honest read. *Section 0.*

**How does the make-or-buy cascade work?**
Nine gates run in order: Strategy Crux, Performance Zone, Scope of Effort, Sovereignty, Competitive Advantage Corpus, Amortizing Capability Costs, Traceability, Lifecycle Funding, and Sourcing. A failed gate stops the cascade. *Section 4.*

**What adoption level makes the investment pay back?**
In the GISTICS model, an adoption floor near 31 percent (below it, fixed costs exceed returns) and a Payback Band from about 75 percent sustained adoption [M]. No external source corroborates these break points. Zime's benchmark is 80 percent within 90 days [V: programmatic-adoption]. *Sections 1.4 and 5.6.*

**How do we test any vendor, or our own build?**
Run the eight proof tests: strategy read, strategy lock, execution verification, deal tracing, denominator honesty, rationale display, the build test, and the year-two maintenance test. Zime documentation clears tests 1, 3, 5, and 6; test 7 remains UNSOURCED. *Section 7.4.*

**Where does Zime sit in our stack, and what do we keep?**
Your engineers keep existing models and frameworks [V: ai-platforms]. Zime operates above the model layer and delivers guidance in the CRM, Slack, and Microsoft Teams. A proof needs a capability owner, an AI or GTM engineer, and an executive sponsor; Zime supplies a forward-deployed engineer [V: deployable-capabilities]. *Section 3.3.*

**What compliance does Zime publish?**
SOC 2 Type II, GDPR, and HIPAA badges [V: enterprise-harness]. Data residency limits and retention windows are UNSOURCED. *Section 3.4.*

**Does the 80 percent adoption and 20 percent uplift figure prove Zime causes revenue gains?**
No. Zime's own page calls it "a correlation in sample data. It does not show cause." Sample size, cohort definitions, and methods are not published. *Section 8.4.*

**What should we do first?**
Run the eight rungs in order. Rungs 1 to 3 take under two hours and filter options before vendor conversations start. *Section 9.*

## Core Context

Context graphs track deal history. They miss current strategy and fail to shift seller actions during live calls.

This guide mandates a target: 80 percent of sales reps execute governed Deal Motions in live deals [V: programmatic-adoption]. We exclude logins, seats, and active sessions [V: programmatic-adoption]. Zime sets this benchmark over 90 days [V: programmatic-adoption].

We challenge internal build bias. Build claims require labor estimates. Buy claims require page citations or UNSOURCED tags.

**Disclosure:** GISTICS wrote this guide for Zime. Zime sells the described platform. We tag open questions as UNSOURCED. Section 7.1 presents the internal build case.

## Key Business Risks

Internal builds create five major risks:

1. **Delayed adoption metrics:** Enterprise builds span 15 months [M]. Adoption data appears in quarter four [M]. A Proof of Value delivers verifiable adoption data within three weeks [V: deployable-capabilities]. See *Section 0, Condition 7 and Section 8.5.*
1. **Roadmap displacement:** Initial builds consume 36,700 labor hours [M]. Annual maintenance takes 17,500 hours [M]. See *Gate 3 and Section 5.*
1. **Unpriced build scope:** Build plans omit dependency management and portability protocols [M]. Proofs of concept ignore adoption and revenue impact [M]. See *Section 5.2 and Section 5.5.*
1. **Ownership gaps:** Year two demands clear ownership and maintenance budgets. Project funding creates renewal risks. See *Gate 8 and Section 5.3.*
1. **Execution failures:** Systems fail without enforceable Deal Motions or manager reinforcement. See *Section 6.*

**When Internal Builds Succeed:** Three conditions justify builds: full model ownership (Gate 4), proprietary encoding (Gate 5), and scale to absorb costs (Gate 6).

## Evidence Summary

| **Decision dimension** | **Build in house** | **License Zime** |
|---|---|---|
| **Time to first falsifiable read** | Quarter four or later, after the build lands [M] | About three weeks, Proof of Value on live pipeline, Go, Revise, or Stop [V: deployable-capabilities] |
| **Effort to stand up, enterprise scale** | About 36,700 labor hours, 15 calendar months, 15.3 average FTE [M] | Zime forward-deployed engineer or partner runs the proof; your team supplies a capability owner, an AI or GTM engineer, and an executive sponsor [V: deployable-capabilities] |
| **Effort to keep current** | About 17,500 recurring labor hours per year, close to half the build effort, every year [M] | Guidance refreshed centrally; the Learn turn refreshes guidance as the market moves [V: programmatic-adoption; ai-platforms] |
| **Adoption verification** | Your telemetry, your denominator, your definitions; usually quarter three or later [M] | Four levels: eligible reps, active use, behavior executed, outcome contribution; benchmark 80 percent within 90 days [V: programmatic-adoption] |
| **What you hold at the end** | Everything, at full tuition | A behavior record held in your environment; a customer-specific Behavior Graph and Skill Graph [V: ai-platforms; deployable-capabilities]. Export and exit terms: UNSOURCED, negotiate before signature |

Dollar figures sit in Section 5.4 alongside supporting calculations.

**Test the claims.** Validate these exposures against your context. Run a Proof of Value with frozen pipeline baselines. Reach a signed decision within three weeks. Section 9 outlines five necessary contract terms.

## Start where your decision stands

| **Where you stand** | **The question on your desk** | **Start here** |
|---|---|---|
| **Deciding whether to act at all** | Would lifting the floor of the team move the number, and does our strategy live anywhere a system can read? | Section 0; Gates 1 and 2 |
| **Taking stock of what you run** | Where do the models, context graph, and conversation intelligence we already pay for stop short? | Sections 2, 3, and 3.5 |
| **Weighing build against buy** | What does the build cost, now and in year two, and where do builds die? | Gates 3 through 9; Sections 5 and 6 |
| **Evaluating vendors, Zime included** | How do we score any vendor on evidence instead of a demo? | Sections 7 and 8 |
| **Ready to test** | What do we freeze before day one, and what do we sign? | Section 9; Section 8.5 |

**Read by role.** Technical CROs read Sections 1, 2, 6, 8, and 9 alongside Gates 1, 2, 7, and 8. CTOs and AI Platform Leads read Sections 3, 5, and 7 alongside Gates 3, 4, 5, 6, and 9.

**Decode the tags.** [V: page] marks claims from Zime published pages. [A] marks analyst sources. [M] marks the GISTICS planning model. UNSOURCED tags claims lacking published source support. Appendix A lists all pages. Appendix D defines every key term.

To test the claim on your own pipeline, request a Proof of Value conversation at zime.ai.

## Section 0. The decision, stated as conditions

*What would have to be true for you to buy this, and what would have to be true for you to build it?*

You ran or built a proof of concept on a context graph, but the results disappointed you. The graph recorded past events. It lacked current CRO strategy, and it failed to change rep actions during calls. This guide addresses that finding directly. It sets a strict adoption bar: 80 percent of eligible reps running governed Deal Motions in live deals to drive quarterly productivity gains. Few software options reach this bar. Setting this bar eliminates weak options before cost comparisons begin.

License the platform and retain the behavior record on pre-negotiated terms when all seven conditions hold. Build only if a condition fails. Each condition states its falsifier, and Sections 1 through 9 outline the evaluation tests.

**What this guide examines.** Behavioral AI for Sales Execution defines the category; Zime represents the platform instance. The system uses strategy, customer context, and observed behavior to prescribe, activate, verify, and improve Deal Motions [V: cro-strategy-to-execution-gap]. Sales productivity and sales execution describe the same operational capability. Section 1 demonstrates this equivalence.

### Seven decision conditions

Every option under consideration, an in-house build, a commercial platform, or the status quo, must clear all seven.

| **Condition** | **Requirement** | **Falsifier** | **How the options fare** |
|---|---|---|---|
| **1. Sustained adoption** | Above 75 percent of eligible reps at month nine, measured as behavior executed in live deals, not logins | Any option whose adoption evidence consists of seats, sessions, or delivered messages | Any option that reports seats or logins fails here by its own evidence. Zime publishes a benchmark of 80 percent within 90 days and an exclusion list: logins, delivered messages, impressions, selected power users, an undefined denominator, an undisclosed late start [V: cro-strategy-to-execution-gap, Proof Test 5] |
| **2. Reads the conversation** | Ingests unstructured conversational evidence, not only CRM fields | The option's inputs list names systems of record and nothing else | An assistant whose inputs list only systems of record fails here. Zime's Proof of Value requires deal and conversation evidence as a customer input [V: deployable-capabilities] |
| **3. Guides the live deal** | Delivers the next move inside the tools reps already use, before, during, and after the customer exchange | The guidance lands in a dashboard a manager reads afterward | A layer whose output lands in a report read afterward fails here; Table 3.1 shows where each layer stops. Zime delivers prep notes, in-call nudges, and post-call comments in the CRM, Slack, or Microsoft Teams [V: behavior-graph-for-sales; programmatic-adoption] |
| **4. Carries your strategy, not a benchmark** | Prescribed behavior changes when the strategy or a material context facet changes | The option performs the same on day one for you and for your nearest competitor | Guidance that reads the same for you and your nearest competitor fails here. Zime's own Proof Tests 1 and 2 define the failure: guidance that stays materially identical when a significant facet changes [V: cro-strategy-to-execution-gap] |
| **5. The record stays yours** | The behavior record and the evaluation criteria sit in your environment and leave with you | The draft agreement contains no clause on data residency, derived works, or export | Internal build clears by default. Zime states the record is held in your environment and that you hold a customer-specific Behavior Graph and Skill Graph [V: ai-platforms; deployable-capabilities]; export format and exit terms are UNSOURCED |
| **6. Someone answers for year two** | Runs as a product whose maker's survival depends on it, or as an internal system with a named year-two owner | Year two of the operating stack has no named owner whose job depends on the answer | Internal builds fail conditionally unless the owner is named today. Section 5 prices the year-two line at close to half the build effort, every year [M] |
| **7. A fast, honest read** | Produces a defensible adoption number within weeks, from a baseline set before deployment | The first honest read of adoption sits beyond two quarters on the plan | Internal builds fail on the 15-month enterprise schedule [M]. Zime's Proof of Value sets the baseline in week one and ends in week three with Go, Revise, or Stop [V: deployable-capabilities] |

*Table 0.1. Seven conditions, each with the observation that overturns it. Run them against your own field in twenty minutes (Section 9, rung 1) before you read a vendor deck.*

## Section 1. Adoption Bar

*Which capability will eighty percent of your reps run regularly? How will you know by quarter-end?*

Logins measure procurement, not selling. Your organization already funded AI on every rep's desk. Yet leaders still lack proof that the floor executes strategy. This guide replaces proxy metrics with actual behavior.

### 1.1 Sales Productivity Defined

Your organization calls it productivity. The category calls it execution. Both terms mean the same thing.

| **Term** | **Definition** |
|---|---|
| **Sales Productivity** | Adherence to a sales process. Consistent delivery of the right message to buyers at the right stage gate. Effective deal quarterbacking on key pipeline deals. |
| **Sales Execution** | The governed orchestration of company-specific seller actions before, during, and after customer exchanges [V: cro-strategy-to-execution-gap]. |
| **Bottom Line** | Reps win more deals, close deals faster, and retain customers longer. |

Neither definition describes sellers performing tasks faster. Both focus on sellers running stage-specific actions on key opportunities while management tracks deviation. This guide treats productivity and execution as identical.

### 1.2 Key Metrics Breakdown

| **Metric** | **Drivers** | **Guide Location** |
|---|---|---|
| **Win rate** | Deal Motions that correlate with wins at the qualifying moment. Example: competitive evaluation behaviors showing +0.58 correlation across 51 won and 8 lost deals [V: behavior-graph-for-sales]. | Section 8, measured against pre-launch baselines. |
| **Deal velocity** | Deal Movement: defined changes in commercial state like cleared gates, added stakeholders, or removed blockers [V: cro-strategy-to-execution-gap]. | Section 8. |
| **Net revenue retention** | Your internal metric. The Behavior Graph page targets retention but omits results [V: behavior-graph-for-sales]. | Section 8, using user-supplied figures. |
| **Labor content per deal** | Fewer touches per win, automated assistance, and reduced FTE requirements per close. | Section 8, using user-supplied figures. |
| **Ramp time for new hires** | Guidance calibrated to deal and role, delivered inside existing rep workflows [V: behavior-graph-for-sales]. | Section 8, measuring cohorts against baseline. |

*Table 1.1. Five metrics. Two carry vendor-published mechanisms; three require internal inputs.*

### 1.3 Measuring Adoption

Zime publishes a strict measurement rule to eliminate weak options [V: programmatic-adoption; cro-strategy-to-execution-gap]:

| **Rule Component** | **Published Standard** |
|---|---|
| **Definition** | Programmatic Adoption: percentage of eligible reps executing governed Deal Motions at qualifying moments, verified by execution evidence within a set window. |
| **Four Levels** | 1. Eligible reps. 2. Active use. 3. Behavior executed. 4. Outcome contribution. Level 3 requires evidence of encoded behavior in live deals. |
| **Cuts** | Breakdowns by rep, team, account, opportunity, stage, and Deal Motion. |
| **Excluded Metrics** | Logins, seats, sessions, delivered messages, impressions, power users, undefined denominators, and undisclosed late starts. |
| **Pre-launch Variables** | Freeze cohort, qualifying moments, execution events, evidence sources, exclusions, start date, and window before launch. |
| **Benchmark Target** | 80 percent adoption within 90 days against a defined cohort baseline. This target represents a benchmark, not a guarantee. |

> **Figure 1: The Programmatic Adoption Funnel.** Seats, sessions, and logins measure procurement. Adoption counts only at Level 3, when a rep runs the behavior in a live deal.

For CTOs: Zime's page omits how telemetry detects executed behaviors inside CRM, Slack, or Teams. UNSOURCED. Request capture methods during Proof of Value testing.

### 1.4 Adoption Floor and Payback Band

The GISTICS model establishes an adoption floor near 31 percent. Below this threshold, fixed costs exceed financial returns. Above 75 percent adoption, the Payback Band generates sufficient win-rate and velocity gains to justify investment [M]. Gate 8 provides prompts to test these figures. Zime's 80 percent benchmark sits safely inside the Payback Band [V: programmatic-adoption].

This standard eliminates manager-focused dashboards and slow-reporting tools. It admits only systems that track executed behaviors in live deals against fixed baselines. Section 8 details this timeline.

## Section 2. What you are deciding: the extended jobs to be done

*Are you hiring a context provider or hiring a sales execution function, and what job does each do?*

A make-or-buy decision with no job description produces a platform with no owner. This section names the jobs, so Section 4 can decide who does them.

| **Job dimension** | **What the job requires** |
|---|---|
| **Functional jobs, by layer** | **Enterprise context provider:** connect enterprise knowledge, represent facts as entities and relationships, maintain a connected graph, retrieve with provenance. <br>**GTM or sales context provider:** interpret revenue activity, capture and read sales conversations, analyze pipeline, find historical win and loss patterns. <br>**Behavioral AI for Sales Execution:** capture how the CRO and top reps win through interviews, compile forward-looking strategy into situation-specific Deal Motions, deliver the next move with its reason in the rep's tools, verify execution, trace it to Deal Movement, and refresh the guidance from outcomes [V: behavior-graph-for-sales; cro-strategy-to-execution-gap] |
| **Emotional jobs** | **For the rep:** professional identity (a rep whose numbers beat the floor gets asked what she does), near-immediate results inside deals running now, no new tool to learn. Reps apply, adapt, or override any recommendation within consistent company guidance [V: behavior-graph-for-sales]. <br>**For the CRO:** replace management by exhortation with visibility into which behavior ran, in which deal, and what moved. <br>**For the CTO:** a judgment layer whose authority, version, and evidence a reviewer can inspect, rather than a prompt library nobody owns |
| **Workflow and interpersonal jobs** | **In the sales cycle:** handoffs, legal review, disqualification, and deal quarterbacking across rep, manager, quarterback, and CRO. <br>**In the AI lifecycle:** strategy decomposition and authority, evaluation and red-team tests, execution verification, governance, privacy, permissions, versioning, rollback, and maintenance as strategy, product, competition, and organization change. The primer lists fourteen such responsibilities that an internal build owns; Section 5 reproduces them [V: cro-strategy-to-execution-gap] |
| **Role job** | Staffing a DevOps-for-RevOps capability: extract strategy, transform conversational exhaust, bind strategy to context, deliver workflows, verify, and maintain eleven roles, 6,900 to 36,700 base labor hours by configuration [M]. <br>**Buy path:** a Zime forward-deployed engineer or partner runs the proof; your side supplies a capability owner, an AI or GTM engineer, and an executive sponsor [V: deployable-capabilities] |
| **Economic job** | Attract, serve, and retain profitable customers through repeatable execution. Measured in the Zime Outcome Register (Section 8), never asserted in prose. <br>The pages say the same of themselves: Zime offers evidence of contribution and makes no promise of revenue. Each customer sets its own targets from its own baseline [V: cro-sales-productivity; programmatic-adoption] |

*Table 2.1. Five job dimensions. The functional row names three layers because the stack you run already performs the first two; Section 3 shows where each stops.*

## Section 3. Current Stack Capabilities and Limits

*Each stack layer adds capabilities. Every layer reaches a clear limit.*

Your team runs frontier models. Your team deploys coding harnesses and co-working AI. Your team maintains enterprise context graphs and GTM context layers. Each layer expands system capability. Yet no existing layer changes rep actions during live sales calls. No existing layer tracks the strategy authorizing a specific move. This section maps where each layer stops.

### 3.1 Reading the Tech Stack Ladder

The table splits systems into two categories. Systems in category one process historical system logs. Systems in category two direct, verify, and refine rep actions in live sales deals. A filled circle marks the layer introducing a capability. A check mark marks downstream layers maintaining that capability. Table 3.1 adapts Zime's Progressive Value Comparison [V: Zime Progressive Value Comparison] to align with standard category definitions.

| **Essential function** | **Frontier models** | **Coding harness or co-working AI** | **Enterprise context providers** | **GTM or sales context providers** | **Zime: Behavioral AI for Sales Execution** |
|---|---|---|---|---|---|
|  | **Reasoning on data exhaust** |  |  |  | **Reasoning on real-world behavior** |
| *Value added* | *Reason and generate* | *Execute delegated work* | *Connect enterprise knowledge* | *Interpret revenue activity* | *Prescribe, activate, verify, and improve Deal Motions* |
| Reason, generate, and synthesize | ● | ✓ | ✓ | ✓ | ✓ |
| Provide workspaces and working artifacts |  | ● | ✓ | ✓ | ✓ |
| Run tools, harnesses, and service integrations |  | ● | ✓ | ✓ | ✓ |
| Package reusable skills and workflows |  | ● | ✓ | ✓ | ✓ |
| Represent enterprise facts as entities and relationships |  |  | ● | ✓ | ✓ |
| Maintain a connected enterprise context graph |  |  | ● | ✓ | ✓ |
| Retrieve context with source provenance |  |  | ● | ✓ | ✓ |
| Capture and interpret sales conversations |  |  |  | ● | ✓ |
| Analyze pipeline and revenue performance |  |  |  | ● | ✓ |
| Identify historical win and loss patterns |  |  |  | ● | ✓ |

*Table 3.1. Capability progression across stack layers. Lower layers process historical logs. Lower layers lack forward-looking strategy enforcement.*

> **Figure 2: The Behavioral AI Ladder.** Each layer earns its keep. The four lower layers reason over what happened. Only the top layer prescribes what the company authorizes now, inside the tools where the rep works.

**Locating Stack Boundaries.** Frontier models and enterprise context graphs stop before customer conversations begin. Neither layer reaches live deal interactions. Context graphs map existing corporate knowledge. Context graphs omit quarterly sales strategy. Context graphs treat past behaviors and current executive mandates identically. GTM context layers process sales transcripts and generate post-call reports for managers. GTM context layers deliver no real-time guidance to reps facing stage gates. This limitation violates Condition 3. The Behavior Graph maps quarterly strategy directly to rep execution [V: behavior-graph-for-sales].

Context-graph platforms can evaluate policies, infer state, and invoke external tools. However, Behavioral AI for Sales Execution governs the complete loop from executive strategy to verified rep action and deal movement. Evaluate all platforms against this complete lifecycle using the proof tests in Section 7.

### 3.2 Published Zime Capabilities

Table 3.2 lists capabilities directly from Zime's documentation [V: pages as cited].

| **Layer** | **What the pages name** | **Page** |
|---|---|---|
| **Capture** | Interviews with the CRO and top reps, turned into 1,200+ cataloged playbook behaviors; the headline statistics add "trained with 50K+ human-in-the-loop hours." The primer separately estimates roughly 500 Deal Motions and calls that figure provisional pending a versioned registry. Appendix C reconciles the two counts | behavior-graph-for-sales; cro-strategy-to-execution-gap |
| **Behavior Graph** | Six domains: Products, Customers, Competition, Deal Motion Library, Sales reps and executing roles, forward-looking CRO strategy. Tribal knowledge cuts across all six | cro-strategy-to-execution-gap |
| **Strategy Context Facets** | Ten applicability facets: geography, customer or account, buyer persona, product or offer, commercial route, opportunity lifecycle, deal stage, competitive situation, executing role, strategy version or time | cro-strategy-to-execution-gap |
| **Execution Context** | Three layers select the strategy, culture, and tribal knowledge that apply to each deal: Seller (role, product, sales motion), Buyer (stakeholders, opportunity state, related deals), Market (competitors, internal build, status quo, the buyer and seller AI environment) | behavior-graph-for-sales |
| **Deal Motion** | A bounded behavior a seller or other executing role can run in a defined sales situation, specified in eight parts: situation, trigger, actor, behavior, buyer objective, evidence, exception, expected movement. Three to five prescribed per meeting or exchange | cro-strategy-to-execution-gap |
| **CRO Initiatives** | Named initiatives for revenue execution, packaged as governed workflows across the sales organization; 31 workflows across seven departments [V: sales-execution] | sales-execution |
| **Deliver** | Situational Playbook: prep notes before the meeting, nudges during, comments after, and Ask Me Anything over approved company knowledge and deal context; in the CRM, Slack, or Microsoft Teams; recommendations show rationale, evidence sources, and version history; reps apply, adapt, or override | behavior-graph-for-sales; programmatic-adoption |
| **Verify** | Programmatic Adoption at four levels; executed behaviors correlated against Deal Movement; prescription, execution, buyer response, and movement kept as separate records | programmatic-adoption; cro-strategy-to-execution-gap |
| **Govern** | Enterprise Sales Harness manages every rep, team, and agent harness from one hub; four guardrail states (Recommend, Act, Escalate, Request Approval); a policy and security check before each prompt; a person decides in a live deal; humans review and approve all encoded judgment. Your team supplies: AI Platform Owner, GTM Engineer, RevOps, Security Reviewer. Zime provides: Forward-Deployed Engineer [V: enterprise-harness] | ai-platforms; enterprise-harness |
| **Improve** | Every outcome teaches the system what worked; encoded judgment tested with Judgment Evals; guidance refreshed centrally as the market moves | behavior-graph-for-sales; programmatic-adoption; ai-platforms |
| **Package** | A governed capability package in seven layers: behavior or skill definition; link to the strategy; prompts, documents, context; workflow and integrations; conditions and exceptions; evaluation and regression; owner, release, version | deployable-capabilities |
| **Build and tune** | Zime Workbench: where behaviors get built, tested, and tuned before shipping. UNSOURCED: specific tooling details not carried on pages read | enterprise-harness |
| **Zime Lite** | A free leaderboard skill for Claude that surfaces Judgment at Scale without a full deployment. Entry point for platform companies and builders evaluating Behavior at Scale [V: cro-sales-productivity] | cro-sales-productivity |

*Table 3.2. Thirteen published platform layers. Internal build plans must reproduce Capture, Behavior Graph, Facets, Verify, Govern, and Package components. Section 5 provides detailed pricing.*

**Unstated Architecture Details.** Published documentation omits model routing protocols, API surfaces, named CRM connectors, telemetry capture mechanisms, data retention details, and data export specifications. Mark these items UNSOURCED. Address all six items during Proof of Value evaluation.

### 3.3 Technical Stack Placement

Your engineering team retains existing models and software frameworks [V: ai-platforms]. Zime operates above the model layer and outputs guidance into existing tools like CRM, Slack, and Microsoft Teams. Proof deployments require three internal resources: a capability owner, an AI/GTM engineer, and an executive sponsor [V: deployable-capabilities]. Zime supplies a forward-deployed engineer [V: deployable-capabilities]. The integration project requires weeks rather than months. Zime documentation omits integration specs for existing context graphs, data warehouses, and call-intelligence feeds. Verify integration mechanics during proof testing.

Reps adopt no new interface. Sales managers reinforce behaviors during pipeline reviews and role-play sessions. Internal responsibilities include selecting top-performer test cohorts, managing tool delivery, driving manager reinforcement, conducting workflows, and updating strategy centrally [V: programmatic-adoption]. These tasks require revenue leadership rather than software engineering.

### 3.4 Compliance Posture

Published materials cite SOC 2 Type II, GDPR, and HIPAA compliance badges [V: enterprise-harness]. The pages omit explicit details regarding data residency limits and data retention windows. Mark these items UNSOURCED. Include a complete security review with your CISO during Proof of Value evaluation.

### 3.5 Evaluating Four Options Against Seven Tests

*Compare build and buy options before starting the Make-or-Buy Cascade.*

Table 3.5 rates four deployment approaches against seven evaluation criteria [V: cro-sales-productivity]. Review these ratings to identify where your current approach fails.

| **Test** | **Forecasting dashboards** | **Call intelligence** | **Internal build** | **CRO Sales Productivity (Zime)** |
|---|---|---|---|---|
| **Strategy encoding** | No: reads pipeline state, not forward intent | No: reads conversations, not authorized behavior | Partly: possible, at engineering cost | Yes: strategy compiled into governed Deal Motions [V: cro-sales-productivity] |
| **Live deal guidance** | No: reports to managers | No: reports after the call | UNSOURCED: architecture-dependent | Yes: prep, nudge, comment, Ask Me Anything in CRM, Slack, Teams [V: behavior-graph-for-sales] |
| **Adoption counting** | UNSOURCED | UNSOURCED | Your team must build it | Yes: four levels, logins excluded [V: programmatic-adoption] |
| **Deal tracing** | No: pipeline fields only | No: conversation text only | Your team must build it | Yes: prescription, execution, buyer response, movement kept separate [V: cro-strategy-to-execution-gap] |
| **Behavior at Scale** | No | No | Your team must build it | Yes: Behavior at Scale across the full rep population, not selected power users [V: cro-sales-productivity] |
| **Judgment at Scale** | No | No | Your team must build it | Yes: Judgment at Scale from one CRO strategy across all situations [V: cro-sales-productivity] |
| **Upkeep** | Vendor maintains dashboards | Vendor maintains models | Your team must build it | Guidance refreshed centrally; the Learn turn updates as the market moves [V: programmatic-adoption; ai-platforms] |

*Table 3.5. Four deployment options rated across seven tests [V: cro-sales-productivity]. UNSOURCED cells indicate missing source data. Internal builds exit at tests 3 through 7 unless teams fund all five capabilities.*

#### Core Term Definitions

**Behavior at Scale** measures the percentage of the full rep population executing governed Deal Motions. **Judgment at Scale** compiles forward-looking sales strategy into rules that govern every rep, deal, and sales stage simultaneously. The Make-or-Buy Cascade tests whether an option delivers both capabilities.

## Section 4. The Make-or-Buy Cascade

*Nine gates eliminate non-viable options. Clear all nine gates to justify buying.*

Nine Eigen Questions run in priority order. A failed gate stops the Cascade immediately. Proceed only after clearing a gate. Later gates depend on earlier solutions. Run Gate 4 before Gate 5. Run Gate 5 before Gate 6. The Cascade terminates when an option fails a gate. Section 7 details the business case for each option.

> **Figure 3: The Nine-Gate Make-or-Buy Cascade.** Three gates stop every path until you fix what sits upstream. Two hand the decision to the build. The license wins only when all nine clear.

### Gate 1. Strategy Crux

*Does near-term sales productivity require diverse sellers executing expert-sourced behaviors updated regularly?*

**Why this gate comes first.** Context graphs record historical actions. Growth models require execution of current executive strategy across all deals. Zime distinguishes historical records from active strategic mandates [V: behavior-graph-for-sales; cro-strategy-to-execution-gap].

**How to run the gate.** Ask your CRO two questions. First, does lifting lower-performing sellers move the revenue number? Second, does a software system store these behaviors and push updates dynamically? Affirmative answers pass the gate. Negative answers halt the evaluation.

**What the options imply.**

- *Internal build:* The engineering team compiles strategy into code, tracks versions, and pushes updates to sellers before quarter-end. Section 5 details total costs.
- *Commercial platform (Zime):* Zime captures leadership strategy through structured interviews, converts findings into Deal Motions across ten Strategy Context Facets, and updates the library dynamically [V: behavior-graph-for-sales; cro-strategy-to-execution-gap].
- *Status quo:* Retaining current tools fails when strategy execution gaps cause performance deficits.

### Gate 2. Performance Zone

*Does achieving revenue targets require broad seller adoption rather than expert assistance for a small cohort?*

**Why this gate is second.** Spreadsheets manage small sales teams. Scaled organizations require operational systems [V: cro-sales-productivity]. Small team needs eliminate software build requirements.

**How to run the gate.** Calculate the required seller participation rate for quarterly targets. Broader participation requirements clear this gate. Focus on isolated top performers halts the evaluation.

**What the options imply.**

- *Internal build:* Broad deployment demands the full 36-component architecture (Section 5). Small teams require simple documentation tools.
- *Commercial platform (Zime):* Zime targets 80 percent adoption across eligible sellers and excludes power users from baseline metrics [V: programmatic-adoption; cro-sales-productivity].
- *Status quo:* Retaining current tools fails to scale behaviors to lower-performing sellers.

### Gate 3. Scope of Effort

*Will engineering fund, staff, and maintain all 36 components over 15 months alongside recurring maintenance without delaying product roadmap priorities?*

**Why this gate is third.** Gate 1 and Gate 2 establish organizational needs. Gate 3 evaluates internal build capacity. Internal enterprise builds consume 36,700 labor hours over 15 months [M]. Annual maintenance requires 17,500 recurring hours [M].

**How to run the gate.** Review engineering resource allocations with your CTO. Verify capacity for 15 months of development without impacting product roadmaps. Resource constraints fail this gate. Section 5 provides detailed role requirements.

**What the options imply.**

- *Internal build (full):* Clearing this gate leads to the build execution plan in Section 5 and Section 6.
- *Internal build (partial):* Partial builds omit components and fail to track advanced adoption levels.
- *Commercial platform (Zime):* Proof deployments require a capability owner, a GTM engineer, and an executive sponsor [V: deployable-capabilities]. Zime supplies a forward-deployed engineer [V: deployable-capabilities]. Confirm full deployment staffing during proof testing.
- *Status quo:* Retaining current tools fails Gate 1 requirements.

### Gate 4. Sovereignty

*Does regulatory compliance require full ownership of model weights and code, or does retaining local behavior records satisfy security requirements?*

**Why this gate is fourth.** Strict compliance rules compel model ownership. Most enterprises require control over deal records and output data rather than core model weights. Mandated model ownership necessitates internal builds.

**How to run the gate.** Confirm security requirements with your CTO. Determine whether local data retention fulfills governance standards or requires model weight ownership. Mandatory weight ownership fails commercial licensing.

**What the options imply.**

- *Internal build:* Internal development provides complete ownership across all system layers.
- *Commercial platform (Zime):* Zime stores behavior records, Skill Graphs, and Behavior Graphs inside customer environments [V: ai-platforms; deployable-capabilities]. Zime documentation omits internal model architecture specs. Define data ownership boundaries in order forms.
- *Status quo:* Current tools offer no custom behavioral data assets.

### Gate 5. Competitive Advantage Corpus

*Does your strategy-encoding logic contain trade secrets that licensing to a commercial platform exposes to competitors?*

**Why this gate is fifth.** Proprietary encoding logic creates competitive moats for specific firms. Exposing encoding structures to third parties risks advantage loss. Protecting core intellectual property mandates internal builds.

**How to run the gate.** Evaluate strategy exposure risks with executive leadership. Assess whether sharing encoding logic compromises market differentiation. Significant risk forces an internal build path.

**What the options imply.**

- *Internal build:* In-house engineering protects proprietary encoding methods. Non-proprietary methods must clear Gate 3 and Gate 6 on financial merits.
- *Commercial platform (Zime):* Zime provides customer-specific Behavior Graphs [V: ai-platforms]. Published pages omit data-pooling restrictions. Address data isolation clauses during contract negotiations using Gate 9 terms.
- *Status quo:* Retaining current tools fails to encode sales strategy.

### Gate 6. Amortizing Capability Costs

*Does your deal volume and seller count absorb the initial build and annual maintenance costs through projected productivity gains?*

**Why this gate is sixth.** Financial return models evaluate total development and ongoing maintenance costs. Deal size, seller count, and win rate improvements establish payback thresholds. Section 5 outlines the financial model. Organization scale determines build viability.

**How to run the gate.** Calculate payback metrics with your CFO. Run the financial model in Section 5 using internal operating data. Reaching payback within acceptable adoption ranges clears this gate.

**What the options imply.**

- *Internal build:* Internal options require positive financial returns under Section 5 calculations. Test internal deal variables against model thresholds.
- *Commercial platform (Zime):* Published documentation omits commercial license pricing. Evaluate license costs against build models during proof testing.
- *Status quo:* Retaining current tools lacks mechanisms to drive required adoption gains.

### Gate 7. Traceability

*Can the system link specific seller actions in individual deals to measurable changes in deal state for executive audits?*

**Why this gate is seventh.** Verifiable records distinguish operational performance from unsubstantiated claims. Systems must record prescriptions, executions, buyer responses, and deal stage movements. Missing traceability mechanisms eliminate options. Section 8 details the Zime Outcome Register.

**How to run the gate.** Audit system capabilities for tracking individual seller behaviors, buyer reactions, and deal state updates. Systems tracking complete execution chains pass this gate.

**What the options imply.**

- *Internal build:* Internal architectures must store separate records for buyer responses. Section 5 incorporates these recording capabilities into cost models.
- *Commercial platform (Zime):* Zime measures four adoption levels and maintains separate records for prescription, execution, buyer response, and deal movement [V: cro-strategy-to-execution-gap; programmatic-adoption]. Confirm telemetry capture methods during proof testing.
- *Status quo:* Manual reviews fail to supply verifiable execution records.

### Gate 8. Lifecycle Funding

*Has executive leadership assigned a permanent owner and operational budget for system maintenance in year two and beyond?*

**Why this gate is eighth.** Unowned programs fail during year-two transitions. Clear executive ownership and renewal thresholds prevent platform abandonment when adoption metrics require iteration.

**How to run the gate.** Identify the permanent executive owner for long-term system governance. Define explicit adoption thresholds for ongoing funding. Assigning explicit ownership clears this gate.

**What the options imply.**

- *Internal build:* Engineering must assign permanent maintenance resources. Section 5 estimates annual maintenance at 17,500 labor hours [M]. Temporary project funding models fail this gate.
- *Commercial platform (Zime):* Vendor engineering maintains platform software. Customer teams must assign internal capability owners and define renewal criteria during proof testing.
- *Status quo:* Retaining current tools provides no long-term capability owner.

### Gate 9. Sourcing

*Will the vendor accept contract terms covering adoption metrics, data isolation, proof timelines, red-team access, and performance penalties?*

**Why this gate is last.** Legal contracts must enforce technical and economic requirements. Mandatory terms cover adoption measurement rules, data residency, exit rights, red-team audits, and failure penalties. Reject vendors refusing written commitments.

**How to run the gate.** Submit mandatory contract terms to vendor legal teams. Accepting all terms clears this final gate. Redlining data residency, audit access, or penalty clauses terminates vendor selection.

**What the options imply.**

- *Internal build:* Internal teams write data isolation, audit rights, and performance standards directly into program charters.
- *Commercial platform (Zime):* Zime Proof of Value structures map to required evaluation timelines [V: cro-sales-productivity]. Contract terms for metrics, data residency, audit access, and performance penalties require explicit order form additions.
- *Status quo:* Retaining current tools requires no contract execution.

## Section 5. Build Economics

*Thirty-six components require fifteen calendar months. Annual maintenance consumes half the initial effort.*

This section attaches explicit dollar costs to the build path. The Make-or-Buy Cascade relies on arithmetic rather than intuition. All figures carry [M] for the GISTICS planning model. External sources carry [A]. The model notes missing external data. Enterprise leaders must supply specific deal size, seller count, and wage assumptions. The model uses standard enterprise inputs.

### 5.1 Component Breakdown across Six Domains

| **Domain** | **Components** | **Base labor hours** |
|---|---|---|
| **Strategy extraction and encoding** | 1. CRO interview protocol. <br>2. Top-performer interview protocol. <br>3. Behavior taxonomy and versioning. <br>4. Deal Motion specification in eight parts. <br>5. Strategy context facets. <br>6. Facet-to-motion mapping. | 5,200 |
| **Conversation capture and interpretation** | 7. Call recording integration. <br>8. Transcript normalization. <br>9. Entity extraction. <br>10. Execution event detection. <br>11. Buyer response classification. | 4,100 |
| **Context assembly and graph** | 12. Enterprise context integration. <br>13. Deal and opportunity context assembly. <br>14. Competitive context integration. <br>15. Representative context assembly. | 4,800 |
| **Delivery** | 16. Prep note generation. <br>17. In-call guidance. <br>18. Post-call comment. <br>19. Ask Me Anything over company knowledge. <br>20. CRM integration. <br>21. Slack integration. <br>22. Teams integration. <br>23. Rationale and evidence display. <br>24. Adapt, apply, or override workflow. | 8,400 |
| **Verification and governance** | 25. Adoption measurement at four levels. <br>26. Deal Movement tracing. <br>27. Execution evidence capture. <br>28. Buyer response record. <br>29. Guardrail states and policy check. <br>30. Version control and rollback. <br>31. Owner and release management. | 7,200 |
| **Improvement and maintenance** | 32. Judgment Evals. <br>33. Outcome correlation. <br>34. Centralized guidance refresh. <br>35. Regression test suite. <br>36. Maintenance operations. | 7,000 [M] |
| **Total enterprise scale base case** | 36 components | **36,700 hours** [M] |

*Table 5.1. Thirty-six components across six domains require 36,700 base labor hours at enterprise scale. Section 5.2 prices three configurations.*

The context graph domain consumes 4,800 of the 36,700 hours. The remaining 31,900 hours fund critical non-graph elements: compiled strategy, rep workflow integration, execution verification, and platform maintenance [M].

### 5.2 Build Options and Sizing Models

| **Configuration** | **What it covers** | **Approximate hours** | **Calendar months** | **Average FTE** |
|---|---|---|---|---|
| **Proof of concept** | Strategy extraction, graph build, delivery in one tool only, one adoption level | 6,900 | 4 to 5 | 4.4 |
| **Mid-market scale** | Full 36 components, lower-volume inputs | 18,400 | 10 | 5.8 |
| **Enterprise scale (base case)** | Full 36 components, enterprise-volume inputs | 36,700 | 15 | 15.3 |

*Table 5.2. Three configurations from the GISTICS planning model [M]. Hours and calendar months vary by input volume. Average FTE assumes standard engineering weeks. The proof of concept fails to measure Programmatic Adoption at level 3 or level 4.*

> **Figure 4: Time to the First Falsifiable Read.** The license path reaches a signed decision in week three. The build path reports four quarters of spend before its first falsifiable read.

### 5.3 Maintenance Load for Year Two

The 17,500 annual maintenance hours cover four recurring workload categories [M]:

| **Category** | **Annual hours** | **What drives it** |
|---|---|---|
| **Strategy refresh** | 3,200 | CRO strategy updates, competitive landscape changes, new product introductions, and territory or segment changes |
| **Data pipeline and integration maintenance** | 4,800 | CRM schema changes, call recording platform updates, conversation-intelligence feed changes, and downstream system updates |
| **Model and prompt maintenance** | 4,100 | Model provider updates, prompt regression, guardrail tuning, and Judgment Eval refresh |
| **Verification and governance** | 5,400 | Adoption reporting, Deal Movement tracing refresh, compliance reviews, and regression testing |
| **Total, annual** | **17,500** [M] | Close to half the 36,700-hour base-case build, every year |

This workload creates an explicit economic obstacle. Year-one costs represent a single project investment. Year-two costs demand permanent engineering headcount. Build plans funded purely as temporary projects fail Gate 8 without dedicated ongoing maintenance budgets.

### 5.4 Team Roles and Labor Rates

Table 5.4 maps specific roles across the 36 components. Engineering leaders must apply internal loaded hourly rates.

| **Role** | **Components responsible** | **Approximate hours** | **Hourly rate inputs [M]** |
|---|---|---|---|
| **AI/ML engineer** | 7-14, 29-36 | 12,800 | Apply your loaded rate; $150 to $250 per hour is common at enterprise technology companies |
| **GTM engineer** | 15-24 | 8,200 | Apply your loaded rate; $120 to $200 per hour |
| **RevOps analyst** | 1-6, 25-28 | 5,400 | Apply your loaded rate; $80 to $130 per hour |
| **CRO or strategy lead** | 1, 2, 4, 5 | 1,200 | Apply your loaded rate; executive time is usually not separately budgeted |
| **Product manager** | Cross-domain | 2,800 | Apply your loaded rate |
| **Security and legal** | 29, 30 | 1,400 | Apply your loaded rate |
| **QA and testing** | 32, 33, 34, 35 | 4,900 | Apply your loaded rate |

*Table 5.4. Role assignments across 36,700 total enterprise build hours [M].*

The three core technical roles total $3.3M to $5.5M in direct labor for an enterprise build [M]. The remaining 10,300 hours cover executive, product, security, legal, and QA functions. Financial leaders must add internal rates for these remaining roles before executive presentation.

### 5.5 Engineering Responsibilities for In-House Builds

The primer identifies fourteen operational responsibilities. Commercial platforms absorb or share these tasks. Internal builds must fund, staff, and govern every responsibility. Table 5.5 lists the twelve priced model tasks and highlights the two unpriced items [V: cro-strategy-to-execution-gap; M].

| **Responsibility** | **Priced in model** | **Owner in build path** |
|---|---|---|
| Strategy extraction and versioning | Yes | RevOps + CRO |
| Behavior encoding in computable form | Yes | GTM engineer |
| Conversation capture and interpretation | Yes | AI/ML engineer |
| Context assembly and graph maintenance | Yes | AI/ML engineer |
| Delivery integration, CRM/Slack/Teams | Yes | GTM engineer |
| Adapt, apply, or override workflow | Yes | GTM engineer |
| Adoption measurement at four levels | Yes | RevOps + AI/ML |
| Deal Movement tracing | Yes | RevOps + AI/ML |
| Buyer response capture and classification | Yes | AI/ML engineer |
| Guardrail states and policy enforcement | Yes | AI/ML + Security |
| Version control and rollback | Yes | AI/ML engineer |
| Maintenance operations, ongoing | Yes | All roles |
| Model and provider dependency management | Not yet priced [M] | AI/ML engineer |
| Exit and data portability protocol | Not yet priced [M] | Engineering + Legal |

*Table 5.5. Responsibilities 13 and 14 carry zero hours in the base model. Engineering teams must add estimates for these items before CFO review.*

### 5.6 Payback Thresholds and Return Models

Productivity returns on the buy path require specific inputs: commercial license costs, average deal sizes, win-rate gains, and 90-day cohort adoption rates. The model identifies an adoption floor near 31 percent. Fixed costs exceed financial gains below this floor. The Payback Band begins near 75 percent sustained adoption. Behavior changes above this threshold drive win rates and deal velocity enough to fund the platform [M]. No external sources corroborate these thresholds. Teams falsify these limits by publishing real cohort adoption data during the Proof of Value. Cohort adoption below 31 percent cancels the program. Adoption at or above 75 percent validates financial gains. Finance leaders must evaluate win-rate gains using variable ranges rather than static point estimates.

### 5.7 Proof of Value Ownership Structure

The Enterprise Sales Harness framework specifies four customer-side roles and one vendor role [V: enterprise-harness]:

| **Role** | **Party** |
|---|---|
| AI Platform Owner | Your team |
| GTM Engineer | Your team |
| RevOps | Your team |
| Security Reviewer | Your team |
| Forward-Deployed Engineer | Zime |

*Table 5.7. Role assignments for the Proof of Value phase [V: enterprise-harness].*

## Section 6. Why builds fail

*Two conditions end every build attempt that survives the economics. Name them before you start.*

Gate 3 tests the budget and calendar. Gate 6 tests economics. Both can clear, yet the build still fails. Section 5 priced the labor. This section names the two conditions that terminate a build program after funding arrives.

**Condition one: the CRO fails to compile forward-looking strategy.** Compiling CRO strategy into a machine-readable Behavior Graph requires direct CRO participation. The CRO must complete structured interviews, specify top-performer behaviors, and approve a versioned strategy for system enforcement. No model extracts this structure from CRM logs alone. Graph builds lacking CRO participation retain history but exclude strategy.

Required week-one action: schedule a structured strategy interview with your CRO. Require explicit outputs: eight-part Deal Motions, applicability facets, authority versions, and effective dates. Stop the build program immediately if the CRO refuses or fails to produce these outputs during week one.

**Condition two: managers fail to reinforce behaviors.** In-tool rep guidance alters live call actions only when sales managers reinforce those behaviors during pipeline reviews and role plays. Programmatic Adoption breaks wherever this reinforcement fails. Zime highlights manager reinforcement as a mandatory customer responsibility [V: programmatic-adoption]. This obstacle stems from management design rather than software flaws.

Required month-two action: evaluate level-three adoption (executed behaviors in live deals) by manager cohort. When adoption concentrates within single manager teams, management design drives the variation. Resolve management gaps before expanding platform access.

Both conditions impact internal builds and commercial licenses equally. Section 7 explains how forward-deployed engineers solve condition two while quarterly reviews fail.

## Section 7. The three options developed

*Build, extend what you have, or license. Here is the case a reasonable executive could champion for each.*

Section 4 evaluated the decision gates. Section 5 calculated build costs. Section 6 identified fatal conditions. This section details each option to support executive board presentations.

### 7.1 Option A: Build the capability in house

**Business case.** Your company sells AI infrastructure and ships software agents. Your engineering team possesses the required skills and documented architecture patterns. The 15-month build timeline aligns with your 10-year strategic goals. You require complete control over encoding logic and data residency. You assigned a year-two owner with an operational budget, and your CFO approved the base-case cost model.

Winning conditions. Internal builds win on Gate 4 (sovereignty), Gate 5 (competitive corpus), and Gate 3 (roadmap capacity). Passing these gates justifies internal builds for organizations at the upper scale of Table 5.2.

Failure modes. Uncompiled strategy (condition one) and missing manager reinforcement (condition two) terminate more builds than budget limits. Establish both conditions as mandatory pre-launch gates in program charters. Cancel the 15-month build if either gate fails in week one.

**Eight proof tests.** Evaluate proof-of-concept builds against all eight tests in Section 7.4 before funding the full 36-component architecture. Proofs failing tests 1, 2, 5, or 7 cannot yield successful enterprise deployments.

### 7.2 Option B: Extend the layer you already run

**Business case.** You operate an enterprise context graph or GTM context layer. Your vendor offers agentic extensions. You plan to combine your existing graph, model reasoning layers, and custom prompt workflows to replicate Behavior Graph functions within three to four months.

Winning conditions. Platform extensions succeed when your current layer captures conversation data, distinguishes active strategy from historical records, and tracks level-three adoption (executed behaviors). Verify these capabilities against Table 3.1 before proceeding.

Failure modes. Table 3.1 outlines layer limitations. Platform extensions fail when guidance lands in manager dashboards or email digests instead of live seller workflows. This limitation fails Condition 3 (Section 0). Run the eight proof tests (Section 7.4) before funding extensions.

**Contract terms.** Require current vendors to accept the five mandatory contract terms (Section 9) before funding behavioral AI extensions. Vendor resistance to written adoption metrics, data residency, or exit rights indicates unproven pre-release software.

### 7.3 Option C: License Zime

**Business case.** Your organization operates at mid-market or enterprise scale. Your CRO agrees to structured strategy interviews. Your management team commits to behavioral reinforcement. Your compliance rules permit commercial software licenses. The 36-component build exceeds internal engineering capacity, and the 15-month schedule delays revenue targets. The Proof of Value model allows pipeline testing before full platform commitments.

Winning conditions. Licensing wins on speed to value (three weeks versus 15 months), vendor-managed platform updates, and baseline-driven contribution metrics. Reaching the Payback Band during 90-day proofs clears Gate 6 for target deal sizes and rep counts.

Failure modes. Omitted order form clauses fail Gate 9. Uncompiled strategy (condition one) and missing manager reinforcement (condition two) cause failures identical to internal builds. Unaddressed sovereignty requirements fail Gate 4 and Gate 5.

**Zime Lite entry path.** Evaluate strategy quality using Zime Lite (free Claude skill) before launching full proofs [V: cro-sales-productivity]. It measures Judgment at Scale across sample deals without deployment contracts. Use it to verify strategy alignment prior to funding proofs.

### 7.4 The eight proof tests

Run these tests against all build and buy options before committing capital beyond proof phases.

| **Test** | **Question** | **Fail condition** |
|---|---|---|
| **1. Strategy read** | Does the guidance change materially when a significant facet changes (competitor, segment, deal stage, CRO strategy version)? | Guidance stays identical for materially different situations |
| **2. Strategy lock** | Is the encoded guidance locked to a specific version and authority, so a rep can ask "which strategy version authorized this, and when?" | No version or authority trace |
| **3. Execution verification** | Does the system detect that a specific behavior ran in a specific deal, from conversation or CRM evidence, not from a login or a session? | Adoption counted as sessions or logins |
| **4. Deal tracing** | Does the system link a specific execution event to a specific change in deal state, with four separate records: prescription, execution, buyer response, movement? | The link is a report, not a record |
| **5. Denominator honesty** | Does the adoption rate name a defined, frozen cohort, with an exclusion list published before launch, and a declared window? | Denominator undefined, post-hoc, or excludes underperformers to inflate the rate |
| **6. Rationale display** | Can a rep see the evidence and reason behind a recommendation, and override it with the reason recorded? | Recommendations arrive without rationale |
| **7. Build test: internal build applies** | Can you explain the capture method for execution evidence in the CRM, Slack, or Teams? If licensing, did the vendor explain it in the proof? | Capture method unstated or unmeasured |
| **8. Maintenance test: year two** | Has the year-two owner been named, with a maintenance budget stated separately from the build budget? | No named owner; maintenance funded as part of the build project |

*Table 7.4. Eight proof tests. Run all eight tests before funding internal builds or software licenses. Zime documentation clears tests 1, 3, 5, and 6. Test 7 (execution capture details) remains UNSOURCED; evaluate it during proofs.*

## Section 8. Zime Outcome Register

*Evidence of contribution without revenue promises. Each customer sets baseline targets.*

The Zime Outcome Register supports every economic claim in this guide. The Register makes three commitments and prohibits three practices. Review the commitments before funding the program. Check the prohibitions before presenting to your CFO.

### 8.1 What the Register commits to

| **Commitment** | **As the pages state it** | **Where to find it** |
|---|---|---|
| **Behavior change** | The system prescribes each Deal Motion, detects execution events, and records buyer responses alongside Deal Movement. These four separate records form concrete evidence of contribution. | programmatic-adoption; cro-strategy-to-execution-gap |
| **Outcome correlation** | The system correlates execution evidence with Deal Movement across deals and cohorts. Sample data shows correlation without proving causation [V: cro-sales-productivity]. | cro-sales-productivity |
| **Evidence of contribution** | "Evidence of contribution. No promise of revenue. Each customer sets targets from a baseline." [V: cro-sales-productivity] | cro-sales-productivity |

### 8.2 What the Register does not commit to

| **Prohibition** | **Why it matters** |
|---|---|
| **No revenue guarantee** | The pages explicitly disclaim revenue promises. Treat vendor revenue guarantees as unsupported sales tactics. |
| **No average outcomes** | Each customer defines targets from internal baselines. Industry averages represent marketing data rather than specific performance guarantees. |
| **No causal claim** | Published data shows a correlation between 80 percent adoption and 20 percent deal uplift [V: cro-sales-productivity]. Exclude this figure from board projections as a causal claim. |

### 8.3 The baseline-first protocol

The Proof of Value protocol mandates baseline setup in week one [V: cro-sales-productivity]. Freeze four items before day one:

1. **Eligible cohort:** Define participating reps and record all exclusions.
1. **Qualifying moments:** Specify target deals, stages, and situations for evidence collection.
1. **Adoption denominator:** Document counting rules for eligible reps before launch.
1. **Metrics and windows:** Record baseline figures, CRO targets, and evaluation windows.

Sign and lock these parameters before starting the Proof of Value. Baseline data validates the Register and denominator rules clarify correlation metrics.

### 8.4 A note on the published 80/20 figure

Zime documentation references an 80 percent adoption rate yielding 20 percent deal uplift [V: cro-sales-productivity]. The documentation notes: "A correlation in sample data. It does not show cause." Published pages omit sample size, cohort definitions, and measurement methods. Mark this figure UNSOURCED. Treat the number as a baseline benchmark during negotiations.

### 8.5 The PoV timeline

> **Figure 5: The Proof of Value Decision Clock.** Each turn ends in a decision, not a check-in. If week three ends without a signed Go, Revise, or Stop, the program drifts.

| **Week** | **What happens** | **Owner** |
|---|---|---|
| **Week 1** | Set up baseline parameters. Freeze cohorts, qualifying moments, denominators, and target metrics. | Your capability owner and Zime forward-deployed engineer |
| **Week 2** | Execute Deal Motions in live deals. Collect execution events. | Reps run; RevOps reviews |
| **Week 3** | Compare execution rates against targets. Record buyer responses and deal movement. Execute a Go, Revise, or Stop decision. | CRO and capability owner |
| **Day 90** | Evaluate adoption against the Payback Band. Correlate win rates against baselines. Decide platform scale or termination. | CRO, CFO, and capability owner |

*Table 8.5. Proof of Value timeline [V: cro-sales-productivity]. Each milestone requires a definitive decision. Week three demands a binding Go, Revise, or Stop outcome.*

## Section 9. Monday morning

*Actions to take before the next executive meeting.*

### Three implications for executive action

1. **Set adoption standards before viewing demos.** Require 80 percent rep adoption of governed Deal Motions within 90 days [V: programmatic-adoption]. Track execution across four levels and exclude login counts [V: programmatic-adoption]. Mandate written commitment to these measurement rules.
1. **Test proof of value before committing to platforms.** Run a three-week Proof of Value on live pipeline data [V: deployable-capabilities]. Conclude with a binding Go, Revise, or Stop decision [V: cro-sales-productivity]. Reject deployment plans that delay evaluation past two quarters.
1. **License the platform and store data locally.** Maintain behavior records, Skill Graphs, and Behavior Graphs inside your enterprise infrastructure [V: ai-platforms; deployable-capabilities]. Specify export formats, data ownership rights, and exit protocols directly in order forms using Gate 9 criteria.

### Eight rungs

Execute the eight rungs in order. Rungs 1 through 3 take under two hours and validate or eliminate software options before vendor discussions start.

| **Rung** | **Action** | **Time** | **Output** |
|---|---|---|---|
| **1** | Evaluate the seven decision conditions (Section 0) against pipeline data, adoption metrics, and positioning. Identify failing conditions or confirm compliance. | 20 minutes | Written answers to seven conditions with supporting evidence. |
| **2** | Score current options and existing tools against the eight proof tests (Section 7.4). Assign binary 0 or 1 scores. | 30 minutes | A scored table showing where each option currently fails |
| **3** | Populate the comparison matrix (Section 3.5) with internal build metrics. List questions for all UNSOURCED cells. | 30 minutes | A completed comparison table with your own evidence |
| **4** | Review the build cost model (Section 5) with your CTO and CFO. Input deal size, rep count, and win-rate assumptions to establish required adoption floors. | 60 minutes | A signed-off economic model with your own inputs, at three configurations |
| **5** | Conduct a strategy-extraction interview with your CRO. Require output specs (eight-part Deal Motions, facets, versioning, effective dates). Halt evaluation if the CRO declines. | 30 minutes | Scheduled interview confirmation or documented program refusal. |
| **6** | Run Zime Lite on sample deal data. Compare output recommendations against CRO judgment and score variations. | 60 minutes | A judgment-quality score from a real sample, before any proof contract |
| **7** | Initiate Proof of Value contracting with Gate 9 terms: adoption metrics, data residency, exit rights, three-week timelines, red-team audits, and performance penalties. | 2 to 4 hours | A signed PoV statement of work with the five terms, a named cohort, and a Go, Revise, or Stop gate at week three |
| **8** | Assign the year-two owner and establish renewal thresholds before starting the proof. These parameters govern the day-90 scale decision. | 15 minutes | A written charter entry: year-two owner, maintenance budget source, and adoption threshold that triggers renewal versus termination |

*Table 9.1. Eight execution rungs. Rungs 1 through 3 require two hours and filter non-viable options. Rungs 4 and 5 decide build funding or buy initiation. Rungs 6 through 8 proceed only if earlier rungs pass.*

**Mandatory CRO Interview:** Schedule the CRO interview (rung 5) before engaging Zime or internal build teams. Systems lacking encoded CRO strategy fail Gate 1 regardless of feature counts.

**The Week-Three Decision:** The Proof of Value concludes at week three with a binding Go, Revise, or Stop decision. Document decision criteria and assign explicit executive ownership before launch.

## Appendix A. Authoritative sources

Eight pages from zime.ai inform this guide. The following table names each page, what this guide draws from it, and where in the guide it appears.

| **Page** | **URL** | **What this guide draws from it** |
|---|---|---|
| **Behavior Graph for Sales** | [zime.ai/products/behavior-graph-for-sales](https://zime.ai/products/behavior-graph-for-sales) | 1,200+ cataloged behaviors, 50K+ human-in-the-loop hours, Deal Motion specification, Execution Context layers, win/loss correlation example (+0.58, 51 won / 8 lost), adoption benchmark of 80 percent within 90 days, the distinction between "encoding what happened" and "prescribing what leadership authorizes now," reps apply/adapt/override, CRM/Slack/Teams delivery |
| **Programmatic Adoption** | [zime.ai/products/programmatic-adoption](https://zime.ai/products/programmatic-adoption) | Four adoption levels (eligible reps, active use, behavior executed, outcome contribution), the exclusion list (logins, sessions, selected power users, undefined denominator, undisclosed late start), the frozen-before-launch protocol, adoption cuts by rep/team/account/opportunity/stage/Deal Motion, the manager reinforcement job |
| **Deployable Capabilities** | [zime.ai/products/deployable-capabilities](https://zime.ai/products/deployable-capabilities) | Seven-layer capability package definition, customer-side staffing (capability owner, AI or GTM engineer, executive sponsor), Zime-side staffing (forward-deployed engineer), "5 minutes to go live" (undefined), the week-by-week Proof of Value timeline |
| **CRO Strategy to Execution Gap** | [zime.ai/primers/cro-strategy-to-execution-gap](https://zime.ai/primers/cro-strategy-to-execution-gap) | Ten Strategy Context Facets, Proof Tests 1 through 8, Deal Motion defined in eight parts, the 14 job-to-be-done responsibilities, the distinction between Behavioral AI for Sales Execution and prior category layers, the "separate records" language for prescription/execution/buyer response/movement |
| **AI Platforms** | [zime.ai/solutions/ai-platforms](https://zime.ai/solutions/ai-platforms) | The customer-specific Behavior Graph and Skill Graph held in your environment, your engineers keep their models and frameworks, the AI platform layer positioning |
| **Sales Execution (CRO Initiatives)** | [zime.ai/products/sales-execution](https://zime.ai/products/sales-execution) | CRO Initiatives: 31 workflows across seven departments, governed workflows for revenue execution across the sales organization |
| **Enterprise Sales Harness** | [zime.ai/products/enterprise-harness](https://zime.ai/products/enterprise-harness) | Enterprise Sales Harness: hub-and-spokes architecture, governed runtime + control plane, four guardrail states (Recommend, Act, Escalate, Request Approval), policy and security check before each prompt, shared responsibility table (your team: AI Platform Owner, GTM Engineer, RevOps, Security Reviewer; Zime: Forward-Deployed Engineer), compliance badges (SOC 2 Type II, GDPR, HIPAA), Zime Workbench (behaviors built, tested, tuned before shipping) |
| **CRO Sales Productivity** | [zime.ai/solutions/cro-sales-productivity](https://zime.ai/solutions/cro-sales-productivity) | Build-vs-buy comparison table (four options, seven tests), Behavior at Scale and Judgment at Scale (coined terms), "Evidence of contribution. No promise of revenue. Each customer sets its own targets from its own baseline," "A correlation in sample data. It does not show cause," PoV week-by-week timeline (week 1 set up and baseline, week 2 run and review, week 3 assess and decide, day 90 scale), Zime Lite (free leaderboard skill for Claude), the 80%/20% correlation figure and its qualifier |

*All eight pages read between 2026-10-26 and 2026-10-27. Each claim drawn from a page carries [V: page-name] in the text.*

## Appendix B. Planning model assumptions

The GISTICS Behavioral Graph Cost Model (22 Sep 2026) underlies all [M]-tagged figures in this guide. The following table states the key assumptions. Bring your own values to the model before presenting the economics to a CFO or board.

| **Assumption** | **Base-case value** | **Your input** |
|---|---|---|
| **Configuration** | Enterprise scale: all 36 components, enterprise-volume inputs |  |
| **Total labor hours** | 36,700 [M] |  |
| **Calendar months to build** | 15 [M] |  |
| **Average FTE during build** | 15.3 [M] |  |
| **Annual maintenance hours** | Close to 17,500, approximately 47.7% of the original build [M] |  |
| **Payback Band lower bound (adoption)** | Approximately 75% of eligible reps running governed Deal Motions [M] |  |
| **Adoption floor (below which program costs outrun gains)** | Approximately 31% [M] |  |
| **Loaded hourly rate, AI/ML engineer** | Your rate; $150 to $250/hour is common at enterprise technology companies [M, UNSOURCED externally] |  |
| **Loaded hourly rate, GTM engineer** | Your rate; $120 to $200/hour [M, UNSOURCED externally] |  |
| **Revenue impact assumption** | Your deal size, win rate improvement, and confidence interval; the model supplies no revenue figure [M] |  |
| **Year-two maintenance responsibilities priced** | 12 of 14 [M]; responsibilities 13 and 14 (model dependency management and exit protocol) not yet priced |  |

*The Payback Band break points at 31% and 75% carry no external corroboration. The falsifier: publish your cohort and adoption rate at week three (Section 8.5). If adoption exits below 31%, the program ends. If it reaches 75% or above, apply your own win rate assumption, stated as a range, to derive a CFO-acceptable figure.*

## Appendix C. Reconciliation ledger

The following table records places where source figures and terms disagree, and the resolution this guide applies.

| **Item** | **Source A** | **Source B** | **Resolution** |
|---|---|---|---|
| **Behavior count** | behavior-graph-for-sales page: "1,200+ cataloged behaviors" [V: behavior-graph-for-sales] | cro-strategy-to-execution-gap primer: "approximately 500 Deal Motions" (provisional) [V: cro-strategy-to-execution-gap] | The two figures name different counting units. 1,200+ behaviors is a raw library count. Approximately 500 Deal Motions is the fully-specified eight-part Deal Motion count, provisional. This guide uses both figures as stated, with their counting unit, and flags the gap as requiring a versioned registry from Zime. |
| **Time to go live** | deployable-capabilities page: "5 minutes to go live" [V: deployable-capabilities] | No other page corroborates or defines the figure | The figure is undefined; no page names what "go live" means (a proof environment, a pilot rep, a full cohort). This guide cites the figure with "undefined" and does not use it as an adoption-velocity claim. |
| **Adoption benchmark and causation** | programmatic-adoption page: "80 percent within 90 days" as a benchmark [V: programmatic-adoption] | cro-sales-productivity page: "80% of reps running behaviors in 90 days, resulting in 20% uplift in deals won" qualified as "a correlation in sample data" [V: cro-sales-productivity] | The second figure appears only on one page and carries its own qualifier. This guide uses both as benchmarks, not predictions, and requires the correlation caveat to accompany any board-level use of the 20% figure. |

## Appendix D. Key terms

One definition per term. Coined terms appear in the guide using exactly the phrasing the pages carry; any variation appears here with a note. Where the guide introduces a term not on the pages (a GISTICS planning model term), it carries [M].

| **Term** | **Definition** | **Source** |
|---|---|---|
| **Behavioral AI for Sales Execution** | A category that uses strategy, customer context, and observed behavior to prescribe, activate, verify, and improve Deal Motions | [V: cro-strategy-to-execution-gap] |
| **Behavior Graph** | A knowledge structure that maps a 90-day CRO strategy to the behaviors that execute it, across six domains: Products, Customers, Competition, Deal Motion Library, Sales reps and executing roles, and forward-looking CRO strategy | [V: behavior-graph-for-sales; cro-strategy-to-execution-gap] |
| **Behavior at Scale** | The percentage of the full eligible rep population running governed Deal Motions, as distinct from a selected cohort of power users | [V: cro-sales-productivity] |
| **CRO Initiatives** | Named, governed workflows packaged for revenue execution across the sales organization; 31 workflows across seven departments as stated on the page | [V: sales-execution] |
| **Deal Motion** | A bounded behavior a seller or other executing role can run in a defined sales situation, specified in eight parts: situation, trigger, actor, behavior, buyer objective, evidence, exception, and expected movement | [V: cro-strategy-to-execution-gap] |
| **Deal Movement** | A defined change in commercial state, such as a gate cleared, a stakeholder added, or a blocker removed. Execution evidence does not count as Deal Movement | [V: cro-strategy-to-execution-gap] |
| **Enterprise Sales Harness** | The hub-and-spokes governance architecture that manages every rep, team, and agent harness from one control plane, with four guardrail states and a policy and security check before each prompt | [V: enterprise-harness; ai-platforms] |
| **Evidence of contribution** | The four-link chain from prescription to execution to buyer response to Deal Movement, kept as separate inspectable records. "Evidence of contribution. No promise of revenue." | [V: cro-sales-productivity; programmatic-adoption] |
| **Execution Context** | Three selection layers (Seller, Buyer, Market) that identify the strategy, culture, and tribal knowledge applying to a specific deal | [V: behavior-graph-for-sales] |
| **Guardrail states (four)** | Recommend, Act, Escalate, Request Approval: the four states that govern every output from the Enterprise Sales Harness | [V: enterprise-harness] |
| **Judgment at Scale** | One forward-looking CRO strategy compiled into situation-specific rules that govern every rep, deal, and stage at once | [V: cro-sales-productivity] |
| **Payback Band** | The adoption range (approximately 75% to 100% of eligible reps) at which behavior change moves win rate and velocity enough to carry the program economics. A GISTICS planning model term; no external source corroborates the break points | [M] |
| **Programmatic Adoption** | The percentage of eligible reps who execute governed Deal Motions at qualifying moments, verified by execution evidence within a declared window; measured at four levels with logins excluded | [V: programmatic-adoption] |
| **Proof of Value (PoV)** | A bounded deployment that starts with a baseline before day one and ends with a Go, Revise, or Stop decision in about three weeks, followed by a 90-day scale decision point | [V: deployable-capabilities; cro-sales-productivity] |
| **Situational Playbook** | The delivery vehicle: prep notes before the meeting, nudges during, comments after, and Ask Me Anything over approved company knowledge and deal context | [V: behavior-graph-for-sales; programmatic-adoption] |
| **Strategy Context Facets** | Ten applicability dimensions that select the Deal Motions applying to a specific deal: geography, customer or account, buyer persona, product or offer, commercial route, opportunity lifecycle, deal stage, competitive situation, executing role, and strategy version or time | [V: cro-strategy-to-execution-gap] |
| **Zime Lite** | A free leaderboard skill for Claude that surfaces Judgment at Scale on a sample of deals, without a full deployment contract; entry point for platform companies evaluating Behavior at Scale | [V: cro-sales-productivity] |
| **Zime Outcome Register** | The instrument that carries every economic claim in this guide: prescription, execution, buyer response, and movement as separate records; evidence of contribution; no promise of revenue | [V: programmatic-adoption; cro-sales-productivity; cro-strategy-to-execution-gap] |
| **Zime Workbench** | The environment where behaviors get built, tested, and tuned before shipping | [V: enterprise-harness] |

## About this guide

- **Published by:** Zime. GISTICS wrote this guide for Zime.
- **Version:** 1.0, published 5 November 2026. The zime.ai pages cited with [V] were read on 26 and 27 October 2026.
- **How to read the tags:** [V: page] means Zime publishes the claim on the named zime.ai page; [A] means an analyst or academic source; [M] means the GISTICS planning model; UNSOURCED means no published source supports the claim.
- **What this guide is not:** a revenue guarantee, a price quote, or legal, financial, or investment advice. Zime makes no promise of revenue; each customer sets targets from its own baseline.
- **Testable Credentials:** every material claim in this guide, with its scope, evidence path, and the conditions that would confirm or disconfirm it, is listed in the [Testable Credentials for this guide](/credentials/zime-buyers-guide-technical-cro-make-or-buy/).
- **Question or correction:** ask a question or challenge a claim at [/inquiry/](/inquiry/); report an error at [/corrections/](/corrections/).
- **Request a Proof of Value conversation:** [zime.ai](https://zime.ai).

### Related Zime guides and disclosures

- [Zime Buyer's Guide for CROs](/reference/zime-buyers-guide-cro-sales-productivity/)
- [Zime Buyer's Guide for AI Engineers](/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/)
- [The CRO Strategy to Execution Gap (zime.ai primer)](https://zime.ai/primers/cro-strategy-to-execution-gap)
- [Disclosure: Zime launches Behavior Graph for Sales](/disclosures/zime-launches-behavior-graph-for-sales/)
- [Disclosure: Zime launches Enterprise Sales Harness](/disclosures/zime-launches-enterprise-sales-harness/)
