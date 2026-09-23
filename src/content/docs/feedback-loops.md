---
title: Generative Loops
---

<p class="eyebrow">The Principle</p>

## A generative loop that includes review is only as good as its stopping rule and its evaluation method

A **generative loop** is any orchestration shape where an agent's output feeds back into another round of generation. Not every generative loop includes review — some just regenerate until a fixed count or a simple automated check passes. This page is about the kind that does: a **generator/reviewer loop**, where a generator agent produces work and a reviewer agent evaluates it and sends it back for revision. Pairing a generator with a reviewer doesn't automatically produce higher quality — it produces higher quality only if the loop has a defined stopping point and a real way to measure whether an iteration actually improved. Without both, it either runs forever or converges on something nobody checked.

<p class="eyebrow">Why It Exists</p>

## Sequential chain, parallel agents, and supervisor all end on their own. A generator/reviewer loop doesn't

[Agentic workflow design](/agentic-workflow-design/) names four orchestration patterns from the same source: sequential chain, parallel agents (what design-system-ops calls a parallel fan-out), supervisor, and what design-system-ops calls the **feedback loop** — a generator paired with a reviewer that reviews its output and sends it back (— design-system-ops, knowledge-notes/agent-orchestration-guide.md). This wiki calls that fourth pattern by its more specific name, a **generator/reviewer loop** — one type of generative loop, the type that includes review. The first three are shapes for routing work — who runs, in what order, reporting to whom — and each one has a built-in end: a sequential chain finishes when the last agent in it runs, parallel agents finish when every branch reports back, a supervisor finishes when it stops delegating. None of them need a rule for when to stop, because stopping is just finishing.

A generator/reviewer loop is the one pattern that routes work back to *itself*. Nothing about that shape says when to quit. Left alone, it "can loop indefinitely if convergence criteria are not defined" (— same source), which is why it's the only one of the four that ships with a hard cap: roughly three iterations. That's not a stricter version of the same discipline the other three patterns need — it's a requirement the other three don't have at all.

---

## In Practice

#### 1. Cap the loop, define what "converged" means

A generator/reviewer loop needs an explicit stopping condition before it runs, not a hope that it'll settle naturally. Three iterations is the design-system-ops team's working cap — not because three is magic, but because an unbounded loop is a symptom of a convergence criterion nobody actually wrote down.

#### 2. Reach for a review loop only when the task actually needs one

Romina Kavcic's test for whether a task deserves an agent at all — "find the simplest solution possible, and only increase complexity when needed" (— [Romina Kavcic, "Should you build an agent for your design system"](https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your)) — applies one level down, to which orchestration pattern to reach for. A generator/reviewer loop is the most expensive of the four to get wrong: it's the only one that can run indefinitely, and every extra iteration is another round of agent cost. If the work is deterministic and doesn't need review, a sequential chain or parallel agents get the same job done without the open-ended shape.

#### 3. The same discipline shows up one level up, in context itself

Diana Wolosin's benchmark of eight MCP configurations against 1,056 prompts — propose a format, measure how agents resolve it, revise — is a generative loop applied to infrastructure instead of a single output: a **format-evaluation loop**, where the candidate being generated and measured is a context format, not a piece of content. It still generates a candidate and evaluates it, even though nothing here is an AI agent producing the candidates. It's not one of design-system-ops's four orchestration patterns; it's evidence the same underlying discipline (define what "correct" means, then measure against it, don't assume) recurs outside workflow design too. See [Context engineering](/context-engineering/) for the full account.

#### 4. Ship the loop as a UI pattern, not just a backend process

AWS Cloudscape treats response feedback as a first-class, shippable component rather than an internal-only evaluation step: thumbs-up/thumbs-down response controls, and a dedicated **response regeneration** pattern for when an output misses. — [AWS Cloudscape, "Response regeneration"](https://cloudscape.design/gen-ai/patterns/response-regeneration/). It's the same underlying discipline as the orchestration-level generator/reviewer loop, applied at the point a real user interacts with generated output, not just between two agents.

---

## Common mistakes

- **Shipping a generator/reviewer loop with no defined exit condition.** "Never silently skip a failed step" applies here too — an unbounded loop that never converges is a hidden failure mode, not a thorough one (— design-system-ops, knowledge-notes/agent-orchestration-guide.md).
- **Reaching for a generator/reviewer loop when a sequential chain or parallel agents would finish the job.** It's the one pattern of the four with no built-in stopping point — that's a cost, not a feature, and it's only worth paying when the task genuinely needs review-and-revise rather than a fixed sequence of steps.
- **Assuming a context format is correct because it looks reasonable.** Reasonable and empirically correct are different claims — Wolosin's benchmark exists precisely because the format that seemed obvious wasn't the one that performed best.
- **Treating generative loops as an internal orchestration detail with no user-facing form.** Cloudscape's regeneration and rating controls show the same discipline can — and often should — be a component a user directly touches, not just a step between two agents.
