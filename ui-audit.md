# UI Audit & Heuristic Evaluation Before a Design System

<p class="eyebrow">The Principle</p>

## Audit what already exists before you design what should replace it

Two distinct exercises belong before the first token or component gets designed: an **interface inventory** — a screenshot-and-catalog pass over every distinct UI treatment already shipping — and a **heuristic evaluation** — an expert usability review against a fixed set of principles. They answer different questions. The inventory answers "what do we actually have, and where is it inconsistent?" The heuristic evaluation answers "where does what we have violate known usability principles?" Conflating them into one loose "audit" pass is how teams end up redesigning components before they've finished cataloging them.

<p class="eyebrow">Why It Exists</p>

## Skipping the audit doesn't remove the discovery work — it just moves it later

An audit that's skipped in favor of jumping straight to new tokens and components doesn't make that discovery work go away; it postpones it into the middle of implementation, where the same gaps and inconsistencies resurface as blockers instead of inputs. — [Clearly Design, "Audit before you scaffold: meeting projects where they are"](https://clearly.design/articles/ai-ready-ds-3-design-system-audit)

Brad Frost frames the interface inventory specifically as groundwork for a pattern library or design system, not a general housekeeping exercise: deconstructing existing pages into their component parts exposes redundant, inconsistent treatments sitting side by side, and gives a team concrete material — not opinion — to bring to stakeholders about why a shared system is worth building. — [Brad Frost, "Conducting an Interface Inventory"](https://bradfrost.com/blog/post/conducting-an-interface-inventory/)

Heuristic evaluation comes from a different lineage entirely — Jakob Nielsen and Rolf Molich's usability-inspection method, run by a small panel of evaluators judging an interface against a fixed set of usability principles rather than testing it with real users. NN/g is explicit that it is fast and cheap relative to user research, useful for catching glaring problems early, and *not* a substitute for user research — findings it surfaces still need validating against how people actually use the product. — [Nielsen Norman Group, "How to Conduct a Heuristic Evaluation"](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)

---

## In Practice

#### 1. Interface inventory first

Frost's method: screenshot each distinct treatment of each UI element — a button with a bevel versus one without, not every button on every page — and lay them out by category so near-duplicates become visible next to each other. His recurring example is a bank site with a dozen unrelated button styles versus a site like Etsy where the same few patterns repeat everywhere; the inventory is what makes that contrast undeniable rather than a matter of taste. — [Brad Frost, "Conducting an Interface Inventory"](https://bradfrost.com/blog/post/conducting-an-interface-inventory/)

#### 2. Non-judgmental inventory pass

**Obvious University's** discovery sequence puts this as an explicit rule: group similar components, track where each one came from, and document usage frequency first, while deliberately refraining from judging any of it. Only in the following step do teams get pulled in to flag what should change. Collapsing these two steps invites the inventory to turn into an opinionated redesign before the cataloging is even finished. — [Obvious University, "How to audit a design system"](https://university.obvious.in/product-design/design-system/how-to-audit-a-design-system)

#### 3. 18F's per-page checklist structure

**18F** is a former US federal government digital-services office; its published methods are public and widely cited outside government. Screenshot every page in scope, build a checklist of what to note on each one — typography, header and body styles, color use, buttons, icons — and annotate inconsistencies page by page. Then reconcile: for each inconsistency, either adopt one of the existing treatments or design a new one. The output is a single listing and analysis of every component, pattern, and interface feature in the product, which becomes the seed material for the design system itself. — [18F Methods, "Interface audit"](https://methods.18f.gov/decide/interface-audit/)

#### 4. Separate heuristic evaluation pass

**NN/g's** method: 3–5 evaluators, each trained on Nielsen's 10 usability heuristics, review the interface independently and timeboxed (roughly 1–2 hours each) before comparing notes — a single evaluator reliably misses issues a panel catches. Findings are consolidated afterward via affinity diagramming (grouping similar findings into clusters by hand to spot patterns, rather than ranking them individually) and prioritized as a group, rather than each evaluator's list being taken at face value. — [Nielsen Norman Group, "How to Conduct a Heuristic Evaluation"](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)

#### 5. Heuristic findings as flags, not verdicts

**NN/g's** own caveat is the standard warning that gets dropped when teams cite this method secondhand: a heuristic evaluation is an expert's judgment call against general principles, not evidence from real users, so a flagged issue is a hypothesis about what's wrong — worth checking against actual usage before it drives a redesign decision. — [Nielsen Norman Group, "How to Conduct a Heuristic Evaluation"](https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/)

## Common mistake

Merging the inventory and the heuristic evaluation into a single loosely-defined "audit" pass. Once judgment ("this button style is bad") enters the same pass as cataloging ("this button style exists"), the inventory stops being neutral evidence and starts being one person's redesign preferences, which is exactly what a scorecard or stakeholder conversation later needs to *not* be built on. Run the inventory to completion first, treat it as the objective record of what exists, and only then bring in the heuristic evaluation — and real user validation — to decide what should change.
