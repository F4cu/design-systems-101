# Design System Maturity

<p class="eyebrow">The Idea</p>

## Maturity isn't one score — it's six dimensions that can each be strong or weak on their own

Most maturity talk defaults to a single number or stage, as if a system is simply "further along" or "behind." The Nielsen Norman Group's newer framework scores a system on six separate dimensions instead: organizational alignment, team effectiveness, infrastructure robustness, governance, support, and adoption. A system can be a 5 on infrastructure and a 2 on governance at the same time — collapsing that into one score hides exactly the gap a team most needs to see. — [Huei-Hsin Wang, "Design-System Maturity: A 6-Dimension Framework,"](https://www.nngroup.com/articles/design-system-maturity/) Nielsen Norman Group, 2026

<p class="eyebrow">Why It Exists</p>

## A single score tells a team it's "doing fine" while one dimension quietly rots

A blended score can average a strong dimension against a weak one and land in the comfortable middle, which is exactly wrong: the team never sees which specific dimension needs attention, and the weak one keeps compounding — ungoverned contributions pile up, or a well-built system nobody funds starts losing its budget — while the aggregate number keeps saying "fine." Treating six independent axes as six separate questions is what surfaces the one that's actually failing.

---

## In Practice

#### 1. The six dimensions, and where this wiki already covers each one

NN/g's dimensions aren't a new topic so much as a naming scheme for territory this wiki already treats separately:

- **Organizational alignment** — funding, sponsorship, and whether the system's roadmap stays legible to the business. See [Business alignment](business-alignment.md) and [Stakeholder alignment](stakeholder-alignment.md).
- **Team effectiveness** — capacity, composition, and whether the team model fits the org's size. See [Contribution models](contribution-models.md) and [Fostering contribution](fostering-contribution.md).
- **Infrastructure robustness** — tokens, components, tooling, and the design-to-code contract underneath them. See [Token architecture](token-architecture.md) and [The design-to-code contract](design-to-code-contract.md).
- **Governance** — how decisions get made, recorded, and revisited. See [Component governance](component-governance.md).
- **Support** — documentation, onboarding, and how much a team actively equips people to use the system. See [Documentation coverage](documentation-coverage.md) and [Operating cadence](operating-cadence.md).
- **Adoption** — whether teams actually use, trust, and rely on the system, measured rather than assumed. See [Measurement](adoption-measurement.md) and [Dependency observability](dependency-observability.md).

Each of those pages goes deeper on its dimension than a maturity framework can afford to; the framework's value is naming all six side by side so none of them gets forgotten. — [Wang, "Design-System Maturity: A 6-Dimension Framework"](https://www.nngroup.com/articles/design-system-maturity/)

#### 2. The assessment is the alignment, not the score

Wang's recommended process: 4–8 evaluators — design-system team members across design, engineering, product, and content, plus product-team representatives and sponsors — score all six dimensions independently on a 1–5 scale, then meet to "triangulate and align," focusing the conversation on wherever their scores diverge rather than where they agree. The result plots as a hexagonal radar chart, reassessed quarterly or after major organizational change. Wang is explicit that the exercise's biggest value isn't the resulting shape — it's the discussion that happens because people had to justify their number to each other. — [Wang, "Design-System Maturity: A 6-Dimension Framework"](https://www.nngroup.com/articles/design-system-maturity/)

#### 3. A smaller shape isn't automatically a worse one

"A 10-person startup and a 10,000-person enterprise can both have a mature design system, but the conditions that define maturity can differ significantly." A small, balanced radar — modest scores across all six dimensions, none neglected — is a healthier reading than a large, uneven one where infrastructure is a 5 because someone built beautiful components solo, while governance and adoption sit at 1 because nobody else knows the system exists. — [Wang, "Design-System Maturity: A 6-Dimension Framework"](https://www.nngroup.com/articles/design-system-maturity/)

This is the same caution [Component governance](component-governance.md) makes about its own five-stage ladder (ad hoc → managed → systematic → measured → optimised): that ladder is a useful description of how governance *practices* accumulate over time within one team, but it's a single linear track, not six independent ones. Read both frameworks side by side and the tension is informative rather than contradictory — a system can be genuinely advanced on the governance ladder while still scoring low on NN/g's organizational-alignment or adoption axes, because those depend on things (executive sponsorship, other teams' behavior) that a governance process alone doesn't control.

#### 4. The team-effectiveness dimension still has to match org size

This wiki's deepest treatment of "team effectiveness" is Nathan Curtis's team-model taxonomy: a small org over-indexing on federated governance is paying for coordination overhead it doesn't need, and an enterprise still running solo-maintainer governance is understaffed for its scale. Curtis's own revision of his framing is the sharper point — federation is never a starting model, it's layered onto a funded centralized core once the org is large enough to need it. A "team effectiveness" score should be read against that fit, not against a universal ideal of what a fully staffed team looks like. See [Contribution models](contribution-models.md) for the full argument and the survey data behind it.

---

## Common mistakes

- **Reading a low score on one dimension as a system-wide failure.** A startup scoring low on governance because it doesn't have a formal RFC process isn't failing — it may simply not need one yet at three product teams. Read every score against org size and stage, not a universal target.
- **Treating the number as the deliverable.** The radar chart is a prompt for a conversation among evaluators with different vantage points, not a scoreboard to report upward. A team that fills out the six scores alone, without the cross-functional discussion, gets a number with none of the alignment that made the exercise worth running.
- **Applying one governance or team model regardless of scale.** Mandating a federated contribution model at three teams, or staying solo-maintainer at thirty, both misread the team-effectiveness dimension the same way: treating a model choice as fixed instead of something that should grow with the org, per [Contribution models](contribution-models.md).
