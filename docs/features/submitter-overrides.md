---
title: "Submitter overrides"
description: "Let individual submit buttons override where and how a form submits."
---

# Submitter overrides

<span class="feature-meta">Forms · Baseline widely available</span>

Let individual submit buttons override where and how a form submits.

<FeatureDemo slug="submitter-overrides" />

## What It Solves

Save draft, publish, preview, export, and destructive confirmation flows that share fields but differ in submission intent.

## Syntax

```html
<form action="/publish" method="post">
  <button type="submit" formaction="/drafts" formnovalidate>Save draft</button>
  <button type="submit">Publish</button>
</form>
```

## Practical Guidance

Use when one set of fields has multiple legitimate submit destinations or validation modes.

## Watch Outs

- Only submit buttons can use submitter overrides.
- Server-side routing must still verify user intent.
- formnovalidate should not bypass required checks for final submission.

## Accessibility Notes

- Button labels must state the outcome.
- Warn before irreversible actions.
- Preserve validation messages for final submit paths.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-formaction)
- [Compatibility](https://caniuse.com/?search=formaction)
