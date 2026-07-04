---
title: "Invoker Commands"
description: "Let buttons declaratively command popovers, dialogs, and custom command handlers without waiting for app JavaScript to wire click listeners."
---

# Invoker Commands

<span class="feature-meta">Native interaction · Baseline 2025</span>

Let buttons declaratively command popovers, dialogs, and custom command handlers without waiting for app JavaScript to wire click listeners.

<FeatureDemo slug="invoker-commands" />

## What It Solves

HTML-first controls for common show, hide, toggle, and close behaviors.

## Syntax

```html
<button commandfor="panel" command="toggle-popover">Toggle</button>
<div id="panel" popover>...</div>
```

## Practical Guidance

Use as progressive enhancement for built-in interactive elements, especially where initial interactivity matters before framework hydration.

## Watch Outs

- Only buttons are invokers.
- Built-in commands are intentionally limited.
- Framework abstractions may need updates before they pass through the attributes cleanly.

## Accessibility Notes

- Keep the invoker a real button.
- Use visible labels; do not rely on icon-only commands.
- Provide JS fallback only when your support target needs it.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-commandfor)
- [Compatibility](https://caniuse.com/?search=commandfor)
