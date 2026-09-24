---
title: Contribution Models
---

A contribution model decides who gets to *make* decisions about what enters the system, and what a contribution has to clear to get in. It might be one central team, a federation of product teams, or something in between. [Component governance](/component-governance/) is the other half: how a decision gets recorded once someone has made it. No single model fits every org. The right one changes with size and maturity.

:::tip[Key takeaways]
- Start centralized on the core, and add federation on top on purpose
- Fit the process to your org's real problem: visibility at scale, skills when small
- Add a component only when 3+ teams need it now, for the same user goal
- Set clear criteria for what leaves the system, too
- Expect a small group of contributors, however open the door is
:::

## The problem

Pick the wrong model for your org's size and maturity, and you get one of two failures. Either a central team becomes a bottleneck everyone routes around, or an open free-for-all produces components nobody maintains.

## Choosing a model

Start centralized, then add federation on purpose. [Nathan Curtis](https://medium.com/@nathanacurtis/the-fallacy-of-federated-design-systems-23b9a9a05542) has revised his own framing: treating centralized and federated as alternatives was a mistake. Federation is never pursued first, and it never succeeds without a funded centre underneath. Keep the core centralized (tokens, foundations, accessibility, component contracts), and layer federation on top deliberately.

Then fit the process to the problem your org actually has. [Ness Grixti](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/): "you can't define contribution until you truly understand what problem it's solving in your organisation." At 80+ teams, the problem is visibility: the system team can't see what every team needs. A lightweight feature-request process fits better than a pipeline for finished work. At small scale, the better move is to teach product designers and engineers systems thinking, so they can extend the system themselves.

The first three models below come from [Curtis's 2015 taxonomy](https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0). Share figures come from zeroheight's *Design Systems Report 2026* (147 practitioners).

### Solitary

One team builds mostly for itself and makes the result available to others. Bootstrap, seen from an outside designer's perspective, works this way.

### Centralized

A dedicated team produces and supports the system for everyone else. It's the most common model: 51% of teams run it, and 31% run a hybrid. It still strains: 53% of centralized teams say they don't have enough people.

### Federated

Designers from several product teams decide on the system together. Only 13% of teams run it purely federated, and staffing complaints go up as teams federate: 68% of hybrid and 74% of federated teams say they're understaffed. Federation doesn't solve the resourcing problem. It spreads it out and makes it harder to see.

### Cyclical

[Jina Anne](https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b), drawing on her time at Salesforce, adds a fourth model. A central core team and a federated contributor group keep informing each other, rather than one replacing the other.

### Community backlog

The **GOV.UK** Design System runs a public backlog on GitHub. Anyone in UK government can propose a component. A working group checks that it's useful and not a duplicate, and a named community designer runs weekly catch-ups with the contributor. [Chris Ballantine-Thomas](https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/) describes their key fix: publish what the team wants built *before* anyone proposes it, instead of waiting for proposals that didn't match what the community needed. The full story is in [Governance case studies](/governance-case-studies/).

## Practices

### Staff the core team across disciplines

[Jina Anne](https://24ways.org/2017/design-systems-and-hybrids/) points out that design-systems work is often the natural home for hybrid practitioners, such as designer-coders who don't fit a pure design or pure engineering team. Build the model around cross-functional roles (design, code, content, accessibility, product). That gives hybrids a home instead of leaving them caught between two teams.

### Count contributions, not participation

[Curtis](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898) defines a contribution as a proposal, design, code, doc, or asset, made by someone outside the core team and released through the system for others to reuse. Attending office hours or filing a bug is participation. That's valuable, but it isn't a contribution. Blur the two, and the process has to cover an endless surface and never ships.

### Match the workflow to the contribution's size

An icon, a missing variant, or a token fix should be close to self-serve: a clear template, fast review, and shipping in a normal release. A new component or a data-heavy pattern needs a steward, a defined scope, and the expectation that the contributor won't finish it alone. [Curtis](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898) describes the steward's job: guide the contributor through the steps and pick up the rest if they stall.

### Criteria for adding a component

Ask these in order. A proposal that fails an early question doesn't need a debate about the later ones.

1. **Is it actually new?** First, sort the request into a lane: modification, addition, or removal. Inayaili de León Persson's Vanilla Framework does this before any debate, so an addition isn't reviewed like a bug fix ([Component governance](/component-governance/)). A new visual expression of something that exists, like a new button color, is usually a variant of the existing component, not a new one ([Component API design](/component-api-design/)).
2. **Do three or more teams need it now?** Dan Mall's threshold from [Pilot strategy](/pilot-strategy/): if three or more teams need it *right now*, it goes in. If only one team does, that team solves it on its own for now. This matches software's **rule of three**, from Martin Fowler's *Refactoring* (1999), credited there to Don Roberts. A pattern earns a shared abstraction the third time it shows up, once there's real evidence of the shape it needs.
3. **Is it the same user problem each time?** [Cathy Dutton](https://alistapart.com/article/problem-with-patterns/) warns that reuse is usually measured from the organization's side, not the user's. A date picker shared by leisure travel booking and urgent medical scheduling looks identical, but one user is comparing options and the other needs the first available slot. State the user's goal without describing the interface. "Three teams want a date picker" fails. "Three teams need to help someone book the earliest slot" passes.
4. **Does it clear the quality bar?** It meets accessibility standards before shipping, not after. It's complete: states, responsive behavior, content guidance, and docs, not just the happy path. And it's worth the maintenance cost, since the core team carries it forever.

> "Three strikes and you refactor."
> — attributed to Don Roberts, in Martin Fowler, *Refactoring* (1999)

### Criteria for removing a component

A system with no way to remove things only grows, until it collapses under its own weight. Deprecate a component when any of these is true:

- a better alternative exists with a clear migration path
- usage is at or near zero
- accessibility debt can't be fixed
- maintenance cost outweighs its value
- it no longer fits the system's direction

Every deprecation needs a timeline and a migration path, not just a warning. **IBM's** Carbon is the standard reference for bundling deprecations with detailed migration guides. See [Release management](/release-management/).

### Expect a small group of contributors

In zeroheight's 2026 data, 69% of teams say anyone on the product team can contribute. But 82% actually get contributions from ten or fewer designers. Company size doesn't change this: even at companies with 5,000+ employees, only 37% have more than ten contributing designers. Plan for a small, well-supported champions network, not an open door with a README. [Fostering contribution](/fostering-contribution/) covers how to build one.

## Common mistakes

- **Pitching open contribution to leadership as extra capacity.** Contribution volume stays small whatever the org's size. In the short term, reviewing a contribution usually costs the core team more than building the thing itself. The real reasons to run a contribution model are legitimacy, spreading knowledge, and surfacing requirements the core team would never see.
