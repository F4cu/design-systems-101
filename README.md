# DS101

A personal field guide to the operational and architectural side of running a design
system — token architecture, governance, adoption, documentation coverage, and a
dedicated section on AI-readiness and agentic workflows.

This is a personal learning project, built for my own reading and reference — not a
commercial product, and not an official or endorsed resource from any of the people or
projects it cites.

**Read it here:** https://f4cu.github.io/ds101/

## What this is

A learning path in five Parts — Foundations; Governance & Contribution; Adoption &
Documentation; Communicating Value & Business Alignment; AI & Agentic Systems — plus a
glossary and a consolidated references page. The foundational pages are grounded in one
real toolkit's knowledge notes —
[`murphytrueman/design-system-ops`](https://github.com/murphytrueman/design-system-ops)
— used as evidence for general principles, not copied as a template. From there the
source pool widens deliberately: Dan Mall (Superfriendly) on pilot strategy and
launch prioritization; Nathan Curtis (EightShapes) on team models,
contribution criteria, and component-API design; zeroheight's annual Design Systems
Report for survey data across 147 practitioners; Figma's Design Executive Council
research and named companies (Freshworks, SAP, Grammarly, Wise, Mews, and others) who've
published specifics about what worked and what didn't; Marianne Ashton-Booth
(ITVX) on stakeholder mapping, planning horizons, and applying Stafford Beer's Viable
System Model to design systems; and, for the AI section,
[Romina Kavcic](https://learn.thedesignsystem.guide/),
[Murphy Trueman](https://blog.murphytrueman.com/), and
[Shane P Williams](https://designsystemscollective.substack.com/), three people writing
independently about AI and design systems today. Every claim is
attributed to the specific source it came from — see the [references page](https://f4cu.github.io/ds101/references/)
for the full list, or [start here](https://f4cu.github.io/ds101/) for the sourcing philosophy in more
detail.

No component code, no real token values, and no API keys or repo-specific config are
included as "the standard" — sources here are cited for the ideas behind them, not
replicated as configuration to copy.

## How it's built

Plain markdown pages built with [Astro Starlight](https://starlight.astro.build/).
Diagrams are [Mermaid](https://mermaid.js.org) blocks rendered client-side via
`astro-mermaid`. See `astro.config.mjs` for the page order and `.claude/handoff/` for
the notes on how this was researched and put together.

To read it locally:

```bash
npm install
npm run dev
```
