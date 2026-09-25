// Lists content pages whose freshness review is overdue or due soon, based on
// the `reviewed` and `reviewIn` frontmatter fields. Warns only; never fails.
//
// Usage: node scripts/check-freshness.mjs [--soon <days>]

import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DOCS = 'src/content/docs';
const SKIP = new Set(['index.md', 'glossary.md', 'references.md']);
const soonArg = process.argv.indexOf('--soon');
const soonDays = soonArg > -1 ? Number(process.argv[soonArg + 1]) : 30;

const today = new Date();
const rows = { overdue: [], soon: [], missing: [] };

for (const file of readdirSync(DOCS).filter((f) => f.endsWith('.md'))) {
	if (SKIP.has(file)) continue;
	const frontmatter = readFileSync(join(DOCS, file), 'utf8').match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
	const reviewed = frontmatter.match(/^reviewed:\s*(\S+)/m)?.[1];
	const reviewIn = Number(frontmatter.match(/^reviewIn:\s*(\d+)/m)?.[1]);
	const slug = file.replace(/\.md$/, '');

	if (!reviewed || !reviewIn) {
		rows.missing.push(slug);
		continue;
	}
	const due = new Date(reviewed);
	due.setMonth(due.getMonth() + reviewIn);
	const days = Math.round((due - today) / 86_400_000);
	const row = { slug, due: due.toISOString().slice(0, 10), days };
	if (days < 0) rows.overdue.push(row);
	else if (days <= soonDays) rows.soon.push(row);
}

const byDue = (a, b) => a.days - b.days;
if (rows.overdue.length) {
	console.log(`Freshness: ${rows.overdue.length} page(s) overdue for review`);
	for (const r of rows.overdue.sort(byDue)) console.log(`  ${r.slug} (due ${r.due})`);
}
if (rows.soon.length) {
	console.log(`Freshness: ${rows.soon.length} page(s) due within ${soonDays} days`);
	for (const r of rows.soon.sort(byDue)) console.log(`  ${r.slug} (due ${r.due})`);
}
if (rows.missing.length) {
	console.log(`Freshness: ${rows.missing.length} page(s) missing reviewed/reviewIn`);
	for (const slug of rows.missing) console.log(`  ${slug}`);
}
if (!rows.overdue.length && !rows.soon.length && !rows.missing.length) {
	console.log('Freshness: no pages due for review');
}
