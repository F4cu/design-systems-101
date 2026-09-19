# Glossary

One line per term, in the order they're introduced across the wiki. Each links back to
the page where it's explained in context.

**Design token** — a named, reusable value (a color, a spacing unit, a font size) that
stands in for a hardcoded value in code. See [Token architecture](token-architecture.md).

**Primitive token** — the raw-value tier of a token system; describes *what* a value is
(`color.blue.500`), never what it means. See [Token architecture](token-architecture.md).

**Semantic token** — the intent tier of a token system; describes *why* a value is used
(`color.action.primary`), referencing a primitive underneath. See
[Token architecture](token-architecture.md).

**Component token** — an optional third tier that scopes a semantic token's intent to one
specific component, referencing a semantic token underneath. See
[Token architecture](token-architecture.md).

**Alias** (token reference) — a token that points to another token instead of holding a
raw value directly, so a single change at the source propagates everywhere it's
referenced. See [Token architecture](token-architecture.md).

**DTCG** — the Design Tokens Community Group's shared file format for design tokens,
letting different tools read and write the same token files. See
[Token architecture](token-architecture.md).

**Resolver file** — a DTCG file that composes token sets into modes, such as light/dark
or brand variants, for theming. See [Token architecture](token-architecture.md).

**Primitive** (component) — a generic, context-free building-block component (often
literally named `Box` or `Stack`) with direct access to design tokens but no domain
meaning of its own; the same idea Brad Frost calls an atom. Not to be confused with a
primitive token (above), the raw-value tier of a token system. See
[Component taxonomy](component-taxonomy.md).

**Subcomponent** — an independently composable component with its own API, intended for
use only within one specific parent component, such as `CardMedia` inside `Card`. Distinct
from a primitive by scope, not size: a primitive is reusable anywhere, a subcomponent is
tied to its parent. See [Component taxonomy](component-taxonomy.md).

**Part** — Radix Primitives' term for the same concept as a subcomponent: one piece of a
component exposed separately so consumers compose it rather than configure it through
props, e.g. `Dialog.Trigger`, `Dialog.Content`. See [Component taxonomy](component-taxonomy.md).

**Compound component** — the code-level pattern that implements subcomponents/parts: a
parent component composed from smaller components while retaining access to all of the
parent's semantic elements, e.g. `Tabs.List`, `Tabs.Item`, `Tabs.Panel`. See
[Component taxonomy](component-taxonomy.md).

**Slot** — the insertion point a parent component exposes so a subcomponent or other
content can be placed into it, rather than the piece placed there. Leaning on slots
trades a large configuration-prop surface for a small number of well-defined insertion
points. See [Component taxonomy](component-taxonomy.md).

**Component property** (Figma) — a variant, boolean, text, or instance-swap property
attached directly to a Figma component; the design-tool equivalent of a prop in code. See
[Layered component architecture](component-building.md).

**Nested instance** — a subcomponent instance placed inside a parent component in Figma,
with its own properties optionally exposed up through the parent's properties panel. See
[Layered component architecture](component-building.md).

**Design-to-code contract** — an explicit agreement about what "done" means at each
stage (design, build, documentation, release) of building a component. See
[The design-to-code contract](design-to-code-contract.md).

**Interface inventory** — a screenshot-and-catalog pass over every distinct treatment of every UI element already shipping, done before designing new tokens or components. See [UI audit & heuristic evaluation](ui-audit.md).

**Heuristic evaluation** — an expert usability review of an interface against a fixed set of principles (Nielsen's 10 heuristics), run by a small panel independently before findings are consolidated; not a substitute for user research. See [UI audit & heuristic evaluation](ui-audit.md).

**Pilot** (design system) — a real, already-planned product project used to build and
test a design system's first components against actual work, before they're locked in
as v1. See [Pilot strategy](pilot-strategy.md).

**Scorecard** (pilot scorecard) — a shared, numerically scored set of criteria used to
choose which candidate project to pilot a design system on, so the choice isn't made by
gut feel or seniority. See [Pilot strategy](pilot-strategy.md).

**Governance** (component governance) — the decisions and processes that determine what
belongs in a design system, how it gets added, how it changes, and how it's removed. See
[Component governance](component-governance.md).

**Decision record** — a written note capturing why a significant design-system decision
was made, so it doesn't get silently re-litigated later. See
[Component governance](component-governance.md).

**Maturity stage** — where a design system sits on a five-level spectrum from ad-hoc to
optimised, describing the sophistication of its practices, not just its current health.
See [Component governance](component-governance.md).

**Maturity dimension** — one of six independent axes (organizational alignment, team
effectiveness, infrastructure robustness, governance, support, adoption) a design system
can be scored on separately, rather than collapsed into one overall stage. See
[Design system maturity](design-system-maturity.md).

**RACI matrix** — a table assigning each governance decision one Responsible, one
Accountable, and any number of Consulted or Informed parties, so it's clear who decides
versus who's just weighing in. See [Component governance](component-governance.md).

**Contribution model** — the structural answer to *who* gets to propose and build
changes to a system, distinct from the mechanics of recording a decision once it's made.
See [Contribution models](contribution-models.md).

**Deprecation** — the formal process of retiring a component or token, on a timeline,
with a documented migration path to its successor. See
[Contribution models](contribution-models.md).

**Solitary model** — one team builds a system mostly for its own needs and makes the
result available to others, without formal support for outside consumers. See
[Contribution models](contribution-models.md).

**Centralized model** — a dedicated team produces and supports a system for other teams
to use as part of their own work. See [Contribution models](contribution-models.md).

**Federated model** — designers and engineers from multiple product teams decide on and
build the system together, rather than one team owning it centrally. See
[Contribution models](contribution-models.md).

**Cyclical model** — a centralized core team and a federated contributor group that
continuously inform each other, rather than one model replacing the other. See
[Contribution models](contribution-models.md).

**Community backlog** — a public, working-group-reviewed queue of proposed components
and patterns anyone can contribute to, used by GOV.UK's Design System as a fifth
contribution model alongside Curtis's four. See
[Contribution models](contribution-models.md).

**Rule of three** — the software-engineering principle that a duplicated pattern doesn't
earn a shared abstraction until it's needed a third independent time; applied to design
systems as a bar for when a one-off component becomes a system candidate. See
[Contribution models](contribution-models.md).

**Canonical Vanilla Framework** — Inayaili de León Persson's decision tree for sorting
an incoming pattern request into modification, addition, or removal before debating its
merits. See [Component governance](component-governance.md).

**Contribution vs. participation** — a contribution is a proposal, design, code, doc, or
asset released through the system for others to reuse; participation (feedback, bug
reports, office-hours attendance) is valuable but isn't a contribution. See
[Contribution models](contribution-models.md).

**Steward** — the person who guides a contributor through a large or unfamiliar
contribution, and who may finish the work themselves if the contributor stalls. See
[Contribution models](contribution-models.md).

**Composition** (component API) — building structural or content variation by nesting
and combining smaller pieces, instead of adding a configuration prop for every
variation. See [Component API design](component-api-design.md).

**Configuration collapse** — the end state of a component that has accumulated so many
layout props, visibility toggles, and nested subcomponents that its API becomes harder
to use than the problem it was meant to solve. See
[Component API design](component-api-design.md).

**Prop bloat** — the gradual, request-by-request accumulation of component properties
that each seem reasonable individually but together make a component fragile and hard
to maintain. See [Component API design](component-api-design.md).

**Multi-platform (vs. cross-platform)** — sharing one set of design decisions and
intent across platforms while letting the implementation diverge to match each
platform's conventions, rather than forcing one implementation to run everywhere
identically. See [Component API design](component-api-design.md).

**Components as data** — authoring a component's anatomy, props, styles, and variants
directly as structured data (YAML/JSON) rather than a Figma file, so Figma and
generated code for each platform become outputs of that data instead of the source
it's reverse-engineered from. See
[Multi-platform component specs](multi-platform-component-specs.md).

**Coverage vs. usage vs. adoption** — three distinct measurements often conflated into
one: coverage is what proportion of a product is built from the system; usage is how
often specific components are reached for; adoption is whether a team is meaningfully
on the system at all. See [Measuring adoption](adoption-measurement.md).

**Adoption stage** — where a team sits on a five-stage path (aware, installed, consuming,
contributing, advocating) in how deeply it has taken up the system. See
[Measuring adoption](adoption-measurement.md).

**Three rungs of "documented"** — a component can exist (has a story), be described (has
a props reference), or be guided (has usage guidance) — three different bars, often
conflated into one. See [Documentation coverage](documentation-coverage.md).

**Staleness** — a signal that documentation may have fallen behind a component's last
code change, framed as a risk flag to confirm, not proof the doc is wrong. See
[Documentation coverage](documentation-coverage.md).

**Business case** — a translated argument for a design system's value, stated in terms
a non-design stakeholder (finance, engineering leadership, product) can evaluate, rather
than in the system's own internal metrics. See
[Communicating value](communicating-value.md).

**ROI** (return on investment) — a measure of value returned relative to cost; in design
systems, notoriously under-measured — only a small fraction of teams calculate it at all,
which is part of why a credible one stands out. See
[Communicating value](communicating-value.md).

**OKR** (Objectives and Key Results) — a goal-setting framework pairing a qualitative
objective with a small number of measurable key results, commonly used by companies to
track priorities a design system's roadmap can be mapped against. See
[Business alignment](business-alignment.md).

**Metadata** — data *about* something, rather than the thing itself: not the component,
but the facts describing it (its name, its props, its variants, its accessibility role)
that let a person or an AI agent understand and use it correctly without having to
inspect the real thing directly. A book's title and author on the spine is metadata; the
book's contents aren't. See [AI context & readiness](ai-context-and-readiness.md).

**Context cascade** — the way context quality compounds through every handoff in a
system; strong metadata at the source produces reliable AI output downstream, weak
metadata produces hallucinated or broken output. See
[AI context & readiness](ai-context-and-readiness.md).

**Component manifest** — a structured, machine-readable index of every component in a
system (names, props, relationships, status) that AI agents and tooling can query
directly instead of parsing documentation pages. See
[AI context & readiness](ai-context-and-readiness.md).

**Agentic workflow pattern** — one of several ways multiple AI agents coordinate on a
task: sequential chain, parallel agents (what design-system-ops calls a parallel
fan-out), supervisor, or generator/reviewer loop (what design-system-ops calls the
feedback loop). See [Agentic workflow design](agentic-workflow-design.md).

**Autonomy level** — how much human review an AI agent's action requires before it takes
effect, ranging from fully autonomous to human-only. See
[Agentic workflow design](agentic-workflow-design.md).

**Scope note** — a brief statement of what an AI audit inspected, what it didn't, and what
it assumed, attached to the output so its claims can't be mistaken for broader knowledge
of the system than the tool actually has. See [AI output discipline](ai-output-discipline.md).

**Status label** — a qualitative marker (🟢 Strong, 🔴 Critical, ✅ PASS) used in place of
a numeric score or grade to report an AI audit's findings, forcing the judgment behind it
to be defended with evidence instead of hidden behind a number. See
[AI output discipline](ai-output-discipline.md).

**Safe outputs** — a CI pattern where an agent runs with no write permissions and can only
emit a structured request (open an issue, propose a PR); a separate, permission-controlled
job decides whether to act on it. See [CI for agentic workflows](ci-for-agentic-workflows.md).

**Trust tier** (CI) — one of three levels a CI-triggered agent change is sorted into by
confidence and risk — auto-merge, draft PR, or suggest-only — assigned per action, not per
agent. See [CI for agentic workflows](ci-for-agentic-workflows.md).

**Challenge Rating (CR)** — a difficulty rating for a UI component based on how dangerous
it is to implement incorrectly, used to calibrate how much documentation and audit rigor
it deserves. See [Scaling AI effort](scaling-ai-effort.md).

**MCP (Model Context Protocol)** — the interface that lets AI agents read data (design
files, component metadata, code) directly from its source instead of a stale copy.
See [Scaling AI effort](scaling-ai-effort.md).

**MCP layer** — one of three separated tiers of MCP access in a design system (the
design tool, the system's own metadata, the code-mapping bridge), kept apart so no
single connection becomes a bottleneck or a single point of failure. See
[Scaling AI effort](scaling-ai-effort.md).

**Context engineering** — building a structured, machine-readable layer of scoped
blueprints or metadata that gives an AI agent what prose documentation alone can't,
treated as its own artifact rather than assumed to fall out of good docs; arrived at
independently by two practitioners in the same shape. See
[Context engineering](context-engineering.md).

**Context engine** — the machine-readable layer context engineering produces: scoped,
loadable units (Murphy Trueman's seven YAML blueprints; Diana Wolosin's benchmarked
metadata format) that give an agent what it needs for a given task without handing it
everything at once. See [Context engineering](context-engineering.md).

**Generative loop** — any orchestration shape where an agent's output feeds back into
another round of generation; not every generative loop includes a review step. See
[Generative loops](feedback-loops.md).

**Generator/reviewer loop** — the type of generative loop that includes review: a generator
agent produces work, a reviewer agent reviews it and sends it back for revision, capped at a
defined number of iterations so it can't run indefinitely. This is what design-system-ops
calls the feedback-loop orchestration pattern. See
[Generative loops](feedback-loops.md).

**Format-evaluation loop** — a generative loop applied to infrastructure rather than a
single piece of output: propose a context format or metadata schema, measure how
agents actually perform against it, revise. Diana Wolosin's benchmark of eight MCP
configurations against 1,056 prompts is the concrete example. See
[Generative loops](feedback-loops.md).

**Response regeneration** — AWS Cloudscape's shippable UI pattern for generative loops:
thumbs-up/thumbs-down controls plus a dedicated regenerate action, putting the same
discipline in front of the user instead of keeping it as an internal step between two
agents. See [Generative loops](feedback-loops.md).

**AI label / explainability popover** — Carbon for AI's required, component-level
disclosure that marks content as AI-generated and explains it, so the transparency
requirement ships with the component instead of living in a guidelines page a team can
skip. See [Designing agentic UI patterns](agentic-ui-patterns.md).

**User-authorized actions** — AWS Cloudscape's scoped permission model ("Allow this
time," "Allow for this chat," "Always allow") for granting an agent authority to act,
matched to the risk and reversibility of the action instead of one blanket prompt. See
[Designing agentic UI patterns](agentic-ui-patterns.md).

**Agents vs. Flows** — GitLab Pajamas' distinction between conversational, iterative AI
interaction (Agents) and automated, repeatable AI interaction (Flows), each carrying
different risk tiers and opt-in requirements. See
[Designing agentic UI patterns](agentic-ui-patterns.md).

**Schema** — a fixed template that says what fields a piece of metadata must have and
what counts as a valid value in each one (a prop's type, a variant's allowed values),
so the data has "explicit keys, explicit values, explicit boundaries" and a program can
parse it without guessing. A restaurant menu's format — name, price, allergens, in that
order, every time — is a schema; the specific dish is the data filled into it. See
[Documentation for agents](documentation-for-agents.md).

**Design language** — the shared visual and interaction vocabulary a design system
expresses; used at industrial scale to describe the single, unifying layer that holds
together products built on different tech stacks, by different teams, sometimes
decades apart. See [Scaling across decades](scaling-across-decades.md).

**RFC** (Request for Comments) — a written proposal for a significant change, circulated
so people can weigh in before it's decided rather than after; part of a system's
contribution history worth reading when inheriting it. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Design system archaeology** — the discipline of reading and understanding an existing
design system you didn't build, distinct from an audit: an audit asks what's broken,
archaeology asks what was meant. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Load-bearing lore** — an undocumented decision in an inherited system that still
matters (an accessibility fix, a cross-team compromise); the default assumption for
anything you can't explain, until proven otherwise. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Vestigial lore** — an undocumented decision in an inherited system that was a
workaround for a problem that no longer exists. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Generation** (design system) — an overhaul large enough to touch colors, typography,
spacing, and components all at once — closer to a revolution than a refinement — as
distinct from an incremental release. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Kickstart** — a hands-on session where the design-system team migrates a sample
product alongside an adopter, in the adopter's own environment, instead of handing over
a migration guide and leaving them to it. See
[Inheriting a legacy system](inheriting-a-legacy-system.md).

**Tokens/components as an API** — the framing that a design system's tokens and
components are already an API contract, read by AI as much as by humans, and should be
named and structured by function (`OnboardingStep`) rather than appearance (`BlueCard`).
See [Documentation for agents](documentation-for-agents.md).
