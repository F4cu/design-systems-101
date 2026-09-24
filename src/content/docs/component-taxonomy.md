---
title: Component Taxonomy
---

A component is rarely one indivisible thing. It's built from smaller pieces, and it may itself be a piece inside something bigger. Practitioners name these layers differently (primitive, atom, subcomponent, part, compound component, slot), and the words aren't synonyms for "small component." Each answers a different question: how generic is this piece, and where is it allowed to be used?

:::tip[Key takeaways]
- Tell primitives (reusable anywhere) apart from subcomponents (scoped to one parent)
- Keep behavior in props, and move structure into subcomponents and slots
- Keep subcomponents scoped to their parent in code
- Split out a subcomponent only when a second real use shows up
- Use the same names in Figma and in code
:::

## The problem

When "component" is the only word anyone has, every conversation about structure collapses into it. A designer calls the icon inside a button "part of the button." An engineer calls it a separate component because it's a separate file. Neither is wrong, but they're answering different questions.

[Nathan Curtis](https://nathanacurtis.substack.com/p/configuration-collapse) calls the result "configuration collapse." Components pile up layout props, visibility toggles, and ad hoc nested structure, because nobody had a name for "a composable piece scoped to this one parent," so it got jammed into the parent's prop list. The same gap shows up in code. A team either exposes too little (one giant component with dozens of props) or too much (every internal piece exported, with no signal about which pieces go together). See [Component API design](/component-api-design/).

## The model

The same Card, read through each layer:

<div class="mermaid-wrap">

```mermaid
graph TD
  Primitive["Primitive / atom<br/>Box, Stack, Text — generic, context-free"] --> Sub["Subcomponent / part<br/>CardMedia, CardActionsArea — scoped to Card"]
  Sub --> Slot["Slot<br/>the insertion point Card exposes for each subcomponent"]
  Slot --> Compound["Compound component (code)<br/>Card.Media, Card.Actions — the exported implementation"]
```

</div>

### Primitives and atoms

[Brad Frost's atomic design](https://atomicdesign.bradfrost.com/chapter-2/) calls the smallest pieces **atoms**: things that "can't be broken down any further," like a label, an input, or an icon. A **primitive** is the same idea under a different name, more common in token-driven systems. It's a low-level, generic element, often literally called `Box` or `Stack`, with direct access to design tokens (spacing, color, radius) but no meaning of its own. Both are reusable *anywhere*, with no assumption about their parent.

### Subcomponents and parts

[Curtis](https://medium.com/eightshapes-llc/subcomponents-753ce9f6600a) defines a **subcomponent** as "an independently composable UI component with a well-defined API intended for use only within a specific parent component or context." His example: a Card can be split into `CardMedia` and `CardActionsArea`. Each has its own props, but neither is meant to be used outside a Card. The difference from a primitive isn't size. It's scope: a primitive is context-free, and a subcomponent is tied to one parent on purpose.

Here's how the two layers look together in a React tree. The highlighted lines are Card's subcomponents, which only work inside a Card. `Stack` and `Text` are primitives: they'd work the same way anywhere, including here, between Card's parts.

```tsx {2,7-9}
<Card>
  <Card.Media src={cover} alt="" />
  <Stack gap="sm">
    <Text weight="bold">Paris</Text>
    <Text>3 nights, 2 guests</Text>
  </Stack>
  <Card.Actions>
    <Button>Book</Button>
  </Card.Actions>
</Card>
```

[Radix Primitives](https://www.radix-ui.com/primitives/docs/guides/composition), a widely used code library for building design systems, calls the same thing **parts**. Its [Dialog anatomy](https://www.radix-ui.com/primitives/docs/components/dialog) shows each part as a separate piece the consumer assembles, rather than configuring one component through props:

```tsx
<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Portal>
    <Dialog.Overlay />
    <Dialog.Content>
      <Dialog.Title />
      <Dialog.Description />
      <Dialog.Close />
    </Dialog.Content>
  </Dialog.Portal>
</Dialog.Root>
```

The nesting carries meaning. `Dialog.Portal` renders its contents outside the page's normal layout, so the overlay and content sit on top of everything else. `Dialog.Trigger` stays where it was placed.

### Compound components

**Compound component** is the engineers' term for how subcomponents are built in code: "a pattern where higher level components are composed using smaller components, and you retain access to all the semantic elements of the higher level component." [Workday's Canvas Design System](https://github.com/Workday/canvas-kit/blob/master/modules/docs/mdx/COMPOUND_COMPONENTS.mdx) shows it with `Tabs`: `Tabs` is the container, and `Tabs.List`, `Tabs.Item`, and `Tabs.Panel` are its subcomponents, accessed as properties of the parent rather than imported on their own.

Canvas's docs contrast the two ways of building the same Tabs (shortened here). The configuration version takes everything as data through one prop:

```tsx title="Configuration"
<Tabs
  items={[
    { title: 'First', content: '…' },
    { title: 'Second', content: '…' },
  ]}
/>
```

The compound version exposes each piece as markup:

```tsx title="Compound"
<Tabs>
  <Tabs.List>
    <Tabs.Item>First</Tabs.Item>
    <Tabs.Item>Second</Tabs.Item>
  </Tabs.List>
  <Tabs.Panel>…</Tabs.Panel>
  <Tabs.Panel>…</Tabs.Panel>
</Tabs>
```

Both render the same tabs. The difference shows up when a team needs something the `items` array didn't plan for, like a badge on one tab. In the compound version, they put it inside that `Tabs.Item`. In the configuration version, someone has to add a new field to the data shape.

### Slots

A **slot** is the placeholder a parent exposes so a subcomponent, or any content, can be placed into it. [Curtis](https://nathanacurtis.substack.com/p/slots-in-design-systems) notes that "an increase in component slots and custom compositions within them" reduces how many configuration props a component needs. You trade prop count for a few well-defined insertion points. [story.to.design](https://story.to.design/blog/subcomponents-more-flexible-design-systems) describes the payoff in design tools: instead of detaching a component because the variant they need doesn't exist, a designer composes existing subcomponents into a slot. Their example is an icon nested inside a button.

In React, a slot is either `children` or a prop that accepts an element. [MUI's Button](https://mui.com/material-ui/api/button/) takes the second route with `startIcon`. Compare the same button built with configuration props:

```tsx title="Configuration props"
<Button
  icon="download"
  iconPosition="start"
  showIcon
>
  Download
</Button>
```

And with a slot:

```tsx title="Slot"
<Button startIcon={<DownloadIcon />}>
  Download
</Button>
```

Three props collapse into one insertion point. The Button no longer needs to know which icons exist, whether one is shown, or how to name them.

## Practices

### Keep behavior in props, structure in slots

None of this replaces props. It narrows what belongs in them. Behavior and foundational state (`disabled`, `size`, `appearance`) stay as top-level props on the parent. Structural and content variation moves into subcomponents and slots. [Component API design](/component-api-design/) has the fuller rule of thumb.

### Keep subcomponents scoped to their parent

Don't export a subcomponent so it can be imported on its own, outside its parent's compound structure. That removes the "intended for use only within a specific parent" guarantee that Curtis's definition depends on. Consumers can then reassemble pieces in combinations nobody designed or tested.

The scoping happens in the package's index file, which is the list of everything other teams can import. Attach the parts to the parent, and leave them out of the list:

```tsx title="card/index.ts"
export const Card = Object.assign(
  CardRoot,
  {
    Media: CardMedia,
    Actions: CardActions,
  },
);

// Don't also export the parts:
// export { CardMedia } from './media';
```

`Object.assign` hangs `Media` and `Actions` off `Card`, so the only way to reach them is `Card.Media` and `Card.Actions`. A consumer who types `import { CardMedia }` gets an error instead of a part with no Card around it.

### Split out a subcomponent only on a second real use

The discipline that governs new components applies to subcomponents too: don't split one out until a real second use case shows up. See the [criteria for adding a component](/component-lifecycle/#criteria-for-adding-a-component).

### Use the same names in Figma and in code

What Curtis calls a subcomponent at the design and API level is what a frontend team builds as a compound component. Naming both sides the same way keeps a design file's parts and a codebase's subcomponents mapped one-to-one. If Figma calls something a "part" and the code exports it as an unrelated component with a different name, the mapping breaks. That's the failure the [design-to-code contract](/design-to-code-contract/) exists to prevent.

## Common mistakes

- **Treating "primitive" and "subcomponent" as synonyms for "small component."** A primitive is generic and reusable anywhere. A subcomponent is composable but deliberately scoped to one parent. Mixing them up in documentation makes it unclear whether a piece is safe to reuse elsewhere.
