---
title: "Responsive images"
description: "Let the browser choose the right image candidate for viewport, density, and format instead of shipping one oversized asset everywhere."
---

# Responsive images

<span class="feature-meta">Media · Baseline widely available</span>

Let the browser choose the right image candidate for viewport, density, and format instead of shipping one oversized asset everywhere.

<FeatureDemo slug="responsive-images" />

## What It Solves

Art-directed hero images, dense product grids, and editorial media where layout and network cost change across breakpoints.

## Syntax

```html
<picture>
  <source type="image/avif" srcset="hero.avif 1200w, hero@2x.avif 2400w" sizes="(min-width: 900px) 50vw, 100vw">
  <img src="hero.jpg" srcset="hero-600.jpg 600w, hero-1200.jpg 1200w" sizes="100vw" alt="Project preview">
</picture>
```

## Practical Guidance

Use width descriptors with sizes for flexible layouts. Use picture when the crop or format should change, not just the resolution.

## Watch Outs

- Wrong sizes values can make the browser choose a much larger image than needed.
- picture still needs an img fallback with useful alt text.
- Do not use art direction to hide important content on small screens.

## Accessibility Notes

- Keep alt text on the img element.
- Make every art-directed crop preserve the same meaning.
- Avoid text baked into responsive images when real text can be used.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [HTML Standard](https://html.spec.whatwg.org/multipage/images.html#the-picture-element)
- [Compatibility](https://caniuse.com/srcset)
