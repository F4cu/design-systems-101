---
title: Brand Alignment
---

<p class="eyebrow">The Principle</p>

## A design system implements brand identity; it doesn't own it

A design system covers product UI: interactive, digital, built and maintained by designers and engineers. Brand guidelines cover something wider — visual identity across both digital and physical surfaces (print, packaging, signage, campaign pages), aimed at a wider audience of marketers, agencies, and vendors who will never open a component library. A marketing or brochure site usually belongs closer to brand guidelines than to the design system, because its job is persuasion and campaign flexibility, not the consistent, reusable interaction patterns a design system optimizes for. The design system should stay visually aligned to brand identity without trying to be the thing that owns it. — [userQ, "Design Systems vs. Brand Guidelines"](https://userq.com/design-systems-vs-brand-guidelines-understanding-the-key-differences/)

<p class="eyebrow">Why It Exists</p>

## Brand and product teams optimize for different things, on different timelines

Brand and marketing teams need to move fast on campaigns, ship one-off pages, and stay flexible enough to chase a moment — a governed, contribution-reviewed component library is the wrong tool for that job, the same way a set of static brand templates is the wrong tool for a data table that has to handle twenty edge cases correctly. Treating one team's tooling as sufficient for the other's job is what produces both a marketing team that goes around the design system entirely, and a design system that tries to grow print-shop features it was never built for. Alignment isn't one team absorbing the other; it's making sure a shared visual identity flows into both without either side inheriting the other's constraints.

---

## In Practice

#### 1. Brand refresh reshaping the token layer

**Wise's** 2023 brand refresh is the clearest real example: it didn't stay a marketing-only exercise, it drove a 2024 rebuild of the product system's token infrastructure (the "Editorial Design System") to actually carry the new identity through to product surfaces. See [Governance case studies](/governance-case-studies/) for what went wrong when a related brand-theming change was handled as a local fork instead of a registered, system-wide change — the failure mode this kind of cross-team alignment exists to prevent. — [Ness Grixti, "Wise Multi-Brand Design System — Case Study"](https://nessgrixti.com/portfolio/wise-multi-brand/)

#### 2. Brand identity as its own token layer

[Token architecture](/token-architecture/)'s three-tier model (primitive → semantic → component) is where brand and product actually meet in the code: a rebrand should mean updating primitive-tier values in one place — the colors, type, and spacing that encode the brand's visual identity — and having semantic and component tiers pick the change up automatically. A system where brand-driven values leak into semantic or component tiers is a system where the next rebrand means hunting down every hardcoded reference instead of changing one layer.

---

## Common mistakes

- **Assuming a large, polished brand-management platform is the same thing as a design system, or that a mature product design system automatically covers marketing's needs.** DHL's Brand Hub is a useful example of the former: a genuinely large brand-management platform (10,000+ templates, an AI layout generator, a custom typeface) built for global brand consistency across marketing and physical materials — but it's brand tooling for marketers and vendors, not a component library for product designers and engineers, and the two were never meant to merge into one system. The fix isn't picking one team to own both; it's cross-functional alignment on a recurring cadence, so brand identity and product implementation stay two things pointed at the same target instead of one team's tool quietly standing in for the other's.
- **Letting brand-driven values leak into the semantic or component token tiers instead of staying at the primitive tier.** A rebrand should mean updating primitive-tier values in one place; if brand colors and type get hardcoded further down the stack, the next rebrand means hunting down every reference instead of changing one layer.
