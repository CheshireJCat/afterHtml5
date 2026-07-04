---
title: "color-scheme meta"
description: "Tell the browser which color schemes the document supports before CSS has fully loaded."
---

# color-scheme meta

<span class="feature-meta">Links and metadata · Baseline widely available</span>

Tell the browser which color schemes the document supports before CSS has fully loaded.

<FeatureDemo slug="color-scheme-meta" />

## What It Solves

Dark mode pages where native controls and UA surfaces should not flash with the wrong default scheme.

## Syntax

```html
<meta name="color-scheme" content="dark light">
```

## Practical Guidance

Use in the head when the whole document supports light, dark, or both. Pair with CSS color-scheme for component-level control.

## Watch Outs

- This does not create a complete theme by itself.
- Order matters when declaring preference.
- Some embedded content may have its own scheme.

## Accessibility Notes

- Respect user color-scheme preferences.
- Maintain contrast in both schemes.
- Test native controls, scrollbars, and selection colors.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- [HTML Standard](https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme)
- [Compatibility](https://caniuse.com/?search=color-scheme)
