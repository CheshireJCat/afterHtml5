---
title: "Preload links"
description: "Start fetching critical fonts, images, or scripts before the browser would otherwise discover them."
---

# Preload links

<span class="feature-meta">Loading and performance · Baseline widely available</span>

Start fetching critical fonts, images, or scripts before the browser would otherwise discover them.

<FeatureDemo slug="preload-links" />

## What It Solves

Critical resources referenced from CSS, late template chunks, and above-the-fold assets that should arrive earlier.

## Syntax

```html
<link rel="preload" href="/fonts/plex.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/hero.avif" as="image" imagesrcset="hero.avif 1200w, hero@2x.avif 2400w" imagesizes="100vw">
```

## Practical Guidance

Use only for resources needed by the current navigation. Include the correct as, type, and crossorigin values.

## Watch Outs

- Preloading unused resources wastes bandwidth.
- Wrong as or crossorigin values can trigger duplicate downloads.
- Do not preload everything; the browser already has a scheduler.

## Accessibility Notes

- Preload should improve delivery without changing semantic order.
- Do not hide meaningful fallback text while waiting for preloaded assets.
- Prioritize resources that help users read or operate the page.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)
- [Compatibility](https://caniuse.com/link-rel-preload)
