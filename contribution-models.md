# Contribution Models

<p class="eyebrow">The Principle</p>

## A contribution model decides who gets to make the call, not how it's recorded

A contribution model answers a different question than [component governance](component-governance.md) does. Governance is about how a decision gets recorded once someone's made it. A contribution model is about who structurally gets to *make* it — one central team, a federation of product teams, or something in between — and what counts as a contribution worth accepting in the first place.

<p class="eyebrow">Why It Exists</p>

## The wrong model produces a bottleneck or an unmaintained free-for-all

Pick the wrong model for your org's size and maturity and you get one of two failures: a centralized team that becomes a bottleneck everyone routes around, or an open, federated free-for-all that produces components nobody maintains.

Nathan Curtis's 2015 taxonomy is still the reference point:

- **Solitary** — one team builds mostly for itself and makes the result available. Bootstrap, from an outside designer's perspective, works this way.
- **Centralized** — a dedicated team produces and supports the system for others.
- **Federated** — designers from multiple product teams decide on it together.

— [Nathan Curtis, "Team Models for Scaling a Design System"](https://medium.com/eightshapes-llc/team-models-for-scaling-a-design-system-2cf9d03be6a0)

Jina Anne's extension, drawn from her time at Salesforce, adds a fourth: **cyclical**, where a centralized core team and a federated contributor group continuously inform each other rather than one replacing the other. — [Jina Anne, "The Salesforce Team Model for Scaling a Design System"](https://medium.com/salesforce-ux/the-salesforce-team-model-for-scaling-a-design-system-d89c2a2d404b)

Her other writing adds a complementary point about who fills these teams, not just how authority is structured between them: design-systems work is often the natural home for "hybrid" practitioners — designer-coders who straddle disciplines and don't fit neatly into a pure design team or a pure engineering one. Structuring the model around explicitly cross-functional roles (design, code, content, accessibility, product) gives those hybrids a place to stand, instead of leaving them organizationally homeless between two teams that each consider them slightly not their own. — [Jina Anne, "Design Systems and Hybrids"](https://24ways.org/2017/design-systems-and-hybrids/), 24ways

---

## In Practice

#### 1. Contribution scope scaled by org size

Ness Grixti's practical rule: "you can't define contribution until you truly understand what problem it's solving in your organisation." At large scale (80+ teams), the systems team's real problem is visibility — it can't see what every team needs — so the fix is a lightweight feature-request process that surfaces demand, not a formal pipeline expecting outside teams to ship finished work. At small scale, the more effective move is different entirely: upskill the org's own product designers and engineers in systems thinking so they can extend the system competently themselves, rather than building a contribution process for a volume of contributors that doesn't exist yet. — [Ness Grixti, "Rethinking Contribution: Lessons from the Messy Middle of Design Systems"](https://nessgrixti.com/articles/rethinking-contribution-lessons-from-the-messy-middle-of-design-systems/)

#### 2. A fifth model: the community backlog

Because it's public, documented, and run at a different scale than most private-company examples: the **GOV.UK** Design System runs on a **community backlog**. It's a public GitHub repo where anyone across UK government can propose a component or pattern, which a working group reviews for whether it's useful and not a duplicate before it's marked to-do and paired with a contributor. It's contribution-led — most major additions come from outside the core team — but not a free-for-all: a named community designer runs weekly catch-ups with whoever's building the thing, the GOV.UK equivalent of Curtis's steward role. The team's own account of iterating the model is candid about what they got wrong the first time:

> "In the past, we often waited for teams to approach us for proposals for patterns and components, which did not always match with the community's needs."
> — Chris Ballantine-Thomas, GOV.UK Design System, ["Iterating the GOV.UK Design System contribution model"](https://designnotes.blog.gov.uk/2023/05/31/iterating-the-gov-uk-design-system-contribution-model/)

Their fix was to flip from reactive to proactive: publish what the team currently wants built *before* waiting for someone to propose it, so contributor effort lands on something the system actually needs rather than being reviewed and declined after the fact. It's the same lesson as Curtis's federation-is-a-facet point below, arrived at independently by a public-sector team working in the open.

#### 3. Federation as a facet, not a starting point

Curtis has since revised his own framing: presenting centralized and federated as a choice between alternatives was a mistake. In practice, federation is never pursued first and never succeeds without a funded centre underneath it — the move is to start centralized on the core (tokens, foundations, accessibility, component contracts) and layer federation on top deliberately, not to pick one model and commit to it forever. — [Nathan Curtis, "The Fallacy of Federated Design Systems"](https://medium.com/@nathanacurtis/the-fallacy-of-federated-design-systems-23b9a9a05542)

Survey data backs this up with numbers rather than opinion. zeroheight's 2026 Design Systems Report, surveying 147 practitioners, found 51% run a centralized model, 31% hybrid, and only 13% pure federated. Dissatisfaction with staffing *climbs* the more federated a team goes: 53% of centralized teams say they don't have enough people, rising to 68% of hybrid teams and 74% of federated teams. Federation doesn't solve the resourcing problem; it spreads it out and makes it harder to see. — zeroheight, *Design Systems Report 2026*

#### 4. Contribution is not participation

Curtis draws a line worth keeping: a contribution is a proposal, design, code, doc, or asset — completed by someone outside the core team and released through the system for others to reuse. Attending office hours or filing a bug is participation, which is valuable, but it isn't a contribution. Blur the two and your contribution process has to cover an infinite surface and never ships. — [Nathan Curtis, "Defining Design System Contributions"](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898)

#### 5. Contribution workflow based on size

An icon, a missing variant, or a token fix should be near-autonomous: a clear template, fast review, shipped inside a normal release. A new component or a data-heavy pattern is a different animal entirely — it needs a steward, a defined scope, and a realistic expectation that the contributor won't finish it alone. Most prospective contributors don't know, or want to know, every step involved in shipping something large; the steward's job is to guide them through it and pick up the remainder if they stall. — [Nathan Curtis, "Defining Design System Contributions"](https://medium.com/eightshapes-llc/defining-design-system-contributions-eb48e00e8898)

#### 6. The bar for what gets in

Borrowed from the same practitioner literature:

- **Reusability** — needed by two or three teams, not one.
- **Genericity** — solves the shared problem, not the specific case that prompted it.
- **Accessibility** — meets the standard before shipping, not after.
- **Completeness** — states, responsive behavior, content guidance, docs, not just the happy path.
- **Maintenance cost** — the core team carries this forever; is it worth carrying.

#### 7. The reusability/genericity trap

Cathy Dutton's critique of pattern libraries argues that reusability is measured from the organization's side far more often than the user's — a "user registration" pattern describes what the business needs to collect, not what the user is trying to accomplish, and turning it into a shared component can quietly cement that framing into every team that reuses it. Her sharpest example: a date picker generalized well enough to serve both leisure travel booking and urgent medical-appointment scheduling is not actually the same problem twice, even though the UI looks identical — one user is comparing options, the other needs the first available slot. A component can pass every item on the bar above and still be solving the org's convenience instead of the user's actual goal. — [Cathy Dutton, "The Problem with Patterns,"](https://alistapart.com/article/problem-with-patterns/) A List Apart

The practical addition to "when to add a new component": before promoting a recurring UI shape into a shared pattern, ask what problem it's actually solving and for whom, not just how many teams are asking for it. A pattern proposal that can't state the user's goal in terms other than the interface it produces — "we need this because three teams want a date picker" rather than "three teams need to help someone book the earliest available slot" — is a candidate for the trap Dutton describes, regardless of how many teams are behind it.

The "needed by two or three teams" bar has a name outside design systems, too — software engineering's **rule of three**, popularized by Martin Fowler's *Refactoring* (1999) and credited there to Don Roberts. Duplicated code or a duplicated pattern doesn't earn a shared abstraction the first time it appears, or even the second. It earns one the third time, once there's enough real evidence of the shape it needs to take. Applied to contribution: a one-off component built for a single team's edge case isn't a design-system candidate yet, no matter how well built it is. It becomes one once a third team independently needed the same thing.

> "Three strikes and you refactor."
> — attributed to Don Roberts, in Martin Fowler, *Refactoring: Improving the Design of Existing Code* (1999)

#### 8. The bar for what gets out

It's just as much a part of the model as the bar for what gets in — a system with no deprecation path only grows and eventually collapses under its own weight. Deprecation is triggered by any of:

- a better alternative exists with a clear migration path
- usage is at or near zero
- accessibility debt can't be resolved
- maintenance cost is disproportionate to value
- the component no longer fits the system's direction

It always ships with a timeline and a migration path, not just a warning — **IBM's** Carbon is the standard reference for bundling deprecations with detailed migration guides rather than announcing removal and leaving teams to figure out the rest.

#### 9. The honest scale of contribution

Again from zeroheight's 2026 data, 69% of teams say anyone on the product team can contribute, but 82% of teams actually receive contributions from ten or fewer designers. This doesn't improve with company size — even at 5,000+ employee companies, only 37% have more than ten contributing designers. Contribution stays small regardless of how open the door is.

---

## Common mistakes

- **Pitching open contribution to leadership as a way to scale capacity.** It isn't one — the data above shows contribution volume staying flat and small no matter how large the org gets, and reviewing a contribution is usually *more* expensive for the core team than building it yourself in the short term. The reason to run a contribution model isn't throughput; it's legitimacy, distributed knowledge, and surfacing real requirements the core team would otherwise never see. Treat it as a small, well-supported champions network rather than an open door with a README, and the model choice becomes a lot less fraught — it can flex with the org instead of being a one-time, load-bearing decision.
- **Treating participation — office hours, bug reports — as the same thing as a contribution.** Attending office hours or filing a bug is valuable, but it isn't a contribution; blurring the two makes the process responsible for an infinite surface that never ships.
- **Promoting a pattern into a shared component because enough teams are asking, not because it solves the same user problem.** A date picker generalized to serve both leisure travel and urgent medical scheduling looks like the same component but isn't — one user is comparing options, the other needs the first available slot. Team count is a proxy; the user's actual goal is the real bar.

See [Governance case studies](governance-case-studies.md) for what this looks like when it works and when it doesn't, and [Fostering contribution](fostering-contribution.md) for how a team builds that champions network deliberately rather than waiting for it to volunteer itself.
