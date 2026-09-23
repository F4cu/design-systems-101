---
title: AI Context & Readiness
---

<p class="eyebrow">The Principle</p>

## AI readiness means nothing is left implicit

An AI-ready design system is one that can be consumed, reasoned about, and generated from by AI agents and tooling without requiring implicit knowledge that was never written down. Most systems weren't built for this — they assume a human who can infer intent from visual context or ask a colleague. An AI agent can't infer or ask; it works only with what's explicit. But the gap AI exposes isn't new: the same implicit knowledge that confuses an agent has always confused new team members and external contributors. AI readiness is design-system quality, applied with more precision. — design-system-ops, knowledge-notes/ai-readiness.md

<p class="eyebrow">Why It Exists</p>

## Bad context compounds through every downstream consumer

Without explicit context, errors compound. One team's knowledge notes call this the **context cascade**: context quality at the source compounds through every downstream consumer. Strong metadata in a Figma component leads to accurate AI-generated code, correct implementation, and reliable testing. Weak metadata leads to hallucinated props (properties the AI invents because the real ones weren't documented), broken implementation, and failed tests.

Every layer either inherits good context or amplifies bad context — there is no neutral handoff. The practical implication is simple: invest in context quality at the source, because that investment compounds downstream. — design-system-ops, knowledge-notes/ai-readiness.md

---

## In Practice

#### 1. A machine-readable component manifest

The same team's notes describe a **machine-readable component manifest**: a structured JSON index of every component — name, category, description, props, variants, composition relationships, token bindings, accessibility role, status. An AI agent querying it can resolve "I need a component for user input with validation" to a specific component, variant, and configuration without reading documentation pages. That's the difference between a design system that works with AI and one that is *legible* to AI. — design-system-ops, knowledge-notes/ai-readiness.md

A task-specific version of this same manifest — Murphy Trueman's seven-blueprint **context engine**, and a second, independently built one from Diana Wolosin — gets its own room in [Context engineering](/context-engineering/). Structuring tokens and components themselves as an API (Romina Kavcic, Murphy Trueman) is covered in [Documentation for agents](/documentation-for-agents/).

---

## Common mistakes

Assuming "AI readiness" means bolting a separate AI layer onto your system. It doesn't — the work is quality work, done with more precision, that helps every consumer, including the humans:

- **Structuring tokens for humans only.** When an AI reads an undocumented token set, it sees "a wall of nested objects with no context about why these values exist or when to use them" — the same ambiguity a new team member would hit, just with no one to ask.
- **Naming components by appearance instead of function.** `BlueCard` or `CardBase` tells a machine nothing about its role; `FeatureHighlight` or `OnboardingStep` does.
- **Leaving anti-patterns and edge cases undocumented.** Components with ambiguous names, undocumented anti-patterns, and vague purpose descriptions fail AI consumers first and human consumers next.

— design-system-ops, knowledge-notes/ai-readiness.md
