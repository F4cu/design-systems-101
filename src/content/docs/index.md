---
title: Start here
---

## Who this is for

You know the day-to-day of working with a design system: Figma, component specs,
probably some tokens already. This wiki is for the layer above that — the operational
and architectural judgment calls nobody hands you a manual for. Why does a team split
tokens into layers instead of just naming colors? What actually makes a component
"governed" instead of just "in a library"? When does bringing AI into the workflow help,
and when does it just add a new kind of mess?

There's no assumed knowledge of build tooling, CI (continuous integration — the
automated pipeline that tests and ships code changes), or how AI agents get wired up to
software. Every term like that gets defined the first time it's used.

## How this wiki is built

The foundations section is grounded in one real toolkit: **Design System Ops**, a skill
pack for AI coding assistants written by Murphy Trueman from 14 years of production
design-systems work. It isn't used here as a template to copy — its knowledge notes are
evidence for the *principles* behind running a system, not a set of settings to adopt
wholesale. Every claim traced to it carries a citation at the end of the example so you
can go read the original.

The rest of the wiki widens the source pool deliberately. A single toolkit can't cover
contribution models, component-API judgment calls, or how to argue for a system's
budget — those need more than one practitioner's experience to triangulate. You'll also
meet, cited individually by name and post/report title:

- **Romina Kavcic**, [learn.thedesignsystem.guide](https://learn.thedesignsystem.guide/) — design tokens as machine-readable assets, how AI agents consume design systems, and scoping MCP access deliberately.
- **Nathan Curtis**, EightShapes — team models, contribution criteria, component-API design (the "configuration collapse" problem), and operating cadence.
- **Jina Anne**, Salesforce UX / 24ways — the "cyclical" team model, structuring teams around cross-functional "hybrid" practitioners, and the case for treating a design system as something the org owns together rather than a rulebook handed down from one team.
- **Marianne Ashton-Booth** — stakeholder mapping by influence and frequency, planning on three horizons at once, and borrowing frameworks (LeanDS, Stafford Beer's Viable System Model) to keep a system legible to the organization around it.
- **Dan Mall**, Superfriendly — pilot strategy and the scorecard method for deciding what to build first.
- **Brad Frost**, *Atomic Design* — decision-tree governance, feedback-loop mechanics, and office-hours/cadence practice, cited across several pages.
- **Amy Hupe** and **Inayaili de León** — what actually gets people to contribute once a contribution model exists, not just whether the door is open.
- **Cathy Dutton** — the case against mistaking organizational convenience for genuine reusability when deciding what becomes a shared pattern.
- **Radix Primitives** and **Workday Canvas Design System** — named, citable code-level implementations of subcomponents (as "parts" and "compound components," respectively), used to show how the design-facing vocabulary maps onto a real codebase.
- **story.to.design** — a design-tooling perspective on subcomponents and slots, cited for how the same pattern shows up as a Figma detachment problem rather than a code problem.
- **fourzerothree.in** — the Figma-side mechanics of nested instances and exposed properties: how subcomponents actually get built and wired up inside a component file.
- **zeroheight's annual Design Systems Report** — survey data from 147 practitioners, used where a claim benefits from being backed by numbers rather than one person's experience.
- **Figma's Design Executive Council research** and a handful of named companies (Freshworks, SAP, Grammarly, Wise, Mews, and others) who've published specifics about what worked and what broke for them.
- **Shane P Williams**, founding editor of the [Design Systems Collective](https://designsystemscollective.substack.com/) — governance and documentation under AI consumption, and the emerging job of reconciling design, code, and production as separate sources of truth.
- **Diana Wolosin**, design systems practitioner (ex-Indeed) — the "context engine" as machine-readable infrastructure, and empirically benchmarking metadata formats against real agent behavior rather than assuming one is correct.
- **Jan Six**, GitHub — designs agent experiences for Copilot and created Tokens Studio; on treating agent context as environment design, not just instructions.
- Published AI-pattern guidance from **IBM Carbon**, **AWS Cloudscape**, **GitLab Pajamas**, **Atlassian Design System**, and **Microsoft** — named, citable examples of how mature systems design transparency, authorization, and agent-interaction patterns as shipped components.

No source is blended into a single "what the industry thinks" voice — each claim is
attributed to whoever made it, by name, with a link. Where sources agree, that's noted
as two people independently landing on the same conclusion; where they diverge, both
views are left standing rather than resolved for you. Every page's citations are also
collected in one place in the [references](/references/) page, if you want the reading
list without the surrounding prose.

## How to read a page

Every page from Part 1 onward follows the same shape: the principle in plain language,
why it exists (what actually breaks without it), an example or two from the sources
above, sometimes a diagram, and one common mistake a beginner is likely to make. If
something needs a claim the sources don't support, the page says so as an open question
rather than inventing an answer.

The wiki is organized into five Parts, roughly in reading order:

1. **Foundations** — what a design system actually is: tokens, the design-to-code handoff.
2. **Governance** — how decisions get made and recorded, which contribution model fits which context, how to actually build a culture that contributes to it, and the practical component-API judgment calls: when to add a variant vs. reach for composition, how to avoid prop bloat.
3. **Adoption** — the operating rhythm that keeps a system visible (cadence, office hours, stewardship, advocacy, feedback loops), whether it's actually being used, and how documentation either supports or undermines that.
4. **Business alignment** — the org-facing skill of building a business case, staying in sync with brand and marketing, and keeping the system funded, distinct from running it well.
5. **Agentic AI** — two directions at once: making the system legible to AI as a consumer (context engineering, documentation built for agents, governance under AI consumption), and designing AI as a product surface the system has to support (agentic UI patterns, generative loops, workflow orchestration, scaling access to risk).

Start with [Foundations](/foundations/), or jump straight to whatever section you need
using the sidebar. A [glossary](/glossary/) at the end collects every term introduced
along the way.
