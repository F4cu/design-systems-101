# Scaling Across Decades

<p class="eyebrow">The Principle</p>

## At industrial scale, the job is holding together decades, not just components

Most design-system advice assumes a product with a normal software lifecycle: a few
years, one deploy pipeline, one company that owns it end to end. Industrial products
don't work that way — a piece of factory automation software or medical equipment
interface can stay in the field for decades, get maintained by a team that has changed
twice over, and end up owned by a different company entirely after an acquisition. At
that scale, a design system's job shifts from "which components exist" to holding one
coherent design language together across products that were never built at the same
time, on the same stack, or by the same team.

<p class="eyebrow">Why It Exists</p>

## Without it, every product generation reinvents its own system

Left alone, a large industrial company accumulates one specialized design system per
product line — each reasonable on its own, each solving the same problems slightly
differently. Nobody chose that outcome; it's what happens when products with decade-long
lifecycles get built years apart, sometimes by teams that arrive through an acquisition
with their own tooling already in place. The result is duplicated component work, a
UX that reads as inconsistent across a single company's product portfolio, and legacy
products left stranded outside whatever comes next — unless the system is deliberately
built to absorb and evolve past that fragmentation instead of assuming it away.

---

## In Practice

#### 1. Consolidating parallel systems into one

Siemens ran two parallel design systems for years: an older toolkit called UXT (User
Experience Toolkit) and Siemens Industrial Experience (iX), its newer system. In October
2025, Siemens folded UXT into iX rather than maintaining both — it discontinued UXT's
CDN and migrated teams onto the unified system, bringing design resources,
documentation, and governance that had been split across two efforts back into one.
That's the concrete, dated version of a pattern **David Sward**,
Siemens' Chief Design Officer and VP of User Experience, describes at a larger scale in
his own talk: Siemens arrived at its current single design language only after
confronting many specialized, product-specific systems built up over the company's
history. — [Kathrin Schalber, "UXT to Siemens Industrial Experience Migration"](https://ix.siemens.io/blog/2025/09/31/uxt-eos), Siemens iX blog, October 2025; [David Sward, "Solving the Design System Problem When Products Live for Decades,"](https://uxdx.com/profile/david-sward/) UXDX EMEA 2026

#### 2. Supporting several tech stacks instead of enforcing one

Siemens iX ships components for React, Angular, Vue, and Blazor from the same design
source, rather than picking one framework and requiring every product team to migrate
onto it. That's a direct, verifiable answer to a claim Sward makes in his talk: that
enforcing a single tech stack across an organization this size is a mistake. At
industrial scale, product teams inherit their stack from whatever was current when their
product was built — sometimes a decade or more before another team's — and a design
system that only ships in one framework locks out everyone who isn't on it. — [Siemens iX documentation](https://ix.siemens.io/docs/home/overview); [David Sward, "Solving the Design System Problem When Products Live for Decades,"](https://uxdx.com/profile/david-sward/) UXDX EMEA 2026

#### 3. Designing for products that outlive their original team

Industrial and medical hardware can stay in market, and in support, for decades — far
longer than the team that designed its interface is likely to stay together. Sward's
talk frames this as one of the central constraints his team designs around: a system
built for a two-year product cycle doesn't hold up when the product it's serving is
still shipping fifteen years later, maintained by people who never met the original
design team. The practical implication is that legacy support can't be an afterthought
bolted onto the system later — it has to be planned for from the start, the same way a
component's deprecation path is planned for at release rather than invented when the
component is finally retired (see [Release management](release-management.md)). — David
Sward, "Solving the Design System Problem When Products Live for Decades," UXDX EMEA 2026
(session description)

#### 4. Open-sourcing the design assets

Siemens iX's components, documentation, and icon set are published as open source on
GitHub, not kept behind an internal wall. Sward's talk cites this as a deliberate
decision, not an incidental one — part of the same throughline as supporting multiple
tech stacks: a system trying to serve products built on different timelines, by
different teams, some of which may not even be Siemens teams yet at the time the system
is designed, benefits from being as easy as possible for any of them to adopt without
a procurement or access conversation first. — [Siemens iX on GitHub](https://github.com/siemens/ix); David Sward, "Solving the Design System Problem When Products Live for Decades," UXDX EMEA 2026 (session description)

#### 5. Acquisitions break systems that weren't built to evolve

Sward's talk description makes a specific claim worth flagging as his framing rather
than an independently verified fact: that design systems "break the moment acquisitions
occur, unless the system is built to evolve." The reasoning holds up on its own terms —
an acquired product arrives with its own components, its own token values, sometimes its
own design language entirely, and a system that assumed a closed, single-company world
has no way to absorb that. Treat this one as an open question worth testing against your
own org's experience rather than a settled rule; it's included here because it's central
to how Sward frames the scaling problem, not because it's independently corroborated
elsewhere in this wiki's source pool. — David Sward, "Solving the Design System Problem
When Products Live for Decades," UXDX EMEA 2026 (session description)

---

This page is about the organizational and product-lifecycle version of the problem —
why the fragmentation happens at all. For the practitioner-level version — what to
actually do when you're the one who inherits one of these systems — see
[Inheriting a legacy system](inheriting-a-legacy-system.md).

## Common mistakes

- **Reading "one design language" as "one tech stack."** Siemens iX's own multi-framework
  support shows these are separable goals — visual and interaction consistency doesn't
  require forcing every team onto the same framework.
- **Treating system consolidation as a one-time migration.** The UXT-to-iX merge took
  years to reach, after both systems had already shipped independently — plan for
  consolidation as an ongoing possibility, not a project with a fixed end date.
- **Assuming legacy support can be retrofitted later.** By the time a decades-old product
  actually needs it, the team that could have planned for it is usually long gone.
