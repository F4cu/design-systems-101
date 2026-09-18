# Inheriting a Legacy System

<p class="eyebrow">The Principle</p>

## Reading a system you didn't build is a different skill than building one

Design-system writing mostly assumes you're building from zero. Most real design
systems aren't encountered that way — someone else built this one, left, and you're the
one running it now. That's not a rare edge case; in Murphy Trueman's framing, it's
happened two or three times already at most organizations with a system old enough to
matter. Walking in cold calls for a different discipline than building fresh: **design
system archaeology**, reading what's there to understand what was meant, before you
touch anything.

<p class="eyebrow">Why It Exists</p>

## Without it, inheritors either freeze or bulldoze

Two failure modes show up when someone inherits a system without doing this work first.
Either they're too intimidated to change anything, so the system calcifies under new
ownership — or they rebuild with confidence, and reintroduce every edge case the
previous team already solved, because that knowledge lived in their heads and never made
it into documentation. Trueman puts the reframe plainly: you're not inheriting
components, you're inheriting decisions. Each one was a frozen argument, and treating it
as an accident instead of a compromise is how solved problems come back.

---

## In Practice

#### 1. Archaeology before judgment

Trueman's distinction: "An audit asks what's broken. Archaeology asks what was meant."
Confusing the two is the first mistake most inheritors make — judging a component before
understanding why it exists. His reading order matters: tokens first, since they reveal
what the previous team believed about structure; then component architecture, treating
anything that breaks the system's own pattern as a scar rather than a bug; then
contribution history (git logs, Figma file history, RFCs — written change proposals
circulated for feedback before a decision is made) to learn *when* and *who*
decided things; documentation last, because reading it first gives false confidence
about how much you actually understand. He sorts what he finds into **load-bearing
lore** — undocumented decisions that still matter, like an accessibility fix or a
cross-team compromise — and **vestigial lore** — workarounds for a problem that no
longer exists. The test for which is which: if you can't answer "why is it like this,"
treat it as load-bearing until proven otherwise. — [Murphy Trueman, "Design system archaeology"](https://blog.murphytrueman.com/design-system-archaeology/), April 2026

#### 2. What to do, and not do, in the first 90 days

Trueman is specific about the early period: don't rebuild — citing Joel Spolsky's old
warning that "crufty-looking parts encode hard-earned knowledge," the same logic behind
Netscape's failed full rewrite. Don't rename anything either; a rename ripples through
code, docs, and every team's mental model before you've earned the right to make that
call. Don't deprecate without tracing usage first — the riskiest users of a component are
often the invisible ones, deprioritized internal tools nobody thinks to check. And don't
publish your early judgments; keep them private until at least month three. What he
recommends shipping instead, in the first 90 days, is one small, precise thing: a
documentation fix for something commonly misunderstood, tightening a messy component's
contract, or simply making an undocumented exception explicit. Small enough to prove you
understood the system, not big enough to overrule the team that isn't in the room to
defend their choices. — [Murphy Trueman, "Design system archaeology"](https://blog.murphytrueman.com/design-system-archaeology/), April 2026

#### 3. Rolling out a new generation without stranding the last one

The same problem shows up at the org level when a system itself moves to a new
**generation** — Nathan Curtis's term for an overhaul big enough to touch colors,
typography, spacing, and components at once, which he calls "more a revolution than a
refinement." The hard part isn't building the new generation, it's that teams are still
shipping on the old one under real deadline pressure while it happens. Curtis's answer is
incremental delivery — let adopters integrate before the new system is fully finished,
rather than presenting it as one monolithic switch-over — plus what he calls
**Kickstarts**: hands-on sessions where the system team migrates a sample product
alongside the adopter, in the adopter's own environment, instead of handing over a
migration guide and leaving. Both tactics serve the same reframe he pushes for: the
system team asking "how can we help you succeed?" instead of positioning itself as the
thing standing between a team and their deadline. — [Nathan Curtis, "Adopting Design System Generations"](https://nathanacurtis.substack.com/p/adopting-design-system-generations-900535442a16)

#### 4. Renovating instead of rebuilding

Amy Hupe's framing for modernizing an aging system, once you've done the archaeology,
is to turn dials, not flip switches — small, thoughtful improvements made one at a time,
rather than a full rebuild done all at once. This is a lighter citation than the others
here: the underlying zeroheight post didn't render its full body text for me to quote
directly, so treat the specific steps as the title and framing convey them, not a full
accounting of her argument. — Amy Hupe, "Renovating a design system: Why modernization
should feel like turning dials, not flipping switches," zeroheight blog, June 2026

---

## Common mistakes

- **Auditing before you've done the archaeology.** Judging what's broken before
  understanding what was meant is, in Trueman's framing, the first mistake almost every
  inheritor makes.
- **Rebuilding on instinct.** The parts that look messiest are often the parts encoding
  the most hard-won knowledge — the same lesson software engineering already learned the
  hard way from full rewrites gone wrong.
- **Launching a new generation as a single cutover.** Teams still shipping on the old
  generation under deadline pressure will route around a system that isn't built for
  incremental adoption.
