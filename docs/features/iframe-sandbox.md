---
title: "iframe sandbox"
description: "Put embedded documents in a restricted environment, then opt back into only the capabilities they need."
---

# iframe sandbox

<span class="feature-meta">Embedding and security · Baseline widely available</span>

Put embedded documents in a restricted environment, then opt back into only the capabilities they need.

<FeatureDemo slug="iframe-sandbox" />

## What It Solves

User-generated previews, third-party widgets, ad slots, and internal tools that should not inherit full page power.

## Syntax

```html
<iframe title="Preview" src="/preview" sandbox="allow-forms allow-scripts"></iframe>
```

## Practical Guidance

Start with an empty sandbox, then add the smallest set of allow tokens that makes the embed work.

## Watch Outs

- allow-scripts plus allow-same-origin can let same-origin embeds remove sandboxing.
- Sandboxing can break forms, popups, downloads, and storage unless allowed.
- A permissive token list can become security theater.

## Accessibility Notes

- Every iframe needs a useful title.
- Embedded content still needs keyboard and screen reader support.
- Provide a fallback or link when embedded content cannot load.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [HTML Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox)
- [Compatibility](https://caniuse.com/iframe-sandbox)
