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
  WCAG line-length caps and the `.mermaid-wrap` scroll-box
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

Every content page from Part 1 onward uses one template. It's built so the "On this page"
table of contents lists every practice as a short label. See `release-management.md` and
`contribution-models.md` as reference examples.

1. **Title (`title` frontmatter, rendered as the H1)**: name the principle or topic in
   2–5 words. Never restate the page's own subject descriptively (bad: `Component
   Building: Structuring Components in Figma`, should be `Component Architecture`) and
   never stack a colon- or `&`-joined subtitle listing the page's own sub-topics (bad:
   `Release Management: Versioning, Changelogs & Migration Guides`). The title must match
   the link text used for this page everywhere else in the wiki (`astro.config.mjs`'s
   sidebar, `glossary.md`, other pages' cross-links) — update all of them together if the
   title changes. Do not add a `# Title` line in the page body — Starlight renders the
   frontmatter `title` as the H1 automatically.
2. **Lead** (no heading): 1–3 plain sentences stating the page's main takeaway. Starting
   with the takeaway always makes sense. Putting it in a heading doesn't, because long
   sentence headings clutter the TOC. No eyebrow labels anywhere.
3. **`:::tip[Key takeaways]`** aside: 3–5 bullets (never more), one per key practice, each
   written as advice. On pages with more practices, pick the ones a reader most needs.
4. **`## The problem`**: the concrete failure mode that happens without this practice area.
5. **The core section(s)**, chosen by page type:
   - **Practice** (default, the page is a set of things to do): `## Practices`.
   - **Decision** (the page's value is picking between alternatives): `## Choosing <the
     decision>` (e.g. `## Choosing a model`), then `## Practices`.
   - **Model** (the page explains a structure, like token layers): `## The model`, with one
     `###` per layer or dimension, then `## Practices`. A Model page must still end in
     practices. It never just lists the parts of a design system.
   - **Case studies**: `## The cases` (`### Org: what they did`), then
     `## Patterns across cases`. Multi-paragraph named-org narratives live only here. Topic
     pages keep short (2–4 sentence) org examples inline and link here for the full story.

   Rules for the core sections:
   - **Only `##` and `###` headings.** Starlight's TOC shows levels 2–3 only, so a `####`
     practice is invisible when scanning. No numbers in headings, except on sequence pages
     where order matters (`### 1. Inventory the interface first`).
   - **Practice headings are advice**, imperative and ≤ ~8 words ("Deprecate before you
     remove"). Not a topic ("Deprecation lifecycle"), and not an "X, not Y" slogan.
     Aim for ≤ ~7 practices. Group larger sets under 2–3 `###` clusters.
   - **The and/or test.** If the reader should do all of the items, they're Practices. If the
     reader should pick one, they go under `## Choosing …`. Guidance on how to choose opens
     that section, before the options. It's never a separate `###`. Each option says, in
     prose, who does it, when it fits, and what it costs.
   - **Criteria.** When a page owns a decision rule (e.g. when to add a component), it gets a
     `### Criteria for …` heading with a numbered list of questions in the order a reviewer
     asks them. Each decision rule has one owning page. Other pages link to it.
   - **Citations inline.** Name the practitioner in the sentence and put the link on the
     name ("[Curtis](…) defines…"). No trailing "— author, title" lines. Block quotes keep
     their attribution line.
   - **Diagrams inline**, directly under the practice or model they illustrate, never as a
     standalone `## Diagram` section. Only when a relationship is genuinely spatial or
     sequential. Wrap each Mermaid block in `<div class="mermaid-wrap">...</div>`, and keep
     it few-node and legible at ~800px max width.
6. **`## Common mistakes`**: a bulleted list, each bullet a beginner-likely error grounded in
   a cited source where possible. A mistake that just reverses a practice heading is a
   duplicate. Delete it.

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
