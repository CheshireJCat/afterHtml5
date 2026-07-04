---
title: "inert"
description: "Mark a subtree as non-interactive so it cannot be clicked, focused, selected, or reached by assistive technology."
---

# inert

<span class="feature-meta">Interaction safety · Baseline widely available</span>

Mark a subtree as non-interactive so it cannot be clicked, focused, selected, or reached by assistive technology.

<FeatureDemo slug="inert" />

## What It Solves

Disabled page regions behind overlays, preview panes, inactive steps, and temporary UI locks.

## Syntax

```html
<main inert>Temporarily disabled content</main>
```

## Practical Guidance

Use when a whole region should be unavailable, not merely visually dimmed.

## Watch Outs

- inert removes interactivity from descendants, including links and form controls.
- Do not inert content that remains necessary to finish the task.
- Visual dimming is separate; add CSS to make the state obvious.

## Accessibility Notes

- Pair inert with a clear active region.
- Move focus intentionally when enabling an overlay.
- Restore focus when leaving the inert state.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute)
- [Compatibility](https://caniuse.com/mdn-html_global_attributes_inert)
