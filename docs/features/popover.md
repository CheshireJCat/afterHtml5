---
title: "Popover"
description: "Build top-layer menus, teaching bubbles, and non-modal floating panels without owning z-index, outside-click, or escape-key behavior yourself."
---

# Popover

<span class="feature-meta">Native interaction · Baseline newly available</span>

Build top-layer menus, teaching bubbles, and non-modal floating panels without owning z-index, outside-click, or escape-key behavior yourself.

<FeatureDemo slug="popover" />

## What It Solves

Layered UI that needs light dismiss and top-layer placement, but does not need to make the rest of the page inert.

## Syntax

```html
<button popovertarget="quick-actions">Actions</button>
<div id="quick-actions" popover>...</div>
```

## Practical Guidance

Use for small transient surfaces: menus, quick actions, hints, onboarding notes, and tool palettes. Use dialog when the task must block the page.

## Watch Outs

- Popover does not provide dialog semantics by itself.
- Choose auto, hint, or manual based on whether light dismiss and one-at-a-time behavior are desired.
- Positioning still needs CSS; the top layer only solves stacking.

## Accessibility Notes

- Use meaningful buttons as invokers.
- Add semantic roles only when the content actually behaves like a menu, tooltip, or note.
- Do not put required workflow steps in a light-dismissible popover.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover)
- [HTML Standard](https://html.spec.whatwg.org/multipage/popover.html)
- [Compatibility](https://caniuse.com/?search=popover)
