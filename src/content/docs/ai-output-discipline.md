---
title: AI Output Discipline
---

<p class="eyebrow">The Principle</p>

## An AI tool auditing your system should scope its claims to what it actually inspected

When an AI tool audits your tokens, components, or documentation, it only knows what it found in the files it scanned — not what exists in a Notion doc, a separate repo, or a teammate's head. Its output needs to say so. "No documentation was found in the scanned files" is a scoped claim; "the system has no documentation" is an overreach the tool can't back up. The same discipline extends past the claims themselves to how the finding is delivered: no invented numeric scores, one caveat per finding instead of a stack of them, and a tone that reads like a peer's review rather than a compliance report. — design-system-ops, knowledge-notes/output-discipline.md

<p class="eyebrow">Why It Exists</p>

## An overconfident report teaches you to stop trusting the tool

A design system lead running these audits usually knows their system better than the tool does. The first time an AI report states something false as fact — "components are not accessible" when it simply found no ARIA attributes in the files it read — the lead stops trusting the report's other findings too, including the ones that were correct. Miscalibrated confidence is a worse failure than an incomplete scan, because an incomplete scan just needs a wider net next time, but a report that states unverified claims as fact poisons every future run. [Agentic workflow design](/agentic-workflow-design/) already flags scoped claims as one discipline an agent needs before publishing anything on its own — this page is the fuller version of that rule.

---

## In Practice

#### 1. Status labels instead of invented scores

"Do not invent numeric scores, grades, or ratings. This is a hard rule, not a preference" — no `7/10`, no `Grade B`, no `82%` health score. A number implies a measurement instrument that doesn't exist. In its place: dimension health as 🟢 Strong / 🟡 Functional / 🟠 Weak / 🔴 Absent, and finding severity as 🔴 Critical / 🟠 High / 🟡 Medium / ⚪ Low. Actual counts stay in ("78 of 84 components have tests") because those are facts, not invented ratings — the prohibition is only on a number standing in for a judgment call. — design-system-ops, knowledge-notes/output-discipline.md

#### 2. Match report length to the question asked

"Are my tokens structured correctly?" deserves a focused answer about token structure, not a full system-health report with a governance appendix. "Audit my tokens" earns the structured report. "How healthy is my system?" earns the full cross-dimension assessment. Getting this wrong in either direction costs trust: an over-scoped answer buries the one thing the person asked about, and an under-scoped one reads as evasive. When it's unclear which the person wants, the fix is to answer the narrow version first and offer the wider one — "I found three structural issues with your token architecture. Want the full audit with remediation guidance?" — design-system-ops, knowledge-notes/output-discipline.md

#### 3. Treat deviations as possibly deliberate

An audit sees the code, not the conversations and trade-offs that produced it. "Token names violate semantic naming conventions and should be renamed" assumes a mistake; "these names describe appearance rather than intent — if that's a deliberate convention, tell me so I can skip this next time" leaves room for the team to have chosen it on purpose. The closing section of a report should invite exactly that correction, not as a disclaimer but as input the next run can act on: once a lead marks a finding as intentional, the next run should stop flagging it. — design-system-ops, knowledge-notes/output-discipline.md

#### 4. One caveat per finding, senior-peer tone

Hedging spirals — "it's possible that this might potentially indicate a gap, though it could also be intentional" — bury the finding under qualifiers instead of stating it once and moving on. The same discipline applies to tone: "these component names break from the pattern the rest of your library follows — worth aligning when you next touch them" reads as a colleague's review; "flag any component whose name does not follow the dominant convention" reads as a compliance check against the person receiving it. Most people running these audits are auditing their own system — the output should sound like it. — design-system-ops, knowledge-notes/output-discipline.md

---

## Common mistakes

- **Stating an absence as fact instead of scoping it to what was scanned.** "The system has no documentation" claims knowledge the tool doesn't have; "no documentation was found in the scanned files" is the version it can actually stand behind.
- **Inventing a numeric score to summarize a qualitative judgment.** A `2.3/5` implies precision the assessment never had — status labels force the same judgment to be defended with evidence instead of hidden behind a number.
- **Padding output with empty sections and methodology.** "Dimension 3: No issues found" and a paragraph explaining how the scan was conducted both burn context the reader might need for a follow-up question, without adding a finding.
- **Assuming every deviation from convention is a mistake.** Some are decisions the team already made — the report should leave room to say so, and should get quieter about a finding once a lead flags it as intentional.
