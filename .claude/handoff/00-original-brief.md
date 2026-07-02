# Handoff: design-systems-101 — wiki extraction

**Task type:** one-off generation (not recurring — build once, hand-edit after).
**Model:** Fable.
**Run this:** in a new, empty GitHub repo. Do not run inside `upskill-design-system` — its CLAUDE.md is scope-locked to that product and isn't a general-purpose knowledge base. (That repo gets its *own*, separate documentation site — see `upskill-design-system/.claude/handoff/docsify-docs-site.handoff.md`. Not built here, not by this task.)

## 1. Who this is for

Me: a product designer, ~1 year into working with design systems. I know the day-to-day (Figma, component specs, some tokens) but not the operational and architectural judgment calls — why a team structures token layers a certain way, what governance actually looks like in practice, how AI-assisted workflows get scoped so they help instead of causing chaos. The wiki teaches me that judgment, using one real (if small/learning-stage) toolkit as evidence rather than abstract theory, plus a dedicated section on AI/agentic design systems informed by two practitioners writing about this space today.

**Voice:** explain the *why* before the *what*. Assume Figma/design fluency, zero assumed knowledge of build tooling, CI, or agent orchestration — define those terms on first use. Prefer plain prose over bullet-dense reference tables; this is a teaching site, not an API doc.

## 2. Sources (frozen — read at these exact refs, don't re-pull mid-task)

**A. `murphytrueman/design-system-ops`** — pinned to commit `a4b11ef230b47198e131df4579067f88384c828d`
- `knowledge-notes/*.md` — all 12 notes (this is the closest thing to a pre-existing "expert notes" dump; lean on it heavily but don't copy verbatim — synthesize)
- `README.md`, `2-WHATS-INCLUDED.md` for framing/vocabulary
- `skills/*/SKILL.md` and `commands/*.md` — read for *what problem each one solves and why it exists*, not implementation detail
- This is the sole case-study source for pages 01–06 (foundations through documentation coverage).

Fetch via `gh api repos/<owner>/<repo>/contents/<path>?ref=<sha>` or a shallow clone at that SHA — not a live branch pull. If a source file is missing at that ref, note it and skip; don't substitute a newer version silently.

**B. External sources — for the dedicated AI/agentic section only (pages 07–09).** Not pinned to a ref; these are live blogs, so fetch current posts via `WebFetch`/`WebSearch` and cite the specific post title + URL, never the site generically:
- [`learn.thedesignsystem.guide`](https://learn.thedesignsystem.guide/) — Romina Kavcic's Substack on design tokens as machine-readable assets and AI agents interacting with design systems.
- [`blog.murphytrueman.com`](https://blog.murphytrueman.com/) — Murphy Trueman's blog on governance, component architecture, and adapting systems for machine readability (same author as source A's toolkit — expect the voice to rhyme, but treat the blog posts as their own citations, not a restatement of the knowledge notes).

A prior research pass in a sibling project already surfaced four posts relevant to this territory — a head start, not the full set; go find more that speak to the specific pages below (context-engine blueprints, agent orchestration patterns, human-oversight levels, Challenge-Rating-style effort calibration):
- Romina Kavcic, "Design tokens that AI can actually read" — https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually
- Romina Kavcic, "Should you build an agent for your design system" — https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your
- Murphy Trueman, "Your next design system user is an agent" — https://blog.murphytrueman.com/your-next-design-system-user/
- Murphy Trueman, "The bidirectional design system: When code talks back to design" — https://blog.murphytrueman.com/the-bidirectional-design-system/

## 3. Deliverable

A new GitHub repo, public, named `design-systems-101`. Contents:

- **Static site, zero/near-zero build step.** Use [Docsify](https://docsify.js.org) — plain markdown files, one small `index.html` + `_sidebar.md`, no bundler, serves straight from GitHub Pages. This matches "simple minimal": editing a page later just means editing a `.md` file.
- **Diagrams as Mermaid**, fenced ```mermaid``` blocks inside the markdown (Docsify's mermaid plugin renders these; GitHub also renders them natively as a fallback if someone reads the raw files). Use a diagram only where a relationship is genuinely spatial/sequential — token layer resolution order, the component lifecycle/maturity model, an agentic-moment decision flow. Don't diagram things that are just lists.
- **GitHub Pages enabled** off `main` (or `/docs`) so the deliverable is a real URL, not just a repo of markdown.
- No component code, no real token values, no API keys or repo-specific config copied in as "the standard." Source A is *evidence for a principle*, not a template to replicate.

**Mobile-friendly (primary target: iPhone / iOS Safari).** This site will mostly get read on a phone, so:
- `index.html` must include `<meta name="viewport" content="width=device-width, initial-scale=1">` — Docsify's default template already has this; verify it wasn't stripped.
- Use Docsify's built-in responsive sidebar (collapses to a hamburger toggle below tablet width) — don't replace it with a custom nav that isn't touch-tested.
- Body text and code blocks must not force horizontal scroll on a 375–430px viewport (iPhone SE through Pro Max widths). Wrap long inline code/URLs; avoid wide tables where a page's content could instead be prose or a short list.
- Mermaid diagrams don't reflow to narrow screens — wrap each diagram in a horizontally scrollable container (`overflow-x: auto`) rather than letting it force the whole page to scroll sideways, and keep diagrams narrow/simple (few nodes) so they're legible without pinch-zoom.
- Tap targets (sidebar links, search box) at least 44×44px, per iOS HIG minimum.
- Test in iOS Safari (or an equivalent responsive emulation) before calling the site done, not just a desktop browser resize.

## 4. Information architecture (draft — Fable may refine ordering, keep the arc)

Ordered as a learning path, foundational → advanced. Pages 01–06 are grounded entirely in source A; pages 07–09 are the dedicated AI/agentic section and draw on both source A's AI-related knowledge notes *and* the external blogs:

```
00-start-here.md              — how to read this, who it's for, source A introduced, the two external voices flagged as the AI section's extra sources
01-foundations.md             — what a design system actually is; token vs component vs governance as three separate jobs
02-token-architecture.md      — layered token models (primitive → semantic → component), DTCG format, why aliases beat hardcoded/appearance-named values [diagram: resolution order]
03-design-to-code-contract.md — "done" has many senses; the four contracts (design/build/documentation/release); common handoff gaps
04-component-governance.md    — decision records, contribution criteria, deprecation triggers, the five-stage maturity model [diagram: maturity stages]
05-adoption-measurement.md    — coverage vs. adoption as a supply/demand problem; the four adoption signals; five adoption stages
06-documentation-coverage.md  — docs as a derived surface, not a parallel one; the three rungs of "documented"; staleness as a risk flag, not a defect
07-ai-context-and-readiness.md    — why AI-readiness is design-system quality applied with more precision; the context cascade; machine-readable manifests [diagram: none unless a genuine flow emerges]
08-agentic-workflow-design.md     — orchestration patterns (sequential/parallel/supervisor/feedback-loop), human-oversight autonomy levels, output-discipline norms [diagram: decision tree — when does a task deserve an agent at all, and at what autonomy level]
09-scaling-ai-effort.md           — calibrating documentation depth and audit rigor to a component's real implementation risk (Challenge-Rating-style thinking), the layered-MCP model for connecting agents to design tools
10-glossary.md                — every term introduced above, one line each, linked back to its page
```

## 5. Page template (apply to every page in 02–09)

1. **The principle** (2–4 sentences, plain language, no jargon yet)
2. **Why it exists** — what breaks without it (concrete failure mode, not abstract risk)
3. **How it shows up in practice** — 1–2 short examples pulled from source A (pages 01–06) or from source A plus the two external blogs (pages 07–09), named generically ("one team's knowledge notes describe…") with a footnote-style pointer to which file/post it came from, so I can go read the original if I want depth
4. **Diagram**, only if genuinely spatial/sequential
5. **Common mistake** — one thing a beginner (me) is likely to get wrong here

## 6. Constraints

- Don't invent best practices not traceable to a source file or a specific cited post — if a page needs a claim the sources don't support, flag it as an open question in the page rather than asserting it.
- Pages 07–09 draw on two named people's independent writing (Kavcic, Trueman) plus source A's own AI-related notes — don't blur them into one undifferentiated "the AI consensus is..." voice; attribute specific claims to the specific person/note they came from.
- Keep pages short (roughly 300–600 words). This is a field guide, not a textbook.

## 7. Done when

- Every knowledge-note in source A is distilled into at least one page (cross-reference check before finishing).
- Pages 07–09 each cite at least one specific post from `learn.thedesignsystem.guide` and/or `blog.murphytrueman.com` by title + URL, not just source A's own notes.
- `npx docsify serve` renders the site locally with working sidebar nav and no broken internal links.
- GitHub Pages URL is live.
- Every page follows the template in §5.
- Site checked at a 375–430px viewport (iPhone width range): no horizontal page scroll, sidebar collapses to a usable toggle, diagrams scroll within their own container instead of the page.
