---
title: "Speculation rules"
description: "Declare likely future navigations so the browser can prefetch or prerender whole documents."
---

# Speculation rules

<span class="feature-meta">Scripts and navigation · Limited availability</span>

Declare likely future navigations so the browser can prefetch or prerender whole documents.

<FeatureDemo slug="speculation-rules" />

## What It Solves

Multi-page apps, docs, ecommerce flows, and dashboards where the next navigation is predictable.

## Syntax

```html
<script type="speculationrules">
{
  "prefetch": [{ "urls": ["/pricing", "/docs/start"] }],
  "prerender": [{ "where": { "href_matches": "/checkout/*" } }]
}
</script>
```

## Practical Guidance

Use on safe GET navigations. Start with conservative prefetch rules before trying prerender.

## Watch Outs

- Do not speculate logout, cart mutation, or analytics-heavy routes.
- Prerender can run page code earlier than a user expects.
- Rules should respect authentication and privacy boundaries.

## Accessibility Notes

- Speculation must not change focus, announce content, or mutate state before navigation.
- Keep navigation links usable without speculation support.
- Avoid preloading sensitive pages for shared devices.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
- [HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type)
- [Compatibility](https://caniuse.com/speculation-rules)
