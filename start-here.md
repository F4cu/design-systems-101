# Start here

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

The rest of the wiki widens the source pool deliberately, because a single toolkit
can't cover contribution models, component-API judgment calls, or how to argue for a
system's budget — those need more than one practitioner's experience to triangulate.
You'll also meet, cited individually by name and post/report title:

- **Romina Kavcic**, [learn.thedesignsystem.guide](https://learn.thedesignsystem.guide/) — design tokens as machine-readable assets, how AI agents consume design systems.
- **Nathan Curtis**, EightShapes — team models, contribution criteria, and component-API design (the "configuration collapse" problem).
- **zeroheight's annual Design Systems Report** — survey data from 147 practitioners, used where a claim benefits from being backed by numbers rather than one person's experience.
- **Figma's Design Executive Council research** and a handful of named companies (Freshworks, SAP, Grammarly, Wise, Mews, and others) who've published specifics about what worked and what broke for them.

No source is blended into a single "what the industry thinks" voice — each claim is
attributed to whoever made it, by name, with a link. Where sources agree, that's noted
as two people independently landing on the same conclusion; where they diverge, both
views are left standing rather than resolved for you. Every page's citations are also
collected in one place in the [references](references.md) page, if you want the reading
list without the surrounding prose.

## How to read a page

Every page from Part 1 onward follows the same shape: the principle in plain language,
why it exists (what actually breaks without it), an example or two from the sources
above, sometimes a diagram, and one common mistake a beginner is likely to make. If
something needs a claim the sources don't support, the page says so as an open question
rather than inventing an answer.

The wiki is organized into five Parts, roughly in reading order:

1. **Foundations** — what a design system actually is: tokens, the design-to-code handoff.
2. **Governance & contribution** — how decisions get made and recorded, which contribution model fits which context, and the practical component-API judgment calls (when to add a variant vs. reach for composition, how to avoid prop bloat).
3. **Adoption & documentation** — whether the system is actually being used, and how documentation either supports or undermines that.
4. **Communicating value & business alignment** — the org-facing skill of building a business case and keeping the system funded, distinct from running it well.
5. **AI & agentic systems** — where AI-assisted workflows help and where they just add a new kind of mess.

Start with [Foundations](foundations.md), or jump straight to whatever section you need
using the sidebar. A [glossary](glossary.md) at the end collects every term introduced
along the way.
