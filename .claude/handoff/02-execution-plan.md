# Execution plan — build the design-systems-101 wiki

Read `00-original-brief.md` first (authoritative spec: deliverable, page template,
constraints, definition of done), then `01-research-digest.md` (research already done).
Work in `/Users/facundorosales/projects/design-systems-101` (clone of
https://github.com/F4cu/design-systems-101, currently only a stub README on `main`).

## Status when this plan was written (2026-07-02)

- [x] Original brief recovered; repo cloned locally
- [x] Repo A extracted at pin `f2dab81` and read: CLAUDE.md + all 11 ADRs (digest §Repo A)
- [x] Repo B cloned at pin `a4b11ef` and read: all 12 knowledge notes + README +
      2-WHATS-INCLUDED (digest §Repo B)
- [ ] Repo A's 10 command files + run-storybook SKILL.md — skim for problem-solved per file
- [ ] Repo B's skills/ + commands/ — skim titles/frontmatter only, for the same purpose
- [ ] Write site (steps below)
- [ ] Verify locally + mobile widths
- [ ] Push, enable GitHub Pages, confirm live URL

Sources may still exist at
`/private/tmp/claude-501/-Users-facundorosales-projects-upskill-design-system/56923623-fb1b-4418-be0b-10f87f745b03/scratchpad/sources/{repoA,repoB}`
— if gone, re-fetch with the commands in the digest.

## Build steps

1. **Docsify shell.** `index.html` (Docsify 4 via CDN + docsify-mermaid plugin + mermaid;
   keep the default viewport meta; add a small `<style>` block: `.mermaid-wrap
   { overflow-x: auto; }`, code-block wrapping for narrow screens, 44px min tap targets in
   the sidebar), `_sidebar.md` (all 11 pages, `loadSidebar: true`), `.nojekyll`, `README.md`
   at root doubles as the Docsify landing redirect or keep repo README separate from
   `00-start-here.md` (Docsify `homepage: '00-start-here.md'` is the cleaner option).
2. **Write the 11 pages** per the IA in the brief (§4) and the page template (§5:
   principle → why it exists → how it shows up in the two systems → optional diagram →
   common mistake). 300–600 words each. Footnote-style source pointers (e.g.
   "— upskill-design-system, ADR-007" / "— design-system-ops, knowledge-notes/
   token-architecture.md"). Diagrams only where spatial/sequential: token resolution order
   (02), lifecycle two axes (04), agent decision tree (09) — wrap each ```mermaid``` block
   in `<div class="mermaid-wrap">`. Keep diagrams few-node.
3. **Source→page coverage map** (definition of done requires every A ADR + command and
   every B knowledge note distilled somewhere; verify against this before finishing):
   - 00-start-here — both repos introduced as the two case studies
   - 01-foundations — tokens vs components vs governance as three jobs (A CLAUDE.md
     structure; B README five skill categories; B component-governance "what governance is")
   - 02-token-architecture — B token-architecture; A ADR-002/003/004/005; DTCG; aliases;
     naming-encodes-intent (ADR-004/005 cross-use bans as evidence)
   - 03-build-pipeline — A CLAUDE.md Style Dictionary section + ADR-002 CSS strategy +
     tokens-author command; what a transform is (px→rem, font-weight, media-query combine)
   - 04-component-lifecycle — A ADR-010 two axes + ADR-001 metadata + token-deprecation-pass
     + airtable-sync commands; B component-governance lifecycle + deprecation triggers +
     contribution criteria; B design-to-code-contract ("done" senses)
   - 05-design-to-code — A ADR-002 amendments (source-of-truth reversal, representational
     divergence) + figma-variable-audit + figma-variable-push + component-scaffold commands;
     B design-to-code-contract + mcp-setup-guide (3-layer MCP, graceful fallback)
   - 06-governance — B component-governance (decision records, criteria, failure patterns) +
     human-oversight-framework (autonomy levels); A ADR practice itself (003 supersession as
     the worked example; amendment-in-place pattern), Airtable two-direction governance,
     review-component + add-component PR gate
   - 07-documentation — B documentation-coverage (three rungs, join tiers, staleness) +
     ai-readiness (docs as living infrastructure, six-section format); A Storybook
     conventions + run-storybook skill + extract-learnings command (docs that feed back
     into metadata)
   - 08-adoption-and-drift — B adoption-measurement (four signals, coverage≠adoption) +
     documentation-coverage staleness; A token-usage.js scan, frozen snapshots, drift vs
     representational divergence, layout-generation + layout:validate as drift *prevention*
   - 09-ai-in-design-systems — the opposite-bets thesis (digest, final section); A ADR-007/
     008 + loop guardrails + 8 moments table; B agent-orchestration (4 patterns) +
     human-oversight (4 levels) + output-discipline + ai-readiness (context cascade,
     forcing function) + component-bestiary (CR calibrates agent/doc effort) +
     context-engine-blueprints (what a maximalist context layer looks like)
   - 10-glossary — one line per term introduced, linked back (token, primitive, semantic,
     alias, DTCG, transform, build step, breakpoint/device layer, drift, representational
     divergence, governance, ADR, deprecation/successor, maturity vs implementation,
     agentic moment, subagent, frozen-file handoff, MCP, manifest, Challenge Rating,
     autonomy level, coverage vs adoption, three rungs, CI, GitHub Action…)
4. **Verify locally.** `npx docsify-cli serve .` — click every sidebar link; grep pages for
   broken relative links; check a 390px-wide viewport (no horizontal page scroll; mermaid
   scrolls inside its wrapper). If a headless browser is handy use it; otherwise reason
   about CSS + keep tables narrow per the brief.
5. **Publish.** Commit all to `main`, push. Enable Pages:
   `gh api repos/F4cu/design-systems-101/pages -X POST -f 'source[branch]=main' -f 'source[path]=/'`
   (POST fails if already enabled — then use PUT). Poll
   `gh api repos/F4cu/design-systems-101/pages` until `status: built`, then curl the
   `html_url` for HTTP 200.
6. **Cross-reference check** (brief §7): tick every item in the coverage map above; note
   any source file that genuinely contributed nowhere and either add a mention or flag it
   as an open question in the relevant page.

## Constraints to not violate (from the brief)

- No component code, no real token values copied in as "the standard"; sources are
  evidence, not templates. No API keys/config.
- Don't editorialize which repo is better (09's contrast is the lesson).
- Don't invent best practices untraceable to a source — flag open questions in-page.
- Pages 300–600 words; plain prose over bullet-dense tables; define build/CI/agent jargon
  on first use; audience is a product designer ~1 year into design systems.
- Mobile-first per brief §3 (375–430px, 44px tap targets, wrapped code, scrollable
  diagrams).

## Git

Commit to `main` of design-systems-101 (this repo is the deliverable; the solo-project
"commit to current branch" convention applies here, and Pages serves from `main`).
Keep `.claude/handoff/` committed — it documents how the site was produced.
