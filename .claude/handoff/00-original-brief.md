# Handoff: design-systems-101 — wiki extraction

**Task type:** one-off generation (not recurring — build once, hand-edit after).
**Model:** Fable.
**Run this:** in a new, empty GitHub repo. Do not run inside `upskill-design-system` — its CLAUDE.md is scope-locked to that product and isn't a general-purpose knowledge base.

## 1. Who this is for

Me: a product designer, ~1 year into working with design systems. I know the day-to-day (Figma, component specs, some tokens) but not the operational and architectural judgment calls — why a team structures token layers a certain way, what governance actually looks like in practice, how AI-assisted workflows get scoped so they help instead of causing chaos. The wiki teaches me that judgment, using two real (if small/learning-stage) systems as evidence rather than abstract theory.

**Voice:** explain the *why* before the *what*. Assume Figma/design fluency, zero assumed knowledge of build tooling, CI, or agent orchestration — define those terms on first use. Prefer plain prose over bullet-dense reference tables; this is a teaching site, not an API doc.

## 2. Sources (frozen — read at these exact refs, don't re-pull mid-task)

**A. `upskill-design-system`** — pinned to commit `f2dab81bfe1b57fb3ea05d2484388c9c3294d5b5`
- `CLAUDE.md` (whole file — it's the connective tissue between all the pieces below)
- `docs/decisions/*.md` — all 11 ADRs (001–011; skip the `000-template.md`)
- `.claude/commands/*.md` — all 10 command specs
- `.claude/skills/run-storybook/SKILL.md`
- Treat this repo as the "small, disciplined, one-maintainer" case study — its whole ethos (see ADR-007, and the "lite agentic" framing in CLAUDE.md's opening) is *doing less, deliberately*.

**B. `murphytrueman/design-system-ops`** — pinned to commit `a4b11ef230b47198e131df4579067f88384c828d`
- `knowledge-notes/*.md` — all 11 notes (this is the closest thing to a pre-existing "expert notes" dump; lean on it heavily but don't copy verbatim — synthesize)
- `README.md`, `2-WHATS-INCLUDED.md` for framing/vocabulary
- `skills/*/SKILL.md` and `commands/*.md` — read for *what problem each one solves and why it exists*, not implementation detail
- Treat this repo as the "broad, many-tools, maximalist" case study.

Fetch both via `gh api repos/<owner>/<repo>/contents/<path>?ref=<sha>` or a shallow clone at that SHA — not a live branch pull. If a source file is missing at that ref, note it and skip; don't substitute a newer version silently.

## 3. Deliverable

A new GitHub repo, public, named `design-systems-101`. Contents:

- **Static site, zero/near-zero build step.** Use [Docsify](https://docsify.js.org) — plain markdown files, one small `index.html` + `_sidebar.md`, no bundler, serves straight from GitHub Pages. This matches "simple minimal": editing a page later just means editing a `.md` file.
- **Diagrams as Mermaid**, fenced ```mermaid``` blocks inside the markdown (Docsify's mermaid plugin renders these; GitHub also renders them natively as a fallback if someone reads the raw files). Use a diagram only where a relationship is genuinely spatial/sequential — token layer resolution order, the component lifecycle's two axes, an agentic-moment decision flow. Don't diagram things that are just lists.
- **GitHub Pages enabled** off `main` (or `/docs`) so the deliverable is a real URL, not just a repo of markdown.
- No component code, no real token values, no API keys or repo-specific config copied in as "the standard." Source repos are *evidence for a principle*, not templates to replicate.

**Mobile-friendly (primary target: iPhone / iOS Safari).** This site will mostly get read on a phone, so:
- `index.html` must include `<meta name="viewport" content="width=device-width, initial-scale=1">` — Docsify's default template already has this; verify it wasn't stripped.
- Use Docsify's built-in responsive sidebar (collapses to a hamburger toggle below tablet width) — don't replace it with a custom nav that isn't touch-tested.
- Body text and code blocks must not force horizontal scroll on a 375–430px viewport (iPhone SE through Pro Max widths). Wrap long inline code/URLs; avoid wide tables where a page's content could instead be prose or a short list.
- Mermaid diagrams don't reflow to narrow screens — wrap each diagram in a horizontally scrollable container (`overflow-x: auto`) rather than letting it force the whole page to scroll sideways, and keep diagrams narrow/simple (few nodes) so they're legible without pinch-zoom.
- Tap targets (sidebar links, search box) at least 44×44px, per iOS HIG minimum.
- Test in iOS Safari (or an equivalent responsive emulation) before calling the site done, not just a desktop browser resize.

## 4. Information architecture (draft — Fable may refine ordering, keep the arc)

Ordered as a learning path, foundational → advanced:

```
00-start-here.md          — how to read this, who it's for, the two source systems introduced
01-foundations.md         — what a design system actually is; token vs component vs governance as three separate jobs
02-token-architecture.md  — layered token models (primitive → semantic → device/context), DTCG-style format, why aliases beat hardcoded values [diagram: resolution order]
03-build-pipeline.md      — why tokens need a build step at all (source JSON → CSS/JS), what a transform is
04-component-lifecycle.md — maturity vs. implementation/adoption as separate axes; deprecation and successor patterns [diagram: lifecycle states]
05-design-to-code.md      — Figma↔code sync direction, drift, why "single source of truth" is a real architectural choice not a slogan, representational gaps (things Figma/code literally can't both express)
06-governance.md          — ownership, ADR-style decision records, sign-off, who's allowed to change what
07-documentation.md       — Storybook/living docs vs. static docs, docs-as-usage-examples
08-adoption-and-drift.md  — measuring real usage, detecting drift, what to do when they diverge
09-ai-in-design-systems.md — the two source systems as opposite bets: 8 bounded "moments" vs. 40+ always-available skills; when narrow-and-deliberate beats broad-and-automated, and vice versa [diagram: decision tree — when does a task deserve an agent at all]
10-glossary.md            — every term introduced above, one line each, linked back to its page
```

## 5. Page template (apply to every page in 02–09)

1. **The principle** (2–4 sentences, plain language, no jargon yet)
2. **Why it exists** — what breaks without it (concrete failure mode, not abstract risk)
3. **How it shows up in practice** — 1–2 short examples pulled from the two source repos, named generically ("one system splits tokens into three layers…") with a footnote-style pointer to which repo/file it came from, so I can go read the original if I want depth
4. **Diagram**, only if genuinely spatial/sequential
5. **Common mistake** — one thing a beginner (me) is likely to get wrong here

## 6. Constraints

- Don't editorialize about which source repo is "better" — they're different scopes solving different problems (one-person lite system vs. a general-purpose toolkit), and that contrast itself is the lesson in section 09.
- Don't invent best practices not traceable to a source file — if a page needs a claim the sources don't support, flag it as an open question in the page rather than asserting it.
- Keep pages short (roughly 300–600 words). This is a field guide, not a textbook.

## 7. Done when

- Every knowledge-note in repo B and every ADR + command in repo A is distilled into at least one page (cross-reference check before finishing).
- `npx docsify serve` renders the site locally with working sidebar nav and no broken internal links.
- GitHub Pages URL is live.
- Every page follows the template in §5.
- Site checked at a 375–430px viewport (iPhone width range): no horizontal page scroll, sidebar collapses to a usable toggle, diagrams scroll within their own container instead of the page.
