---
name: ux-writing-review
description: Review or draft wiki pages (*.md) in this repo against UX writing best practices — plain language, concrete over abstract, concision, scannability. Use when writing a new page, editing an existing one, or when the user asks to "review the writing", "check the copy", "standardize the content", or similar. Not for code/config changes.
---

# UX writing review

Review design-systems-101 content pages against UX writing best practices, with a
specific focus on catching unnecessary abstraction and jargon. Apply this before
finishing any page you write or edit, or when the user asks for a writing/content pass.

## What to check, in order

1. **Abstract or vague terms — including AI-writing tics.** Flag any word that names a
   category without naming a thing — "leverage," "solution," "robust," "seamless,"
   "ecosystem," "synergy," "best practices" used as a filler noun, "framework" used
   loosely. This includes phrases that read as AI-generated boilerplate rather than a
   human field-guide voice: "load-bearing," "blast radius," "north star," "surface area,"
   "table stakes," "move the needle," "unlock," "elevate," "in today's landscape," "it's
   worth noting." These are especially likely to slip into text *you* (Claude) draft or
   edit, not just text you're reviewing — check your own output the same way. Replace
   with the concrete noun or verb the sentence actually means. A term survives only if:
   - it's the specific technical term the field uses (token, primitive, semantic token,
     alias, DTCG, MCP, autonomy level, maturity stage, etc.) — i.e. industry-standard
     jargon a practitioner would recognize and search for, not house style, **and**
   - it's either already in `glossary.md` or gets added there and defined on first use
     on the page (per the existing convention — see `CLAUDE.md`).
   If a term is abstract *and* not industry-standard, cut it or replace it with a
   concrete example.

2. **Terminology consistency.** Cross-check any term against `glossary.md`. Don't
   introduce a synonym for a concept that already has a defined term (e.g. don't say
   "override token" somewhere if the glossary already defines "component token" for the
   same idea). If a genuinely new term is needed, it must be added to `glossary.md` in
   the same pass.

   This matters most in the Agentic AI section, which synthesizes vocabulary from
   several named sources (design-system-ops, Kavcic, Wolosin, Trueman, and others) who
   each use their own words for the same idea — "parallel fan-out" vs. "parallel
   agents," "feedback loop" vs. "generator/reviewer loop." The convention already
   established there, and the one to enforce on any new page:
   - Pick **one** canonical term for this wiki's own prose — prefer the plainest,
     least jargon-heavy option a Figma-fluent, build-tooling-naive reader would
     understand without translation (e.g. "reviewer" over "critic").
   - The first time a page uses that term, gloss a source's different wording for the
     same thing inline, once — "**parallel agents** — what design-system-ops calls a
     parallel fan-out —" — so a reader coming from that source's own vocabulary can
     still find the mapping. Don't repeat the gloss every time the term recurs on the
     same page.
   - Add or update the mapping in `glossary.md` so it's resolvable from one place
     without having to find the page that first introduced it.
   - If a term isn't attributed to any named source at all (an editorial word this
     wiki invented to name a role or shape, not a quote or a source's own label),
     don't research a new source to justify it — that's exactly the "widening the
     pool" the research-boundary rule in `CLAUDE.md` warns against. Either pick the
     plainest available word and use it consistently, or flag it to the user as an
     open question if the choice actually matters.

3. **Concrete over abstract, always.** Prefer a specific example, name, or number over a
   general claim. "Teams re-litigate decisions" is weaker than "teams without decision
   records re-litigate the same call every 18 months." This matches the page
   template's Practices sections — don't let the lead drift into abstraction that the
   practices then have to redeem.

4. **Sentence-level UX writing checks:**
   - Active voice, present tense, second person where natural ("you," not "the user" —
     this is a solo field guide, not product copy).
   - One idea per sentence. Break up sentences doing two jobs with "and" or a semicolon.
   - Lead with the point, not the setup. Cut throat-clearing openers ("It's worth noting
     that," "In order to").
   - Define jargon on first use per page, even if it's defined elsewhere in the wiki —
     each page should be readable on its own.
   - Match the established voice from `start-here.md`: explain *why* before *what*,
     assume design fluency, assume zero build/CI/agent-orchestration knowledge unless
     defined inline.

5. **Sourcing intact.** A writing pass must not weaken or remove citations — attributions
   to a specific person/post/file are required by `CLAUDE.md`'s sourcing discipline, not
   optional style. Tighten prose around a citation; never paraphrase a claim away from
   its source.

## Output

When reviewing (not drafting), report findings as a short list per page: term/sentence →
what's wrong → suggested fix. Don't rewrite the whole page unless asked — flag first,
then apply edits once confirmed, unless the user has already asked for the edits
directly.
