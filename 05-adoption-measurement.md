# Adoption Measurement

## The principle

Coverage and adoption answer two different questions. Coverage asks whether the system *provides* what teams need; adoption asks whether teams *actually use* what's provided. A system can score high on one and low on the other, and the fixes are opposites: low coverage is a supply problem (build more), while low adoption with high coverage is a demand problem (figure out why teams aren't consuming what already exists).

## Why it exists

Without this distinction, teams misdiagnose the problem and pour effort into the wrong fix. The classic failure: a system has 100% component coverage but 20% adoption, because product teams keep building custom implementations instead of consuming the library. The instinctive response is "we need more components" — more supply — when the real question is why nobody wants the supply that's already there. That question might lead to onboarding gaps, API friction, or missing documentation, none of which get solved by shipping component number forty-one.

## How it shows up in practice

One practitioner's knowledge notes describe four signals worth tracking, and two of them are especially concrete. The first is **component consumption**, measured by import analysis — literally scanning codebases to see which components teams pull into their code. The shape of the distribution matters more than the headline: "a system where 5 components account for 90% of imports and 30 components are rarely used has an adoption problem in the tail, even if the headline number looks good."

The second is **token compliance** — whether teams reference design tokens or hardcode raw color and spacing values. The notes call this "the adoption signal that most directly correlates with system value," because token adoption is what makes theming, rebranding, and consistency actually possible. A team can use every component and still undermine the system by hardcoding values around them.

Whatever you measure, break it down by team, not just system-wide: "a system with 85% overall token compliance might have three teams at 98% and two teams at 40%. The system-level number suggests health; the team-level numbers reveal a problem." The notes also describe five adoption stages — aware, installed, consuming, contributing, advocating — each with a different right intervention, from onboarding help at the start to governance involvement at the end. — design-system-ops, knowledge-notes/adoption-measurement.md

## Common mistake

Turning team-level breakdowns into a competitive ranking. Publishing a league table of "best adopters" and "worst adopters" creates political dynamics that undermine trust — and it flattens context that matters. A team building a custom data-visualization library isn't failing to adopt; the system may simply not cover their domain. A good adoption report distinguishes "chose not to use" from "needed something the system doesn't provide," because only the first one is an adoption problem at all. — design-system-ops, knowledge-notes/adoption-measurement.md
