---
title: "Declarative Shadow DOM"
description: "Ship scoped component markup from the server by declaring a shadow root directly in HTML."
---

# Declarative Shadow DOM

<span class="feature-meta">Web Components · Baseline 2024</span>

Ship scoped component markup from the server by declaring a shadow root directly in HTML.

<FeatureDemo slug="declarative-shadow-dom" />

## What It Solves

Server-rendered Web Components that need style encapsulation before JavaScript upgrades.

## Syntax

```html
<user-card>
  <template shadowrootmode="open">
    <style>...</style>
    <slot></slot>
  </template>
  Ada Lovelace
</user-card>
```

## Practical Guidance

Use when a component needs SSR, streaming, or static HTML output but still benefits from shadow DOM boundaries.

## Watch Outs

- The shadowrootmode template is parser-only; setting it later with innerHTML does not attach a shadow root.
- Older examples may use the removed shadowroot attribute.
- Hydrating custom elements must check for an existing shadow root.

## Accessibility Notes

- Keep light DOM content meaningful before upgrade.
- Do not hide essential text inside inaccessible custom control internals.
- Use slots deliberately so reading order remains sensible.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode)
- [Compatibility](https://caniuse.com/?search=declarative%20shadow%20dom)
