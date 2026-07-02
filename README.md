# design-systems-101

A personal field guide to the operational and architectural side of running a design
system — token architecture, governance, adoption, documentation coverage, and a
dedicated section on AI-readiness and agentic workflows.

This is a personal learning project, built for my own reading and reference — not a
commercial product, and not an official or endorsed resource from any of the people or
projects it cites.

**Read it here:** https://f4cu.github.io/design-systems-101/

## What this is

Ten short pages (roughly 300–600 words each) plus a glossary, written as a learning
path from foundations through to AI/agentic design systems. Every claim in the
foundational pages (01–06) is drawn from and cited to one real toolkit's knowledge
notes — [`murphytrueman/design-system-ops`](https://github.com/murphytrueman/design-system-ops)
— used as evidence for general principles, not copied as a template. The AI section
(07–09) additionally draws on and cites specific posts by
[Romina Kavcic](https://learn.thedesignsystem.guide/) and
[Murphy Trueman](https://blog.murphytrueman.com/), two people writing independently
about AI and design systems today.

No component code, no real token values, and no API keys or repo-specific config are
included as "the standard" — sources here are cited for the ideas behind them, not
replicated as configuration to copy.

## How it's built

Plain markdown pages served with [Docsify](https://docsify.js.org) — no build step,
no bundler. Diagrams are [Mermaid](https://mermaid.js.org) blocks rendered client-side.
See `_sidebar.md` for the page order and `.claude/handoff/` for the notes on how this
was researched and put together.

To read it locally:

```bash
npx docsify-cli serve .
```
