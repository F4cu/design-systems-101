# Research digest — design-systems-101 wiki extraction

Companion to `00-original-brief.md` (the spec) and `02-execution-plan.md` (remaining steps).
All sources below were read in full at the pinned refs on 2026-07-02. This digest is the
condensed synthesis so a fresh agent does not need to re-read everything — but the source
files remain the ground truth for any claim that needs verification or a direct citation.

## Source refresh commands (reproducible)

```bash
# Repo A — upskill-design-system @ f2dab81 (local clone)
cd /Users/facundorosales/projects/upskill-design-system
git archive f2dab81bfe1b57fb3ea05d2484388c9c3294d5b5 \
  CLAUDE.md docs/decisions .claude/commands .claude/skills/run-storybook/SKILL.md \
  | tar -x -C <workdir>/sources/repoA

# Repo B — murphytrueman/design-system-ops @ a4b11ef
git clone --no-checkout https://github.com/murphytrueman/design-system-ops.git <workdir>/sources/repoB
cd <workdir>/sources/repoB && git checkout a4b11ef230b47198e131df4579067f88384c828d
```

Note: repo B has **12** knowledge notes, not 11 as the brief says — cover all 12.
Repo B also has 43 skill dirs/files in `skills/` and 14 commands in `commands/`; the brief
says read those only for *what problem each solves*, not implementation.

## Repo A — the "small, disciplined, one-maintainer" system

**CLAUDE.md (read in full; pinned version differs from current only in the ADR-008
amendment paragraph — the token-contrast check postdates the pin, don't cite it).**
Key facts: "lite agentic" = fixed small component set + recurring automation as
scripts/GitHub Actions with direct REST; MCP only for one-off interactive tasks; agents
limited to 8 developer-triggered "agentic moments" (commands in `.claude/commands/`).
Pipeline: Figma → token export → Style Dictionary → CSS/JS → components; Airtable =
governance layer; GitHub Actions = automation layer. Three-layer tokens
(primitives / theme light+dark / device desktop+tablet+mobile), W3C DTCG (`$type`/`$value`,
`{alias}` syntax, no `$extensions`). Unitless line-height ratios = accepted code↔Figma
representational divergence, not drift. Frozen-memory snapshots (committed files, never
live APIs, read by moments/loops): `airtable-governance.json`, `token-usage.json`,
`figma-variables.json`, `.claude/component-signoff.json`, `.claude/component-pipeline.json`,
`.claude/STATUS_QUO.md`. Loop guardrails: sequential ≤2 agents, frozen-file handoffs only,
deterministic work stays a script, fail-fast, no agent code to main unreviewed.

**ADRs (all 11 read in full):**
- **001 Component metadata schema** — co-located `*.metadata.json` per component, validated
  against `component.schema.json` in CI. JSON over Markdown: Indeed research (Diana Wolosin,
  Into Design Systems 2025, 1,056 prompts) found JSON cut token cost ~80% at equal/better
  accuracy. Deliberate exclusions recorded so they aren't re-added (anatomy, aiHints,
  useCases). Amendment: variants became named axes (`variant`, `size`, `shape`) after 7/11
  files failed the schema — enforcement was added the same day the drift was found.
- **002 Three-layer token model** — layers only reference downward via `{path}`. Two
  amendments: (1) *source-of-truth reversal* — Figma→code sync impossible on the plan
  (Variables REST API + Code Connect are Enterprise-gated; Token Studio free sync is
  single-file vs this multi-file architecture), so code became canonical and Figma a
  downstream mirror; the only automatable direction is code→Figma via plugin/MCP.
  (2) *representational divergences* — Figma can't store unitless values; line-height
  ratios always differ by construction and are excluded from drift.
- **003 `$root` convention — SUPERSEDED** — chose DTCG's `$root`, then reversed to
  `.default` after ecosystem audit (Tokens Studio, Style Dictionary converge on `.default`;
  `$root` needed a custom preprocessor and emitted `-root` suffixes). Great teaching
  example: a reversal recorded as supersession, not rewritten history.
- **004 `space.*` vs `grid.*`** — space = inside components (inset/stack/inline, Nathan
  Curtis model); grid = page structure, consumed by exactly one `.container` utility.
  Cross-use forbidden even when values coincide — names encode intent.
- **005 `size` vs `space`** — size = filled elements (presence), space = emptiness
  (absence); same 4px grid, numeric keys mirror each other; t-shirt names live only at the
  semantic layer (`icon.size.sm` ≠ `avatar.size.sm`).
- **006 Carousel = hook + pattern, not component** — prior-art survey (Polaris/Radix/Chakra
  ship none; Bootstrap/Ant do; shadcn wraps Embla). `useCarousel` owns only the error-prone
  state logic; layout stays in consuming code; revisit triggers recorded.
- **007 Verified component loop (`/add-component`)** — sequential ≤2 agents, frozen-file
  handoffs, deterministic gates as npm scripts. Rejected a parallel hub-and-spoke blueprint
  because 3 of its assumptions are false on Claude Pro (parallel swarm burns the rolling
  usage window N×; Figma REST is Enterprise-gated; per-token cost tiering assumes API
  billing). Kept its 3 plan-independent good ideas: frozen state files, adversarial
  verification, on-demand triggering. One reviewer subagent exists *because* fresh context
  is what makes review independent.
- **008 Two-tier a11y** — Tier 1 static jsx-a11y lint for all; Tier 2 behavioral test
  (Vitest+Testing Library+vitest-axe, jsdom) only for interactive components, derived from
  existing metadata (no schema change). Backlog ledger waives pre-existing components,
  shrinking, new ones can't be waived. jsdom trade-off: color-contrast/focus-ring stay
  visual.
- **009 Extend vs new vs internal** — the three-question test: same semantic role → prop;
  different role despite similar shape (chrome at rest, icon axis, state model, ARIA
  contract) → new component; single parent, no second consumer → styled element inside the
  parent's CSS Module. Example: ButtonArrow vs accordion trigger — both circular icon
  buttons, nothing else load-bearing shared.
- **010 Lifecycle two axes** — Maturity (beta/ready/deprecated, code-owned, pushed
  code→Airtable) vs Implementation (in progress/in review/established derived by sense.js
  from handoff artifacts; done/todo human-set in Airtable, pulled back, never overwritten
  — "don't downgrade done" guard; separate columns so pushed and human values can't
  collide).
- **011 Layout landmark grammar** — fixed mapping Figma level → HTML landmark
  (Page→`<Box as="main">`, Section→named `region`, Container→`.container`, two column
  patterns: CSS Grid vs wrapping flex). Replaced a blanket "no inline styles" rule that the
  codebase itself contradicted with an explicit allowlist. Deterministic validator
  (`layout:validate`) gates output.

**Commands (10 files in `.claude/commands/` at the pin: add-component, airtable-sync,
component-scaffold, extract-learnings, figma-variable-audit, figma-variable-push,
layout-generation, review-component, token-deprecation-pass, tokens-author) — NOT yet read
in detail.** The builder should skim each for its one-line "problem it solves + invariant"
(the CLAUDE.md agentic-moments table already gives the invariants; the files add inputs/
steps/success signals). Same for `.claude/skills/run-storybook/SKILL.md`.

## Repo B — the "broad, many-tools, maximalist" toolkit

Product: **Design System Ops** — a Claude Code/Cowork skill pack: 40 skills in five
categories (Audit, Govern, Document, Validate, Communicate), 4 agents (full-diagnostic,
release-check, governance-review, migration — chained skill workflows), 12 knowledge notes.
Author: Murphy Trueman, "14 years of production design systems work." Audience: the people
who *run* systems, not just use them. Works conversation-only, code-connected, or
Figma-connected.

**The 12 knowledge notes (all read in full):**
1. **token-architecture** — three tiers (primitive → semantic → component-*optional*);
   references strictly downward; semantic names encode intent, never appearance
   (`color.semantic.blue` "is a primitive with extra steps"); platform differences handled
   in transforms, not names; DTCG 2025.10 (13 token types, resolvers, sets); failure
   patterns (primitives-only systems, appearance-named semantics, token count outgrowing
   product footprint).
2. **design-to-code-contract** — "done" has many senses; four explicit contracts (design /
   build / documentation / release); common gaps (screenshot handoffs, "just copy the
   existing component", a11y deferred to QA, docs written after release); staff-level: prop
   API as public contract, semver per component, blast-radius analysis, platform SLA
   thinking.
3. **component-governance** — decision records ("teams without them re-litigate every 18
   months"); contribution criteria (recurrence, generality, accessibility, ownership, fit);
   deprecation triggers (superseded, zero usage, unresolvable a11y debt, disproportionate
   maintenance, off-direction); full lifecycle proposal→removal; healthy local
   implementation vs drift; composition/dependency graphs; five-stage maturity model
   (ad-hoc → managed → systematic → measured → optimised); failure patterns (governance as
   gatekeeping, deprecation avoidance).
4. **adoption-measurement** — coverage ≠ adoption (supply vs demand problem); four signals
   (installation, component consumption, token compliance, pattern adherence); leading vs
   lagging indicators; always break down by team; five adoption stages (aware → installed →
   consuming → contributing → advocating); never rank teams competitively.
5. **ai-readiness** — "AI readiness is design systems quality applied with more precision";
   the context cascade (context quality compounds through every handoff; no neutral
   handoff); three pillars (coverage, context, validation); six dimensions of component AI
   readiness; six-section description format (Purpose/Props/Anti-patterns/Composition/
   Accessibility/Examples — each targets a class of LLM error); machine-readable component
   manifest; derive metadata from source; the forcing-function argument (preparing for AI
   fixes problems that have always confused new humans too).
6. **agent-orchestration-guide** — four patterns: sequential chain, parallel fan-out,
   supervisor, feedback loop (max 3 iterations); context types (system/task/agent) and the
   minimal-context principle; handoff protocol fields (status, output, open questions,
   confidence); failure handling ("never silently skip a failed step — a skipped audit is
   worse than a failed audit"); anti-patterns: context hoarding, silent degradation, retry
   storms, implicit ordering.
7. **human-oversight-framework** — four autonomy levels (1 fully autonomous → 2 autonomous
   + audit trail → 3 human-in-the-loop → 4 human-only); criteria per level (reversibility,
   blast radius, accountability); error attribution model (agent- / system- /
   human-attributable, each with a different fix); review cadences; escalation triggers
   (>10% error rate escalates a level).
8. **output-discipline** — scope claims to what was inspected; answer the question asked;
   cut process, keep substance; respect what you don't know (deviations may be deliberate);
   no hedging spirals; senior-peer tone, not external auditor; wayfinding via status labels;
   **no numeric scores ever** (labels force qualitative judgment defended by evidence);
   open with the headline.
9. **component-bestiary-reference** — thecomponentbestiary.com Challenge Ratings (CR) rank
   *implementation danger*, not visual complexity; CR calibrates documentation depth, audit
   priority, and contribution-review rigor; category table (typography CR1–2 … date pickers
   and drag-and-drop CR7–9).
10. **context-engine-blueprints** — seven YAML blueprint templates (ux, ui, content,
    accessibility, ethical, technical, business-intelligence) + engine manifest + usage
    guide teaching agents which blueprints to load per task type.
11. **documentation-coverage** — code is the source of truth, docs are the derived surface
    (gap vs orphan directionality); three rungs of "documented" (exists → described →
    guided); join-key reliability hierarchy (Tier A resolved file path / B symbol name /
    C fuzzy name — "degrade loudly, not silently"); staleness computed from git dates as a
    *risk flag*, not a defect; coverage ≠ usage.
12. **mcp-setup-guide** — three-layer MCP architecture (Layer 1 design tool / Layer 2 the
    system's own metadata server / Layer 3 Code Connect bridge); cross-layer resolution
    chains; graceful fallback when Figma is unavailable ("never retry a failed Figma call
    in a loop"); pitfalls (stale serving, overly broad access, token budget exhaustion).

## The central contrast (page 09's thesis, pre-approved framing)

Two opposite bets on the same conviction (machine-readable systems + explicit knowledge):
- Repo A: **doing less, deliberately** — 8 bounded developer-triggered moments, ≤2
  sequential agents, scripts for everything recurring, frozen-file handoffs; economics of a
  Claude Pro rolling usage window and one maintainer.
- Repo B: **broad availability** — 40+ always-available skills, 4 chained agents, parallel
  fan-out where audits are independent, autonomy levels instead of a hard agent cap;
  economics of a team/staff practice where the toolkit amortises across many systems.
Both encode governance as explicit artifacts; both keep humans on the irreversible
decisions (A: PR review + Airtable done sign-off; B: Level 3/4 oversight). Do NOT
editorialize which is better — the contrast is the lesson.
