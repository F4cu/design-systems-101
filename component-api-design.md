# Component API Design

<p class="eyebrow">The Principle</p>

## Every prop is a permanent promise or a future breaking change

Every prop you ship is a promise you keep forever, or a breaking change you'll have to schedule later. Whether a component stays durable under real product pressure or slowly turns into an unmaintainable pile of conditional flags comes down to a handful of recurring decisions: when to add a new component versus extend an existing one, when to reach for a variant versus composition, when a new property is warranted, and how to keep a component flexible across surfaces without letting its API sprawl.

<p class="eyebrow">Why It Exists</p>

## Unchecked prop growth ends in configuration collapse

Left unchecked, components accrete props one product request at a time, and each addition feels reasonable in isolation. Nathan Curtis calls the end state "configuration collapse": a component with layout props, visibility toggles, and deeply nested subcomponent trees that exist only to control what's shown and where. The fix isn't a rule against adding props — it's a standing discipline about *which* props earn a permanent place in the API. — [Nathan Curtis, "Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse)

---

## In Practice

#### 1. New component vs. modify an existing one

A new visual expression of something that already exists — a new button color alongside solid and outline — is usually a new variant value, or a new property applied across the existing variants, not a new component. The [contribution criteria](contribution-models.md) apply here too: if the need is general and reusable, it belongs inside the existing component's contract, not as a lookalike sitting next to it. — [Supernova, "Building Durable Component APIs for Design Systems"](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems)

#### 2. New variant vs. composable

Curtis's rule of thumb, quotable on its own:

> "Make the common configurable. Make the uncommon composable."
> — [Nathan Curtis, "Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse)

Keep only behavioral and foundational props on the top-level API — things like `state`, `appearance`, `size` — and push structural or content variation into composition instead. The signal that something belongs in composition rather than as a variant: it's used in only one context, or it needs several props that are only *conditionally* relevant to each other (a footer needs `footer`, `footerClassName`, `showFooter`, and `footerAlignment` — four props for one feature — versus a single `Dialog.Footer` composed child).

Curtis documents this with real before/after examples:

- A Pill component had its visibility props and type variants removed in favor of children slotting into a container.
- An Alert component's three-level subcomponent hierarchy for title/description/actions became a single slotted body with ready-made layout examples instead.
- A Card component was hollowed into an unopinionated container so specialized teams build purpose-driven extensions rather than the core system adding more configuration.

— [Nathan Curtis, "Configuration Collapse"](https://nathanacurtis.substack.com/p/configuration-collapse)

#### 3. New properties, and avoiding prop bloat

Three rules of thumb from component-API practice:

- Keep naming consistent across the whole system — don't mix `type`, `mode`, `variant`, and `style` for the same underlying concept across different components.
- Minimize combinations of props you don't actually support: "if your system permits a certain usage, it will likely be used that way somewhere in the product."
- Respect platform-native naming rather than forcing artificial uniformity (`src` on the web, `image` in Figma).

Favor composition over style overrides specifically: an override is a hidden dependency that can break silently on the next release, while composition stays part of the documented, versioned API. — [Supernova, "Building Durable Component APIs for Design Systems"](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems); a similar props-for-styling, composition-for-structure split appears independently in [MUI's API design guide](https://mui.com/material-ui/guides/api/), which is worth reading as a second voice confirming the same pattern from a component-engineering angle rather than a design-systems one.

#### 4. Flexibility across surfaces

The same component often needs to work on web, iOS, and Android without looking identical on all three — **Wealthfront's** engineering team frames this as "design once, build anywhere," sharing tokens (padding, radius, color, typography) and intent while letting the implementation diverge per platform's conventions. Their example: a Dialog on web floats centered on desktop, while its mobile counterpart is a BottomSheet attached to the bottom edge — different component, different interaction model, same underlying decisions. This is multi-*platform*, not cross-platform: one set of decisions expressed idiomatically per surface, not one implementation forced everywhere. — [Wealthfront Engineering, "Building Wealthfront's multi-platform design system"](https://eng.wealthfront.com/2022/05/10/building-wealthfronts-multi-platform-design-system/)

Sharing "tokens and intent" across platforms only works if that intent is recorded somewhere neutral in the first place — see [Multi-platform component specs](multi-platform-component-specs.md) for how that source of truth is structured once more than one independent platform team is building from it, and [Platform divergence](platform-divergence.md) for why a structural split like Dialog vs. BottomSheet needs a component contract rather than a token.

Flexibility has a second axis worth naming explicitly: what a component can *guarantee* versus what it can only *guide*. A component can guarantee color contrast in its token pairings, focus visibility, keyboard operability, correct ARIA roles, and touch target sizing. It cannot guarantee heading hierarchy on the page it's placed in, reading order, or whether the surrounding content makes sense — those are composition-level and content-level decisions the component's consumer makes. Making a component more flexible should never mean loosening the guarantees it can actually make; it means being honest about which half of the problem the component owns.

---

## Common mistakes

- **Adding a prop as a pre-emptive escape hatch** — "just in case a team needs this later" — instead of waiting for a real second use case and reaching for composition. Every speculative prop is a permanent maintenance cost paid whether or not it ever gets used, and it usually can't be removed once someone depends on it. The better default: ship the narrow version, and when a genuine second need shows up, solve it with composition or a feature request rather than expanding the prop surface in advance.
- **Mixing naming conventions for the same concept across components.** `type`, `mode`, `variant`, and `style` all meaning roughly the same thing in different places makes the whole API harder to predict.
- **Not deciding which prop combinations are actually supported.** If the system permits a certain combination, it will get used that way somewhere in the product — undocumented combinations don't stay theoretical for long.
- **Reaching for style overrides instead of composition.** An override is a hidden dependency that can break silently on the next release; composition stays part of the documented, versioned API.

— [Supernova, "Building Durable Component APIs for Design Systems"](https://www.supernova.io/blog/building-durable-component-apis-for-design-systems)
