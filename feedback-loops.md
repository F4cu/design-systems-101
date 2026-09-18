# Feedback Loops

<p class="eyebrow">The Principle</p>

## A feedback loop is only as good as its convergence criteria and its evaluation method

Pairing a generator with a critic doesn't automatically produce higher quality — it produces higher quality only if the loop has a defined stopping point and a real way to measure whether an iteration actually improved. Without both, a feedback loop either runs forever or converges on something nobody checked.

<p class="eyebrow">Why It Exists</p>

## An unbounded loop and an untested format fail the same way: no one defined "good enough"

[Agentic workflow design](agentic-workflow-design.md) already names the **feedback loop** as one of four orchestration patterns — a generator paired with a reviewer that critiques and sends work back — and warns that it "can loop indefinitely if convergence criteria are not defined," capping it at roughly three iterations (— design-system-ops, knowledge-notes/agent-orchestration-guide.md).

The same failure shows up one level up, in how context itself gets built. Diana Wolosin didn't assume the format she gave to agents was the right one — she treated it as a hypothesis to test. At Indeed, she benchmarked eight different MCP configurations against 1,056 prompts to find which structure agents actually resolved correctly. That's a feedback loop applied to context engineering itself, not just to code generation: propose a format, measure how agents perform against it, revise. See [Context engineering](context-engineering.md) for the broader practice this sits inside.

---

## In Practice

#### 1. Cap the loop, define what "converged" means

The existing orchestration guidance holds here: a feedback loop needs an explicit stopping condition before it runs, not a hope that it'll settle naturally. Three iterations is the design-system-ops team's working cap — not because three is magic, but because an unbounded loop is a symptom of a convergence criterion nobody actually wrote down.

#### 2. Evaluate the format, not just the output

Wolosin's benchmark is a reminder that "feedback loop" doesn't only mean generator-and-critic on a single piece of output. It applies to the infrastructure underneath: is this metadata schema, this component manifest, this token structure actually the one agents use correctly, or just the one that seemed reasonable when someone wrote it? Measuring across 1,056 prompts and 8 configurations turned a guess into a finding.

#### 3. Ship the loop as a UI pattern, not just a backend process

AWS Cloudscape treats response feedback as a first-class, shippable component rather than an internal-only evaluation step: thumbs-up/thumbs-down response controls, and a dedicated **response regeneration** pattern for when an output misses. — [AWS Cloudscape, "Response regeneration"](https://cloudscape.design/gen-ai/patterns/response-regeneration/). It's the same underlying discipline as the orchestration-level feedback loop, applied at the point a real user interacts with generated output, not just between two agents.

---

## Common mistakes

- **Shipping a feedback loop with no defined exit condition.** "Never silently skip a failed step" applies here too — an unbounded loop that never converges is a hidden failure mode, not a thorough one (— design-system-ops, knowledge-notes/agent-orchestration-guide.md).
- **Assuming a context format is correct because it looks reasonable.** Reasonable and empirically correct are different claims — Wolosin's benchmark exists precisely because the format that seemed obvious wasn't the one that performed best.
- **Treating feedback loops as an internal orchestration detail with no user-facing form.** Cloudscape's regeneration and rating controls show the same discipline can — and often should — be a component a user directly touches, not just a step between two agents.
