# Documentation Coverage

## The principle

Documentation is a derived surface, not a parallel one. The code is the authoritative answer to "what components exist," and the documentation is measured *against* it — never the other way around. When the two disagree, that's drift, and it runs in two directions with two different fixes: a component in code with no docs is a coverage gap (the docs fell behind), while a doc page for a component that no longer exists is an orphan (the docs didn't keep up with a removal).

## Why it exists

Without this framing, teams audit the wrong thing. The tempting shortcut is to treat the documentation platform's own component list as the inventory — but platforms lag, and a missing platform entry is the very thing being audited. Measure docs against the platform and you'll confidently report full coverage while three shipped components sit undocumented and two doc pages describe components that were deleted last quarter.

## How it shows up in practice

One practitioner's knowledge notes break "documented" into three rungs rather than a yes/no. Rung one is **exists**: there's at least one Storybook story (a Storybook story is a small live example page that proves the component renders and makes it discoverable). That's "the floor, not real documentation." Rung two is **described**: a proper docs page covering props, variants, and anatomy — enough that a developer can use the component without reading its source code. Rung three is **guided**: usage guidance — when to use it, when not to, anti-patterns, accessibility notes — enough that a team can use it *correctly* without asking anyone. The gap between rungs is where coverage numbers lie: "a system where every component has a story but nothing reaches rung 3 has a coverage number that looks healthy and a documentation surface that isn't." Report the distribution across rungs, not a single percentage.

This isn't a niche problem. zeroheight's 2026 survey of 147 practitioners found documentation is included in 92% of design systems — but only 45% of teams are satisfied with their own documentation, and only 66% document their tokens at all, meaning a third of teams ship tokens with no explanation of how to use them. High coverage and low satisfaction coexisting at that scale is exactly the rung-one-without-rung-three pattern described above, playing out industry-wide. The same survey found 76% of teams provide no onboarding materials at all — the enablement gap sits right next to the documentation gap, and both are cheap to underinvest in and expensive to feel the absence of later. — zeroheight, *Design Systems Report 2026*

The same notes make a second point worth internalizing: **staleness is a risk flag, not a defect**. Staleness is computed from git change dates (git records when each file last changed), so it only tells you the doc predates a code change — and that change might be an internal refactor that needs no doc update at all. Frame stale findings as "doc predates a code change — confirm it still matches," never "doc is wrong." And where the platform exposes no reliable timestamp, staleness is honestly reported as "unknown" rather than guessed. — design-system-ops, knowledge-notes/documentation-coverage.md

## Common mistake

Crying wolf on low-confidence matches. When an audit pairs code components with doc pages by name, some matches are unconfirmed — and presenting an unconfirmed name-match as a hard gap "is the fastest way to lose a team's trust in the whole skill." This generalizes beyond docs audits: in any review, a finding you're unsure about should be labeled as a question, not asserted as a defect. Once a team catches one confident-sounding false alarm, they discount everything else the audit says — including the findings that were real. — design-system-ops, knowledge-notes/documentation-coverage.md
