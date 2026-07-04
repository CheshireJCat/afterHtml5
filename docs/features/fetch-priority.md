---
title: "Fetch priority"
description: "Tell the browser which otherwise-similar resources deserve higher or lower fetch priority directly in markup."
---

# Fetch priority

<span class="feature-meta">Loading and performance · Baseline 2024</span>

Tell the browser which otherwise-similar resources deserve higher or lower fetch priority directly in markup.

<FeatureDemo slug="fetch-priority" />

## What It Solves

Hero images, late-discovered preloads, and low-value decorative resources that need better relative ordering.

## Syntax

```html
<img src="hero.avif" fetchpriority="high" alt="Dashboard overview">
<img src="avatar.png" loading="lazy" fetchpriority="low" alt="Team member">
```

## Practical Guidance

Use sparingly for resources whose importance the browser cannot infer. Prefer fixing discovery order before adding priority hints.

## Watch Outs

- fetchpriority does not make a hidden or late-discovered resource magically early.
- Too many high-priority resources cancel out the signal.
- Priority hints are browser scheduling hints, not guaranteed ordering.

## Accessibility Notes

- Performance hints must not change source order or reading order.
- Do not prioritize decorative media over meaningful content.
- Keep fallback content and alt text independent of priority.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attributes)
- [Compatibility](https://caniuse.com/mdn-api_htmlimageelement_fetchpriority)
