# The Design-to-Code Contract

<p class="eyebrow">The Principle</p>

## "Done" means something different at every stage

"Done" is not one thing. A component can be done in the sense of "design approved," "built," "documented," or "accessible" — and each of those is a different bar. A design-to-code contract makes each sense of done explicit, so a component isn't declared finished until every stage has met its own standard.

<p class="eyebrow">Why It Exists</p>

## Ambiguous "done" lets accessibility and docs quietly slip

When "done" stays ambiguous, everyone fills in their own definition. The designer means "the happy path looks right in Figma." The developer means "it renders and passed review." Nobody meant "accessible" or "documented," so those quietly don't happen — and the gap surfaces later as production bugs, accessibility regressions, and documentation debt that someone has to pay down under pressure. A contract catches those gaps at the stage where they're cheapest to fix.

## How it shows up in practice

One team's knowledge notes structure this as four contracts, one per stage:

**The design contract.** The spec is implementable without clarification questions: every state is designed (default, hover, active, focus, disabled, loading, error), responsive behaviour is specified, and edge cases like long strings and empty states are addressed. Token usage is explicit in the file, the component API — its props, types, and defaults — is agreed before build, and accessibility (focus indicators, contrast, touch targets) is handled at design stage rather than deferred.

**The build contract.** All specified states are implemented, not just the happy path. Token references are correct at every tier with no hardcoded values, accessibility is implemented *and tested* (not just reviewed), the result is checked against the spec rather than built from memory, and unit tests and Storybook coverage exist.

**The documentation contract.** Usage guidelines — when to use it, when not to, known anti-patterns — are written for someone who wasn't in the design conversations. Props are fully documented, accessibility behaviour is described specifically (not "see WCAG"), and examples cover the primary use case plus at least one edge case.

**The release contract.** All three contracts above are met, affected teams get visibility before shipping, release notes are written in plain terms, and breaking changes come with a documented migration path.

— design-system-ops, knowledge-notes/design-to-code-contract.md

## Common mistake

Two handoff habits quietly break the design contract:

**Delivering designs as screenshots.** A developer can't inspect token references or verify spacing and states from a flat image. A screenshot is a visual reference, not a contract — the real spec lives in the Figma file, where every value can be inspected.

**Saying "just copy the existing component."** That makes the previous implementation the spec, which means every problem in that component — missing states, hardcoded values, accessibility gaps — gets faithfully propagated into the new one. If the old component were a reliable spec, you probably wouldn't be building a new one.
