# Pilot Strategy & Launch Prioritization

<p class="eyebrow">The Principle</p>

## The first components should come from real work already in flight, not a wishlist drawn up in a room

"I haven't done a design system where we didn't pilot it first." Dan Mall treats a design system's early components the way a TV network treats a pilot episode: a real, small production run through before anyone commits to a full season. The pilot is what tells you whether a component actually survives contact with a real product, before it gets locked in as v1. — [Dan Mall, via UXPin, "On Design Systems: Dan Mall of Superfriendly"](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/); [Big Medium, "Design Systems: Pilots & Scorecards"](https://bigmedium.com/ideas/links/design-systems-pilots-scorecards.html)

<p class="eyebrow">Why It Exists</p>

## A component list assembled in a room is a guess; a component list assembled from real screens is a fact

The alternative to piloting is the pattern Mall describes as the default failure mode: a designer and an engineer pair off, build components they believe teams need, publish them, and wait for adoption. Nothing happens, because nobody validated the guess against real work first, and the library becomes what he calls "ghost towns and graveyards" — built, announced, and then ignored. Piloting inverts the order: instead of guessing what a team needs and hoping they show up, the system is built out of what a real team is already building, so the first components are proven consumers, not hypothetical ones. — [Dan Mall, "Dan Mall: creating a sustainable design system practice,"](https://ellessmedia.com/csi/dan-mall/) Content Strategy Interviews

---

## In Practice

#### 1. Timing the pilot's launch window

Too early, and the team doesn't know enough about what it's building yet for the pilot to surface real components. Too late — design or code already underway — and folding in design-system components means a refactor expensive enough that no team will volunteer for it twice. The window is narrow and worth protecting deliberately rather than taking whichever project happens to be available. — [Dan Mall, via Big Medium, "Design Systems: Pilots & Scorecards"](https://bigmedium.com/ideas/links/design-systems-pilots-scorecards.html)

#### 2. Shared scorecard for pilot candidates

Mall's scorecard rates each candidate project 0 (unlikely) to 10 (likely) across eight factors:

- reusable-component potential
- reusable-pattern potential
- presence of high-value elements central to the flow
- technical feasibility
- whether a champion exists who will see the pilot through and evangelize it afterward
- whether the scope is achievable in roughly three to four weeks
- technical independence from legacy code that would otherwise force a large refactor
- marketing or excitement value — will this pilot make other teams want in

Scoring it as a cross-functional exercise (product, engineering, design together) is what keeps the choice defensible when someone asks why their project wasn't picked. — [Dan Mall, scorecard reproduced by Obvious University, "How to run a design system pilot"](https://university.obvious.in/product-design/design-system/how-to-run-a-design-system-pilot)

#### 3. Component list mined from real screens

(See [UI audit & heuristic evaluation](ui-audit.md) for how to run that inventory before this step.) Mall's method: collect screenshots and walkthroughs across the organization's existing apps — anywhere from 20 to 100 products — and look for what recurs. "All of them have some sort of left-side navigation. That's a component that maybe we should start with." The threshold he applies is concrete rather than a matter of taste: if three or more teams need a given component *right now*, it goes into the design system; if only one team needs it, it's that team's problem to solve on its own for now. — [Dan Mall, via UXPin](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/); [Obvious University, "How to run a design system pilot"](https://university.obvious.in/product-design/design-system/how-to-run-a-design-system-pilot)

#### 4. Borrowing existing patterns before building

Where Mall's scorecard decides *which* components earn a pilot, the Lean Design System methodology addresses a different question: what to put in front of the pilot team on day one. Its answer is to fill early gaps with third-party building blocks — a front-end framework like Bootstrap or Material-UI, an icon or illustration set like blush.design — rather than spending pilot time custom-building components whose value isn't proven yet.

The pragmatic definition behind this: "any socio-technical system that makes our product development successes repeatable and transferable is a design system." So a wiki of borrowed, well-organized parts counts as a real starting system, not a placeholder for one. Replace a borrowed piece with a custom-built one only once real usage in the pilot justifies the cost — exploration first, planning second. — [Lean Design System, "Minimum Viable Design System"](https://docs.leandesignsystem.org/tactics/principles/minimum-viable-design-system)

#### 5. Several small pilots over one big-bang release

Mall's own projects typically run four to nine pilots: build a small library of ten to twenty first components, then prove them by building or rebuilding a real app with that library, then put the result in front of users during a beta period to collect what's missing or wrong before declaring v1 and rolling out wider. Each pilot either confirms a component belongs or sends it back for rework — cheaper to learn in a four-week pilot than after ten teams have adopted the wrong API. — [Dan Mall, via UXPin, "On Design Systems: Dan Mall of Superfriendly"](https://www.uxpin.com/studio/blog/design-systems-dan-mall-superfriendly/)

#### 6. Funding the next phase with proof

Rather than proposing the design system as an idea and asking for a budget up front, Mall's sequence is to run the pilot quietly, measure what it actually saved a real team — his example: an app that used to take six months at roughly $375K built in three months at roughly $175K — and bring that number, not a deck of principles, to the people who control the next round of funding. See [Business alignment](business-alignment.md) and [Communicating value](communicating-value.md) for how to build that case once the pilot has produced a real number to build it from. — [Dan Mall, via NTT Data, "Design that scales: Unlocking design system success with Dan Mall"](https://launch.nttdata.com/insights/design-that-scales-unlocking-design-system-success-with-dan-mall)

#### 7. An 80/20 split beyond the pilot

Mall's framing for what a healthy system looks like once it's past its first pilots: most product work — call it 80% — should be built from standardized components, leaving roughly 20% as legitimate custom work rather than a failure to comply. A system that expects 100% compliance is optimizing against the very custom cases it was never designed to cover, and teams will defect from it rather than fight it. — [Dan Mall, via NTT Data, "Design that scales: Unlocking design system success with Dan Mall"](https://launch.nttdata.com/insights/design-that-scales-unlocking-design-system-success-with-dan-mall)

---

## Common mistakes

- **Treating the pilot and launch as a project with an end date, then moving on.** Mall's own metaphor for what a design system actually requires afterward is gardening, not construction: "that's what it takes to have something grow." That means recurring weekly rituals (he cites a team that dedicates every Friday to the system), repeated communication, and continued tending — until, in his words, "at some point it flips to it's actually harder to stop doing this thing than it is to continue doing it." A pilot that scores well and ships is still only the tactical, "Now" horizon of the work described in [Stakeholder alignment & planning horizons](stakeholder-alignment.md); if nothing carries it into the "Next" and "Future" horizons, it stalls exactly the way an unpiloted launch does, just a few months later.
- **Picking whichever project happens to be available instead of timing the pilot window deliberately.** Too early and the team doesn't know enough yet for the pilot to surface real components; too late and folding in design-system components means an expensive refactor no team will volunteer for twice.
- **Expecting 100% compliance beyond the pilot.** A system that expects every bit of product work to use standardized components is optimizing against the legitimate custom cases it was never designed to cover — teams will defect from it rather than fight it.

[Communication](operating-cadence.md) covers the rituals that keep the system from stalling. — [Dan Mall, "Dan Mall: creating a sustainable design system practice,"](https://ellessmedia.com/csi/dan-mall/) Content Strategy Interviews
