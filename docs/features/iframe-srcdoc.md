---
title: "iframe srcdoc"
description: "Create a self-contained iframe document from inline HTML markup."
---

# iframe srcdoc

<span class="feature-meta">Embedding and security · Baseline widely available</span>

Create a self-contained iframe document from inline HTML markup.

<FeatureDemo slug="iframe-srcdoc" />

## What It Solves

Live previews, email template sandboxes, component docs, and generated snippets that should render in an isolated document.

## Syntax

```html
<iframe title="Email preview" sandbox srcdoc="<h1>Receipt</h1><p>Total: $42</p>"></iframe>
```

## Practical Guidance

Use with sandbox for untrusted or user-authored markup. Prefer TrustedHTML when assigning srcdoc from script in strict environments.

## Watch Outs

- Untrusted srcdoc content can still be dangerous without sandboxing.
- Escaping inline HTML quickly becomes hard to read.
- Large srcdoc documents are harder to cache than URL-based embeds.

## Accessibility Notes

- Give the iframe a descriptive title.
- Ensure the embedded document has meaningful headings.
- Avoid trapping keyboard users inside preview frames.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [HTML Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc)
- [Compatibility](https://caniuse.com/iframe-srcdoc)
