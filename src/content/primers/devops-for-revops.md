---
id: "ZIME-PRIMER-2026-005"
title: "Interactive Primer: DevOps for RevOps"
summary: "What DevOps for RevOps means for enterprise AI teams: governing revenue behavior through a versioned, tested, approved and reversible lifecycle, the eleven-part Governed Deal Motion Package, and the 21-day and 90-day proofs Zime proposes."
artifact_type: interactive_primer
status: draft
visibility: public
version: "0.1"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
updated_date: 2026-11-02
review_by: 2026-12-02
canonical_path: "/primers/devops-for-revops/"
related_artifacts:
  - "https://zime.ai/primers/devops-for-revops"
related_credentials:
  - "/credentials/devops-for-revops/"
related_concepts: []
ai_assistance:
  used: true
  roles: [extraction, structure, drafting_assistance, formatting]
  human_review: required
visuals: []
---

## Orient

**DevOps for RevOps,** in Zime's definition, is the production discipline for versioning, testing, approving, deploying, observing, improving, rolling back and retiring the logic that governs revenue behavior. Zime's central claim is that context is necessary but not sufficient: an AI agent can retrieve the right account, cite the latest call and use the approved CRM, yet still recommend the wrong next move, because nothing defines which strategy applies, which buyer role matters or what authority the agent holds. Zime calls the missing layer Behavioral AI for Sales Execution.

This primer is the Markdown version of Zime's guide for enterprise AI teams, published at [zime.ai/primers/devops-for-revops](https://zime.ai/primers/devops-for-revops). It was captured on November 2, 2026. The source page carries no publication date.

Key entities: Zime, Behavior Graph, Governed Deal Motion Package, Deal Motion, authority ladder, Gate 1 (21-day production proof), Gate 2 (90-day behavioral and business proof).

Written for: enterprise AI developers, platform engineers, AI architects, forward-deployed engineers and technical leaders building revenue copilots and agents.

**Questions this primer answers**

- Why can a revenue agent be technically live and still behaviorally wrong?
- What are the eight strategy questions a typical AI stack leaves unanswered?
- What does DevOps for RevOps mean, and how does it map to software delivery?
- What is a Governed Deal Motion Package, and what are its eleven parts?
- What is the authority ladder (copilot, semi-autonomous, autonomous)?
- Who controls what: Zime, the enterprise, or both?
- What does the 21-day production proof (Gate 1) and the 90-day behavioral proof (Gate 2) require?
- What are the eleven acceptance tests for a behavioral layer?
- When should an enterprise build this layer itself, and when use Zime's harness?

## Understand

### Technically live, behaviorally wrong

Enterprise AI teams are already strong at selecting models, assembling agent frameworks, connecting tools, retrieving documents, securing credentials, tracing calls and shipping workflows. Zime argues that revenue work adds a different failure mode: strategic judgment. Foundation models do not supply that authority, agent frameworks do not define it, and retrieval grounds answers in sources but a source is not a decision policy.

Zime lists eight strategy questions the stack typically does not answer:

| # | Question | Failure mode if unanswered |
|---|---|---|
| 1 | Which CRO priority applies now? | Actions aligned to outdated or misaligned revenue goals |
| 2 | Which buyer role changes the approach? | Generic messaging that misses role-specific pain |
| 3 | Which competitor changes the proof? | Weak differentiation against specific threats |
| 4 | Which behavior advances this stage? | Irrelevant steps that stall the deal |
| 5 | Which evidence authorizes that recommendation? | Unverified recommendations |
| 6 | Which action may the agent take on its own? | Overstepping boundaries, or needless friction from human review |
| 7 | How will the system verify execution? | Unobserved failures, or false assumptions of completion |
| 8 | What happens when strategy changes? | Stale strategic logic running across live deals |

### DevOps for RevOps mapped to software delivery

Software teams learned that source code alone does not create a reliable service, so they added version control, tests, approvals, environments, observability, incident response, rollback and continuous improvement. Zime maps those practices to revenue behavior:

| Software delivery | Revenue behavior delivery |
|---|---|
| Source code | Strategy-to-behavior logic |
| Package or service | Governed Deal Motion Package |
| Unit and integration tests | Behavioral evaluations and scenario simulations |
| Pull request and approval | Revenue, risk and platform approval |
| Environment promotion | Copilot, semi-autonomous and autonomous authority levels |
| Deployment telemetry | Guidance, action, evidence, adoption and deal-movement telemetry |
| Incident response | Exception handling and authority reduction |
| Rollback | Restoring the last approved motion version |
| Dependency maintenance | Connector, policy, model, content and strategy updates |

Zime states the limits of the analogy: sellers and buyers are not deterministic services, and revenue outcomes have long causal chains, so the discipline adds human judgment, explicit authority, behavioral evidence and a separate business-proof gate.

### The Governed Deal Motion Package

A **Governed Deal Motion Package** is Zime's proposed deployable unit: a versioned execution object for a specific selling situation, carrying enough to decide, act, verify and recover. Zime rejects the agent (too broad), the prompt (too narrow), the document (passive) and the workflow (often omits judgment, evidence and authority) as the unit of change. The package stays constant even if delivery moves between Slack, a CRM and a custom agent. It has eleven parts:

| # | Part | Required content |
|---|---|---|
| 1 | Identity | Name, owner, version, status, effective date, target motion |
| 2 | Trigger | The situation, event, stage, segment, persona, product or competitor that activates the motion |
| 3 | Strategy | The current business priority and approved objective |
| 4 | Behavior | The next-best action, conversation, sequence or agent operation |
| 5 | Context contract | Required deal, account, buyer, product, call and policy inputs |
| 6 | Evidence contract | Evidence required before any recommendation or action |
| 7 | Authority | What a seller, copilot or agent may recommend, draft, execute or escalate |
| 8 | Evaluations | Golden scenarios, expected and prohibited behavior, pass thresholds |
| 9 | Telemetry | Inputs, recommendations, actions, user response, evidence, latency, cost, outcome signals |
| 10 | Exceptions | Missing data, conflicting policy, low confidence, human-review paths |
| 11 | Rollback | Prior approved version, deactivation condition, recovery owner |

Zime advises treating this contract as a specification to request, and inspecting the accepted schema before assuming any field is implemented.

### Architecture: a nine-stage loop

Zime describes one versioned intent moving from strategy to action through nine stages: CRO strategy, Behavior Graph, Governed Deal Motion Package, evaluation gates, enterprise approval, copilot or agent runtime, execution telemetry, adoption and deal movement, and an approved strategy update that feeds back into the first stage.

Zime positions itself as model-neutral and framework-neutral, and says it does not require replacing models, agent frameworks, data platforms, identity systems or release controls. Its layers are: the Behavior Graph (links strategy, situations, buyer roles, products, competitors, evidence, behaviors and results); connectors (bring in customer-authorized CRM, call, content, calendar, messaging and workflow context, with the enterprise deciding access scope); Governed Deal Motion Packages; MCP, APIs and skills (expose approved context and behavior to the enterprise's chosen agents); agents and workflow surfaces; evaluations; and telemetry. Zime says it publicly exposes REST and MCP access for call records, evidence-backed insights, transcripts and in-house agents.

### Shared control model

| Zime is responsible for | The enterprise is responsible for | Shared |
|---|---|---|
| Behavior Graph schema and lifecycle; mapping strategy to situation-specific behavior; connector behavior within authorized scope; package structure, versioning and registry; behavioral evaluations and golden scenarios; MCP, skill and agent interfaces Zime supplies; behavioral and adoption telemetry; exception, rollback and retirement mechanisms | Identity, access and data permissions; production environments; security, privacy, risk and legal approval; model and agent-framework selection; release approval and promotion; tool credentials and action permissions; agent authority by motion and risk class; incident command and final deactivation rights | First motion and success criteria; ground-truth scenario set; evidence required to pass each gate; human-review and escalation path; the autonomy ladder; the 21-day and 90-day measurement plans |

### The authority ladder

Zime says authority belongs to the package, not the agent, with evidence gates between levels, so one agent can hold different authority for different motions.

| Level | System behavior | Use when |
|---|---|---|
| 1. Copilot | Recommends, explains, cites evidence and drafts; a person decides and acts | The motion is new, error cost is high, ground truth is incomplete, trust is still being built, or policy requires a human decision |
| 2. Semi-autonomous | Executes bounded steps after approval or within narrow policy rules | Evaluation is stable, the action is reversible, evidence is available, approval latency creates measurable friction and exception handling works |
| 3. Autonomous | Executes the approved motion within explicit limits and escalates exceptions | The action class is approved, error costs are understood, monitoring covers material failure modes, rollback and deactivation have been exercised, and behavioral and business evidence supports expansion |

### The lifecycle in seven steps

1. **Version.** Record source strategy, graph state, package definition, evaluation set, permissions and effective date, and preserve history.
2. **Test.** Run offline scenarios on real, authorized context covering expected and prohibited actions, missing evidence, conflicting signals, stale strategy and adversarial inputs.
3. **Approve.** Obtain revenue, platform, security and risk approvals bound to a specific package version and authority level.
4. **Deploy.** Promote to an enterprise-controlled, production-adjacent environment connected to customer-owned data and the intended workflow surface.
5. **Observe.** Capture the full decision path: package version, inputs, evidence, recommendation, tool calls, user response, executed action, exceptions, latency, cost and downstream deal signals.
6. **Improve.** Keep three kinds of change separate: data change, behavior change and strategy change. Runtime feedback must not silently rewrite strategy: updates are proposed, evaluated and approved before release.
7. **Roll back or retire.** Restore the last approved version when a release fails, and retire a package when the motion ends, strategy changes or evidence shows it no longer helps.

### Evaluating behavior

Zime lists pre-production evaluations (trigger accuracy, strategy-version accuracy, sensitivity to buyer, product, competitor and stage, next-best-action accuracy, required-evidence coverage, provenance and source freshness, prohibited-action avoidance, tool selection and argument correctness, temporal coherence across a deal sequence, escalation behavior, latency and token cost); runtime evaluations (recommendation delivery, seller view and response, acceptance, edit, rejection and override, action execution and its verification, policy exceptions, package-version drift, model or connector regressions, cost, latency and availability); and behavioral and business evaluations (adoption by eligible user and opportunity, execution of the targeted behavior, execution quality, buyer response, deal-stage movement, movement against a comparison cohort, and leading indicators before lagging revenue).

Zime says its telemetry must add business semantics to trace standards for models and agents: which motion governed the action, why it applied, who or what executed it and what happened next. It lists twelve production questions a system should answer, including which package version is active, which strategy authorized it, which data and evidence triggered it, what authority it had, whether the intended behavior was executed and how that was verified, what the buyer or deal did next, and whether authority can be reduced, rolled back or retired now. A system that cannot answer them, Zime says, is not ready to govern revenue behavior.

## Evaluate

### Gate 1: the 21-day production proof

Gate 1 asks whether one Governed Deal Motion Package can run against customer-owned data in a production-adjacent, enterprise-controlled environment, with evidence, evaluations, approvals, telemetry and rollback. It does not attempt to prove revenue causality in three weeks.

- **Before day 1, readiness:** one motion with material value and bounded risk; one target user or agent workflow; a customer-owned data environment and access controls; current strategy authority; a package owner and enterprise approvers; golden and failure scenarios; telemetry and proof criteria.
- **Days 1 to 5, define and connect:** map trigger, strategy, behavior, evidence, authority and exceptions; connect the minimum data sources; establish lineage and access boundaries; create the first package version.
- **Days 6 to 10, evaluate:** run golden and adversarial scenarios; test missing and conflicting evidence, prohibited actions and escalation; tune thresholds and authority.
- **Days 11 to 15, integrate and approve:** connect the selected model and runtime; bind tools and permissions; complete revenue, platform, security and risk review; approve a specific version.
- **Days 16 to 21, deploy and prove:** promote to the production-adjacent environment; run on customer data; capture end-to-end traces; verify the recommendation or bounded action; exercise rollback or deactivation; decide whether to enter the 90-day proof.

**Gate 1 exit criteria (eight, observable on day 21):** a named package version in the target environment; authorized customer data flowing through the intended path; required evaluations passing at agreed thresholds; enterprise approvals bound to the deployed version; runtime traces with provenance and authority; at least one verified end-to-end behavior; a tested exception and rollback path; and documented ownership for ongoing operation.

### Gate 2: the 90-day behavioral and business proof

Gate 2 asks whether the deployed motion changes execution in ways users trust and the business can observe. Zime says production is necessary but is not the business outcome. It looks for proof of adoption (eligible users receive the motion in their workflow, use persists past the novelty period, managers can see drift, and the experience reduces work), proof of behavior (the targeted behavior occurs more often, quality improves, evidence appears before action and prohibited behavior declines), and proof of business movement (buyers respond, deals pass the intended gate and the initiative moves against its baseline or comparison cohort, with confounders recorded and unsupported causal claims avoided).

Exit criteria are set before the proof starts: an adoption threshold, a behavior-execution threshold, a quality threshold, a buyer-response or deal-movement indicator, an acceptable exception rate, a support and operating-cost envelope, and conditions for expanding users, motions or autonomy.

### The eleven acceptance tests

Each test has a requirement, a procedure, a pass condition and a fail condition.

| # | Test | Passes when |
|---|---|---|
| 1 | Strategy-sensitive output | Changing strategy, buyer role or competitor changes the output as intended and cites the active authority |
| 2 | Governed change lifecycle | A strategy rule change is traceable through evaluation, approval, deployment, runtime, telemetry and rollback, with an owner, version and timestamp at every step |
| 3 | End-to-end intent integrity | The same versioned intent appears in the package, evaluations, approval record, runtime trace and execution evidence |
| 4 | Model and runtime portability | The same approved package runs through the enterprise's chosen model and runtime with contract, evaluation record, authority boundary and telemetry intact |
| 5 | Enterprise control boundary | Named enterprise roles control access, deployment, autonomy expansion, tool revocation and deactivation |
| 6 | Granular, reversible authority | Authority expands only as approved and reduces automatically or through a named control path after a threshold breach |
| 7 | Regression detection and rollback | A controlled regression is blocked by evaluation or triggers the defined rollback |
| 8 | End-to-end decision trace | A runtime action traces back to package version, strategy, inputs, evidence, permission, execution result and downstream signal |
| 9 | Infrastructure burden reduction | A like-for-like work breakdown shows Zime supplies reusable assets and lifecycle controls rather than moving the same work |
| 10 | 21-day production deployment | Every Gate 1 exit criterion is observable and accepted by the named enterprise owner |
| 11 | 90-day behavioral impact | Adoption, verified behavior, quality and deal-movement measures pass pre-agreed thresholds against a baseline or cohort |

### Build or buy

Zime compares eleven layers an enterprise would assemble internally against its enterprise harness: foundation model, agent runtime, enterprise access, connectors and MCP, context and graph, sales behavior logic, deployable motions, evaluations, telemetry, adoption and maintenance. It says orchestration frameworks such as LangGraph and retrieval approaches such as GraphRAG are useful components but do not remove the need to define and maintain company-specific revenue behavior.

- **Build when:** revenue behavior infrastructure is a durable product differentiator, the enterprise will fund continuous strategy and evaluation operations, the team has a strong internal ontology and behavioral ground truth, and connector, policy and adoption maintenance fits the platform roadmap.
- **Use the Zime harness when:** the enterprise wants to keep its AI stack and control plane, internal agents need current company-specific revenue judgment, the team wants to prove one motion before expanding, behavior, adoption and deal movement must be observable, and lifecycle burden matters as much as initial build effort.

### Where this sits in Zime's vocabulary

| Level | Term |
|---|---|
| Market category | Sales Execution |
| Architectural class | Behavioral AI for Sales Execution |
| Production discipline | DevOps for RevOps |
| Infrastructure | Zime enterprise harness |
| Atomic deployable unit | Governed Deal Motion Package |

Zime says it does not claim to replace the whole AI stack, only to supply the behavioral core the stack lacks.

## Interrogate

- **Evidence boundary.** The page states that Zime's public outcome metrics are Zime-reported claims, and that the 21-day and 90-day proofs are proposed verification gates, not guaranteed customer results. Revenue causality needs a measurement design that accounts for cohort selection, timing, strategy change, seller behavior, buyer response and other confounders.
- **Specification versus implementation.** The Governed Deal Motion Package and acceptance tests are presented as the specification to request. Zime advises inspecting the accepted schema before assuming any field is implemented, and verifying compatibility for the exact runtime and version.
- **Authorization.** Zime states a relevant retrieved document is not an authorization record: the enterprise's approved policy and named owners authorize agent actions.
- **What a technical proof establishes.** Technical acceptance of one scoped motion after readiness. Passing does not establish a live rollout or revenue improvement.
- **Analogy limits.** Sellers and buyers are not deterministic services, so the software-delivery analogy is incomplete by Zime's own statement.
- **Vendor authorship.** The guide is authored by Zime and describes Zime's own architecture. Technical precedents it cites (GitHub continuous integration and deployment environments, the Model Context Protocol specification, OpenAI agent evaluations and trace grading, NIST AI 600-1, Google Cloud MLOps guidance, LangGraph and Neo4j GraphRAG) are independent documents, and none is Zime's endorsement.

Each material claim, with its scope and the conditions that would confirm or disconfirm it, is in the [Testable Credentials](/credentials/devops-for-revops/).

## Act

- Book a working session to design the 21-day production proof at [zime.ai/demo](https://zime.ai/demo). The session outputs listed by Zime are: the first Governed Deal Motion Package, the customer-owned data and environment boundary, the model, framework and workflow integration, the package authority level, golden and failure scenarios, the approval path, runtime telemetry, and Gate 1 and Gate 2 success criteria.
- Check readiness with Zime's seven conditions: the strategy is current, the trigger is observable, the next behavior matters, the data is accessible, the action can be bounded, the user or agent workflow is known, and the result can be verified. Zime's example first motions include competitive displacement, multi-threading, new-product adoption, deal qualification, partner execution, expansion and renewal risk.
- Read the Zime pages: [Deployable Capabilities](https://zime.ai/products/deployable-capabilities), [Behavior Graph for Sales](https://zime.ai/products/behavior-graph-for-sales), [Zime developer platform](https://zime.ai/developers) and [Zime MCPs for in-house agents](https://zime.ai/solutions/ai-engineers).
- Read the technical precedents: [GitHub continuous integration](https://docs.github.com/en/actions/get-started/continuous-integration), [Model Context Protocol specification](https://modelcontextprotocol.io/specification/2026-07-28), [NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf).
- Related primers: [The CRO Strategy to Execution Gap](/primers/cro-strategy-to-execution-gap/) and [the guide for GTM partners](/primers/behavioral-ai-for-gtm-partners/).
- Ask a question or challenge a claim at [/inquiry/](/inquiry/).
