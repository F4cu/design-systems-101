# Documentation Coverage

<p class="eyebrow">The Principle</p>

## Docs are measured against code, never the reverse

Documentation is a derived surface, not a parallel one. The code is the authoritative answer to "what components exist," and the documentation is measured *against* it — never the other way around. When the two disagree, that's drift, and it runs in two directions with two different fixes: a component in code with no docs is a coverage gap (the docs fell behind), while a doc page for a component that no longer exists is an orphan (the docs didn't keep up with a removal).

<p class="eyebrow">Why It Exists</p>

## Auditing the docs platform instead of the code hides the real gaps

Without this framing, teams audit the wrong thing. The tempting shortcut is to treat the documentation platform's own component list as the inventory — but platforms lag, and a missing platform entry is the very thing being audited. Measure docs against the platform and you'll confidently report full coverage while three shipped components sit undocumented and two doc pages describe components that were deleted last quarter.

---

## In Practice

One practitioner's knowledge notes break "documented" into three rungs rather than a yes/no:

- **Rung one, exists**: there's at least one Storybook story (a small live example page that proves the component renders and makes it discoverable). That's "the floor, not real documentation."
- **Rung two, described**: a proper docs page covering props, variants, and anatomy — enough that a developer can use the component without reading its source code.
- **Rung three, guided**: usage guidance — when to use it, when not to, anti-patterns, accessibility notes — enough that a team can use it *correctly* without asking anyone.

The gap between rungs is where coverage numbers lie: "a system where every component has a story but nothing reaches rung 3 has a coverage number that looks healthy and a documentation surface that isn't." Report the distribution across rungs, not a single percentage.

This isn't a niche problem. zeroheight's 2026 survey of 147 practitioners found documentation is included in 92% of design systems. But only 45% of teams are satisfied with their own documentation, and only 66% document their tokens at all — meaning a third of teams ship tokens with no explanation of how to use them. High coverage and low satisfaction coexisting at that scale is exactly the rung-one-without-rung-three pattern described above, playing out industry-wide. The same survey found 76% of teams provide no onboarding materials at all. The enablement gap sits right next to the documentation gap, and both are cheap to underinvest in and expensive to feel the absence of later. — zeroheight, *Design Systems Report 2026*

#### 1. Interactive, self-serve onboarding

Designers weren't under-using **Wise's** system because it was lacking — they were building custom solutions and re-requesting components that already existed, because there was no structured way to learn what was there. The team's first attempt, a video series, decayed the moment the system changed underneath it: a reshoot for every update is a maintenance cost that guarantees the material goes stale. The fix was to move onboarding into an interactive, self-serve course built inside Figma itself — modular enough for a newcomer to go through linearly and for an experienced designer to jump straight to what they need — plus three purpose-built tools discovered through testing, not assumed upfront: a plugin that auto-generates component doc pages from templates, a widget that surfaces documentation without leaving the canvas, and a widget that replaces an overwhelming default properties panel with only the controls relevant to that component. Pre-launch testing sessions surfaced the properties-panel problem directly — designers found the standard panel overwhelming, which is what the third tool exists to fix, not a hypothesis the team started with. The result: 150+ designers moved to self-serve onboarding, replacing ad hoc calls with something that scales without a person on the other end of every question. The underlying lesson generalizes past this one system: an onboarding failure often means people can't discover or use what's already documented, not that the documentation itself is missing. — [Ness Grixti, "Wise Design System Onboarding"](https://nessgrixti.com/portfolio/wise-design-onboarding/)

#### 2. Staleness as a risk flag

Staleness is computed from git change dates (git records when each file last changed), so it only tells you the doc predates a code change — and that change might be an internal refactor that needs no doc update at all. Frame stale findings as "doc predates a code change — confirm it still matches," never "doc is wrong." And where the platform exposes no reliable timestamp, staleness is honestly reported as "unknown" rather than guessed. — design-system-ops, knowledge-notes/documentation-coverage.md

#### 3. Reaching rung three by embedding, not writing more

Ness Grixti's observation on adoption applies directly here: a system isolated in a documentation site fails even when the docs themselves are good, because "guided" usage knowledge needs to show up where people are already working — tokens exposed inside the design tool, guidance embedded in code comments and editor autocomplete, starter templates that encode the anti-patterns rather than just listing them. A rung-three doc that nobody visits because the answer already reached them through the tool they were using isn't a documentation gap; it's the goal. — [Ness Grixti, "The Hidden Work Behind Design System Adoption"](https://nessgrixti.com/articles/the-hidden-work-behind-design-system-adoption/)

## Common mistakes

Crying wolf on low-confidence matches:

- **Asserting instead of asking.** When an audit pairs code components with doc pages by name, some matches are unconfirmed — presenting an unconfirmed name-match as a hard gap "is the fastest way to lose a team's trust in the whole skill."
- **Treating this as docs-specific when it isn't.** In any review, a finding you're unsure about should be labeled as a question, not asserted as a defect.
- **Underestimating the cost of one false alarm.** Once a team catches one confident-sounding false alarm, they discount everything else the audit says — including the findings that were real. — design-system-ops, knowledge-notes/documentation-coverage.md
