# Contribution Models

<p class="eyebrow">The Principle</p>

## A contribution model decides who gets to make the call, not how it's recorded

A contribution model answers a different question than [component governance](component-governance.md) does. Governance is about how a decision gets recorded once someone's made it. A contribution model is about who structurally gets to *make* it — one central team, a federation of product teams, or something in between — and what counts as a contribution worth accepting in the first place.

<p class="eyebrow">Why It Exists</p>

## The wrong model produces a bottleneck or an unmaintained free-for-all

Pick the wrong model for your org's size and maturity and you get one of two failures: a centralized team that becomes a bottleneck everyone routes around, or an open, federated free-for-all that produces components nobody maintains. Nathan Curtis's 2015 taxonomy is still the reference point: **solitary** (one team builds mostly for itself and makes the result available — Bootstrap, from an outside designer's perspective, works this way), **centralized** (a dedicated team produces and supports the system for others), and **federated** (designers from multiple product teams decide on it together) — [Nathan Curtis, "Team Models for Scaling a Design System"](https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0). Jina Anne's extension, drawn from her time at Salesforce, adds a fourth: **cyclical**, where a centralized core team and a federated contributor group continuously inform each other rather than one replacing the other.

## How it shows up in practice

**Federation is a facet, not a starting point.** Curtis has since revised his own framing: presenting centralized and federated as a choice between alternatives was a mistake. In practice, federation is never pursued first and never succeeds without a funded centre underneath it — the move is to start centralized on the core (tokens, foundations, accessibility, component contracts) and layer federation on top deliberately, not to pick one model and commit to it forever. — [Nathan Curtis, "The Fallacy of Federated Design Systems"](https://medium.com/@nathanacurtis/the-fallacy-of-federated-design-systems-23b9a9a05542)

Survey data backs this up with numbers rather than opinion. zeroheight's 2026 Design Systems Report, surveying 147 practitioners, found 51% run a centralized model, 31% hybrid, and only 13% pure federated — and dissatisfaction with staffing *climbs* the more federated a team goes: 53% of centralized teams say they don't have enough people, rising to 68% of hybrid teams and 74% of federated teams. Federation doesn't solve the resourcing problem; it spreads it out and makes it harder to see. — zeroheight, *Design Systems Report 2026*

**Contribution is not participation.** Curtis draws a line worth keeping: a contribution is a proposal, design, code, doc, or asset — completed by someone outside the core team and released through the system for others to reuse. Attending office hours or filing a bug is participation, which is valuable, but it isn't a contribution. Blur the two and your contribution process has to cover an infinite surface and never ships. — [Nathan Curtis, "Defining Design System Contributions"](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898)

**Contributions aren't all the same size, so the workflow shouldn't be either.** An icon, a missing variant, or a token fix should be near-autonomous: a clear template, fast review, shipped inside a normal release. A new component or a data-heavy pattern is a different animal entirely — it needs a steward, a defined scope, and a realistic expectation that the contributor won't finish it alone. Most prospective contributors don't know, or want to know, every step involved in shipping something large; the steward's job is to guide them through it and pick up the remainder if they stall. — [Nathan Curtis, "Defining Design System Contributions"](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898)

**The bar for what gets in**, borrowed from the same practitioner literature: **reusability** (needed by two or three teams, not one), **genericity** (solves the shared problem, not the specific case that prompted it), **accessibility** (meets the standard before shipping, not after), **completeness** (states, responsive behavior, content guidance, docs — not just the happy path), and **maintenance cost** (the core team carries this forever; is it worth carrying).

**The bar for what gets out** is just as much a part of the model as the bar for what gets in — a system with no deprecation path only grows and eventually collapses under its own weight. Deprecation is triggered by any of: a better alternative exists with a clear migration path, usage is at or near zero, accessibility debt can't be resolved, maintenance cost is disproportionate to value, or the component no longer fits the system's direction. It always ships with a timeline and a migration path, not just a warning — IBM's Carbon is the standard reference for bundling deprecations with detailed migration guides rather than announcing removal and leaving teams to figure out the rest.

**The honest scale of contribution**, again from zeroheight's 2026 data: 69% of teams say anyone on the product team can contribute, but 82% of teams actually receive contributions from ten or fewer designers — and this doesn't improve with company size; even at 5,000+ employee companies, only 37% have more than ten contributing designers. Contribution stays small regardless of how open the door is.

## Common mistake

Pitching open contribution to leadership as a way to scale capacity. It isn't one — the data above shows contribution volume staying flat and small no matter how large the org gets, and reviewing a contribution is usually *more* expensive for the core team than building it yourself in the short term. The reason to run a contribution model isn't throughput; it's legitimacy, distributed knowledge, and surfacing real requirements the core team would otherwise never see. Treat it as a small, well-supported champions network rather than an open door with a README, and the model choice becomes a lot less fraught — it can flex with the org instead of being a one-time, load-bearing decision. See [Governance case studies](governance-case-studies.md) for what this looks like when it works and when it doesn't.
