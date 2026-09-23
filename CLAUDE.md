# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A personal field guide (not a commercial product) to the operational and architectural
side of running a design system — token architecture, governance, adoption,
documentation, business alignment, and a dedicated section on AI-readiness and agentic
workflows. It's an [Astro Starlight](https://starlight.astro.build/) site: markdown
content pages, Starlight's default theme, no component code and no real token values
anywhere (sources are cited for the ideas behind them, not replicated as config to copy).

Published at https://f4cu.github.io/design-systems-101/ via GitHub Pages, built and
deployed by `.github/workflows/deploy.yml` on push to `main`.

## Commands

```bash
npm install
npm run dev     # serve locally to preview changes
npm run build   # production build to dist/
```

## Architecture

- **`astro.config.mjs`** — Starlight config: site metadata, the `sidebar` array (the only
  page ordering/navigation source — add new pages here or they won't appear in the nav),
  and the `astro-mermaid` integration for rendering Mermaid diagrams client-side
  (including re-rendering on Starlight's view-transition page swaps). Organized into five
  sidebar groups: Foundations, Governance, Metrics, Business alignment, Agentic AI,
  followed by Glossary and References. A sidebar item is a bare filename slug
  (`'token-architecture'`) unless its nav label needs to differ from the page's `title`
  frontmatter, in which case use `{ slug: '...', label: '...' }`.
- **`src/styles/custom.css`** — the only custom CSS on top of Starlight's stock theme:
  WCAG line-length caps, the `.eyebrow` label style, and the `.mermaid-wrap` scroll-box
  style. Deliberately does not reskin Starlight's default colors/fonts/sidebar chrome.
- **Content pages** (`src/content/docs/*.md`) — each is a standalone topic page. The
  `title` frontmatter field is what Starlight renders as the page's H1 and browser-tab
  title — don't also put a `# Title` line in the body, Starlight adds it automatically.
  `index.md` (originally `start-here.md`) is the homepage, served at `/`.
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

1. **Title (`title` frontmatter, rendered as the H1)**: name the principle or topic in
   2–5 words. Never restate the page's own subject descriptively (bad: `Component
   Building: Structuring Components in Figma`, should be `Component Architecture`) and
   never stack a colon- or `&`-joined subtitle listing the page's own sub-topics (bad:
   `Release Management: Versioning, Changelogs & Migration Guides` — if the sub-topics
   need naming, that's what the opening `##` heading is for). The title must match the
   link text used for this page everywhere else in the wiki (`astro.config.mjs`'s
   sidebar, `glossary.md`, other pages' cross-links) — update all of them together if the
   title changes. Do not add a `# Title` line in the page body — Starlight renders the
   frontmatter `title` as the H1 automatically.
2. Opening eyebrow + `##` heading — pick one of three types based on how the page's
   `In Practice` sub-sections relate to each other:
   - **`<p class="eyebrow">The Principle</p>`** (the default) — use when the sub-sections
     are all facets of one claim. The `##` heading must be a self-contained, one-sentence
     *definition* of what the principle means and why it matters — never a claim copied or
     paraphrased from the body paragraph below it that only makes sense once you've read
     that paragraph. Reference examples: `token-architecture.md`, `component-api-design.md`.
   - **`<p class="eyebrow">The Idea</p>`** — use when the sub-sections are genuinely
     independent practices, tools, or named frameworks gathered under a shared theme
     rather than facets of a single claim (test: could a sub-section stand alone as its
     own page-worthy principle? If several could, it's this type). The `##` heading names
     the *shared thread* connecting the sub-sections instead of asserting one universal
     claim. Reference examples: `operating-cadence.md`, `contribution-models.md`,
     `stakeholder-alignment.md`.
   - **`<p class="eyebrow">Case Studies</p>`** — use when the page is built from worked,
     concrete examples rather than a claim to defend. The `##` heading frames why the
     cases are worth reading together, and should not force a single universal principle
     out of them. Reference example: `governance-case-studies.md`. On this type only,
     also rename the section from item 4 below to `## The Cases` — "In Practice" implies
     an abstract claim being made concrete, which isn't what's happening on a page that's
     already nothing but concrete cases.
3. `<p class="eyebrow">Why It Exists</p>` + an `##` heading — the concrete failure mode
   that happens without it. This section's job doesn't change across the three types above
   (it justifies the topic/practice area, not one specific claim), so it stays the same
   regardless of which eyebrow type item 2 uses.
4. `## In Practice` (`## The Cases` on a `Case Studies`-type page — see item 2) — numbered
   `####` sub-sections with real examples, each ending in a footnote-style source
   citation (`— author/source, path or post title`).
5. `## Diagram` (optional, only when a relationship is genuinely spatial/sequential —
   don't diagram things that are just lists) — a Mermaid block wrapped in
   `<div class="mermaid-wrap">...</div>` so it scrolls in its own box on narrow viewports
   instead of forcing page-wide horizontal scroll. Keep diagrams few-node and legible at
   ~800px max width.
6. `## Common mistakes` — a bulleted list, each bullet a beginner-likely error grounded in
   a cited source where possible.

Other conventions:

- **Sourcing discipline**: every non-obvious claim is attributed to a specific person, post
  title, or source file — never blended into an unattributed "industry consensus" voice.
  Don't invent best practices without a traceable source; if a page needs a claim the
  sources don't support, flag it as an open question rather than asserting it. See
  `start-here.md` for the full list of named sources and `references.md` for the citation
  index.
- **Research boundary**: when doing research for this wiki (new claims, new pages, filling
  an open question), draw only from professionals/sources already used somewhere in the
  site — don't pull in a new author, blog, or report just because it's a good source on
  the topic. Before researching, scan `start-here.md`'s source list and every page's
  citations (or `references.md`, which mirrors them) to know who's already in bounds. This
  keeps the source pool deliberately narrow rather than widening with every new page. If a
  claim genuinely needs a source outside that pool, flag it to the user and ask before
  adding a new name — don't add one silently.
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
- **Cross-linking**: link to other pages in-line with absolute, extension-less site paths
  (`[Token architecture](/token-architecture/)`) rather than duplicating an explanation
  that another page already owns. Astro does not resolve `.md`-suffixed relative links
  the way Docsify did — a link written as `(token-architecture.md)` 404s at build time.
