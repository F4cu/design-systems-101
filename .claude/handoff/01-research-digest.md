# Research digest — design-systems-101 wiki extraction

Companion to `00-original-brief.md` (the spec) and `02-execution-plan.md` (remaining steps).
Source A below was read in full at the pinned ref on 2026-07-02. This digest is the
condensed synthesis so a fresh agent does not need to re-read everything — but the source
files remain the ground truth for any claim that needs verification or a direct citation.
The external sources (§ below) have **not** been fetched yet for this task — that's
remaining work, tracked in `02-execution-plan.md`.

## Source refresh command (reproducible)

```bash
# Source A — murphytrueman/design-system-ops @ a4b11ef
git clone --no-checkout https://github.com/murphytrueman/design-system-ops.git <workdir>/sources/sourceA
cd <workdir>/sources/sourceA && git checkout a4b11ef230b47198e131df4579067f88384c828d
```

Note: the repo has **12** knowledge notes. It also has 43 skill dirs/files in `skills/` and
14 commands in `commands/`; per the brief, read those only for *what problem each solves*,
not implementation.

## Source A — Design System Ops (Murphy Trueman)

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

**Commands (14 files) and skills (43 dirs/files) — NOT yet read in detail.** The builder
should skim titles/frontmatter only, for "what problem each solves" — same treatment the
original brief specified.

## Page-to-note mapping (source A, pages 01–06)

- **01-foundations** — README + `2-WHATS-INCLUDED.md` for vocabulary/framing;
  component-governance's opening ("what governance is") for the token/component/governance
  three-jobs framing.
- **02-token-architecture** — token-architecture note in full; the appearance-vs-intent
  naming failure pattern is the page's "common mistake" candidate.
- **03-design-to-code-contract** — design-to-code-contract note in full; the four gaps
  (screenshot handoffs, "just copy the existing component", a11y deferred to QA, docs after
  release) are concrete failure-mode material for §2 of the page template.
- **04-component-governance** — component-governance note (decision records, contribution
  criteria, deprecation triggers, five-stage maturity model) — diagram candidate: the
  maturity model as a five-stage progression.
- **05-adoption-measurement** — adoption-measurement note in full.
- **06-documentation-coverage** — documentation-coverage note in full.

## External sources — for pages 07–09 (not yet fetched)

Live blogs, not pinned. Fetch specific posts via `WebFetch`/`WebSearch`; cite title + URL,
never the site generically. A prior research pass in the sibling `upskill-design-system`
project (see that repo's `.claude/handoff/system-case-study-draft.md`) already surfaced and
verified four posts — reusable as a head start, but the digest below is not exhaustive:

- Romina Kavcic, "Design tokens that AI can actually read" —
  https://learn.thedesignsystem.guide/p/design-tokens-that-ai-can-actually — argues that
  without a semantic token layer an AI sees "a wall of nested objects with no context";
  intent-carrying names inform its choices at every layer. Good fit for
  **07-ai-context-and-readiness** (pairs with source A's `ai-readiness` note).
- Romina Kavcic, "Should you build an agent for your design system" —
  https://learn.thedesignsystem.guide/p/should-you-build-an-agent-for-your — agent
  workflows trade latency and cost for task performance; "find the simplest solution
  possible, and only increase complexity when needed — don't build an agent because you
  can." Good fit for **08-agentic-workflow-design**'s decision-tree diagram.
- Murphy Trueman, "Your next design system user is an agent" —
  https://blog.murphytrueman.com/your-next-design-system-user/ — machine consumers force
  purpose-driven naming over shape-driven naming; "your design system is already an API;
  the question is whether it's a good one." Good fit for **07-ai-context-and-readiness**,
  cross-referencing source A's token-architecture note.
- Murphy Trueman, "The bidirectional design system: When code talks back to design" —
  https://blog.murphytrueman.com/the-bidirectional-design-system/ — governance moving from
  a one-way street (design → code) toward systems where code and usage data flow back into
  governance decisions too. Good fit for **04-component-governance** or
  **08-agentic-workflow-design**, whichever ends up covering feedback loops.

**Found (2026-07-02):**
- Romina Kavcic, "5 MCP Connections Every Design System Team Needs Right Now" —
  https://learn.thedesignsystem.guide/p/5-mcp-connections-every-design-system —
  practical layered/phased-adoption argument: connects AI to Figma, docs, code repos,
  analytics platforms one at a time; "start small: pick one tool, set up MCP, and
  automate one repetitive task. Once you see the value, expand from there"; "you control
  exactly what data and tools AI can access... creating specific, controlled bridges."
  Good fit for **09-scaling-ai-effort**, pairing with source A's `mcp-setup-guide`
  three-layer model — both argue for deliberately scoped/incremental agent access
  rather than maximal connection.

## Source A — commands/skills title-only skim (2026-07-02)

Per brief, skimmed for "what problem each solves," not implementation. 14 commands map
1:1 to audit/report skills (component-audit, token-audit, docs-coverage, drift-check,
governance-review, release-check, migration, cicd-integration, codemod-generator,
describe-component, system-benchmark, system-health, visual-report, full-diagnostic) —
these are the CLI-level entry points into the skill pack.

43 skills fall into five categories matching source A's own framing (Audit, Govern,
Document, Validate, Communicate): audits (component/token/theme/naming/API/a11y/drift),
governance (decision-record, deprecation-process, contribution-workflow,
governance-encoder, component-decision-tree), documentation (usage-guidelines,
pattern-documentation, token-documentation, ai-component-description,
metadata-schema-generator, context-engine-builder, codebase-index), communication
(change-communication, stakeholder-brief, system-pitch, adoption-report, visual-report,
release-retrospective), plus cross-cutting (triage, session-memory, schema-validator,
version-bump-advisor, figma-variable-audit). 4 chained "agent" files
(full-system-diagnostic-agent, governance-review-agent, migration-agent,
component-to-release-agent) compose multiple skills into end-to-end workflows — concrete
referents for source A's `agent-orchestration-guide` sequential/supervisor patterns on
page 08. Useful mainly as evidence for **01-foundations** (five-category framing of "what
running a system actually involves") and as a real example set for **08** (each agent
file's frontmatter names which skills it chains and why, matching the orchestration
note's patterns).

## Section thesis (pages 07–09, replaces the old two-repo "opposite bets" framing)

There's no second system to contrast against anymore, so the AI section's thread is
**how a system earns AI-readiness without over-building for it**: readiness is design-system
quality applied with more precision (source A's `ai-readiness` note), not a separate
initiative; agent involvement should be scoped to where judgment is genuinely needed, not
maximized (Kavcic's "don't build an agent because you can"); and calibration — of autonomy
level, of documentation depth, of audit rigor — is itself a design-system skill, using the
Challenge-Rating and human-oversight-level material as the concrete mechanism. Don't
editorialize about which named author (Kavcic vs. Trueman) is "more right" where their
framings differ slightly — attribute claims individually and let the differences stand.
