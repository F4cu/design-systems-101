# Context Engineering

<p class="eyebrow">The Principle</p>

## Context is an artifact you engineer, not a byproduct of documentation

A design system's context — the structured facts an AI agent needs to use it correctly — doesn't show up for free once you've written good docs. It has to be built as its own deliberate artifact: scoped, structured, and tested against how agents actually consume it. Two practitioners, working independently, converge on the same shape for this: Murphy Trueman's **context engine** ([AI context & readiness](ai-context-and-readiness.md)) and Diana Wolosin's **context engine** — same name, arrived at separately, from a different production system.

<p class="eyebrow">Why It Exists</p>

## Good documentation for humans is not automatically good context for a model

Wolosin's framing is blunt about why this needs its own discipline: "Your tokens, guidelines, accessibility rules, and UX patterns don't matter if the LLM consuming them can't read them as structured, meaningful context." — [Diana Wolosin, "Design Systems for AI: Introducing the Context Engine"](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01)

Prose written for a human reader relies on things a model doesn't have: the ability to skim for relevance, tolerance for ambiguity, a colleague to ask when something's unclear. A context engine is the answer to that gap — not a rewrite of the docs, but a structured layer that sits alongside them. "A context engine is the machine-readable brain of your design system. It captures the why, what, and how of your product, then structures it into metadata that AI can reliably use." — same source. Her conclusion is a deliberate escalation from "nice to have" to "required": "The context engine is not the future of design systems. It's the missing infrastructure that design systems need today to thrive in the AI era." — same source

---

## In Practice

#### 1. Treat context quality as an empirical question, not a guess

Wolosin didn't assume a metadata format would work — she tested it. At Indeed, she benchmarked eight different MCP (Model Context Protocol) configurations against 1,056 prompts to find which structure agents actually resolved correctly. That's the difference between context engineering as a one-time write-up and context engineering as a practice with a generative loop of its own — see [Generative loops](feedback-loops.md) for how the same propose-measure-revise discipline shows up again in agent orchestration, where it has to answer a harder question: when does the loop stop.

#### 2. Agents need an environment, not just instructions

Jan Six — who designs agent experiences at GitHub for Copilot and created Tokens Studio, the widely used Figma design-tokens plugin — frames context engineering as environment design, not prompt-writing: "Agents are changing our world fast, multiplying what we can achieve. But they're only as good as the instructions we give them—and the environments we put them in." — [Jan Six, Into Design Systems conference](https://www.intodesignsystems.com/agenda/build-design-systems-with-agents). The environment includes what the agent can reach (MCP layering — see [Scaling AI effort to risk](scaling-ai-effort.md)) as much as what it's told.

#### 3. Two independent context engines, same shape

Murphy Trueman's design-system-ops toolkit builds its context engine out of seven YAML blueprints encoding everything an agent needs: UX patterns, UI tokens, content voice, accessibility contracts, ethical guardrails like dark-pattern prohibitions, technical prop contracts, and business intelligence (what's safe to A/B test, and what never is). The key idea: not every task needs every blueprint. An agent generating a component loads technical, UI, and accessibility. One writing copy loads content and ethical. A full design review loads all seven. — design-system-ops, knowledge-notes/context-engine-blueprints.md

Wolosin's context engine was built independently, for a different production system, without reference to Trueman's. Both land on the same underlying shape: don't hand an agent everything at once, structure context into scoped, loadable units, and treat the structuring work itself as infrastructure rather than documentation overhead. Two practitioners converging on the same design from separate starting points is stronger evidence than either alone.

---

## Common mistakes

- **Assuming existing documentation already is context.** Prose written for a human skimmer is not the same artifact as structured metadata a model can reliably parse — "your tokens, guidelines, accessibility rules, and UX patterns don't matter if the LLM consuming them can't read them as structured, meaningful context."
- **Shipping a context format without testing it against real agent behavior.** Wolosin's 1,056-prompt benchmark exists because the "obviously correct" format isn't obvious until you measure which one agents actually use correctly.
- **Treating context engineering as a writing task instead of an environment-design task.** Jan Six's framing — instructions *and* environments — is the reminder that what an agent can reach matters as much as what it's told.
