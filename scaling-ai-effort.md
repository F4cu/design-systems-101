# Scaling AI Effort to Risk

<p class="eyebrow">The Principle</p>

## Effort and AI access should scale with risk, not apply uniformly

Not every component deserves the same documentation depth, audit rigor, or level of AI access. Effort should scale with implementation risk, and agent access with demonstrated value — deliberately scoped, not maximized by default. Knowing where to spend depth is itself a design-system skill.

<p class="eyebrow">Why It Exists</p>

## Uniform effort starves your riskiest components

Time and attention are scarce. An over-documented badge burns the same hours that an under-documented date picker desperately needs — a uniform bar applied to everything quietly starves your riskiest components. The same logic applies to AI access: an agent wired into every possible tool at once is harder to reason about and debug, because you can't tell which connection produced which behavior. In both cases, "more" isn't safer. Calibrated is safer.

---

## In Practice

#### 1. Challenge Rating scoring

One team's knowledge notes borrow a mechanic from a companion project (the Component Bestiary, which catalogues UI components as D&D-style creatures): a **Challenge Rating (CR)** that ranks *implementation danger*, not visual complexity. A high-CR component "is not necessarily large or visually complex — it is dangerous to implement incorrectly."

- Badges sit around CR 1–2: misuse creates minor inconsistency, so basic usage guidelines suffice.
- Modals land at CR 5–7, where misuse causes genuine user harm through accessibility regressions.
- Date pickers and data tables reach CR 7–9 and should trigger a mandatory accessibility audit before release.

The rating calibrates everything downstream: documentation depth ("the cost of an AI tool getting a modal wrong is higher than the cost of it getting a badge wrong"), audit order, and contribution standards. A high-CR component contributed without adequate expertise "is worse than no component, because it provides false confidence while introducing real risk."
— design-system-ops, knowledge-notes/component-bestiary-reference.md

That rating is usually treated as fixed per component. It isn't: the same component's effective CR shifts with where it's placed — see [Performance in context](contextual-component-performance.md).

#### 2. Layered MCP access

The same notes apply calibrated scoping to agent access through **MCP** (Model Context Protocol — the interface that lets an AI agent read component definitions and token values directly from their real sources instead of a stale copy-paste). Rather than one giant connection, the setup is three deliberately separated **MCP layers**:

- a design MCP like Figma's — design source of truth: names, variants, token values, but no code-level props
- the system's own MCP server — machine-readable inventory, governance rules, decision trees, but no raw source code
- Code Connect — mapping "this design uses a Button" to `import { Button } from '@system/components'`, but not the full source

Cross-layer questions like "what code component should I use for this Figma frame?" resolve layer by layer; no single MCP layer becomes a bottleneck.
— design-system-ops, knowledge-notes/mcp-setup-guide.md

The same calibration shows up at the product-UI layer, not just the infrastructure layer. AWS Cloudscape's **user-authorized actions** pattern scopes an agent's permission to act on a per-decision basis — "Allow this time," "Allow for this chat," or "Always allow" — rather than one blanket grant. It's the same principle as layered MCP access, applied to what a user grants an agent inside a product rather than what a design system grants an agent reading it. See [Designing agentic UI patterns](agentic-ui-patterns.md). — [AWS Cloudscape, "User-authorized actions"](https://cloudscape.design/gen-ai/patterns/user-authorized-actions/)

#### 3. Scoped, incremental MCP rollout

Romina Kavcic, writing independently, makes the adoption-side argument: "With MCP, you control exactly what data and tools AI can access. It's not about giving AI free rein, but about creating specific, controlled bridges." Her advice: "Start small: Pick one tool, set up MCP, and automate one repetitive task. Once you see the value, expand from there" — one connection first (she suggests Figma), not everything at once. Each bridge she names is scoped to a single job, not general-purpose access:

- **Figma** — reads components, tokens, and variants for spec generation and design-token review
- **Mintlify** — turns published docs into a queryable knowledge base without leaving the editor
- **GitHub** — reviews PRs and diffs token definitions to catch design-code drift, the same failure mode covered in [Dependency observability](dependency-observability.md)
- **GitLab** — manages issues, merge requests, and CI pipelines through AI workflows
- **PostHog** — checks design decisions against real adoption and conversion data, the same evidence [Adoption & measurement](adoption-measurement.md) argues for
- **Slack** — makes chat history searchable for decision tracking and adoption signals

— Romina Kavcic, ["5 MCP Connections Every Design System Team Needs Right Now"](https://learn.thedesignsystem.guide/p/5-mcp-connections-every-design-system), 2025

---

## Common mistakes

Assuming that giving an agent *more* — more access, more documentation, more retries — is categorically better:

- **Retrying failures in a loop instead of failing honestly.** "Never retry a failed [Figma MCP] call in a loop. If the first call fails, note it, proceed without Figma, and let the user fix the connection for the next run." A well-scoped workflow treats a missing layer as an unavailable data source and says so, rather than pretending or breaking. — design-system-ops, knowledge-notes/mcp-setup-guide.md
- **Granting maximal access instead of scoped access.** Kavcic's controlled-bridges framing is the same corrective from the access side: scoped and honest beats maximal and opaque.
