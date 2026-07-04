---
title: "iframe credentialless"
description: "Load an iframe into an ephemeral context without the embedded origin's normal cookies, storage, or credentials."
---

# iframe credentialless

<span class="feature-meta">Embedding and security · Limited availability</span>

Load an iframe into an ephemeral context without the embedded origin's normal cookies, storage, or credentials.

<FeatureDemo slug="iframe-credentialless" />

## What It Solves

COEP pages that need to embed third-party content that does not itself opt into cross-origin isolation.

## Syntax

```html
<iframe title="Partner widget" src="https://partner.example/widget" credentialless></iframe>
```

## Practical Guidance

Use only when you understand the cross-origin isolation requirement and the embed can function without its normal credentials.

## Watch Outs

- The embedded page sees fresh ephemeral storage.
- Login-dependent widgets may break.
- Support is not broad enough for required functionality.

## Accessibility Notes

- Provide a fallback link for unsupported browsers.
- Keep the iframe title clear about the third-party content.
- Do not hide critical workflow steps in an optional credentialless embed.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/credentialless)
- [HTML Standard](https://wicg.github.io/anonymous-iframe/)
- [Compatibility](https://caniuse.com/?search=credentialless)
