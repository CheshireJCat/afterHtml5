---
title: "download attribute"
description: "Mark a link as a download and provide a suggested filename without JavaScript."
---

# download attribute

<span class="feature-meta">Links and metadata · Baseline widely available</span>

Mark a link as a download and provide a suggested filename without JavaScript.

<FeatureDemo slug="download-attribute" />

## What It Solves

Export buttons, generated reports, invoices, CSV templates, and local Blob downloads.

## Syntax

```html
<a href="/exports/orders.csv" download="orders-2026-07.csv">Download CSV</a>
```

## Practical Guidance

Use for same-origin files or generated Blob URLs where a download is the user's intended action.

## Watch Outs

- Cross-origin downloads may ignore the suggested filename.
- The browser can adjust invalid filenames.
- download is a hint, not a permission bypass.

## Accessibility Notes

- Link text should say what file type or result will download.
- Expose file size when it is significant.
- Do not surprise users by downloading from ordinary navigation links.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download)
- [Compatibility](https://caniuse.com/download)
