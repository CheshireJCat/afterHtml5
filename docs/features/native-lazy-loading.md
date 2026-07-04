---
title: "Native lazy loading"
description: "Defer below-the-fold images and iframes with one attribute instead of shipping scroll observers for every asset."
---

# Native lazy loading

<span class="feature-meta">Loading and performance · Baseline widely available</span>

Defer below-the-fold images and iframes with one attribute instead of shipping scroll observers for every asset.

<FeatureDemo slug="native-lazy-loading" />

## What It Solves

Long content pages, galleries, embeds, and docs where non-critical media should not compete with above-the-fold content.

## Syntax

```html
<img src="report-chart.png" loading="lazy" alt="Quarterly report chart">
<iframe src="/demo/map" loading="lazy" title="Office map"></iframe>
```

## Practical Guidance

Use lazy for offscreen media. Keep critical hero images eager and pair them with explicit width and height to avoid layout shift.

## Watch Outs

- Lazy loading above-the-fold images can hurt perceived performance.
- The browser decides when a lazy resource is close enough to load.
- Always reserve dimensions so unloaded media does not shift content.

## Accessibility Notes

- Keep alt text and iframe titles meaningful.
- Do not lazy-load content that is required before the user can understand the page.
- Avoid replacing lazy media with inaccessible placeholders.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes)
- [Compatibility](https://caniuse.com/loading-lazy-attr)
