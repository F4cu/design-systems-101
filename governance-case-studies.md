# Governance Case Studies

<p class="eyebrow">The Principle</p>

## Governance failures and successes only make sense in context

Governance advice tends to arrive as universal rules, but almost every real governance failure — and every real success — is legible only in context: what worked for one team's size, stage, and structure would have failed for another's. These three scenarios are worked examples, not templates, and each ends with what made the outcome context-dependent rather than universal.

<p class="eyebrow">Why It Exists</p>

## Abstract principles alone can't tell you what to do in your situation

Without concrete cases, governance principles stay abstract enough to agree with and hard enough to apply that teams reach for the nearest generic best-practice list instead of reasoning about their own situation. A worked example — including the ones that went wrong — gives you something to reason *from*.

---

## In Practice

#### 1. Forking instead of extending, at Wise

**Wise's** product systems team was asked to add a new color theme for a second platform brand, and pushed back. The change seemed to affect only one surface (Editorial), and updating the shared color library for a second brand didn't feel justified for that scope. So the Editorial team duplicated the color library and extended it themselves, locally.

What got missed: core product components — buttons, inputs, the shared library — were already being used *inside* Editorial contexts, and those nested instances were still bound to the original single-brand tokens. When the new theme was applied, the surrounding Editorial patterns updated correctly, but the nested product components kept their default colors, breaking visual consistency in a way that only showed up after the fork was already live.

The lesson: nested components inherit their token bindings, not their surrounding context. A component deep in a composition that references an unthemed token will look fine right up until someone applies a theme around it. What would have made this work: registering the request centrally even though it looked single-surface, so the system team could see the nesting risk before the fork happened, rather than after. This was one piece of a larger brand refresh — see [Brand alignment](brand-alignment.md) for how Wise's 2023 rebrand reshaped its token infrastructure more broadly. — [Ness Grixti, "Wise Multi-Brand Design System — Case Study"](https://nessgrixti.com/portfolio/wise-multi-brand/)

#### 2. Misdiagnosed governance failures

zeroheight's 2026 survey of 147 practitioners surfaces a genuine paradox. Ask teams with *poor* adoption why, and 55% blame weak governance — second only to lack of a company mandate at 73%. Ask teams with *good* adoption what actually drove it, and governance barely registers: only 24% mention it. What they credit instead is component completeness (79%) and communication or community (59%).

Picture two teams side by side. One has an elaborate review board, multi-stage approval, and a strict contribution template — and still struggles, because half its component library is missing the things teams actually need. The other has light governance, a small decision log, and no formal review committee — but ships a complete, well-communicated core, and adoption follows.

The reading: weak governance is the explanation people reach for when a system is already failing for other reasons, but strong governance isn't what causes success in the first place. It's what stops a *successful* system from decaying once it has adoption. Building an elaborate governance apparatus before a system has earned adoption solves a problem the team doesn't have yet. — zeroheight, *Design Systems Report 2026*

#### 3. A small champions network, at Grammarly

**Grammarly** built a network of ten advocates spanning design and engineering to help enable the rest of the organization and drive adoption — not an open contribution door, a specific, named group of people with real standing. It worked well enough that engineering offered to trade headcount for further design-system investment, which is about as concrete a signal of trust as a contribution model can produce.

The context that made this work: ten people is a small, sustainable number, consistent with the finding in [Contribution models](contribution-models.md) that real contribution stays small regardless of company size. The network also spanned both design and engineering, so it had standing on both sides of the handoff, not just one. — cited via Figma / Design Executive Council research on design-system business value

---

## Common mistakes

Reading any one of these as "the" answer and copying its structure:

- **The Wise story** argues for registering changes centrally even when they look local.
- **The adoption-paradox story** argues against building governance apparatus a system hasn't earned yet.
- **The Grammarly story** argues for a small, named group over either a wide-open door or a purely centralized team.

All three are true simultaneously, for different reasons, at different points in a system's life — which is the entire point of reading governance as contextual rather than as a checklist.
