# Component Governance

<p class="eyebrow">The Principle</p>

## Governance is deciding on purpose, not accumulating by default

Governance is how a design system decides things on purpose: what gets in, what gets removed, and how those decisions are remembered. A governed system can tell you *why* it looks the way it does; an ungoverned one just accumulates. And governance itself matures in stages — most teams aren't at the end state, and that's fine, as long as they know which stage they're at.

<p class="eyebrow">Why It Exists</p>

## Undocumented decisions get re-litigated forever

Without recorded decisions, teams re-litigate the same questions forever. One team's knowledge notes put it plainly: "A team that has maintained records for two years knows why their system looks the way it does. A team that has not is perpetually re-litigating the same questions." The fix is lightweight — a decision record needs only context, options considered, the decision, and its consequences — but it has to cover the decisions a new team member would need to understand, including *declined* proposals, so a future team doesn't reverse something without knowing it was already considered.

— design-system-ops, knowledge-notes/component-governance.md

> "The biggest existential threat to any system is neglect."
> — Alex Schleifer, Airbnb, quoted in Brad Frost, *Atomic Design*, Chapter 5

Schleifer's line names the failure mode this page is about directly: governance doesn't die from a bad decision, it dies from decisions nobody bothered to make or record.

## How it shows up in practice

Governance also matures in *direction*, not just rigor. Murphy Trueman argues that in a bidirectional system, "when a developer implements better error handling, that pattern informs the design system" — knowledge flows upstream from implementation, not only downstream from design. — [Murphy Trueman, "The bidirectional design system: When code talks back to design"](https://blog.murphytrueman.com/the-bidirectional-design-system/)

Jina Bolton, describing the same dynamic from her time at Salesforce, puts it as a loop rather than a direction:

> "The Design System informs our Product Design. Our Product Design informs the Design System."
> — Jina Bolton, Salesforce, quoted in Brad Frost, *Atomic Design*, Chapter 5

Two practitioners at different companies landing on the same shape of answer independently is worth noticing — it suggests this isn't a house style, it's what a governance process looks like once it's actually working in both directions.

**A concrete decision tree for what happens to a proposal**, rather than a general principle about recording decisions: Inayaili de León Persson's Canonical Vanilla Framework sorts every incoming pattern change into one of three lanes before it goes anywhere:

- **Modification** — feature additions, bug fixes, visual tweaks, performance improvements to something that already exists.
- **Addition** — a genuinely new pattern filling a gap, with explicit safeguards against bloat.
- **Removal** — deprecation shipped with advance notice, not a surprise.

Sorting the request into a lane first, before debating its merits, keeps a "should we add a new component" conversation from accidentally being argued as if it were a five-minute bug-fix review, or vice versa. — Brad Frost, *Atomic Design*, Chapter 5

This page covers the mechanics of recording and maturing decisions. The separate question of *who* gets to propose and decide — and the specific criteria for what enters or leaves the system — is covered in [Contribution models](contribution-models.md), where it can get the depth it deserves rather than being squeezed into a subsection here.

**Accessibility governance fails when it's assigned instead of shared.** A common structural mistake at enterprise scale is routing every accessibility question to one specialist or a small dedicated team, on the theory that centralizing expertise centralizes quality. In practice it does the opposite: everyone else stops treating accessibility as their job, the specialist team becomes a bottleneck on every release, and issues that should have been caught at design or build time surface instead at a late review nobody can act on cheaply. The [design-to-code contract](design-to-code-contract.md) makes this concrete already — accessibility is a line item in the design contract *and* the build contract, checked at both stages, precisely because leaving it for one team to catch at the end is how it quietly slips. Governance that treats accessibility as everyone's shared standard, with a specialist as an escalation path rather than the only checkpoint, is what keeps it from becoming the thing that's always someone else's job.

**Clear roles prevent contribution friction from compounding at scale.** The same failure mode shows up whenever a role is implied rather than stated: if it isn't written down who owns a proposal once it's submitted, who can approve a deprecation, or who a contributor asks when a request stalls, every one of those questions gets re-decided informally, differently, each time it comes up. That's the enterprise-scale version of the point [Contribution models](contribution-models.md) makes about stewardship — the ambiguity that's tolerable with five product teams compounds into real friction once a system serves dozens of them across a large org.

**Ownership should be shared, not assigned to an isolated team.** Jina Anne argues that a design system shouldn't be controlled by a small team dictating rules to everyone else — it works when the wider organization feels real ownership of it: people can see how it works, learn from it, adopt it, contribute to it, and help it evolve, rather than just receive it from above. That's the same instinct behind the Common mistake below, stated as a positive practice instead of a failure mode: a governance process that reads as one team protecting the system from everyone else produces exactly the avoidance it's trying to prevent. — [Jina Anne, "There Is No Design System"](https://24ways.org/2019/there-is-no-design-system/), 24ways

## Diagram

The knowledge notes describe five stages of governance maturity — a progression, not a scorecard:

<div class="mermaid-wrap">

```mermaid
graph TD
  A["1. Ad-hoc<br/>components exist, no governance"] --> B["2. Managed<br/>library + informal process"]
  B --> C["3. Systematic<br/>enforced tokens, documented processes"]
  C --> D["4. Measured<br/>adoption tracked, drift detected"]
  D --> E["5. Optimised<br/>platform infrastructure, versioned APIs"]
```

</div>

— design-system-ops, knowledge-notes/component-governance.md

## Common mistake

Treating governance as gatekeeping. A contribution process that exists to protect the system *from* contributors — rather than to help contributors build the system well — feels rigorous, but the signal it produces is the opposite: contribution rates drop, and teams quietly build locally instead. The system stays "pure" and becomes irrelevant. If nobody is contributing, the process isn't working; it's just being avoided.
