# Documentation for Agents

<p class="eyebrow">The Principle</p>

## Documentation for agents needs a different shape, not just more of the same shape

A page of prose with a sidebar is a good shape for a human skimming for the one fact they need. It's a poor shape for a model that has to parse the whole thing to find that fact. Documentation written to be consumed by agents needs structured metadata as a first-class artifact — not an appendix bolted onto the human-facing docs.

<p class="eyebrow">Why It Exists</p>

## The two audiences need different formats, not different effort levels

Diana Wolosin's practical split: JSON for component APIs — props, sizes, variants — because a contract needs to be unambiguous, and Markdown for natural-language rules, because rules need nuance a strict schema can't hold. The distinction isn't about which audience gets more care; it's about which format actually serves the claim being made.

Atlassian's design system team made the same bet, and measured it: after shipping an MCP server plus structured content schemas for components, icons, tokens, and lint rules, they reported "52% accuracy improvement in AI calls, 34% faster on average across ADS specific tasks, 26% reduction in AI tooling calls, 16% reduction in AI token usage." — [Atlassian, "Atlassian Design System: building the context engine for the AI era"](https://www.atlassian.com/blog/ai-at-work/atlassian-design-system-building-the-context-engine-for-the-ai-era)

---

## In Practice

#### 1. Structure as a contract, prose as judgment

Wolosin's rule of thumb: component APIs — the things that need to be exact, like a prop's type or a variant's valid values — belong in JSON, because "it has explicit keys, explicit values, explicit boundaries, and there is no ambiguity." Guidance that requires judgment — when to use a variant, what an anti-pattern looks like — stays in natural language, because forcing it into a rigid schema would strip the nuance that makes it useful.

#### 2. The same structuring work serves both audiences

Atlassian's sharpest line on why this isn't AI-only busywork: "To identify the rules that help LLMs, you also uncover the rules that help explain these concepts to humans — and that's a good thing." — [Atlassian, "Atlassian Design System: building the context engine for the AI era"](https://www.atlassian.com/blog/ai-at-work/atlassian-design-system-building-the-context-engine-for-the-ai-era). This is the same claim [Governance under AI consumption](governance-under-ai-consumption.md) makes from Shane P Williams's side — legibility work for agents is quality work for everyone, not a separate track.

#### 3. Tokens and components as an API contract, not a wall of nested objects

Romina Kavcic makes the case for **tokens as an API**: most tokens are structured for humans, so when an AI reads them via MCP, it sees "a wall of nested objects with no context about why these values exist or when to use them." Tokens are the API contract between design and code — and just as you can't restructure a component library overnight, "you can add descriptions to your top 20 tokens in an hour," and that hour propagates upward through everything built on them. It's the semantic-naming idea from [Token architecture](token-architecture.md) — name intent, not appearance — seen through an AI's eyes. — [Romina Kavcic, "Design tokens that AI can actually read"](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually)

Murphy Trueman makes the parallel argument for **components as an API**: "Your design system is already an API; the question is whether it's a good one." He argues for purpose-driven classification over appearance-based naming — a component called `FeatureHighlight` or `OnboardingStep` tells a machine its functional role; `BlueCard` or `CardBase` tells it nothing. — [Murphy Trueman, "Your next design system user is an agent"](https://blog.murphytrueman.com/your-next-design-system-user/)

#### 4. Make the documentation of a pattern the pattern itself

IBM Carbon ships its AI-transparency requirement as a shippable component, not a policy page: "Each AI component is required to have an embedded AI label and explainability popover that alerts users to AI-generated content." — [Carbon Design System, "Carbon for AI"](https://carbondesignsystem.com/guidelines/carbon-for-ai/). The documentation isn't a separate artifact describing the requirement — the requirement is embedded in the component itself, so it can't drift out of sync with what ships. See [Designing agentic UI patterns](agentic-ui-patterns.md) for more on this approach.

---

## Common mistakes

- **Writing one document and hoping it serves both audiences equally well.** A human-readable prose page and machine-readable structured metadata are different artifacts serving different consumption patterns — treating one as a substitute for the other under-serves whichever reader didn't get the format built for them.
- **Forcing judgment-dependent guidance into a rigid schema.** Not everything belongs in JSON — Wolosin's split exists because some rules need the nuance prose carries and a strict contract would strip.
- **Treating agent-readable documentation as pure overhead with no payoff for human readers.** Atlassian's numbers exist because the same structuring work that helped their AI tooling also clarified the rules for their own team.
- **Naming components and structuring tokens by appearance instead of function.** `BlueCard` or `CardBase` tells a machine nothing about its role; `FeatureHighlight` or `OnboardingStep` does — the same ambiguity problem Kavcic identifies in undocumented token objects.
