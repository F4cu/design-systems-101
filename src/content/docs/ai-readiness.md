---
title: AI Readiness
---

An AI-ready design system is one AI agents and tools can use, reason about, and generate from without needing knowledge nobody wrote down. Most systems assume a human who can infer intent from visual context or ask a colleague. An agent can't infer or ask. It only works with what's explicit. But the gap isn't new: the same unwritten knowledge has always confused new team members and outside contributors. The design-system-ops notes (`knowledge-notes/ai-readiness.md`) sum it up: AI readiness is design-system quality, applied with more precision.

:::tip[Key takeaways]
- Invest in context quality at the source, because errors compound downstream
- Publish a machine-readable index of every component
- Describe tokens and components by purpose, not appearance
- Document anti-patterns and edge cases, not just the happy path
:::

## The problem

Without explicit context, errors compound. The same notes call this the **context cascade**: context quality at the source carries through every downstream consumer. Strong metadata in a Figma component leads to accurate AI-generated code, correct implementation, and reliable tests. Weak metadata leads to hallucinated props (properties the AI invents because the real ones weren't documented), broken implementation, and failed tests. Every layer either inherits good context or amplifies bad context. There's no neutral handoff.

## Practices

### Invest in context at the source

Because the cascade compounds, the cheapest place to fix context is where it starts: the component's metadata in Figma and code. An hour spent there pays off in every layer built on top of it.

### Publish a machine-readable component manifest

The design-system-ops notes describe a **machine-readable component manifest**: a structured JSON index of every component, with its name, category, description, props, variants, composition relationships, token bindings, accessibility role, and status. An agent querying it can turn "I need a component for user input with validation" into a specific component, variant, and configuration, without reading documentation pages. That's the difference between a system that works with AI and one that's *legible* to it.

[Context engineering](/context-engineering/) covers task-specific versions of this manifest: Murphy Trueman's seven-blueprint **context engine**, and a second one built independently by Diana Wolosin.

### Describe tokens and components by purpose

When an agent reads an undocumented token set, it sees "a wall of nested objects with no context about why these values exist or when to use them," the same ambiguity a new team member hits, with no one to ask. The same goes for component names: `BlueCard` or `CardBase` tells a machine nothing about its role, while `FeatureHighlight` or `OnboardingStep` does. [Documentation for agents](/documentation-for-agents/) covers treating tokens and components as an API, from Romina Kavcic and Murphy Trueman.

### Document anti-patterns and edge cases

Per the design-system-ops notes, components with ambiguous names, undocumented anti-patterns, and vague purpose descriptions fail AI consumers first, and human consumers next.

## Common mistakes

- **Treating AI readiness as a separate AI layer bolted onto the system.** It isn't. The work is quality work, done with more precision, and it helps every consumer, including the humans.
