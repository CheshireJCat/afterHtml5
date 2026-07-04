---
title: "blocking=render"
description: "Explicitly make a dynamically inserted script, style, or stylesheet block rendering until it is ready."
---

# blocking=render

<span class="feature-meta">Loading and performance · Limited availability</span>

Explicitly make a dynamically inserted script, style, or stylesheet block rendering until it is ready.

<FeatureDemo slug="blocking-render" />

## What It Solves

Small critical head resources that are injected dynamically but still must apply before first paint.

## Syntax

```html
<script async blocking="render" src="/critical-theme.js"></script>
<link rel="stylesheet" blocking="render" href="/critical.css">
```

## Practical Guidance

Use only for small, truly critical resources. Most pages should prefer normal parser-discovered stylesheets and avoid extra render blocking.

## Watch Outs

- Render blocking delays first paint.
- Only head resources can affect render blocking.
- Large scripts or stylesheets can make the page feel frozen.

## Accessibility Notes

- Do not block rendering on decorative-only resources.
- Keep initial content understandable if the enhancement fails.
- Avoid blocking controls needed for emergency or account flows.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/blocking)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attributes)
- [Compatibility](https://caniuse.com/?search=blocking%3D%22render%22)
