---
title: "theme-color"
description: "Suggest colors for the browser or surrounding UI using meta tags, optionally scoped by media query."
---

# theme-color

<span class="feature-meta">Links and metadata · Limited availability</span>

Suggest colors for the browser or surrounding UI using meta tags, optionally scoped by media query.

<FeatureDemo slug="theme-color" />

## What It Solves

Mobile browser chrome, installed web app polish, and dark/light brand alignment outside the page canvas.

## Syntax

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)">
```

## Practical Guidance

Use one or more meta tags in the head. Add media queries when the page supports multiple color schemes.

## Watch Outs

- Some desktop browsers parse it but do not visibly use it.
- Platform UI can override or transform the color.
- The tag should follow theme changes if the user can switch themes.

## Accessibility Notes

- Choose colors with sufficient contrast against browser UI icons where applicable.
- Keep page content contrast independent from browser chrome.
- Do not rely on chrome color as the only state indicator.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
- [HTML Standard](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color)
- [Compatibility](https://caniuse.com/?search=theme-color)
