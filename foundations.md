# Foundations: What a Design System Actually Is

<p class="eyebrow">The Principle</p>

## A design system is three jobs, not one library

A design system is not a component library. It is three distinct jobs that happen to live under one name: **tokens** (the raw vocabulary — colors, spacing, type sizes), **components** (the assembled units built from that vocabulary), and **governance** (the decisions about what belongs, how it changes, and how it leaves). Most designers only ever touch the middle layer. The other two are separate disciplines, and each one fails in its own way when neglected.

<p class="eyebrow">Why It Exists</p>

## Neglect any one layer and it fails invisibly

Design systems drift. One team's practitioner notes put it bluntly: tokens go stale, components fall out of spec, and governance documentation gets written once and never updated. — design-system-ops, README.md

Each of those is a different failure at a different layer. Stale tokens mean the vocabulary no longer matches what the product actually ships — every "blue" in Figma is now a slightly different blue in code. Out-of-spec components mean the assembled units have quietly diverged from their definitions. Dead governance means nobody knows how a change gets in, so changes either stop happening or happen everywhere at once with no record. If you treat the system as "a set of components," you can only see one of these three failures coming.

---

## In Practice

The same practitioner's toolkit organizes design-systems work into five categories — not a universal taxonomy, but a useful picture of what running a system actually involves day to day:

- **Audit** — understand what you actually have: token audits, drift detection, naming checks.
- **Govern** — run the system as infrastructure: contribution workflows, deprecation processes, decision records.
- **Document** — make the system legible to humans and machines.
- **Validate** — verify quality before it ships: accessibility checks, token compliance.
- **Communicate** — adoption reports, stakeholder briefs; moving people and decisions.

— design-system-ops, README.md

Notice how little of that list is "design a component." Most of the work is the invisible scaffolding around the components.

#### 1. Scaffolding serves people, not metrics

Jina Anne draws a parallel to McDonald's assembly-line process and NYC Transit's sign standards: both succeed by eliminating noise so people can focus on what actually matters, not by imposing order for its own sake. Applied to a design system, a token, a component, or a governance process is a means to an end, not the end itself — the point is to give designers and engineers a toolbox that frees up energy for real problems, not a set of handcuffs restricting what they can build. A system judged only by technical metrics (less duplicated code, faster delivery) is being measured on the mechanism instead of the purpose it exists to serve. — [Jina Anne, "Design Systems are for People"](https://www.aiga.org/inspiration/talks/jina-anne-design-systems-are-for-people), AIGA

On the governance job specifically, the same notes offer a framing worth memorizing: governance is "the set of decisions and processes that determine what belongs in a design system, how it gets there, how it changes, and how it leaves. Without it, a design system accumulates components by inertia rather than by intent... Governance is not bureaucracy. The goal is not to make contribution harder — it is to make the system trustworthy. A system that accepts anything is a system nobody trusts." — design-system-ops, knowledge-notes/component-governance.md

Alla Kholmatova's book on design systems names the payoff of getting all three layers right, not just the middle one:

> "Without a shared design language and practices, collaboration is difficult."
> — Alla Kholmatova, *Design Systems: A Practical Guide to Creating Design Languages for Digital Products* (O'Reilly, 2017)

Tokens and governance are what make that shared language durable — without them, "the library" is just a folder of components that happen to look similar today and will quietly stop matching each other as soon as nobody's watching.

---

## Common mistakes

- **Equating "the design system" with "the Figma library."** If your mental model is component-shaped, you'll invest all your effort in the middle layer while the vocabulary underneath it rots and the decision-making around it never gets defined. When something then goes wrong — a rebrand that touches five hundred files, a library full of near-duplicate buttons nobody trusts — it looks like a component problem, but it started one layer up or one layer down.
- **Measuring the system by technical metrics instead of the problems it solves for people.** Judging success purely on things like less duplicated code or faster delivery treats the token, component, or process as the end goal instead of the means to freeing up people's energy for real problems.

The next pages take each layer in turn, starting with tokens.
