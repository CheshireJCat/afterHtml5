---
title: "modulepreload"
description: "Preload ES modules into the module map so app entrypoints and their dependencies are ready sooner."
---

# modulepreload

<span class="feature-meta">Loading and performance · Baseline widely available</span>

Preload ES modules into the module map so app entrypoints and their dependencies are ready sooner.

<FeatureDemo slug="modulepreload" />

## What It Solves

Module-based apps where the parser can see an entrypoint but the dependency graph would otherwise be discovered step by step.

## Syntax

```html
<link rel="modulepreload" href="/assets/app.js">
<script type="module" src="/assets/app.js"></script>
```

## Practical Guidance

Use for important module entrypoints or chunks you know the current page will execute.

## Watch Outs

- modulepreload is not a replacement for code splitting.
- Preloading stale or route-only chunks can waste bandwidth.
- Cross-origin modules need correct CORS behavior.

## Accessibility Notes

- Module warmup should not be required for core readable content.
- Keep server-rendered content meaningful before modules execute.
- Avoid blocking essential controls on non-critical modules.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload)
- [Compatibility](https://caniuse.com/mdn-html_elements_link_rel_modulepreload)
