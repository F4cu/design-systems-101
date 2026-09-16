# AI Context & Readiness

<p class="eyebrow">The Principle</p>

## AI readiness means nothing is left implicit

An AI-ready design system is one that can be consumed, reasoned about, and generated from by AI agents and tooling without requiring implicit knowledge that was never written down. Most systems weren't built for this — they assume a human who can infer intent from visual context or ask a colleague. An AI agent can't infer or ask; it works only with what's explicit. But the gap AI exposes isn't new: the same implicit knowledge that confuses an agent has always confused new team members and external contributors. AI readiness is design-system quality, applied with more precision. — design-system-ops, knowledge-notes/ai-readiness.md

<p class="eyebrow">Why It Exists</p>

## Bad context compounds through every downstream consumer

Without explicit context, errors compound. One team's knowledge notes call this the **context cascade**: context quality at the source compounds through every downstream consumer. Strong metadata in a Figma component leads to accurate AI-generated code, correct implementation, and reliable testing. Weak metadata leads to hallucinated props (properties the AI invents because the real ones weren't documented), broken implementation, and failed tests. Every layer either inherits good context or amplifies bad context — there is no neutral handoff. The practical implication is simple: invest in context quality at the source, because that investment compounds downstream. — design-system-ops, knowledge-notes/ai-readiness.md

## How it shows up in practice

The same team's notes describe a **machine-readable component manifest**: a structured JSON index of every component — name, category, description, props, variants, composition relationships, token bindings, accessibility role, status. An AI agent querying it can resolve "I need a component for user input with validation" to a specific component, variant, and configuration without reading documentation pages. That's the difference between a design system that works with AI and one that is *legible* to AI. — design-system-ops, knowledge-notes/ai-readiness.md

The same toolkit pushes this to its logical endpoint with a **context engine**: seven YAML blueprints encoding everything an agent needs — UX patterns, UI tokens, content voice, accessibility contracts, ethical guardrails like dark-pattern prohibitions, technical prop contracts, and business intelligence (what's safe to A/B test, and what never is). The key idea: not every task needs every blueprint. An agent generating a component loads technical, UI, and accessibility; one writing copy loads content and ethical; a full design review loads all seven. — design-system-ops, knowledge-notes/context-engine-blueprints.md

Two other practitioners arrive at related — but distinct — points independently. Romina Kavcic makes the case for **tokens as an API**: most tokens are structured for humans, so when an AI reads them via MCP (Model Context Protocol, a standard that lets AI tools connect to external data like a Figma file), it sees "a wall of nested objects with no context about why these values exist or when to use them." Tokens are the API contract between design and code — and just as you can't restructure a component library overnight, "you can add descriptions to your top 20 tokens in an hour," and that hour propagates upward through everything built on them. It's the semantic-naming idea from page 02 — name intent, not appearance — seen through an AI's eyes. — [Romina Kavcic, "Design tokens that AI can actually read"](https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually)

Murphy Trueman makes the parallel argument for **components as an API**: "Your design system is already an API; the question is whether it's a good one." He argues for purpose-driven classification over appearance-based naming — a component called `FeatureHighlight` or `OnboardingStep` tells a machine its functional role; `BlueCard` or `CardBase` tells it nothing. — [Murphy Trueman, "Your next design system user is an agent"](https://blog.murphytrueman.com/your-next-design-system-user/)

This isn't only a forward-looking argument — a handful of named systems already expose themselves this way in production. Spotify has been publicly working on making its Encore system AI-ready via an MCP server, machine-readable documentation, and a layered architecture. Siemens ships an MCP server for its Industrial Experience system covering documentation, component APIs, examples, and icons. Mitsubishi Electric's Serendie design system publishes an MCP endpoint and documents combining it with Figma's own MCP server, so an agent can read a design and implement it using the system's real components rather than inventing lookalikes. These are early, but they're concrete evidence that "machine-readable manifest" isn't a hypothetical — it's a shape multiple production systems have already converged on independently.

## Common mistake

Assuming "AI readiness" means bolting a separate AI layer onto your system. It doesn't. Components with ambiguous names, undocumented anti-patterns, and vague purpose descriptions fail AI consumers first and human consumers next — so preparing for AI is a forcing function that pushes you to fix documentation and clarity problems that have existed for years. The work isn't AI-specific; it's quality work, done with more precision, that helps every consumer — including the humans. — design-system-ops, knowledge-notes/ai-readiness.md
