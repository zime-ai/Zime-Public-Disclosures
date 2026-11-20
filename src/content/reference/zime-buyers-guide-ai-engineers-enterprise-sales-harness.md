---
id: "ZIME-GUIDE-2026-003"
title: "Zime Buyer's Guide for AI Engineers: Before Building a Context Graph for Sales (Enterprise Sales Harness)"
summary: "A buyer's guide for AI and GTM engineers who build sales agents and scope or evaluate context graphs: what an in-house behavior layer costs beyond retrieval, the eleven build waypoints, thirteen trade-offs, eleven acceptance tests, the shared control table, a 90-day clock and a ten-criterion vendor scorecard for the Zime Enterprise Sales Harness and Zime Workbench."
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
canonical_path: "/reference/zime-buyers-guide-ai-engineers-enterprise-sales-harness/"
related_artifacts:
  - "/reference/zime-buyers-guide-cro-sales-productivity/"
  - "/reference/zime-buyers-guide-technical-cro-make-or-buy/"
  - "/credentials/zime-buyers-guide-ai-engineers-enterprise-sales-harness/"
  - "/disclosures/zime-launches-behavior-graph-for-sales/"
  - "/disclosures/zime-launches-enterprise-sales-harness/"
  - "https://zime.ai/primers/devops-for-revops"
related_entities:
  - "ENT-ZIME-001"
structured_data_type: "TechArticle"
ai_assistance:
  used: true
  roles: [structure, formatting, validation_assistance]
  human_review: required
---

**Zime Buyer's Guide · Enterprise Sales Harness**

*Understand in-house costs beyond retrieval. Test vendor alternatives.*

## Key facts at a glance

This summary restates the guide's main points with their source tags, so a reader or an AI assistant can find them quickly. The full guide follows.

- **Who it is for:** AI GTM engineers who build and maintain sales agents and who scope or evaluate context graphs. Sales leaders and revenue owners are out of scope; they should read the [CRO guide](/reference/zime-buyers-guide-cro-sales-productivity/) or the [technical CRO guide](/reference/zime-buyers-guide-technical-cro-make-or-buy/).
- **The problem:** an agent can authenticate, retrieve the account and return a fluent recommendation while eight decisions go missing; Zime's primer calls this "technically live, behaviorally wrong" [V: DevOps for RevOps].
- **What Zime offers:** a judgment-and-behavior layer above your existing agent stack. Zime Workbench covers encode, package and evaluate; the Enterprise Sales Harness governs promote, propagate, refresh, roll back and retire [V: Workbench; Enterprise Harness; AI Engineers].
- **What you keep:** your models, frameworks, agents, connectors and data; identity, environments, model selection and release approval stay with you [V: AI Engineers].
- **Build cost (GISTICS planning model):** pilot about 6,900 hours over 5 months; department about 15,900 hours over 9 months; enterprise about 36,700 hours over 15 months. Recurring labor is about 33 percent of the build each year at pilot scale and about 48 percent at enterprise scale. A pilot costs about $843,000 up front and about $1.63 million over three years [M].
- **The build ceiling:** most internal builds stall at waypoint 5 or 6 of eleven; the ceiling sits between waypoints 7 and 11 (exception evals, regression, outcome-joined telemetry, package-bound authority, an owned refresh loop).
- **Proof:** Gate 1 at 21 days (one package in production-adjacent conditions) and Gate 2 at 90 days (adoption, behavior and movement against pre-set thresholds), with eleven acceptance tests from Zime's primer [V: DevOps for RevOps].
- **Governance:** four guardrail states (Recommend, Act, Escalate, Request approval) set centrally; authority attaches to the package, not the agent; a policy and security check runs before each prompt; Private Deployment runs on hardware you control [V: Enterprise Harness; DevOps for RevOps].
- **Zime-reported figures:** 1,200+ GTM behaviors trained with 50K+ human-in-the-loop hours; about 5 minutes to go live; 80 percent of reps running behaviors in 90 days with a 20 percent uplift in deals won. No page states the sample, baseline, period or attribution method [V: five product pages].
- **Not published (UNSOURCED):** pricing, release hold and pin mechanics, the telemetry and data-flow boundary, and exit terms on cancellation.

**Who this guide serves.** You built the agents. They run. A renewal agent drafts the right email, a call-prep skill assembles the right brief, a deal-review copilot answers the manager's question. What you cannot yet show: that the agent picked the move the CRO would have picked, that the rep acted on it, and that the deal moved because of it. This guide serves the engineer who owns that gap.

**Target User of the Guide:** AI GTM engineers build and maintain sales agents. They scope or evaluate context graphs.

**Out of Scope:** Sales leaders and revenue owners manage sales strategy rather than technical stacks.

| **Reader** | **What you own** | **What this guide gives you** |
|---|---|---|
| **AI or GTM engineer** | The agents, skills, prompts, retrieval, and connectors that touch revenue work. | A way to compare vendors on the criteria an engineer can test, a build-cost anatomy you can audit against your own estimates, and the acceptance tests that separate a governed behavior layer from a prompt library. |
| **DevOps or AI platform owner** | The runtime, environments, model selection, release approval, identity, and cost. | The control boundary in writing, the release and rollback mechanics to demand, and the metering you will need when the CFO asks what each agent cost. |
| **Security reviewer** | Data access, policy enforcement, audit, and deactivation rights. | The questions that expose a vendor whose security story rests on assurances rather than traces. |

The guide serves two moments. In the **mid-funnel evaluation**, you hold a shortlist and need criteria that a demo cannot fake: Sections 1 through 3 and the scorecard in Section 9. In the **late-stage build-versus-buy decision**, you hold a budget request and need the work breakdown, the maintenance burden, and the tests that would prove either path: Sections 4 through 8. The FAQ and glossary serve both.

The RevOps counterpart and the CRO read other Zime guides. This one stays on the engineering side of the line, with one exception: adoption, because the pages make adoption an engineering deliverable with an event model, and because the CRO's question at day 90 lands on your desk.

Context graphs prevent sales agents from guessing account history. Engineering teams deploy graph stores, connectors, and retrieval systems within a quarter.

Effective retrieval alone fails. Agents access account history, but lack critical governance context:

- **Executive Strategy:** Quarterly revenue priorities govern active deals.
- **Autonomous Authority:** Decision-making power bounds the agent.
- **Rule Governance:** Stakeholders approve active rules and track running versions.
- **Rep Action & Outcomes:** Sales representatives follow recommendations and advance deals.

Answering these questions requires ongoing operational infrastructure beyond retrieval. Teams need versioned strategy models, exception testing, performance telemetry, and long-term ownership.

> **Figure 0: The graph and what follows.** The context graph is the part a team builds first; strategy, authority, governance, and outcome tracking follow it and need ongoing operational infrastructure.

This guide outlines operational costs. It provides evaluation benchmarks for assessing external vendors, including Zime.

*Zime wrote this guide. Every claim carries a tag: [V] for claims Zime publishes on named product pages, [M] for figures from the GISTICS planning model, and UNSOURCED for unsupported claims. GISTICS operates as an independent research firm and provides assumptions on request. The guide highlights conditions where building in-house succeeds.*

## Why read this guide?

*What does the in-house build cost once it has to stay right?*

The graph you were asked to build is the cheap part. Six costs follow it, listed in the order they reach the person who owns the build.

**1. You inherit a maintenance tail that grows with scale.** In the planning model, recurring labor runs about a third of the original build hours every year at pilot scale and close to half at enterprise scale, before any feature request [M]. The CRO's priorities move each quarter. The competitor set moves. The product moves. A layer nobody refreshes peaks the day it ships, and six months later the agents run last year's plays on this year's model. *Section 4.*

**2. The scope grows faster than the graph.** Per-team and per-rep variants arrive early: forty reps, forty harnesses, and no owner of the differences between them. A full deal-motion library, the thing sales leadership will ask for next, adds about 10,336 build hours and 1,498 upkeep hours per quarter in the model's stress test [M]. Decide whether that library sits in scope before the estimate goes to anyone. *Section 4.*

**3. Most of the hours fall outside engineering.** Of about 6,900 build hours at pilot scale, engineering roles (data and integration, AI and ML, workflow, SRE) account for about 2,700 [M]. A CRO subject-matter expert and a data steward take about 1,400 more. A knowledge architect and an evaluation analyst, two roles most agent teams never staff, take about 1,700. Your schedule depends on a sales leader's calendar and on evaluation work your team will want to defer.

**4. Internal builds stall at the same point, and the stall sits where the risk lives.** Most builds reach per-rep variants and a named owner, then hold. The work that rarely gets built: evals that cover exceptions, regression testing on model and context changes, telemetry that joins executed behavior to CRM outcomes, and authority enforced per motion rather than per agent. Those four carry the controls that security, finance, and the CRO each ask for. The guide maps all eleven waypoints so you can locate your own build. *Section 4.*

**5. The build outlives your ownership of it.** The owner of record has a product to ship, so the change process turns into a backlog. The refresh loop, the last waypoint, goes unbuilt because the team that built the first six has moved on. Plan the handoff before you plan the schema. *Section 4.*

**6. Evidence takes quarters, and the questions land on you first.** The planning model puts a pilot-scale build at five calendar months, a department build at nine, and an enterprise build at fifteen [M]. Meanwhile security asks how an agent gets stopped from committing the company to terms, finance asks what each agent cost, and the CRO asks at day 90 whether deals moved. A build that cannot answer from a trace answers from a slide. Compare that clock with the 21-day first gate the guide tells you to demand of any vendor on your own pipeline [V: DevOps for RevOps]. *Sections 1, 6, 7.*

**For the conversation with finance.** The planning model prices a pilot-scale build at about $843,000 up front and about $1.63 million over three years at base case, inside a range of $1.09 million to $2.92 million [M]. These run as planning ranges anchored to BLS wages, not vendor quotes. Replace the rates and hours with your own before anyone funds anything.

**When building wins.** Build when this layer forms a durable differentiator for your company, when the business will fund continuous strategy and evaluation work, when you hold strong behavioral ground truth, and when connector, policy, and adoption maintenance fit your roadmap [V: DevOps for RevOps]. Section 4 lists the full conditions. Section 9's scorecard works on your own build as well as on any vendor's.

## How to use this guide

*Where are you in the decision?*

Ten sections and a glossary. Read in order or start at your row.

| **Where you are** | **Start with** | **You leave with** |
|---|---|---|
| **Asked to scope or build in-house** | Section 4, then Section 2 | Build hours by role, calendar months, recurring share, the eleven waypoints, and the conditions under which building wins |
| **Running agents that have started to drift** | Section 1, then the waypoints in Section 4 | The eight decisions your agent leaves unmade, and where your build sits on the waypoints |
| **Comparing vendors** | Section 3, then Section 9 | Thirteen trade-offs in the order they bind, and a ten-criterion weighted scorecard |
| **Making the build-or-buy case upward** | Section 4, acceptance test 9 in Section 6, then Section 9 applied to your own build | A responsibility matrix, a work breakdown any vendor must match line by line, and a score for your build |
| **Preparing a proof or a security review** | Sections 6, 7, and 8 | Gate 1 and Gate 2 exit criteria, eleven acceptance tests, the shared control table, and a day-by-day 90-day clock |
| **Wanting to test the claims rather than read them** | Section 6, then a Proof of Value conversation with Zime | One motion on your pipeline, a baseline set before day one, and exit criteria you accept or reject at day 21 |

Bringing in your platform owner or security reviewer? Section 7 speaks to them directly. Section 10 answers the nine questions engineers ask most, each in one sentence first.

**Three terms you will meet early.** **Enterprise Sales Harness:** the governed runtime and control plane that runs every rep, team, and agent harness from one hub [V: Enterprise Harness]. **Zime Workbench:** the environment where engineers encode, test, and ship that judgment before release [V: Workbench]. **Capability package:** the versioned unit you ship, evaluate, promote, and roll back [V: AI Engineers]. The glossary holds the rest.

When you would rather test the claims than read about them, ask Zime for a Proof of Value conversation. Expect one revenue priority, your live pipeline, a baseline set before deployment, and a go, revise, or stop decision at about three weeks, with no revenue guarantee [V: Deployable Capabilities].

Section 1 starts with the failure you have probably already seen: an agent that runs correctly and still picks the wrong move.

## 1. The problem you are solving

*Why does an agent that runs correctly still pick the wrong move?*

Three checks pass. The agent authenticates, retrieves the account, and returns a fluent recommendation. Zime's primer frames the state as three checks passing while eight decisions go missing [V: DevOps for RevOps]. Here are eight an engineer will recognize: which CRO priority governs this deal this quarter, which behavior comes next for this role at this stage, how much authority the agent holds, what evidence must exist before it acts, who approved the rule it followed, which version of that rule ran, whether the rep did what it recommended, and whether the deal moved afterward. The primer calls this state "technically live, behaviorally wrong" [V: DevOps for RevOps]. Retrieval and models reconstruct what happened. They do not decide which priority applies, which behavior follows, or how much authority the agent should carry.

The engineering symptoms, as the Enterprise Sales Harness page lists them [V: Enterprise Harness]:

- Reps and teams build one-off harnesses with no clear owner.
- Skills get copied, edited, and overwritten, and drift from the strategy.
- Inference cost (models, tokens, MCP calls) shows up only on the bill.
- Compliance claims lack evidence: prompts run without policy checks, agents run without guardrails.

You have seen all four. The first two describe every skill library older than a quarter. The third describes every agent whose cost you reconstruct from invoices. The fourth describes every security review where the answer to "how do you prevent an agent from committing us to terms" came from a slide.

The instinct to fix this with a better harness runs correct and stops short. A harness written once and copied to every rep peaks on the day it ships. The strategy changes, the competitor changes, the product changes, and the harness does not, because nobody measures it and nobody owns keeping it current. Six months later the reps run last year's plays with this year's model.

**What you buy, when you buy a behavior layer, differs from the content.** You can write the content. You buy the lifecycle that keeps the content true, the evaluation that blocks a bad release, the authority model that bounds the agent, the trace that answers the auditor, and the telemetry that answers the CRO. Judgment should get the same lifecycle as code: a package, tests, a release process, and scheduled maintenance [V: Workbench]. Zime names the discipline DevOps for RevOps [V: DevOps for RevOps]. The name tells you the shape of the thing under evaluation, and the shape tells you what to test.

## 2. What you are evaluating

*Where does the judgment layer sit in a stack you already run, and what does it consist of?*

Zime positions itself as a judgment-and-behavior layer above your existing agent stack. If you have built, or been asked to build, a context graph, this layer sits on top of it: the graph supplies what happened, and the layer decides which priority applies, which behavior comes next, and how much authority the agent holds. You keep your models, frameworks, agents, connectors, and data, and add one layer above them [V: AI Engineers]. Identity, environments, model selection, and release approval stay with you [V: AI Engineers]. The layer connects to internal and customer-built agents and to enterprise systems through MCP, with permissions preserved, and delivers into the CRM, Slack, or Microsoft Teams rather than a new interface [V: Enterprise Harness]. It also delivers into CI/CD pipelines [V: Workbench]. Zime describes the layer as model-neutral and framework-neutral [V: DevOps for RevOps]. Private Deployment runs it on hardware you control [V: Enterprise Harness].

> **Figure 3: Where the layer sits.** The judgment-and-behavior layer sits above the models, frameworks, agents, connectors, and data you keep, and delivers into the CRM, Slack, Microsoft Teams, and CI/CD pipelines [V: AI Engineers; Enterprise Harness; Workbench].

### Two products, one lifecycle

Zime splits the layer into a pre-release environment and a post-promotion runtime. Workbench covers encode, package, and evaluate. The Enterprise Sales Harness governs what happens after promotion: propagating releases to every harness and observing use and cost [V: Workbench]. The lifecycle runs encode, package, evaluate, promote, propagate, refresh, with roll back or retire when a release fails or a motion ends [V: AI Engineers]. A gate sits between evaluate and promote; a change that fails its Judgment Evals does not reach the field [V: AI Engineers].

| **Product** | **Lifecycle stages** | **What it gives the engineer [V]** |
|---|---|---|
| **Zime Workbench** | Encode, package, evaluate | APIs, SDKs, MCP connectors, and lifecycle tooling. Judgment packaged as Behavior Graph and Skill Graph packages and reusable skills. Judgment Evals and behavior tests run in your environment, covering complex deals and exceptions. Regression testing across skill, model, and context changes. Rot detection for stale or degraded knowledge. Cost and quality compared before promotion. [V: Workbench] |
| **Enterprise Sales Harness** | Promote, propagate, refresh, roll back, retire | Central release, refresh, and retirement for every rep, team, and agent harness. Skills tested, approved, versioned, and rolled back from the hub. MCP connections with permissions intact. Four guardrail states set centrally. Model selection, routing, and substitution by task, sensitivity, quality, and cost. Cost attributed by team, workflow, initiative, agent, or user. Policy and security check on each prompt before it runs, with defenses against prompt injection. Every recommendation traced to source, approver, and version. [V: Enterprise Harness] |
| **Deployable Capabilities** | Packaging and delivery path | Governed capability packages, four delivery paths (DIY, DIWY, Co-Implementation, DIFY), and a Proof of Value of about three weeks ending in go, revise, or stop. [V: Deployable Capabilities] |

Three products run on the harness: Behavior Graph for Sales, CRO Initiatives, and Programmatic Adoption [V: Enterprise Harness]. The Behavior Graph links strategy, selling situations, buyer roles, products, competitors, evidence, behaviors, and results [V: DevOps for RevOps]. Each capability combines a reusable Zime foundation with your strategy, culture, tribal knowledge, and operating context [V: Deployable Capabilities]. Humans review and approve all encoded judgment [V: Deployable Capabilities].

> **Figure 4: Lifecycle and gate.** Encode, package, evaluate, promote, propagate, refresh, with roll back or retire; a gate sits between evaluate and promote [V: AI Engineers].

### Deployable unit

An engineer ships capability packages. At runtime, a package resolves a Deal Motion for one deal, role, and moment [V: AI Engineers]. The Deployable Capabilities page lists seven parts in a package [V: Deployable Capabilities]:

1. Behavior or skill definition
1. Link to the supported strategy
1. Prompts, source documents, and structured context
1. Workflow and integration configuration
1. Conditions and exceptions, with evidence
1. Evaluation and regression routines
1. Metadata for ownership, release, version, and freshness

Zime's primer specifies a larger object, the Governed Deal Motion Package, with eleven parts: identity, trigger, strategy, behavior, context contract, evidence contract, authority, evaluations, telemetry, exceptions, and rollback [V: DevOps for RevOps]. Read the seven as what the product page says ships and the eleven as the specification to test a shipped package against.

 Four parts of the eleven have no named home in the seven: **trigger**, **authority**, **telemetry**, and **rollback**. Ask Zime to open a package and point to each. A package that carries its authority and rollback inside itself behaves differently under incident than one whose authority lives in a separate policy table and whose rollback lives in a runbook. Acceptance tests 6, 7, and 8 in Section 6 exercise exactly this.

### Authority, bounded per package

Central policy assigns every agent one of four guardrail states: Recommend (a person decides), Act (policy allows it), Escalate (hand to a manager), and Request approval (pause until approved). No harness sets its own [V: Enterprise Harness]. The primer adds an authority ladder with three levels and evidence gates between them: Copilot (the system recommends, explains, cites evidence, and drafts; a person decides and acts), Semi-autonomous (bounded steps after approval or within narrow policy rules), and Autonomous (executes the approved motion within explicit limits and escalates exceptions). Authority attaches to the package, not to the agent [V: DevOps for RevOps]. In live deals, Zime guides and the person acts [V: Enterprise Harness].

For an engineer who has wired an agent framework's tool permissions by hand, the distinction matters. Authority on the agent means every new skill inherits the agent's reach. Authority on the package means a renewal motion can run at Recommend while a scheduling motion runs at Act, on the same agent, with the state set centrally and changed without a redeploy. Test it: acceptance test 6 promotes one package, simulates a threshold breach, and expects authority to fall automatically or through a named control path.

### What a trace looks like

The AI Engineers page shows a decision trace, an illustrative example rather than a customer record [V: AI Engineers]. A RevOps user asks why the renewal agent recommended a two-year term on an account. The trace answers in four parts: the package ("Renewal: multi-year at risk. Version 4, promoted 12 days ago"), the authorizing priority (a Q3 priority to protect renewals with multi-year terms, approved by the CRO by name), the evidence (usage up two quarters, budget confirmed on the last call), and the result (recommend only; the rep adapted the draft and sent it; the buyer asked for a two-year order form).

> **Figure 6: Decision trace.** An illustrative trace answers in four parts: the package and version, the authorizing priority and its approver, the evidence, and the result [V: AI Engineers, illustrative].

That trace carries the whole evaluation. Package version. Authorizing strategy with an approver. Evidence cited. Guardrail state. Human action. Buyer response. If a vendor's trace stops at "the model said," you have a log, not a decision trace. Acceptance test 8 demands that a runtime action resolve back to its package version, strategy, inputs, evidence, permission, result, and downstream signal.

## 3. The trade-off cascade

*Which decisions bind first, and what does each one rule out?*

Thirteen trade-offs, in the order they bind. Resolve them out of order and you will compare vendor features before you have decided what kind of thing you are buying. For each trade-off the guide gives the question, what to look for and ask, and Zime's position with its tag, including where Zime does not fit.

### Frame: what kind of thing is this?

| **Trade-off** | **Question** | **What to look for / Ask** | **Zime's position** |
|---|---|---|---|
| **1. Content or lifecycle** | *Are you buying skills and prompts, or the lifecycle that keeps them true?* | **Look for:** a package format, an evaluation gate before promotion, versioning, rollback, scheduled refresh. <br>**Ask:** show me a release you blocked and why. | Judgment gets the same lifecycle as code: a package, tests, a release process, scheduled maintenance [V: Workbench]. Sample eval output: 46 of 48 passed, 2 failed on a pricing exception, 1 regression on competitor entry, promotion blocked [V: Workbench]. If you only want skills, a template library or a consultancy costs less; Zime's own Deployable Capabilities page names template libraries that hand over unreviewed files as one of four causes of failed pilots [V]. |
| **2. Static copies or hub propagation** | *Does an improvement reach every harness from one place, or does someone copy files?* | **Look for:** central release, refresh, and retirement; version management; a repository with provenance and approvals. <br>**Ask:** when you fix a skill, what happens in forty reps' harnesses, and who approves it reaching mine? | Hub-and-spoke deployment to every seller harness, approved updates propagating, skills tested, approved, versioned, and rolled back from the hub [V: Workbench; Enterprise Harness]. Release approval stays with the enterprise [V: AI Engineers]. |
| **3. Logged or verified** | *Will you measure behaviors executed in live deals, or infer adoption from logins and token counts?* | **Look for:** adoption at the level of behavior executed, traceable to deal movement, broken down by rep, team, account, opportunity, stage, and Deal Motion. <br>**Ask**: show me a rep who logged in daily and executed nothing. | Four levels: eligible reps, active use, behavior executed, outcome contribution. Logins do not count [V: Programmatic Adoption]. |
| **4. Replace or layer** | *Do you adopt a new agent platform, or add a layer above the one you built?* | **Look for:** MCP connection to your agents, your model and framework choice preserved, delivery into surfaces reps already use. <br>**Ask:** which of my components do I throw away? | Keep models, frameworks, agents, connectors, data; add one layer above them [V: AI Engineers]. It connects customer-built agents and harnesses through MCP under one control plane and does not replace existing harnesses [V: Enterprise Harness]. Delivery in CRM, Slack, Teams; no new tools [V: Enterprise Harness]. |

### Fit: does it match your organization and your stack?

| **Trade-off** | **Question** | **What to look for / Ask** | **Zime's position** |
|---|---|---|---|
| **5. Generic or encoded** | *Does the layer carry your CRO's priorities, your exceptions, and your tribal knowledge, or a generic playbook?* | **Look for:** a strategy object with an approver and a version, bound to each package; a process for encoding yours; human review of encoded judgment. <br>**Ask:** how does Q1's priority get in, and how does it get out when Q2 changes it? | Each capability combines a reusable Zime foundation with your strategy, culture, tribal knowledge, and operating context; humans review and approve all encoded judgment [V: Deployable Capabilities]. Packages link to the supported strategy [V: Deployable Capabilities]. The primer separates data change, behavior change, and strategy change, and says runtime feedback should not silently rewrite governing strategy [V: DevOps for RevOps]. |
| **6. Evaluated where** | *Do evals run in the vendor's environment on the vendor's scenarios, or in yours on your deals?* | **Look for:** evals in your environment, golden and failure scenarios you co-author, regression on skill, model, and context change, rot detection. <br>**Ask:** what breaks when I swap the model? | Judgment Evals run in the customer's environment and cover complex-deal conditions and exception cases; regression spans skill, model, and context changes; rot detection flags stale or degraded knowledge [V: Workbench]. Test scenarios and Judgment Evals appear on the shared control table [V: AI Engineers]. |
| **7. Authority per agent or per package** | *Where does permission live, and how fast can you reduce it?* | **Look for:** guardrail states set centrally, authority bound to the package, evidence gates between levels, an automatic or named path to reduce authority. <br>**Ask:** simulate a breach; show me authority falling. | Four guardrail states, set centrally; no harness sets its own [V: Enterprise Harness]. Authority attaches to the package, not the agent; three-level ladder with evidence gates [V: DevOps for RevOps]. |

### Delivery: how does it run in production?

| **Trade-off** | **Question** | **What to look for / Ask** | **Zime's position** |
|---|---|---|---|
| **8. Model-bound or portable** | *Does the package survive a model change with its contract, evals, authority, and telemetry intact?* | **Look for:** routing by task, sensitivity, quality, and cost; substitution without repackaging; cost against quality compared before a model change promotes. <br>**Ask:** run the same package on two models and show me the eval delta. | Operates across models and does not depend on one; selects, routes, and substitutes by task, sensitivity, quality, and cost [V: Enterprise Harness]. Cost and quality compared before any model change reaches promotion [V: Workbench]. No specific models named on the pages. |
| **9. Metered or on the bill** | *Will you see inference cost as it accrues, attributed to the agent and workflow that spent it?* | **Look for:** cost across inference endpoints, LLMs, and MCP calls, attributed by team, workflow, initiative, agent, or user, in real time. <br>**Ask:** what did this one recommendation cost? | Cost shown across inference endpoints, LLMs, and MCPs; consumption attributed by team, workflow, initiative, agent, or user; a real-time view of what each agent does [V: Enterprise Harness]. Workbench tracks cost by user, team, agent, environment, initiative, and customer deployment [V: Workbench]. |
| **10. Delivery path** | *How much of the encoding, integration, and adoption work does your team do?* | **Look for:** paths that deliver the same governed package at every level of support, with a named owner on your side and a forward-deployed engineer on theirs. <br>**Ask:** if we start DIY and the CRO resets strategy, what changes? | Four paths, least to most support: DIY (harness subscription with templates and packages), DIWY (group labs and paired sessions), Co-Implementation (an FDE or partner works in your environment), DIFY (white-glove installation through launch and managed refinement). All deliver the same governed package [V: Deployable Capabilities]. Zime provides a Forward-Deployed Engineer at the start [V: Workbench; Enterprise Harness]. Section 5 has the selector. |

### Economics and risk: what you prove, what you control, what you keep

| **Trade-off** | **Question** | **What to look for / Ask** | **Zime's position** |
|---|---|---|---|
| **11. Proof structure** | *Does the vendor prove one motion on your pipeline against a baseline before scope or authority expands?* | **Look for:** a bounded Proof of Value with a pre-deployment baseline, thresholds set in advance, and a go, revise, or stop decision; no revenue guarantee. <br>**Ask:** what are the exit criteria, and who accepts them? | About three weeks to first evidence through a Proof of Value ending in go, revise, or stop; about 90 days to substantial value; no revenue promise [V: AI Engineers; Programmatic Adoption]. Gate 1 at 21 days, Gate 2 at 90 days, thresholds set before the proof starts [V: DevOps for RevOps]. Section 6 lays out both gates. |
| **12. Control boundary** | *Which controls stay yours, in writing?* | **Look for:** a shared control table naming what you hold, what the vendor holds, and what you set together; policy checks before each prompt; Private Deployment if your posture requires it. <br>**Ask:** who can deactivate an agent at 2 a.m., and how? | Enterprise holds identity and data permissions, production environments, security and legal approval, model and framework selection, release approval, tool credentials, agent authority by motion and risk class, incident command, and final deactivation rights [V: DevOps for RevOps]. Each prompt passes a policy and security check before it runs; role-based and protected-information access controls apply [V: Enterprise Harness]. Private Deployment on hardware you control [V: Enterprise Harness]. SOC 2 Type II, GDPR, HIPAA listed [V: all product pages]. Section 7 has the full table. |
| **13. Rollback and exit** | *What runs the morning after a bad release, and what do you keep if you leave?* | **Look for:** one-click rollback to the prior approved version, deactivation conditions, a recovery owner; and a written exit statement covering packages, graph, evals, and telemetry. <br>**Ask:** on cancellation, what stays and what stops? | One-click rollback and version management [V: Workbench]; rollback as a package part with the prior approved version, deactivation conditions, and recovery owner [V: DevOps for RevOps]. Customers hold a customer-specific Behavior Graph and Skill Graph, workflows, and evaluation criteria [V: Deployable Capabilities]. **Exit terms on cancellation: UNSOURCED.** No page states what the customer keeps or exports. Put it in the order form before you sign. |

### Reading the cascade

If you resolve Trade-off 1 as content, stop here; a skill library and your platform owner's time will do, and nothing below applies. If you resolve it as lifecycle, Trade-offs 2 and 3 tell you whether a given vendor has one.

Trade-off 4 tells you whether it costs you the stack you built. Trade-offs 5 to 7 tell you whether it will carry your judgment and bound your agents. Trade-offs 8 to 10 decide how it runs and who runs it. Trade-offs 11 to 13 decide what you prove, what you control, and what you keep. The scorecard in Section 9 weights the ten criteria that fall out of this order.

## 4. Build ceilings

*How far does an internal build get before it stops improving, and what does it cost to hold it there?*

A capable AI engineering team can build a first behavior layer in a quarter and should not let a vendor talk it out of trying. The question runs differently: how far does the build get before it stops improving, what does it cost to keep it there, and what does your team not ship while it does. The eleven waypoints below describe what an internal build passes in order. The ceiling sits where the waypoints stop.

| **Way point** | **What the internal build achieves** | **Where it stalls** |
|---|---|---|
| **1** | Prompts, context files, and tool wiring for the agent framework you already run | Nothing yet; the easy part |
| **2** | Skills for the top five rep tasks (research, outreach, call prep, follow-up, proposal) | Quality varies by author; no shared format |
| **3** | Retrieval over CRM, calls, email, and collateral | The agent knows what happened; it does not know what leadership wants done now |
| **4** | CRO priorities encoded as rules, prompts, or routing | Written once, in one engineer's reading of a strategy memo; no approver, no version |
| **5** | Per-team and per-rep variants | Divergence begins; forty reps, forty harnesses, no owner of the delta |
| **6** | A named owner and a change process | The owner has a product to ship; the process becomes a backlog |
| **7** | Golden scenarios and an eval harness for the top motions | Scenarios drift from the field; failures on exceptions go unscored |
| **8** | Regression on model, skill, and context change | Rare; most teams discover the regression from a rep |
| **9** | Telemetry that joins behavior executed to CRM outcomes per rep | Requires an event model and a join nobody owns; almost never built |
| **10** | Authority enforcement with audit: what each skill may recommend, act on, escalate | Lives in the agent's tool permissions, not in the motion; reducing it means a redeploy |
| **11** | A refresh loop that rewrites packages as strategy, evidence, and products change | Not built; the team that built waypoints 1 through 6 has moved on |

Most internal builds reach waypoint 5 or 6 and hold there. That marks no failure of the team; it marks what a static artifact does.

The ceiling sits between waypoints 7 and 11: evaluation that covers exceptions, regression on change, behavior joined to outcomes, authority bound to the motion, and a refresh loop with an owner.

Zime's primer frames acceptance test 9 around the same list: the work breakdown comparison must cover data, schema, evaluations, approvals, telemetry, adoption, and ongoing maintenance, not integration alone [V: DevOps for RevOps].

> **Figure 2: The build ceiling.** Internal builds pass eleven waypoints in order; most hold at waypoint 5 or 6, and the ceiling sits between waypoints 7 and 11.

### What the build costs, in hours and months

GISTICS, an independent research firm, built a planning model for the customer-built equivalent of this layer: six sales-execution entities (customers, products, competitors, reps, a deal motion library, and forward-looking CRO strategy), the bindings between strategy and context that require distinct behavior, the workflows that deliver them, and the verification and adoption program around them [M: GISTICS Behavioral Graph Cost Model, 22 Sep 2026].

The figures below are planning ranges with BLS wage anchors, not vendor quotes or implementation benchmarks. GISTICS makes the model's assumptions available on request. Replace the rates and hours with your own before anyone funds anything. The model's own instruction: run a four to six week discovery estimate before funding production.

| **Scale (base case)** | **Build labor hours** | **Calendar months** | **Average build FTE** | **Recurring labor hours per year (operations, judgment maintenance, event-driven change)** | **Recurring share of build** |
|---|---|---|---|---|---|
| **Pilot** | about 6,900 | 5 | about 8.7 | about 2,300 | about 33 percent |
| **Department** | about 15,900 | 9 | about 11.1 | about 6,200 | about 39 percent |
| **Enterprise** | about 36,700 | 15 | about 15.3 | about 17,500 | about 48 percent |

### Where the hours go, base case, by role [M]:

| **Role** | **Pilot** | **Department** | **Enterprise** |
|---|---|---|---|
| Data and integration engineer | 1,160 | 2,640 | 5,680 |
| Knowledge and graph architect | 1,000 | 2,180 | 4,990 |
| GTM and CRO subject-matter expert | 980 | 2,080 | 4,790 |
| AI and ML engineer | 810 | 1,980 | 5,140 |
| QA and evaluation analyst | 690 | 1,750 | 4,360 |
| Program and product manager | 570 | 1,330 | 2,980 |
| Security and privacy specialist | 490 | 1,170 | 2,600 |
| Workflow and application engineer | 480 | 1,230 | 3,120 |
| Data steward and research analyst | 440 | 810 | 1,450 |
| SRE and platform operations | 210 | 500 | 1,070 |
| Enablement and change lead | 100 | 250 | 560 |

Read the role table before the total. Engineering roles (data and integration, AI and ML, workflow, SRE) account for about 2,700 of the pilot's 6,900 hours [M]. The CRO subject-matter expert and the data steward account for about 1,400.

The knowledge architect and the QA and evaluation analyst, roles most agent teams do not staff, account for another 1,700. The build does not stall on code. It stalls on the hours of a sales leader's time that encoding demands, the evaluation discipline that most teams defer, and the maintenance share that climbs with scale: a third of the build each year at pilot scale, half of it at enterprise scale, before any new feature request.

> **Figure 1: Where the hours go.** At pilot scale, engineering roles account for about 2,700 of 6,900 build hours; the CRO subject-matter expert and data steward about 1,400; the knowledge architect and QA and evaluation analyst about 1,700 [M].

The model's interpretation, in its own words: labor, integration, judgment encoding, and evaluation dominate list-price infrastructure; buying software does not remove source mapping, CRO decisions, validation, or adoption; CRO strategy behaves as a policy and judgment layer that requires executive ownership and periodic re-approval, not as an ordinary master-data entity [M].

### Dollars, once

For the engineer who must hand the case to finance. Base case, USD, three-year horizon [M]:

| **Scale** | **Initial build** | **Annual run rate** | **Three-year TCO (low, base, high)** |
|---|---|---|---|
| **Pilot** | about $843,000 | about $264,000 | $1.09M, $1.63M, $2.92M |
| **Department** | about $1.95M | about $752,000 | $2.81M, $4.20M, $7.45M |
| **Enterprise** | about $4.55M | about $2.30M | $7.72M, $11.45M, $20.04M |

The model carries a separate stress test for a 500-motion deal library at 10,336 initial hours and 1,498 upkeep hours per quarter, kept apart from the core figures to avoid overlap [M]. Decide whether a full library sits on day one, staged, consolidated, or excluded before the number enters a budget.

### What a vendor removes, and what you keep either way

The same model carries a responsibility matrix that an engineer can use to interrogate any vendor, Zime included [M]:

| **Cost area** | **What a platform or vendor may reduce** | **Work you retain** | **Principal lock-in risk** | **Sourcing posture** |
|---|---|---|---|---|
| **Graph and retrieval platform** | Database administration, scaling, backups, baseline monitoring | Ontology, identifiers, permissions, source truth, operating model | Schema, query language, migration effort | Buy managed infrastructure; keep the domain model portable |
| **Source connectors** | Commodity CRM, warehouse, collaboration integrations | Field mapping, identity resolution, exceptions, access approval | Connector-specific transformations | Buy standard connectors; build critical mappings |
| **Entity templates** | Starter schemas, patterns, reusable components | Business definitions, evidence standards, ownership, acceptance criteria | Vendor-specific domain representation | Co-design; retain canonical definitions |
| **Behavioral bindings** | Authoring tools, versioning, distribution, evaluation support | CRO judgment, relevance decisions, approval, field accountability | Loss of company-specific judgment and portability | Keep ownership internal; use tools to accelerate |
| **Workflow delivery** | Agent runtime, tool orchestration, prompt registry, standard interfaces | Process design, exception policy, human handoffs, adoption | Workflow runtime and proprietary connectors | Buy runtime selectively; retain workflow specifications |
| **Evaluation and governance** | Testing infrastructure, logs, policy controls, audit features | Ground truth, risk appetite, human review, release decisions | Vendor-defined metrics and incomplete evidence export | Buy tooling; own standards and approval |
| **Operations** | Managed hosting, upgrades, availability, incident tooling | Data stewardship, source changes, judgment refresh, user support | Exit cost and opaque operating telemetry | Buy commodity operations; retain graph stewardship |

Hold Zime's shared control table (Section 7) against this matrix. Where Zime says the enterprise holds identity, environments, model selection, release approval, tool credentials, and deactivation rights [V: DevOps for RevOps], the matrix says the same work stays yours under any vendor. Where Zime says it holds the Behavior Graph schema, strategy-to-behavior mapping, package versioning, behavioral evaluations, telemetry, and rollback mechanisms [V: DevOps for RevOps], the matrix names the lock-in risk to price: vendor-specific domain representation and incomplete evidence export. Ask for the export format of packages, evals, and telemetry before you sign, not after.

### When you should build anyway

Zime's own primer names the conditions [V: DevOps for RevOps]. Build when revenue behavior infrastructure forms a durable product differentiator for your company; when the enterprise will fund continuous strategy and evaluation work; when you hold strong internal ontology and behavioral ground truth; and when connector, policy, and adoption maintenance fit your roadmap. The AI Engineers page adds the three costs of building: opportunity cost, technical debt, and adoption risk [V: AI Engineers]. To those add two from this guide: build if your sales motion resembles no other, so a vendor's foundation gives you little; and build if your data boundary forbids any vendor-supplied schema, even under Private Deployment. In those cases, build, and run Section 9's scorecard on your own build once a quarter.

### When the ceiling costs more than the subscription

Use the Zime harness, by the primer's own list, when you want to keep your AI stack and control plane; when internal agents need current, company-specific revenue judgment; when you want to prove one motion before expanding; when behavior, adoption, and deal movement must show up in telemetry; and when lifecycle burden matters as much as initial build effort [V: DevOps for RevOps]. In this guide's terms: buy if you are past waypoint 5 and stalled, if the CRO has changed priorities since the layer went in and the layer has not changed, or if your board asks what the AI spend produced and the answer counts logins.

## 5. Choosing your delivery path

*How much of the encoding, integration, and adoption work does your team carry?*

Every path delivers the same governed package; the paths differ in who does the work around it [V: Deployable Capabilities]. Customers do more under DIY and less under DIFY. Zime provides a Forward-Deployed Engineer or a partner; the customer's team, Zime FDEs, and partners deliver in a mix that depends on the path [V: Deployable Capabilities].

| **Path** | **What it includes [V: Deployable Capabilities]** | **Best fit** |
|---|---|---|
| **DIY** | Harness subscription with templates and packages | A platform team already running agents in production, with capacity to own encoding, integration, and the 90-day plan |
| **DIWY** | Group labs and paired sessions | A team that wants paced guidance on encoding and evaluation without ceding the environment |
| **Co-Implementation** | An FDE or partner works in your environment | A team with a live mandate and a deadline, where an outside engineer in the environment shortens Gate 1 |
| **DIFY** | White-glove installation through launch and managed refinement | An organization with a mandate and no internal AI bench |

Roles on your side vary by page: AI Platform Owner, GTM Engineer, RevOps, and Security Reviewer for the harness [V: Enterprise Harness]; AI or GTM Engineer, DevOps, and Platform Owner for Workbench [V: Workbench]; Capability Owner, AI or GTM Engineer, and Executive Sponsor for a Proof of Value [V: Deployable Capabilities]. Whatever the path, the pages ask you for a named control-plane owner, your MCP permission and security specs, access to CRM, call, and data sources, evaluation in your own environment, and monthly or quarterly freshness reviews [V: Enterprise Harness; Workbench].

**Pricing: UNSOURCED.** No page states subscription, path, or FDE pricing. Ask.

### A selector

Answer four questions.

1. Do you have a platform owner with capacity to own the control plane and the 90-day plan? No: Co-Implementation or DIFY. Yes: continue.
1. Has the CRO's strategy changed in the last two quarters, or will it in the next? Yes: at least DIWY, because encoding under a moving strategy demands the paired sessions. No: continue.
1. Does the first motion touch a surface your team has not integrated (a CRM object, a call platform, a Teams channel)? Yes: Co-Implementation for the first package; the FDE does the integration once, in your environment, and your team keeps it. No: continue.
1. Is there a board or CEO deadline for showing execution? Yes: DIFY. No: DIY, and move to DIWY the first time the strategy moves.

## 6. What to demand as proof

*What would have to run, on your pipeline, before you expand scope or authority?*

Do not accept a proof of concept. A proof of concept shows that the layer runs. Demand a Proof of Value: a bounded engagement on one strategic revenue priority, with a baseline set before deployment, run on the live pipeline, ending in a go, revise, or stop recommendation [V: Deployable Capabilities]. Zime targets about three weeks: week one for setup and baseline, week two for live deployment and review, week three for assessment [V: Deployable Capabilities]. The proof requires eligible users, a working GTM-agent prototype, active opportunities, deal and conversation evidence, an executive sponsor, and a partner or FDE in the environment [V: Deployable Capabilities].

The primer formalizes the proof as two gates [V: DevOps for RevOps].

> **Figure 5: The proof clock.** Readiness before day one, Gate 1 at day 21 (define and connect, evaluate, integrate and approve, deploy and prove), then Gate 2 at day 90 [V: DevOps for RevOps].

### Gate 1: one package in production-adjacent conditions, 21 days

Prove that one Governed Deal Motion Package runs against customer-owned data in a production-adjacent environment, with evaluations, approvals, telemetry, and rollback [V: DevOps for RevOps]. Readiness comes before day one. Then: define and connect (days 1 to 5), evaluate (6 to 10), integrate and approve (11 to 15), deploy and prove (16 to 21).

Exit criteria: a named package version in the target environment; authorized data flowing; passing evaluations; approvals bound to the deployed version; traces showing provenance and authority; at least one verified end-to-end behavior; a tested exception and rollback path; documented ownership [V: DevOps for RevOps]. Acceptance test 10 requires that the named enterprise owner can observe and accept every criterion.

### Gate 2: adoption, behavior, and movement, 90 days

Assess three things against a baseline or comparison cohort: adoption (eligible users receive, use, and keep using the motion), behavior (the targeted behavior rises, evidence precedes action, prohibited behavior falls), and business movement (buyer response, stage progression, and movement against the baseline or cohort). Before the proof starts, set thresholds for adoption, behavior execution, quality, buyer response or deal movement, exception rate, and operating cost, plus the conditions for expanding scope or autonomy.

### Eleven acceptance tests

Zime publishes these in its primer [V: DevOps for RevOps]. Run them on any vendor and on your own build. A vendor who wrote the tests and then fails one in front of you has told you something; so has one who refuses to run them.

| **#** | **Test** | **What passes** |
|---|---|---|
| 1 | **Strategy-sensitive output** | Changing strategy, buyer role, or competitor shifts the output as intended and the output cites the active authority. |
| 2 | **Governed change lifecycle** | One approved rule change traces through every state, each with an owner, version, timestamp, and approval record. |
| 3 | **End-to-end intent integrity** | The same versioned intent appears from package through approval, runtime trace, and verified execution. |
| 4 | **Model and runtime portability** | The same package runs on your chosen model and runtime with its contract, evaluations, authority, and telemetry intact. |
| 5 | **Enterprise control boundary** | Named enterprise roles control access, deployment, autonomy, tool revocation, and deactivation. |
| 6 | **Granular, reversible authority** | One package promotes, you simulate a threshold breach, and authority falls automatically or through a named control path. |
| 7 | **Regression detection and rollback** | Evaluation blocks a planted regression, or the regression triggers the defined rollback. |
| 8 | **End-to-end decision trace** | A runtime action resolves back to its package version, strategy, inputs, evidence, permission, result, and downstream signal. |
| 9 | **Infrastructure burden reduction** | The work breakdown comparison covers data, schema, evaluations, approvals, telemetry, adoption, and ongoing maintenance, not integration alone. |
| 10 | **21-day production deployment** | The named enterprise owner observes and accepts every Gate 1 exit criterion. |
| 11 | **90-day behavioral impact** | Adoption, verified behavior, quality, and deal movement meet pre-agreed thresholds against a baseline or cohort. |

Tests 1 through 8 run inside Gate 1 once the package exists. Test 9 runs before you commit to either path; Section 4 supplies the work breakdown. Tests 10 and 11 close the two gates.

### Zime's published figures, and how to read them

Five pages carry the same figures: 1,200+ GTM behaviors trained with 50K+ human-in-the-loop hours; about 5 minutes to go live; 80 percent of reps running behaviors in 90 days, resulting in a 20 percent uplift in deals won [V: Enterprise Harness; Workbench; AI Engineers; Deployable Capabilities; Programmatic Adoption]. No page states the sample, baseline, period, or attribution method behind them. The primer says so itself: public Zime outcome metrics carry the label Zime-reported; the 21-day and 90-day proofs stand as proposed verification gates and do not guarantee customer results; establishing revenue causality requires a measurement design that accounts for cohort selection, timing, strategy changes, seller behavior, buyer response, and other confounders [V: DevOps for RevOps]. The Programmatic Adoption page adds that Zime makes no promise of revenue and that each customer builds its own business case from its own baseline [V].

Read the figures as the bar Zime sets for itself, and make Gate 2 the instrument that tests it on your floor. The illustrative scale recommendation on the Deployable Capabilities page shows what the instrument reports: 25 eligible reps, 22 active, 18 who executed the behavior, 26 of 41 deals advanced a stage, 7 reps not yet reached, 0 reps executing at baseline [V: Deployable Capabilities, illustrative]. Four numbers at four levels, with the baseline stated. That shape, not the 80 percent, carries the claim.

### Claims you should discount

Discount any adoption figure counted in logins, seats, or tokens. Discount any eval result produced on the vendor's scenarios in the vendor's environment. Discount any trace that stops at the model's output. Discount any uplift figure from a customer whose motion resembles none of yours. Discount Zime's four figures above until Gate 2 reproduces their shape on your pipeline. A buyer's guide that cannot discount its own vendor's claims is a brochure.

## 7. The platform owner's and security reviewer's checklist

*Which controls stay yours, which does the vendor hold, and where does each one appear in writing?*

Answer every item in writing before anyone signs the order form, with Zime or with any vendor.

### Shared control

The primer publishes the split [V: DevOps for RevOps]. Hold any vendor to an equivalent table.

| **Zime holds** | **The enterprise holds** | **Set together** |
|---|---|---|
| Behavior Graph schema and lifecycle | Identity and data permissions | The first motion and its success criteria |
| Strategy-to-behavior mapping | Production environments | The ground-truth scenario set |
| Connector behavior within authorized scope | Security, privacy, risk, and legal approval | Evidence required for each gate |
| Package versioning | Model and framework selection | The human review and escalation path |
| Behavioral evaluations | Release approval | The autonomy ladder |
| Zime-supplied MCP, skill, and agent interfaces | Tool credentials | The 21-day and 90-day measurement plans |
| Behavioral and adoption telemetry | Agent authority by motion and risk class |  |
| Exception, rollback, and retirement mechanisms | Incident command and final deactivation rights |  |

The AI Engineers page carries a fifteen-row version of the same table (identity and access, first motion, Behavior Graph schema, models and frameworks, test scenarios, strategy mapping, environments, gate evidence, package registry, release approval, escalation path, Judgment Evals, guardrail state, 90-day plan, adoption telemetry) [V: AI Engineers]. Ask for it filled in for your deployment.

### Data boundary

| **Question** | **What the answer should be** | **Zime's published answer** |
|---|---|---|
| ***What can the layer read?*** | Only what the rep's permissions allow, through connectors you authorize | Connectors only access authorized CRM, call, and messaging context [V: AI Engineers]; permission-aware access to CRM, call, account, and collaboration context [V: Enterprise Harness] |
| ***Where does it run?*** | In your environment, or on hardware you control if your posture requires it | Production environments stay with the enterprise [V: DevOps for RevOps]; Private Deployment on hardware you control [V: Enterprise Harness] |
| ***What leaves the environment, and what does Zime learn from it?*** | A short, specific list, in the order form | **UNSOURCED.** No page states what telemetry, if any, leaves the customer environment or whether Zime learns across customers. Ask for the data flow diagram and put the answer in the order form. |
| ***Which certifications apply?*** | Named, current, auditable | SOC 2 Type II, GDPR, HIPAA listed [V: product pages]; trust.zime.ai linked from the site footer |

### Release control

| **Question** | **What the answer should be** | **Zime's published answer** |
|---|---|---|
| ***Who approves a release reaching my harnesses?*** | You | Release approval stays with the enterprise [V: AI Engineers; DevOps for RevOps] |
| ***What blocks a bad release?*** | An evaluation gate with regression coverage | The gate between evaluate and promote; a change that fails its Judgment Evals does not reach the field [V: AI Engineers] |
| ***What do I see when something changes?*** | A versioned repository with provenance and approvals | An indexed, versioned repository with source provenance and approval controls; version history across skills, prompts, knowledge, workflows, and configurations [V: Workbench; Enterprise Harness] |
| ***How do I roll back?*** | One action to the prior approved version, with a recovery owner | One-click rollback [V: Workbench]; rollback as a package part naming the prior version, deactivation conditions, and recovery owner [V: DevOps for RevOps] |
| ***Can I hold or pin a release?*** | Yes, for a defined window, with stated consequences | **UNSOURCED.** No page states a hold window or pinning. Ask. |

### Identity, access, and agents

- Role-based and protected-information access controls [V: Enterprise Harness].
- Each prompt passes a policy and security check before it runs; the harness adds defenses against prompt injection [V: Enterprise Harness].
- Four guardrail states set centrally; no harness sets its own; an agent acts alone only where policy allows it without review [V: Enterprise Harness].
- Tool credentials, agent authority by motion and risk class, incident command, and final deactivation rights stay with the enterprise [V: DevOps for RevOps].
- Ask any vendor how the layer prevents an agent from committing your company to terms, then run acceptance test 6 and watch.

### Observability without surveillance

The layer reports behaviors executed in live deals at four levels, broken down by rep, team, account, opportunity, stage, and Deal Motion; logins and content views do not count [V: Programmatic Adoption]. Telemetry covers inputs, actions, user response, evidence, latency, cost, and outcomes [V: DevOps for RevOps]. Whether the layer records keystrokes, time on tool, or message content outside the authorized context: **UNSOURCED.** Get the sentence that says it does not into the order form. If a vendor cannot write that sentence, the adoption number will not survive contact with the floor.

### Exit

**UNSOURCED.** The pages state that customers hold a customer-specific Behavior Graph and Skill Graph, workflows, and evaluation criteria [V: Deployable Capabilities], and nothing about what happens to them on cancellation. Demand a plain statement covering packages, graph, evals, traces, and telemetry: what exports, in what format, at what cost, and what stops.

## 8. First 90 days

*What should you see, and by when, so that day 90 reads as evidence rather than opinion?*

The 90-day window matches Gate 2, and everything after signature arranges itself so you can read the thresholds at the end of it. The harness page describes rollout as inventory, connect, bring under the hub, observe, stay current, with no durations [V: Enterprise Harness]. The primer and the Deployable Capabilities page supply the clock.

| **By the end of** | **You should see** | **If you do not** |
|---|---|---|
| **Readiness (before day 1)** | Named control-plane owner on your side; MCP permission and security specs delivered; baseline captured; first motion, ground-truth scenarios, and guardrail state agreed in the working session [V: Enterprise Harness; AI Engineers; DevOps for RevOps] | Do not start the clock. A gate with no baseline cannot close. |
| **Day 5** | Package defined; authorized data flowing through connectors [V: DevOps for RevOps] | Ask which source blocked and who owns the credential. |
| **Day 10** | Judgment Evals run in your environment on your scenarios, with results you can read; regression coverage on model and context change [V: DevOps for RevOps; Workbench] | Stop. Evaluation before promotion is the product; a vendor that cannot show it by day 10 does not have it. |
| **Day 15** | Integration into the CRM, Slack, or Teams surface; approvals bound to the deployed package version [V: DevOps for RevOps] | Ask who approved, and whether the approval names the version. |
| **Day 21** | Gate 1 closed: traces showing provenance and authority, one verified end-to-end behavior, exception and rollback path tested, ownership documented; go, revise, or stop decided [V: DevOps for RevOps; Deployable Capabilities] | Revise or stop. Do not expand scope on a gate that did not close. |
| **Week 6** | Adoption at four levels per team; first propagated release received, its version visible in the repository to the platform owner; cost visible per agent and workflow [V: Programmatic Adoption; Enterprise Harness] | Ask why the executed-behavior count lags the active-use count before asking why reps are not adopting. |
| **Week 9** | Behavior and buyer-response metrics against baseline, per motion; exception rate and operating cost against the thresholds set at readiness [V: DevOps for RevOps] | Hold judgment; the window has not closed. |
| **Day 90** | Gate 2 read against pre-agreed thresholds: adoption, behavior, movement, exception rate, cost; the expansion or autonomy decision made on the numbers [V: DevOps for RevOps] | Decide with the numbers in hand. Zime targets substantial value by day 90 and makes no revenue promise [V: AI Engineers]. |

## 9. Vendor evaluation scorecard

*Which ten criteria separate a governed behavior layer from a skill library, and how heavily does each one weigh?*

Ten criteria, weighted to the trade-offs that bind hardest. Score each vendor 0 to 5 on the evidence they show you, not on what they say. A vendor who scores under 3 on the first three criteria sells a skill library, whatever the pitch calls it. Apply the same scorecard to your own build.

| **#** | **Criterion** | **Weight** | **Question that exposes a skill library** | **5 looks like** | **0 looks like** |
|---|---|---|---|---|---|
| **1** | **Lifecycle with an evaluation gate** | **15%** | *Show me a release you blocked, and the eval that blocked it.* | Package format, evals in my environment, regression on model and context change, a gate before promotion, scored release history | A prompt repository and a changelog |
| **2** | **Verified adoption and decision trace** | **15%** | *Show me a rep who logged in daily and executed nothing, and a recommendation traced to its approver.* | Four adoption levels with logins excluded; a trace to package version, strategy, evidence, permission, result | Logins, tokens, and the model's output |
| **3** | **Authority bound to the package** | **12%** | *Simulate a breach and show me authority falling without a redeploy.* | Four guardrail states set centrally, authority on the package, evidence gates between levels, a named reduction path | Permissions in the agent's tool config |
| **4** | **Layer, not replace** | **12%** | *Which of my components do I throw away?* | MCP into my agents, my models and frameworks kept, delivery in CRM, Slack, Teams | A new platform, a new interface, a new login |
| **5** | **Strategy encoding with an approver and a version** | **10%** | *How does Q1's priority get in, and out when Q2 changes it?* | Strategy object bound to each package, human review of encoded judgment, strategy change separated from behavior change | A generic playbook, or a prompt someone edits |
| 6 | **Model portability and cost metering** | **10%** | *Run the package on two models and show me the eval delta and the cost per recommendation.* | Routing by task, sensitivity, quality, cost; cost per agent, workflow, user as it accrues | One model, cost on the monthly bill |
| 7 | **Proof structure** | **8%** | *What are Gate 1 and Gate 2 exit criteria, and who accepts them?* | Baseline before deployment, thresholds set in advance, go, revise, or stop at three weeks, no revenue guarantee | A proof of concept on demo data |
| 8 | **Control boundary and rollback** | **8%** | *Who can deactivate an agent at 2 a.m., and what runs the morning after a bad release?* | Shared control table in writing, policy check per prompt, one-click rollback with a recovery owner, Private Deployment available | Assurances, and a runbook that says "contact support" |
| 9 | **Build burden reduction, measured** | **5%** | *Show me the work breakdown you remove, line by line, against my estimate.* | A line-by-line comparison across data, schema, evals, approvals, telemetry, adoption, maintenance | "Faster than building" |
| 10 | **Exit and portability** | **5%** | *What do I keep, in what format, at what cost?* | Written export of packages, graph, evals, telemetry; no fee; the layer keeps running at last version | Export fee, vendor-only formats, or silence |

### Scoring

Multiply each score by its weight and sum. Above 4.0 means the vendor has the lifecycle. Between 3.0 and 4.0 means the vendor has parts of it; ask which parts sit on the roadmap. Under 3.0 means you are evaluating content, and Trade-off 1 already told you what to do with content.

### How Zime expects to score

High on 1, 3, 4, 6, and 7; the pages publish the mechanisms and the primer publishes the tests. On 2, high on the trace and the adoption model; the telemetry capture method stays undocumented on the pages, so make Gate 1 show it. On 5, the score depends on the delivery path you choose, because encoding is the work. On 8, high on policy checks and rollback; hold and pin mechanics remain unpublished. On 9, the score depends on whether Zime brings a line-by-line comparison to the working session; Section 4 gives you the lines to demand. On 10, Zime has published nothing on exit; score it on what the order form says, not the pitch. Ask Zime to score itself on this card in front of you, with evidence, before you sign.

## 10. Questions engineers ask

*Which question does each stage of the evaluation turn on?*

Nine questions, each resolving one or two of the trade-offs in Section 3. Each answer opens with the one-sentence version.

### We already built agents and a skill library. What does Zime add that we have not got?

Zime adds the lifecycle around your skills: packaging, Judgment Evals in your environment, a gate before promotion, versioned propagation, authority bound to the package, and telemetry that counts behaviors executed rather than logins [V: Workbench; AI Engineers; Programmatic Adoption].

Your agents, connectors, models, and data stay in place; the layer connects to them through MCP and delivers into the surfaces reps already use [V: AI Engineers; Enterprise Harness]. The difference shows up at the point where a skill library stalls: the second quarter, when the strategy moved and the skills did not, and nobody can say which version of which prompt produced last Tuesday's recommendation. Check where your build sits on Section 4's eleven waypoints. Past waypoint 8, with regression, outcome-joined telemetry, and package-level authority, keep it and run the scorecard on it quarterly.

- Package format with seven published parts
- Judgment Evals run in your environment
- Gate between evaluate and promote
- Four guardrail states, set centrally
- Adoption at four levels, logins excluded
- Trace to package version, strategy, approver

What you keep carries your judgment; what you add keeps it current and bounded. (Trade-offs 1, 4.)

### Do we have to replace our models, frameworks, or agent platform?

No; Zime runs above your models, frameworks, and controls and connects to customer-built agents through MCP [V: AI Engineers; Enterprise Harness].

Model and framework selection stays with the enterprise on the shared control table [V: DevOps for RevOps]. The harness selects, routes, and substitutes models by task, sensitivity, quality, and cost, and compares cost against quality before any model change reaches promotion [V: Enterprise Harness; Workbench]. Acceptance test 4 makes the claim testable: the same package must run on your chosen model and runtime with contract, evaluations, authority, and telemetry intact. No page names specific supported models, so put the ones you run in the working session and ask for the eval delta.

- Models, frameworks, agents, connectors, data: yours
- MCP connection, permissions preserved
- Routing by task, sensitivity, quality, cost
- Delivery in CRM, Slack, Teams
- Private Deployment on your hardware

The layer adds judgment to the stack you built rather than asking for a new one. (Trade-offs 4, 8.)

### What exactly is in a capability package, and what is missing from it?

A package carries a behavior or skill definition, its link to the supported strategy, prompts and structured context, workflow and integration configuration, conditions and exceptions with evidence, evaluation and regression routines, and metadata for ownership, release, version, and freshness [V: Deployable Capabilities].

Zime's primer specifies eleven parts for a Governed Deal Motion Package [V: DevOps for RevOps]. Four of the eleven have no named home in the seven: trigger, authority, telemetry, and rollback. That does not mean the product lacks them; the harness page documents guardrail states, tracing, and rollback at the platform level [V: Enterprise Harness; Workbench]. It means you should ask where they live, because a package that carries its own authority and rollback behaves differently under incident than one that borrows them from a central table.

- Seven parts published for the shipped package
- Eleven parts specified in the primer
- Ask where trigger lives
- Ask where authority lives
- Ask where telemetry lives
- Ask where rollback lives

Open one package in the working session and have Zime point to all eleven. (Trade-offs 1, 7.)

### How does Zime keep an agent from committing us to terms it should not?

Central policy assigns each agent one of four guardrail states, Recommend, Act, Escalate, or Request approval, and no harness sets its own [V: Enterprise Harness].

Authority attaches to the package, not to the agent, and a three-level ladder (Copilot, Semi-autonomous, Autonomous) with evidence gates between levels decides how far a motion may go [V: DevOps for RevOps]. Each prompt passes a policy and security check before it runs, with defenses against prompt injection [V: Enterprise Harness]. In live deals, Zime guides and the person acts [V: Enterprise Harness]. Agent authority by motion and risk class, tool credentials, and final deactivation rights stay with the enterprise [V: DevOps for RevOps]. Run acceptance test 6 before you believe any of it: promote one package, simulate a threshold breach, and watch authority fall.

- Four guardrail states, set centrally
- Authority on the package, not the agent
- Evidence gates between autonomy levels
- Policy check on every prompt
- Deactivation rights stay with you

Permission becomes a property of the motion you can read, test, and reduce. (Trade-offs 7, 12.)

### What do the evals test, and where do they run?

Judgment Evals test whether encoded, company-specific judgment guides correct execution in real deal situations, and they run in your environment [V: Workbench].

They cover complex-deal conditions and exception cases, and regression tests span skill, model, and context changes [V: Workbench]. Rot detection flags stale or degraded knowledge [V: Workbench]. The Workbench page shows the shape of a result: 46 of 48 passed, 2 failed on a pricing exception, 1 regression on competitor entry, cost against quality compared across two models, verdict "Do not promote yet," promotion blocked [V: Workbench]. The ground-truth scenario set sits on the shared control table as something you and Zime set together [V: DevOps for RevOps], which means the scenarios that matter to your motion get written by people who know it.

- Run in the customer's environment
- Complex deals and exception cases
- Regression on skill, model, context
- Rot detection on stale knowledge
- Gate before promotion
- Scenarios co-authored

An eval you cannot read in your own environment proves nothing about your deals. (Trade-offs 6, 1.)

### How do we see what each agent costs, and can we route by cost?

The harness shows cost across inference endpoints, LLMs, and MCP calls as it accrues, attributed by team, workflow, initiative, agent, or user [V: Enterprise Harness].

Model selection, routing, and substitution run by task, sensitivity, quality, and cost, and sensitive tasks route to the models you approve [V: Enterprise Harness]. Workbench tracks cost by user, team, agent, environment, initiative, and customer deployment, and compares cost and quality before any model change promotes [V: Workbench]. Operating cost appears among the Gate 2 thresholds you set before the proof starts [V: DevOps for RevOps]. For the engineer who reconstructs agent cost from invoices, this answers the CFO's question at the level the CFO asks it.

- Cost across endpoints, LLMs, MCP calls
- Attributed by team, workflow, agent, user
- Routing by task, sensitivity, quality, cost
- Sensitive tasks to approved models
- Cost in the Gate 2 thresholds

Cost stops being a monthly surprise and becomes a per-recommendation number you can route against. (Trade-offs 8, 9.)

### What does a Proof of Value prove, and how long does it take?

A Proof of Value runs one bounded revenue priority on your live pipeline against a baseline set before deployment and ends, in about three weeks, with a go, revise, or stop recommendation [V: Deployable Capabilities].

The primer formalizes it as Gate 1 at 21 days, with phases of define and connect, evaluate, integrate and approve, deploy and prove, and named exit criteria including a tested exception and rollback path [V: DevOps for RevOps]. Gate 2 at 90 days reads adoption, behavior, and movement against thresholds you set before the proof starts [V: DevOps for RevOps]. Zime targets substantial value by day 90 and makes no revenue promise [V: AI Engineers]. The eleven acceptance tests in Section 6 run inside the gates.

- One priority, your pipeline, your baseline
- About three weeks to go, revise, or stop
- Gate 1 exit criteria, observable
- Gate 2 thresholds set in advance
- No revenue guarantee

The proof produces the evidence; you make the decision. (Trade-off 11.)

### What do we control, and what does Zime control?

The enterprise holds identity and data permissions, production environments, security and legal approval, model and framework selection, release approval, tool credentials, agent authority by motion and risk class, incident command, and final deactivation rights [V: DevOps for RevOps].

Zime holds the Behavior Graph schema and lifecycle, strategy-to-behavior mapping, connector behavior within authorized scope, package versioning, behavioral evaluations, its MCP, skill, and agent interfaces, behavioral and adoption telemetry, and the exception, rollback, and retirement mechanisms [V: DevOps for RevOps]. Both set the first motion, the ground-truth scenarios, gate evidence, the escalation path, the autonomy ladder, and the measurement plans [V: DevOps for RevOps]. Private Deployment runs the layer on hardware you control [V: Enterprise Harness]. What leaves your environment, and what Zime learns from it, appears on no page; get it into the order form.

- Identity, environments, release approval: yours
- Model and framework selection: yours
- Deactivation rights: yours
- Schema, versioning, evals, telemetry: Zime
- First motion and scenarios: together

Control stays with the roles that carry the risk, and the table says so in writing. (Trade-off 12.)

### What do we keep if we cancel?

The pages say customers hold a customer-specific Behavior Graph and Skill Graph, workflows, and evaluation criteria [V: Deployable Capabilities], and say nothing about cancellation; the exit terms remain UNSOURCED.

The pages document rollback inside the subscription: one-click rollback to a prior approved version with a recovery owner [V: Workbench; DevOps for RevOps]. They do not document exit from the subscription. The GISTICS responsibility matrix names the lock-in risks to price: vendor-specific domain representation, incomplete evidence export, and exit cost [M]. Ask for a written statement covering packages, graph, evals, traces, and telemetry: what exports, in what format, at what cost, and what stops. A vendor's answer to this question in the first meeting tells you more than the demo.

- Graph, skills, workflows, evals: stated as yours
- Export format: unpublished
- Export cost: unpublished
- What stops on cancellation: unpublished
- Get it in the order form

The renewal decision should rest on evidence, not on how expensive leaving would be. (Trade-off 13.)

## Glossary

One definition per term, held constant across this guide and drawn from the five pages.

| **Term** | **Definition** |
|---|---|
| **Behavioral AI for Sales Execution** | Zime's category line. It decides active CRO priorities, next behaviors, and agent authority bounds [V: DevOps for RevOps]. |
| **Acceptance tests** | The eleven tests from Zime's primer for a governed behavior layer [V: DevOps for RevOps]. |
| **Authority ladder** | Copilot, Semi-autonomous, and Autonomous tiers with evidence gates between levels; authority attaches directly to the package [V: DevOps for RevOps]. |
| **Behavior Graph** | A structure linking strategy, selling situations, buyer roles, products, competitors, evidence, behaviors, and results [V: AI Engineers; DevOps for RevOps]. |
| **Build ceiling** | The point, between waypoints 7 and 11, past which an internal build stops improving for want of exception-grade evals, regression, outcome-joined telemetry, package-bound authority, and an owned refresh loop. |
| **Capability package** | The versioned unit engineers ship [V: Deployable Capabilities]. It resolves a Deal Motion for one deal, role, and moment at runtime [V: AI Engineers]. |
| **CRO Initiatives** | One of three products running on the harness alongside Behavior Graph for Sales and Programmatic Adoption [V: Enterprise Harness]. |
| **Deal Motion** | The behavior a capability package resolves for a specific deal, role, and moment [V: AI Engineers]. |
| **Delivery paths** | DIY, DIWY, Co-Implementation, and DIFY options; each option delivers the same governed package [V: Deployable Capabilities]. |
| **Deployable Capabilities** | Zime's offering of governed capability packages and adoption delivery paths [V: Deployable Capabilities]. |
| **DevOps for RevOps** | The production discipline for versioning, testing, approving, deploying, observing, improving, rolling back, and retiring revenue behavior [V: DevOps for RevOps]. |
| **Enterprise Sales Harness** | The governed runtime and central control plane. It manages every harness, maintains freshness, and tracks usage costs and outcomes [V: Enterprise Harness]. |
| **Forward-Deployed Engineer (FDE)** | The Zime engineer provided at the start of a deployment [V: Workbench; Enterprise Harness]. |
| **Governed Deal Motion Package** | The primer's eleven-part specification for deployable units [V: DevOps for RevOps]. |
| **Gate 1, Gate 2** | The 21-day production-adjacent proof and the 90-day adoption, behavior, and movement proof, with thresholds set in advance [V: DevOps for RevOps]. |
| **Guardrail states** | Recommend, Act, Escalate, and Request approval settings configured centrally for every agent [V: Enterprise Harness]. |
| **Harness (single)** | A single user's working set of skills, prompts, and documents. It serves one user and experiences drift over time [V: Enterprise Harness]. |
| **Judgment Evals** | Tests evaluating whether encoded, company-specific judgment guides execution in real deal situations, running directly in customer environments [V: Workbench]. |
| **Juice Pack** | A skill-shaped pack with deeper context than a generic skill, curated, evaluated, and versioned by Zime before release [V: Deployable Capabilities]. |
| **Lifecycle** | Encode, package, evaluate, promote, propagate, and refresh stages with rollback or retirement options; a gate separates evaluation and promotion [V: AI Engineers]. |
| **Private Deployment** | Zime running on hardware you control [V: Enterprise Harness]. |
| **Programmatic Adoption** | Adoption tracking based on executed behaviors across four levels: eligible reps, active use, behavior executed, and outcome contribution, excluding login metrics [V: Programmatic Adoption]. |
| **Proof of Value (PoV)** | A bounded engagement on one strategic revenue priority: baseline before deployment, live pipeline, go, revise, or stop in about three weeks [V: Deployable Capabilities]. Replaces proofs of concept and pilots. The primer formalizes it as the 21-day production-adjacent proof and the 90-day adoption, behavior, and movement proof with pre-established thresholds [V: DevOps for RevOps]. |
| **Rot detection** | Automated identification of stale or degraded knowledge within capability packages [V: Workbench]. |
| **Skill Graph** | How to act on what the Behavior Graph calls for: the Behavior Graph says what the situation calls for, the Skill Graph says how [V: AI Engineers]. |
| **Trade-off** | One of the thirteen decisions in Section 3, resolved in sequence. Distinct from the cognitive decision gates your buyers resolve. |
| **Zime Workbench** | The engineering environment for encoding, testing, shipping, and maintaining company-specific sales judgment: APIs, SDKs, MCP connectors, lifecycle tooling [V: Workbench]. |
| **[V], [M], UNSOURCED** | Claim tags: Zime published on a named page; GISTICS planning model; no page or staged file supports the claim. |

*Zime wrote this guide. Its four outcome figures appear as Zime-reported, the label its own primer gives them. Pricing, hold and pin mechanics, the telemetry boundary, and exit terms appear on no page and carry UNSOURCED above. Everything else remains yours to test on your own pipeline, with the eleven acceptance tests as the instrument.*

## Sources

This guide follows five zime.ai pages, all read on 26 October 2026. Tags in the text such as [V: Workbench] refer to these pages.

| **Tag** | **Page** |
|---|---|
| [V: Enterprise Harness] | [zime.ai/products/enterprise-harness](https://zime.ai/products/enterprise-harness) |
| [V: Workbench] | [zime.ai/products/workbench](https://zime.ai/products/workbench) |
| [V: Deployable Capabilities] | [zime.ai/products/deployable-capabilities](https://zime.ai/products/deployable-capabilities) |
| [V: AI Engineers] | [zime.ai/solutions/ai-engineers](https://zime.ai/solutions/ai-engineers) |
| [V: DevOps for RevOps] | [zime.ai/primers/devops-for-revops](https://zime.ai/primers/devops-for-revops) |
| [V: Programmatic Adoption] | [zime.ai/products/programmatic-adoption](https://zime.ai/products/programmatic-adoption) (adoption levels only) |
| [M] | GISTICS Behavioral Graph Cost Model (22 September 2026). GISTICS makes the model's assumptions available on request. |

**A note on terms.** The guide uses Zime's current page vocabulary throughout. Earlier Zime material used Revenue Brain, Behavioral Graph, memories, and private strategy model; none of those terms appears on the five pages this guide follows.

## About this guide

- **Published by:** Zime. Zime wrote this guide, with build-cost figures from the GISTICS Behavioral Graph Cost Model (22 September 2026).
- **Version:** 1.0, published 5 November 2026. The zime.ai pages cited with [V] were read on 26 October 2026.
- **How to read the tags:** [V: page] means Zime publishes the claim on the named zime.ai page; [A] means an analyst or academic source; [M] means the GISTICS planning model; UNSOURCED means no published source supports the claim.
- **What this guide is not:** a revenue guarantee, a price quote, or legal, financial, or investment advice. Zime makes no promise of revenue; each customer sets targets from its own baseline.
- **Testable Credentials:** every material claim in this guide, with its scope, evidence path, and the conditions that would confirm or disconfirm it, is listed in the [Testable Credentials for this guide](/credentials/zime-buyers-guide-ai-engineers-enterprise-sales-harness/).
- **Question or correction:** ask a question or challenge a claim at [/inquiry/](/inquiry/); report an error at [/corrections/](/corrections/).
- **Request a Proof of Value conversation:** [zime.ai](https://zime.ai).

### Related Zime guides and disclosures

- [Zime Buyer's Guide for CROs](/reference/zime-buyers-guide-cro-sales-productivity/)
- [Zime Buyer's Guide for Technical CROs and CTOs](/reference/zime-buyers-guide-technical-cro-make-or-buy/)
- [DevOps for RevOps (zime.ai primer)](https://zime.ai/primers/devops-for-revops)
- [Disclosure: Zime launches Behavior Graph for Sales](/disclosures/zime-launches-behavior-graph-for-sales/)
- [Disclosure: Zime launches Enterprise Sales Harness](/disclosures/zime-launches-enterprise-sales-harness/)
