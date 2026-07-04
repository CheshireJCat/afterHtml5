---
title: "Import maps"
description: "Map bare JavaScript module specifiers to URLs directly in HTML without a bundler rewrite."
---

# Import maps

<span class="feature-meta">Scripts and navigation · Baseline widely available</span>

Map bare JavaScript module specifiers to URLs directly in HTML without a bundler rewrite.

<FeatureDemo slug="import-maps" />

## What It Solves

Small apps, prototypes, design systems, and server-rendered pages that want readable module imports in the browser.

## Syntax

```html
<script type="importmap">
{
  "imports": {
    "lit": "/vendor/lit.js",
    "app/": "/assets/app/"
  }
}
</script>
<script type="module">import { html } from 'lit';</script>
```

## Practical Guidance

Define import maps before the module scripts that rely on them. Keep maps small and cache module URLs deliberately.

## Watch Outs

- Import maps are document-scoped.
- They must be parsed before dependent modules load.
- Large maps can become deployment configuration that needs version control.

## Accessibility Notes

- Do not make basic content depend on a client-only module map.
- Keep no-JS rendering meaningful.
- Use module errors that fail visibly during development.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#import-maps)
- [Compatibility](https://caniuse.com/import-maps)
