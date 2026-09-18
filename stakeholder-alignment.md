# Stakeholder Alignment & Planning Horizons

<p class="eyebrow">The Principle</p>

## Design systems fail from lost organizational alignment, not broken components

"Design systems don't fail because of components. They fail because they lose alignment with the organisation." At scale, a design system isn't a component library with a governance process attached to it — it's a small organization living inside a bigger one, and it has to justify its own existence the same way any viable organization does: by staying legible to, and connected with, everything around it. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

<p class="eyebrow">Why It Exists</p>

## A system's reach outgrows a single team's ability to represent everyone in it

ITVX's Mosaic design system illustrates the scale problem concretely. What started in 2015 as ITV Hub grew into ITVX by 2022, and the design system's operating model grew with it. A centralized core of 3 people (1 head of design systems + 2 designers) now sits alongside a distributed layer of 14 cross-functional partners (2 tech managers, 7 engineers, 7 designers). Together they feed 13 product workstreams across 2 product pillars, which in turn support 6 platforms and roughly 15,000 devices (browser, CTV, tvOS, iOS, Android, Roku). At that scale, no core team — however good — can personally track what every stakeholder needs. The tools that follow are ways of making that tracking explicit instead of leaving it to whoever happens to be in the room. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

---

## In Practice

#### 1. Stakeholder mapping by influence and frequency

Ashton-Booth's quadrant crosses how often someone uses the system against how much influence they hold over its direction:

- High frequency + high influence is a **primary user** ("required" — the system has to work for them, full stop). Their default question: "how can I create the most value in my role and contribute back?"
- High frequency + low influence is a **secondary user** ("consulted" — they feel every rough edge but don't set direction). Their default question: "how does the design system support our product strategy, and which metrics show its impact?"
- Low frequency + high influence is a **product stakeholder** ("accountable" — they own outcomes but rarely touch the system day to day). Their default question: "how do we ensure the system meets our standards, and how do we integrate it better?"
- Low frequency + low influence is a **business stakeholder** ("informed" — they need to know it exists and what it's doing for the business, not how it works). Their default questions center on creative strategy, technical advantage, and contribution to business goals.

A pitch, an update, or a piece of documentation aimed at the wrong quadrant's question lands as noise even when the underlying information is correct. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

#### 2. Golden Circle for stakeholder altitude

Layered onto the same four groups: primary users sit at the **What** layer (results, output, outcomes); product stakeholders sit at **How** (process and actions); secondary users sit at **Why** (purpose and motivation); business stakeholders sit at **Impact**, the combined output of all three layers together. The practical use: when a business stakeholder asks a "why" question, answering with a "what" — a list of shipped components — doesn't land, because they're asking from the Impact layer looking down, not the What layer looking up. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026, citing Simon Sinek's Golden Circle

#### 3. Three-horizon planning

- *Tactical* planning ("Now") moves quickly and removes friction: clear short-term priorities, daily support, fast blocker resolution. It answers "how do we support teams and keep delivery moving?"
- *Strategic* planning ("Next") creates direction and alignment: clear priorities, cross-team alignment, longer-term thinking. It answers "how do we scale in the right direction?"
- *Normative* planning ("Future") builds belief and shared purpose: shared principles, real relationships, continuous alignment over time. It answers "how do we create trust and long-term adoption?"

Running only the tactical horizon is what produces a system that's always fighting fires. Running only the normative horizon is what produces a system with a beautiful mission statement and no delivery. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

#### 4. LeanDS framework for system pitches

The framework organizes 11 questions into three sections mirroring Why / What / How:

- *Why* (purpose): the wider organisation (how big, single- or multi-brand, who the system serves), business goals & objectives (what the business is focused on right now), and the system problem (what's working, what isn't).
- *What* (drivers & motives, deliberately aligned with the Lean UX canvas): system users, user benefits & outcomes, metrics & measurements, solutions, and a hypothesis that stitches the rest together.
- *How* (feasibility): the design system's team model (centralized, distributed, or hybrid), scope & risks, and the plan itself.

The hypothesis box is the framework's spine — it forces every other box into one sentence:

> *"We believe that tackling [the system problem], in line with [the wider organisation] and [business goals], we will help [system users] to [user benefits], success will be shown by [metrics], we plan to achieve this through [solutions], this approach will be supported by our [team model], whilst considering [scope & risks], and is part of [the plan]."*

A pitch that can't complete that sentence usually has a gap in one of the 11 boxes, not just a communication problem. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026 / [`marianneab.substack.com`](https://marianneab.substack.com), "LeanDS Framework"

#### 5. Viable System Model diagnostic

Beer's own framing of why any organization needs this: "An organisation is viable if it can survive in a particular sort of environment. For although its existence is separate, so that it enjoys some kind of autonomy, it cannot survive in a vacuum." Ashton-Booth maps a design system onto Beer's five subsystems:

- **System 1** is core operations — the actual tokens, components & patterns, and guidelines being produced.
- **System 2** is the communication channels that coordinate System 1 so its parts don't work at cross-purposes.
- **System 3** is governance & regulation, keeping System 1 inside agreed bounds.
- **System 4** is strategic future thinking — scanning outside and ahead of the system's current state, the part that notices a new platform or a shifting org chart before it becomes an emergency.
- **System 5** is business & stakeholder influence — identity, norms, and the atmosphere the whole system operates inside, set from outside System 1–4 entirely.

The diagnostic value isn't the org chart, it's the question it forces: a system that's all System 1 (shipping components) with no System 4 (nobody watching what's coming) or System 5 (no stakeholder influence feeding back in) is optimizing the wrong thing at exactly the moment it most needs to adapt. — Stafford Beer, *Diagnosing the System for Organisations*, 1985; [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

#### 6. Three-clock measurement

Awareness & perception — how the organization *feels* about the system — is qualitative and moves slowly enough to check every 6–9 months. Usability & discoverability is both quantitative and qualitative and moves fast enough to check quarterly. Adoption & contribution is quantitative and moves fast enough to check monthly. See [Adoption measurement](adoption-measurement.md) for the metrics themselves; the addition here is cadence — checking perception monthly produces noise, and checking adoption only twice a year is too slow to catch drift before it compounds. — [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026

---

## Common mistakes

- **Building the stakeholder quadrant, the horizon plan, or the LeanDS canvas once, at launch, and treating it as settled.** [Business alignment](business-alignment.md) makes the same point about the roadmap itself: a case that was true at launch goes stale exactly as fast as the organization changes around it. The zeroheight *Design Systems Report 2026* found staffing (56%) and stakeholder buy-in (31%) still ranked among the top blockers reported by 147 practitioners — the same categories these tools exist to manage — which suggests most teams aren't revisiting the mapping often enough to keep pace with the organisation.
- **Answering a stakeholder's "why" question with a "what" answer.** A list of shipped components doesn't land with someone asking from the Impact layer looking down, not the What layer looking up.
- **Running only the tactical horizon, or only the normative one, instead of both.** Tactical-only planning produces a system that's always fighting fires; normative-only planning produces a beautiful mission statement with no delivery behind it.

— zeroheight, *Design Systems Report 2026*; [Marianne Ashton-Booth, "From Silos to Systems,"](https://marianneashtonbooth.com) UXDX Berlin 2026
