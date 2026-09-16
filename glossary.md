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

**Alias** (token reference) — a token that points to another token instead of holding a
raw value directly, so a single change at the source propagates everywhere it's
referenced. See [Token architecture](token-architecture.md).

**DTCG** — the Design Tokens Community Group's shared file format for design tokens,
letting different tools read and write the same token files. See
[Token architecture](token-architecture.md).

**Design-to-code contract** — an explicit agreement about what "done" means at each
stage (design, build, documentation, release) of building a component. See
[The design-to-code contract](design-to-code-contract.md).

**Governance** (component governance) — the decisions and processes that determine what
belongs in a design system, how it gets added, how it changes, and how it's removed. See
[Component governance](component-governance.md).

**Decision record** — a written note capturing why a significant design-system decision
was made, so it doesn't get silently re-litigated later. See
[Component governance](component-governance.md).

**Maturity stage** — where a design system sits on a five-level spectrum from ad-hoc to
optimised, describing the sophistication of its practices, not just its current health.
See [Component governance](component-governance.md).

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

**Coverage vs. usage vs. adoption** — three distinct measurements often conflated into
one: coverage is what proportion of a product is built from the system; usage is how
often specific components are reached for; adoption is whether a team is meaningfully
on the system at all. See [Adoption measurement](adoption-measurement.md).

**Adoption stage** — where a team sits on a five-stage path (aware, installed, consuming,
contributing, advocating) in how deeply it has taken up the system. See
[Adoption measurement](adoption-measurement.md).

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

**Context cascade** — the way context quality compounds through every handoff in a
system; strong metadata at the source produces reliable AI output downstream, weak
metadata produces hallucinated or broken output. See
[AI context & readiness](ai-context-and-readiness.md).

**Component manifest** — a structured, machine-readable index of every component in a
system (names, props, relationships, status) that AI agents and tooling can query
directly instead of parsing documentation pages. See
[AI context & readiness](ai-context-and-readiness.md).

**Agentic workflow pattern** — one of several ways multiple AI agents coordinate on a
task: sequential chain, parallel fan-out, supervisor, or feedback loop. See
[Agentic workflow design](agentic-workflow-design.md).

**Autonomy level** — how much human review an AI agent's action requires before it takes
effect, ranging from fully autonomous to human-only. See
[Agentic workflow design](agentic-workflow-design.md).

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
