---
title: Context Engineering
---

A design system's context, meaning the structured facts an AI agent needs to use it correctly, doesn't appear for free once you've written good docs. It has to be built as its own artifact: scoped, structured, and tested against how agents actually use it. Two practitioners working independently arrived at the same shape and the same name for it, a **context engine**: Murphy Trueman and Diana Wolosin.

:::tip[Key takeaways]
- Treat context as its own artifact, separate from human docs
- Test context formats against real agent behavior before trusting them
- Design the agent's environment, not just its instructions
- Load only the context each task needs
:::

## The problem

[Diana Wolosin](https://www.designsystemscollective.com/design-systems-for-ai-introducing-the-context-engine-777726da6a01) is blunt about why this needs its own discipline:

> "Your tokens, guidelines, accessibility rules, and UX patterns don't matter if the LLM consuming them can't read them as structured, meaningful context."
>
> — Diana Wolosin, "Design Systems for AI: Introducing the Context Engine"

Prose written for people relies on things a model doesn't have: skimming for relevance, tolerance for ambiguity, and a colleague to ask. A context engine fills that gap. It isn't a rewrite of the docs, but a structured layer alongside them. In Wolosin's words: "A context engine is the machine-readable brain of your design system. It captures the why, what, and how of your product, then structures it into metadata that AI can reliably use." She calls it required, not optional: "The context engine is not the future of design systems. It's the missing infrastructure that design systems need today to thrive in the AI era."

## Practices

### Test context formats against real agent behavior

Wolosin didn't assume a metadata format would work. She tested it. At Indeed, she benchmarked eight MCP (Model Context Protocol) configurations against 1,056 prompts to find which structure agents actually resolved correctly. The "obviously correct" format isn't obvious until you measure it. [Generative loops](/generative-loops/) covers the same propose-measure-revise discipline in agent orchestration, where the harder question is when the loop stops.

### Design the agent's environment, not just its instructions

Jan Six designs agent experiences for Copilot at GitHub and created Tokens Studio, the widely used Figma design-tokens plugin. [He frames](https://www.intodesignsystems.com/agenda/build-design-systems-with-agents) context engineering as environment design, not prompt writing: "Agents are changing our world fast, multiplying what we can achieve. But they're only as good as the instructions we give them—and the environments we put them in." The environment includes what the agent can reach (see MCP layering in [Scaling AI effort to risk](/scaling-ai-effort-to-risk/)) as much as what it's told.

### Load only the context each task needs

Trueman's design-system-ops toolkit (`knowledge-notes/context-engine-blueprints.md`) builds its context engine from seven YAML blueprints: UX patterns, UI tokens, content voice, accessibility contracts, ethical guardrails (like bans on dark patterns), technical prop contracts, and business intelligence (what's safe to A/B test, and what never is). Not every task needs every blueprint. An agent generating a component loads technical, UI, and accessibility. One writing copy loads content and ethical. A full design review loads all seven.

Wolosin built hers independently, for a different production system. Both land on the same shape: don't hand an agent everything at once, split context into scoped, loadable units, and treat that structuring as infrastructure, not documentation overhead. Two practitioners reaching the same design from separate starting points is stronger evidence than either alone.

## Common mistakes

- **Assuming existing documentation already is context.** Prose written for a human skimmer isn't the same artifact as structured metadata a model can reliably parse. Good docs are a starting point, not a substitute.
