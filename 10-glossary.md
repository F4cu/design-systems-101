# Glossary

One line per term, in the order they're introduced across the wiki. Each links back to
the page where it's explained in context.

**Design token** — a named, reusable value (a color, a spacing unit, a font size) that
stands in for a hardcoded value in code. See [02](02-token-architecture.md).

**Primitive token** — the raw-value tier of a token system; describes *what* a value is
(`color.blue.500`), never what it means. See [02](02-token-architecture.md).

**Semantic token** — the intent tier of a token system; describes *why* a value is used
(`color.action.primary`), referencing a primitive underneath. See
[02](02-token-architecture.md).

**Alias** (token reference) — a token that points to another token instead of holding a
raw value directly, so a single change at the source propagates everywhere it's
referenced. See [02](02-token-architecture.md).

**DTCG** — the Design Tokens Community Group's shared file format for design tokens,
letting different tools read and write the same token files. See
[02](02-token-architecture.md).

**Design-to-code contract** — an explicit agreement about what "done" means at each
stage (design, build, documentation, release) of building a component. See
[03](03-design-to-code-contract.md).

**Governance** (component governance) — the decisions and processes that determine what
belongs in a design system, how it gets added, how it changes, and how it's removed. See
[04](04-component-governance.md).

**Decision record** — a written note capturing why a significant design-system decision
was made, so it doesn't get silently re-litigated later. See
[04](04-component-governance.md).

**Deprecation** — the formal process of retiring a component or token, on a timeline,
with a documented migration path to its successor. See
[04](04-component-governance.md).

**Maturity stage** — where a design system sits on a five-level spectrum from ad-hoc to
optimised, describing the sophistication of its practices, not just its current health.
See [04](04-component-governance.md).

**Coverage vs. adoption** — coverage is whether the system *provides* what a team needs;
adoption is whether the team actually *uses* it. High coverage with low adoption is a
demand problem, not a supply problem. See [05](05-adoption-measurement.md).

**Adoption stage** — where a team sits on a five-stage path (aware, installed, consuming,
contributing, advocating) in how deeply it has taken up the system. See
[05](05-adoption-measurement.md).

**Three rungs of "documented"** — a component can exist (has a story), be described (has
a props reference), or be guided (has usage guidance) — three different bars, often
conflated into one. See [06](06-documentation-coverage.md).

**Staleness** — a signal that documentation may have fallen behind a component's last
code change, framed as a risk flag to confirm, not proof the doc is wrong. See
[06](06-documentation-coverage.md).

**Context cascade** — the way context quality compounds through every handoff in a
system; strong metadata at the source produces reliable AI output downstream, weak
metadata produces hallucinated or broken output. See
[07](07-ai-context-and-readiness.md).

**Component manifest** — a structured, machine-readable index of every component in a
system (names, props, relationships, status) that AI agents and tooling can query
directly instead of parsing documentation pages. See
[07](07-ai-context-and-readiness.md).

**Agentic workflow pattern** — one of several ways multiple AI agents coordinate on a
task: sequential chain, parallel fan-out, supervisor, or feedback loop. See
[08](08-agentic-workflow-design.md).

**Autonomy level** — how much human review an AI agent's action requires before it takes
effect, ranging from fully autonomous to human-only. See
[08](08-agentic-workflow-design.md).

**Challenge Rating (CR)** — a difficulty rating for a UI component based on how dangerous
it is to implement incorrectly, used to calibrate how much documentation and audit rigor
it deserves. See [09](09-scaling-ai-effort.md).

**MCP (Model Context Protocol)** — the interface that lets AI agents read data (design
files, component metadata, code) directly from its source instead of a stale copy.
See [09](09-scaling-ai-effort.md).

**MCP layer** — one of three separated tiers of MCP access in a design system (the
design tool, the system's own metadata, the code-mapping bridge), kept apart so no
single connection becomes a bottleneck or a single point of failure. See
[09](09-scaling-ai-effort.md).
