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

Pages 01 through 06 are grounded in one real toolkit: **Design System Ops**, a skill
pack for AI coding assistants written by Murphy Trueman from 14 years of production
design-systems work. It isn't used here as a template to copy — its knowledge notes are
evidence for the *principles* behind running a system, not a set of settings to adopt
wholesale. Every claim in those pages traces back to a specific note in that source, and
you'll see a citation at the end of each example so you can go read the original.

Pages 07 through 09 — the dedicated AI and agentic-systems section — pull from that same
source plus two more voices writing about this territory right now:

- **Romina Kavcic**, who writes [learn.thedesignsystem.guide](https://learn.thedesignsystem.guide/), on design tokens as machine-readable assets and how AI agents actually consume design systems.
- **Murphy Trueman**, on his own blog at [blog.murphytrueman.com](https://blog.murphytrueman.com/), on governance and adapting component architecture for machine as well as human readers.

These two are cited individually, by name and post title, throughout 07–09 — not
blended into a single "what the industry thinks" voice. Where they overlap, that's
because two practitioners independently arrived at a similar conclusion, which is worth
noticing; where they diverge, both views are left standing rather than resolved for you.

## How to read a page

Every page from 02 onward follows the same shape: the principle in plain language, why
it exists (what actually breaks without it), an example or two from the sources above,
sometimes a diagram, and one common mistake a beginner is likely to make. Pages are
short — a field guide, not a textbook. If something needs a claim the sources don't
support, the page says so as an open question rather than inventing an answer.

Start with [01 — Foundations](01-foundations.md), or jump straight to whatever section
you need using the sidebar. A [glossary](10-glossary.md) at the end collects every term
introduced along the way.
