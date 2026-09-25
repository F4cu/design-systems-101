---
name: freshness-check
description: Check whether a wiki page's claims and sources are still current — find superseded practices, changed tool behavior, dead or moved sources, and newer posts from authors already cited. Use when the user asks to "check freshness", "is this page still current", "review overdue pages", or names a page or section to re-verify. Produces a report; does not edit pages.
---

# Freshness check

Find out whether a DS101 page still describes current practice. The output is a
report for the user to act on. Don't edit pages during the check: whether a claim is
dated is a judgment call, and every change still has to follow the sourcing rules in
`CLAUDE.md`.

## Pick the pages

- **A page or section named by the user**: check those.
- **"Overdue" or no target**: run `npm run freshness` and check the overdue pages,
  then the ones due soon. Check at most three pages per run, so each one gets a
  careful check.

## Steps, per page

### 1. Collect the claims worth checking

Read the page and its section in `references.md`. List only the claims that can go
stale, in order of risk:

1. **Tool and spec behavior**: Figma features, token formats, APIs, agent setups,
   file conventions, version numbers, "X doesn't support Y yet".
2. **Named org examples**: what a company's system does today.
3. **Time-bound words**: "currently", "recently", "new", "emerging", "not yet",
   "as of".
4. **Figures**: survey numbers, adoption percentages, report findings with a year.

Skip principles (why governance fails, how contribution works). An old principle is
still valid until a cited author says otherwise. The risk tiers in `CLAUDE.md`
("Source freshness") decide how hard to look: the Agentic AI section gets the
closest check.

### 2. Check the cited sources

For each source behind a listed claim, use WebFetch to open it and note:

- **Broken or redirected**: the link is dead, or goes somewhere else.
- **Changed**: the page now says something different from what the wiki claims
  (common with living docs like GitHub repos and docs sites).
- **Superseded by the source itself**: a deprecation notice, an archived repo, a
  "this post is out of date, see…" note, or a new major version.
- **Date**: check `datePublished` or `firstPublishedAt`, not the modified date, and
  compare with the year in `references.md`.

### 3. Look for newer material, inside the source pool

Build the pool from `references.md` (authors and organizations) before searching.
Then:

- **Authors already cited on this page**: search their blog or site for newer
  posts on the same topic (e.g. `site:nathanacurtis.substack.com tokens`). A cited
  author revising their own view is the strongest signal of all.
- **Watch list**: for tool and spec claims, check the primary source already in the
  pool: the vendor's own docs or release notes (help.figma.com, figma.com),
  W3C specs, GitHub repos such as `design-system-ops`. A vendor's own docs are an
  acceptable source for what that vendor's tool does.
- **Outside the pool**: general web searches are fine for *spotting* a change (a
  spec reaching 1.0, a tool dropping a feature), but never propose an author or
  blog outside the pool as a citation. List it under "Needs a decision" so the user
  can choose, per the research boundary in `CLAUDE.md`.

### 4. Give each claim a verdict

- **Current**: the source and newer material still support it.
- **Needs update**: a detail changed (a feature was renamed, a number moved), but
  the practice still holds.
- **Superseded**: the practice itself has been replaced, and an in-pool source
  says so.
- **Source problem**: the claim may be fine, but the link is dead, moved, or
  misdated.
- **Can't verify**: no source could confirm it either way. Say so; don't guess.

Every verdict except "Current" needs evidence: a link and a date, and a quoted
sentence where there is one.

## The report

Give the report in chat. If it covers more than one page, also save it to the
scratchpad directory. Use this shape per page:

```markdown
## <Page title> — reviewed <date>, due <date>

**Summary**: <one sentence: still current, or what changed>

### Findings
- **<Verdict>**: "<claim as the page states it>"
  Evidence: [<source>](<url>), <year>: <what it says now>
  Suggested change: <one line>

### Needs a decision
- <out-of-pool sources, or questions only the user can settle>

### Checked and current
- <short list of claims checked with no issue, so the user sees what was covered>
```

Put the most serious findings first. Keep it short: a page that's still current gets
a summary line and the "Checked and current" list.

## After the report

Only when the user asks you to apply changes:

- Edit the page following `CLAUDE.md`, and run the `ux-writing-review` skill on the
  edited sections.
- Update `references.md`: new year, or a `` `Dated` `` tag with a short note.
- Set the page's `reviewed` frontmatter to today's date. Also do this when the user
  confirms that a page with no findings has been reviewed. Don't change `reviewIn`
  unless the user asks.
