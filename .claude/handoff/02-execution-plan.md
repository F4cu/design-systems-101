# Execution plan — build the design-systems-101 wiki

Read `00-original-brief.md` first (authoritative spec: deliverable, page template,
constraints, definition of done), then `01-research-digest.md` (research already done).
Work in `/Users/facundorosales/projects/design-systems-101` (clone of
https://github.com/F4cu/design-systems-101, currently only a stub README on `main`).

## Status when this plan was written (2026-07-02)

- [x] Original brief recovered; repo cloned locally
- [x] Source A cloned at pin `a4b11ef` and read: all 12 knowledge notes + README +
      2-WHATS-INCLUDED (digest §Source A)
- [ ] Source A's 14 command files + 43 skills/ entries — skim titles/frontmatter only, for
      "what problem each solves"
- [ ] External sources for pages 07–09 — `WebFetch`/`WebSearch` on
      `learn.thedesignsystem.guide` and `blog.murphytrueman.com`; start from the 4
      already-verified posts in the digest, find at least one more per page (Challenge-Rating
      / effort-calibration angle, layered-MCP angle for page 09)
- [ ] Write site (steps below)
- [ ] Verify locally + mobile widths
- [ ] Push, enable GitHub Pages, confirm live URL

Sources may still exist at
`/private/tmp/claude-501/-Users-facundorosales-projects-upskill-design-system/56923623-fb1b-4418-be0b-10f87f745b03/scratchpad/sources/repoB`
(the old repoB path — content matches source A) — if gone, re-clone with the command in the
digest.

## Build steps

1. **Docsify shell.** `index.html` (Docsify 4 via CDN + docsify-mermaid plugin + mermaid;
   keep the default viewport meta; add a small `<style>` block: `.mermaid-wrap
   { overflow-x: auto; }`, code-block wrapping for narrow screens, 44px min tap targets in
   the sidebar), `_sidebar.md` (all 10 pages, `loadSidebar: true`), `.nojekyll`, `README.md`
   at root doubles as the Docsify landing redirect or keep repo README separate from
   `00-start-here.md` (Docsify `homepage: '00-start-here.md'` is the cleaner option).
2. **Write the 10 pages** per the IA in the brief (§4) and the page template (§5:
   principle → why it exists → how it shows up in source A [+ the two blogs for 07–09] →
   optional diagram → common mistake). 300–600 words each. Footnote-style source pointers
   (e.g. "— design-system-ops, knowledge-notes/token-architecture.md" /
   "— Romina Kavcic, 'Should you build an agent for your design system'"). Diagrams only
   where spatial/sequential: token resolution order (02), maturity-model progression (04),
   agent-decision tree (08) — wrap each ```mermaid``` block in `<div class="mermaid-wrap">`.
   Keep diagrams few-node.
3. **Source→page coverage map** (definition of done requires every source-A knowledge note
   distilled somewhere, and pages 07–09 each citing a specific external post; verify against
   this before finishing):
   - 00-start-here — source A introduced; the two external blogs flagged as the AI section's
     extra sources
   - 01-foundations — token vs component vs governance as three jobs (README, 5 skill
     categories; component-governance "what governance is")
   - 02-token-architecture — token-architecture note; DTCG; aliases; naming-encodes-intent
     failure pattern; Trueman "Your next design system user is an agent" (naming as API)
   - 03-design-to-code-contract — design-to-code-contract note (four contracts, common gaps)
   - 04-component-governance — component-governance note (decision records, criteria,
     deprecation triggers, five-stage maturity model); optionally Trueman "bidirectional
     design system" if the page covers governance feedback loops
   - 05-adoption-measurement — adoption-measurement note (four signals, coverage≠adoption,
     five adoption stages)
   - 06-documentation-coverage — documentation-coverage note (three rungs, join-key tiers,
     staleness as risk flag)
   - 07-ai-context-and-readiness — ai-readiness note (context cascade, six-section format,
     manifest) + context-engine-blueprints (seven blueprint types); Kavcic "Design tokens
     that AI can actually read"
   - 08-agentic-workflow-design — agent-orchestration-guide (4 patterns) + human-oversight-
     framework (4 autonomy levels) + output-discipline; Kavcic "Should you build an agent
     for your design system" (decision-tree source material)
   - 09-scaling-ai-effort — component-bestiary-reference (Challenge Ratings calibrate
     documentation/audit depth) + mcp-setup-guide (3-layer MCP, graceful fallback); at least
     one more external post (still to be found — see digest)
   - 10-glossary — one line per term introduced, linked back (token, primitive, semantic,
     alias, DTCG, contract, governance, decision record, deprecation/successor, maturity
     stage, adoption stage, coverage vs adoption, three rungs of documented, staleness,
     context cascade, manifest, agentic pattern, autonomy level, Challenge Rating, MCP
     layer…)
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
   any source file or expected external post that genuinely contributed nowhere and either
   add a mention or flag it as an open question in the relevant page.

## Constraints to not violate (from the brief)

- No component code, no real token values copied in as "the standard"; source A is
  evidence, not a template. No API keys/config.
- Don't invent best practices untraceable to a source or a specifically cited post — flag
  open questions in-page.
- Pages 07–09 attribute claims to the specific author/note they came from — don't blur
  Kavcic, Trueman, and source A's own notes into one voice.
- Pages 300–600 words; plain prose over bullet-dense tables; define build/CI/agent jargon
  on first use; audience is a product designer ~1 year into design systems.
- Mobile-first per brief §3 (375–430px, 44px tap targets, wrapped code, scrollable
  diagrams).

## Out of scope (moved elsewhere)

The former "repo A" source (`upskill-design-system`) and its ADRs/commands are **not**
part of this wiki anymore. That material now feeds a separate, standalone documentation
site built *inside* the `upskill-design-system` repo itself — see
`upskill-design-system/.claude/handoff/docsify-docs-site.handoff.md`. Don't re-pull that
content here; if a future page seems to need it, that's a sign it belongs in the other
site, not this one.

## Git

Commit to `main` of design-systems-101 (this repo is the deliverable; the solo-project
"commit to current branch" convention applies here, and Pages serves from `main`).
Keep `.claude/handoff/` committed — it documents how the site was produced.
