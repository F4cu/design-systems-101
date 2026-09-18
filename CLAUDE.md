# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal field guide (not a commercial product) to the operational and architectural
side of running a design system — token architecture, governance, adoption,
documentation, business alignment, and a dedicated section on AI-readiness and agentic
workflows. It's a static [Docsify](https://docsify.js.org) site: plain markdown pages,
no build step, no bundler, no component code and no real token values anywhere (sources
are cited for the ideas behind them, not replicated as config to copy).

Published at https://f4cu.github.io/design-systems-101/ via GitHub Pages off `main`.

## Commands

```bash
npx docsify-cli serve .   # serve locally to preview changes
```

No install, build, lint, or test step exists — this is markdown + a static `index.html`/`_sidebar.md` shell only.

## Architecture

- **`index.html`** — the Docsify shell: CDN-loaded Docsify 4, custom CSS (WCAG line-length
  caps, sidebar sizing, mobile viewport fixes), and a hand-rolled Mermaid v10 render hook.
  Mermaid is wired manually via a `doneEach` lifecycle hook, not the `docsify-mermaid`
  plugin — that plugin targets Mermaid's pre-v10 global API and silently no-ops under
  Mermaid 10 (which is ESM-first). Don't reintroduce `docsify-mermaid`.
- **`_sidebar.md`** — the only page ordering/navigation source; add new pages here or they
  won't appear in the nav. Organized into five parts: Foundations, Governance, Adoption,
  Business alignment, Agentic AI, followed by Glossary and References.
- **Content pages** (`*.md` at root) — each is a standalone topic page. `start-here.md` is
  the Docsify homepage (`window.$docsify.homepage`).
- **`glossary.md`** — one line per term introduced anywhere in the wiki, links back to the
  page that explains it in context. Update when a page introduces new terminology.
- **`references.md`** — every citation across the wiki, grouped by page/topic, mirroring
  the inline citations. Keep in sync when adding or changing a page's sources.
- **`.claude/handoff/`** — the original build brief, research digest, and execution plan
  from when this site was generated. Historical record of how sourcing/scope decisions
  were made, not something to keep updated going forward.

## Page conventions

Every content page from Part 1 onward follows the same shape (see `token-architecture.md`
as a reference example):

1. `<p class="eyebrow">The Principle</p>` + an `##` heading — the concept in plain
   language, no jargon yet.
2. `<p class="eyebrow">Why It Exists</p>` + an `##` heading — the concrete failure mode
   that happens without it.
3. `## In Practice` — numbered `####` sub-sections with real examples, each ending in a
   footnote-style source citation (`— author/source, path or post title`).
4. `## Diagram` (optional, only when a relationship is genuinely spatial/sequential —
   don't diagram things that are just lists) — a Mermaid block wrapped in
   `<div class="mermaid-wrap">...</div>` so it scrolls in its own box on narrow viewports
   instead of forcing page-wide horizontal scroll. Keep diagrams few-node and legible at
   ~800px max width.
5. `## Common mistakes` — a bulleted list, each bullet a beginner-likely error grounded in
   a cited source where possible.

Other conventions:

- **Sourcing discipline**: every non-obvious claim is attributed to a specific person, post
  title, or source file — never blended into an unattributed "industry consensus" voice.
  Don't invent best practices without a traceable source; if a page needs a claim the
  sources don't support, flag it as an open question rather than asserting it. See
  `start-here.md` for the full list of named sources and `references.md` for the citation
  index.
- **Voice**: explain the *why* before the *what*; assume Figma/design fluency but zero
  assumed knowledge of build tooling, CI, or agent orchestration — define such terms on
  first use. Prefer plain prose over bullet-dense reference tables except in the
  established "Common mistakes" and glossary sections. Avoid AI-writing tics ("load-bearing,"
  "blast radius," "north star," etc.) — use the plain word the sentence actually needs,
  even when drafting quickly. See the `ux-writing-review` skill for the full checklist.
- **Length**: pages run roughly 300–600 words per section-group; this is a field guide,
  not a textbook.
- **Mobile-first**: the primary read surface is a phone (iOS Safari). Don't add wide
  tables or unwrapped long inline code/URLs — they force horizontal scroll on a
  375–430px viewport. Any new diagram must go inside `.mermaid-wrap`.
- **Cross-linking**: link to other pages in-line with relative markdown links
  (`[Token architecture](token-architecture.md)`) rather than duplicating an explanation
  that another page already owns.
