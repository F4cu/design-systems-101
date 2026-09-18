# Agentic Workflow Design

<p class="eyebrow">The Principle</p>

## Agentic workflows live or die on coordination, not agent intelligence

Agentic workflows are a coordination problem, not a magic-more-capability problem. When you chain AI agents together — small automated workers, each doing one job — the hard part isn't making any single agent smarter. It's defining how they hand work to each other, and exactly where a human steps in. Skip either definition and you get output nobody can trust or explain.

<p class="eyebrow">Why It Exists</p>

## Skipped failures and complexity without payoff come from the same root cause

Two independent voices point at the same failure mode from different angles.

One team's knowledge notes warn: "Never silently skip a failed step — a skipped audit is worse than a failed audit because the consumer assumes the audit passed" (— design-system-ops, knowledge-notes/agent-orchestration-guide.md). That's opacity without accountability.

Romina Kavcic attacks it from the economics side: "find the simplest solution possible, and only increase complexity when needed." If a task follows the same steps every time, you want a workflow, not an agent. And if a run saves less than $0.10 of human time, an agent doesn't pay for itself (— [Romina Kavcic, "Should you build an agent for your design system"](https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your)).

Complexity without payoff on one side, hidden failures on the other — both come from building the automation before designing the coordination.

---

## In Practice

#### 1. Orchestration patterns

The design-system-ops notes describe four orchestration patterns — named ways agents pass work around. Two are worth calling out here: a **sequential chain** runs agents in order, each feeding the next (Component Generator → Description Writer → Accessibility Auditor). It's easy to debug, but slow and fragile to early failures. A **feedback loop** pairs a generator with a reviewer that critiques and sends work back — higher quality than a single pass, but it "can loop indefinitely if convergence criteria are not defined," so cap it at about three iterations (— design-system-ops, knowledge-notes/agent-orchestration-guide.md).

#### 2. Autonomy levels per action

For the human side, the same practitioner's oversight framework starts from "Agents execute; humans are accountable," and assigns an autonomy level per *action*, not per agent. At one pole, Level 1 (fully autonomous) covers deterministic, programmatically verifiable work like generating a prop list from a TypeScript interface. At the other useful pole, Level 3 (human-in-the-loop) means the agent prepares the action but a human approves it before it executes — publishing a component update, applying a breaking token change (— design-system-ops, knowledge-notes/human-oversight-framework.md).

#### 3. Scoped output claims

One discipline applies to anything an agent publishes on its own: scope claims to what was actually inspected — "no X was found in the files scanned," never "the system has no X" (— design-system-ops, knowledge-notes/output-discipline.md).

## Diagram

Should this task get an agent at all — and how much rope?

<div class="mermaid-wrap">

```mermaid
graph LR
  A[New task to automate] --> B{Same steps<br>every time?}
  B -- Yes --> C[Workflow, not agent<br>pick an orchestration pattern]
  B -- No, needs judgment --> D{Saves enough per run<br>to justify the cost?}
  D -- No --> E[Don't automate it]
  D -- Yes --> F{Mistake cheap<br>to catch and undo?}
  F -- Yes --> G[Agent, Level 1–2<br>autonomous, logged]
  F -- No --> H[Agent, Level 3<br>human approves each action]
```

</div>

The left branch is Kavcic's workflow-vs-agent test; the autonomy levels on the right are from the design-system-ops oversight framework.

## Common mistakes

Treating "the agent *can* do X" as the same question as "the agent should be trusted to do X unsupervised." They're different questions, and teams that never draw the boundary land on one of two failure modes:

- **Over-trusting the agent.** Unchecked output quietly degrades the system over time.
- **Under-trusting the agent.** So much review gets layered on that the productivity gain evaporates.

— design-system-ops, knowledge-notes/human-oversight-framework.md
