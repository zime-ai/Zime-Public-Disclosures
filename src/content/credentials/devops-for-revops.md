---
id: "ZIME-CRED-2026-005"
title: "Testable Credentials: DevOps for RevOps"
summary: "Claims, evidence paths, qualifications, frequently asked questions and inquiry prompts for the Zime primer on DevOps for RevOps."
artifact_type: testable_credentials
status: draft
visibility: public
version: "0.1"
principles_version: "Eight Principles of Generative Trust, Proposed v0.1"
declaring_party:
  name: Zime
  entity_id: ENT-ZIME-001
updated_date: 2026-11-02
review_by: 2026-12-02
canonical_path: "/credentials/devops-for-revops/"
for_artifact: "ZIME-PRIMER-2026-005"
related_artifacts:
  - "https://zime.ai/primers/devops-for-revops"
ai_assistance:
  used: true
  roles: [extraction, structure, drafting_assistance, formatting]
  human_review: required
claims:
  - claim_id: CLM-ZIME-032
    statement: "Zime defines DevOps for RevOps as the production discipline for versioning, testing, approving, deploying, observing, improving, rolling back and retiring the logic that governs revenue behavior."
    claim_type: category_interpretation
    status: qualified
    scope: "A term and framing proposed by Zime, mapped by analogy to software delivery practice. Zime states sellers and buyers are not deterministic services and revenue outcomes have long causal chains, so the analogy is incomplete."
    evidence_paths:
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "A change to one approved strategy rule can be traced through evaluation, approval, deployment, runtime, telemetry and rollback, with an owner, version and timestamp at each step (Acceptance Test 2)."
    disconfirmation_conditions:
      - "A change depends on an untracked prompt edit, an undocumented content refresh or a manual announcement."
    independent_references: []
  - claim_id: CLM-ZIME-033
    statement: "The deployable unit for revenue behavior is a Governed Deal Motion Package with eleven parts: identity, trigger, strategy, behavior, context contract, evidence contract, authority, evaluations, telemetry, exceptions and rollback."
    claim_type: design_intent
    status: qualified
    scope: "Zime presents this as the specification to request. The primer advises inspecting the accepted schema before assuming any field is implemented. Zime's public Deployable Capabilities page describes governed packages."
    evidence_paths:
      - "https://zime.ai/products/deployable-capabilities"
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "A delivered package for one motion contains all eleven parts, and the same versioned intent appears in the package, evaluation results, approval record, runtime trace and execution evidence (Acceptance Test 3)."
    disconfirmation_conditions:
      - "Parts are missing from the accepted schema, or the chain breaks between strategy and prompt, prompt and action, or action and verified execution."
    independent_references: []
  - claim_id: CLM-ZIME-034
    statement: "Zime is model-neutral and framework-neutral: its behavioral layer can run through an enterprise's chosen model and agent runtime without replacing models, agent frameworks, data platforms, identity systems or release controls."
    claim_type: design_intent
    status: qualified
    scope: "Zime's stated architecture. The primer says compatibility must be verified for the exact runtime and version. Zime says it publicly exposes REST and MCP access."
    evidence_paths:
      - "https://zime.ai/developers"
      - "https://zime.ai/solutions/ai-engineers"
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "The same approved package runs through the enterprise's selected model and runtime with the package contract, evaluation record, authority boundary and telemetry intact (Acceptance Test 4)."
    disconfirmation_conditions:
      - "The motion works only in an opaque Zime-only runtime, or requires abandoning the enterprise control plane."
    independent_references: []
  - claim_id: CLM-ZIME-035
    statement: "Agent authority belongs to the package, not the agent, and is granted on a three-level ladder (copilot, semi-autonomous, autonomous) with evidence gates between levels, so one agent can hold different authority for different motions."
    claim_type: design_intent
    status: qualified
    scope: "Zime's proposed control model. The enterprise retains control of production and agent authority, including final deactivation rights."
    evidence_paths:
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "A package is promoted from recommendation to bounded execution, expands only the approved permission, and authority reduces automatically or through a named control path after a simulated threshold breach (Acceptance Test 6)."
    disconfirmation_conditions:
      - "Authority is all-or-nothing, global to the agent, or cannot be revoked without redeploying the whole system."
    independent_references: []
  - claim_id: CLM-ZIME-036
    statement: "Zime proposes a 21-day production proof (Gate 1) in which one Governed Deal Motion Package runs on customer-owned data in an enterprise-controlled, production-adjacent environment, with eight observable exit criteria on day 21."
    claim_type: offer
    status: qualified
    scope: "A proposed verification gate, not a guaranteed result. The charter sets dates and criteria. Passing does not establish a live rollout or revenue improvement. The primer states the proof does not attempt to prove revenue causality in three weeks."
    evidence_paths:
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "On day 21, a named package version is in the target environment, authorized data flows through the intended path, evaluations pass, approvals are bound to the deployed version, traces show provenance and authority, one end-to-end behavior is verified, rollback has been tested and ownership is documented (Acceptance Test 10)."
    disconfirmation_conditions:
      - "The result is a slide, synthetic demo, vendor-only sandbox or ungoverned prompt that cannot be promoted."
    independent_references: []
  - claim_id: CLM-ZIME-037
    statement: "Zime proposes a 90-day behavioral and business proof (Gate 2) that tests adoption, verified behavior, quality and buyer or deal movement against thresholds set before the proof starts."
    claim_type: offer
    status: qualified
    scope: "A proposed verification gate, not a guaranteed result. Revenue causality requires a measurement design that accounts for cohort selection, timing, strategy change, seller behavior, buyer response and other confounders."
    evidence_paths:
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "Adoption, verified behavior, quality and deal-movement measures pass pre-agreed thresholds against a defined baseline or comparison cohort over 90 days (Acceptance Test 11)."
    disconfirmation_conditions:
      - "The proof relies on output volume, anecdotal enthusiasm or a lagging revenue number with no traceable mechanism."
    independent_references: []
  - claim_id: CLM-ZIME-038
    statement: "Public Zime outcome metrics are Zime-reported claims, and Zime's proofs verify execution and behavior rather than guaranteeing customer outcomes."
    claim_type: institutional_fact
    status: qualified
    scope: "The evidence boundary stated by Zime on the source page."
    evidence_paths:
      - "https://zime.ai/primers/devops-for-revops"
    confirmation_conditions:
      - "Zime's public pages label self-reported metrics as Zime-reported and separate them from independent evidence."
    disconfirmation_conditions:
      - "Zime presents self-reported metrics as independently verified or as guaranteed results."
    independent_references: []
prompt_sets:
  - persona: ai_platform_architect
    prompt: "Read the Zime primer ZIME-PRIMER-2026-005 and its Testable Credentials. Compare the Governed Deal Motion Package and the authority ladder against how we would version, evaluate, approve and roll back a revenue agent with our existing stack. What would we build ourselves, and what would we still need to ask a vendor to show?"
  - persona: skeptical_researcher
    prompt: "Zime describes DevOps for RevOps by analogy to software delivery and states the analogy has limits. What independent sources on agent evaluation, trace grading and AI risk management support or conflict with the eleven acceptance tests, and where is the analogy weakest?"
  - persona: security_and_risk
    prompt: "Using only Zime's public description, what authority, data access and deactivation controls remain with the enterprise, what must be verified in writing before a 21-day production proof, and what failure modes should the proof exercise?"
revision_record: []
---

## What this page is

This page lists the material claims in the Zime primer on DevOps for RevOps, the evidence behind them, what limits them and how to test them. The questions below are answered in full sentences so each answer can be read on its own.

## Frequently asked questions

### What is DevOps for RevOps?

DevOps for RevOps is Zime's name for the production discipline that governs revenue behavior through a lifecycle of versioning, testing, approving, deploying, observing, improving, rolling back and retiring. The primer describes it as a discipline, not a product (CLM-ZIME-032).

### Is DevOps for RevOps a product?

No, according to the primer. It is a production discipline. Zime's proposed contribution is behavioral infrastructure and operating support within an agreed scope.

### Why can a revenue AI agent be technically live and still wrong?

Because retrieval and a capable model reconstruct what happened but do not decide which strategy applies, which buyer role matters, which competitor changes the proof, which evidence authorizes a recommendation or what authority the agent holds. Zime lists eight such questions that a typical stack leaves unanswered.

### What is a Governed Deal Motion Package?

A versioned execution object for one selling situation with eleven parts: identity, trigger, strategy, behavior, context contract, evidence contract, authority, evaluations, telemetry, exceptions and rollback. Zime presents it as the specification to request, and advises inspecting the accepted schema before assuming any field is implemented (CLM-ZIME-033).

### Must we replace our model or agent framework?

No, according to Zime. The architecture is described as model-neutral and framework-neutral, but compatibility must be verified for the exact runtime and version (CLM-ZIME-034).

### Who can authorize an agent action?

The enterprise's approved policy and named owners. Zime states that a relevant retrieved document is not an authorization record.

### What is the authority ladder?

A three-level model: copilot (recommends and drafts, a person acts), semi-autonomous (executes bounded steps after approval or within narrow policy rules), and autonomous (executes the approved motion within explicit limits and escalates exceptions). Authority belongs to the package, not the agent (CLM-ZIME-035).

### Who controls what, Zime or the enterprise?

The enterprise controls identity and access, production environments, security and risk approval, model and framework selection, release approval, tool credentials, agent authority by motion and risk class, and incident command with final deactivation rights. Zime is responsible for the Behavior Graph schema, mapping from strategy to behavior, package structure and versioning, behavioral evaluations, the interfaces it supplies, telemetry and exception and rollback mechanisms. First motion, success criteria, ground-truth scenarios, escalation paths and the measurement plans are shared.

### What is the 21-day production proof?

Gate 1: one Governed Deal Motion Package runs on customer-owned data in a production-adjacent, enterprise-controlled environment. It runs in four day-ranges after a readiness check (define and connect, evaluate, integrate and approve, deploy and prove) with eight observable exit criteria on day 21. It does not attempt to prove revenue causality (CLM-ZIME-036).

### What does a technical proof establish?

Technical acceptance of one scoped motion after readiness. Passing does not establish a live rollout or revenue improvement.

### What is the 90-day proof?

Gate 2: a test of adoption, verified behavior, execution quality and buyer or deal movement against thresholds set before the proof starts, using a baseline or comparison cohort with confounders recorded (CLM-ZIME-037).

### When should we build this layer ourselves?

When sustained operation of revenue behavior infrastructure is a strategic capability and the team can fund domain expertise, tests, governance and maintenance along with initial integration. Zime says the harness fits better when the enterprise wants to keep its AI stack, needs current company-specific revenue judgment in internal agents, wants to prove one motion first, and needs behavior, adoption and deal movement to be observable.

### What is the difference between Sales Execution, Behavioral AI for Sales Execution, DevOps for RevOps and the Governed Deal Motion Package?

Sales Execution is the market category, Behavioral AI for Sales Execution is the architectural class, DevOps for RevOps is the production discipline, the Zime enterprise harness is the infrastructure that supplies and operates the behavioral layer within enterprise controls, and the Governed Deal Motion Package is the atomic deployable unit.

## Scope, constraints and qualifications

- This is a voluntary commercial disclosure. Zime has a commercial interest in the discipline and the infrastructure it describes.
- The 21-day and 90-day proofs are proposed verification gates, not guaranteed results (CLM-ZIME-038).
- The acceptance tests are Zime's proposed criteria. They are not an independent standard.
- Chatbot output is not proof. Use the prompts above to compare sources and surface limitations.
