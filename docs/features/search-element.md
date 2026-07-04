---
title: "Search element"
description: "Represent site, page, or app search with a dedicated landmark instead of repeating role=search on generic containers."
---

# Search element

<span class="feature-meta">Semantics · Baseline 2023</span>

Represent site, page, or app search with a dedicated landmark instead of repeating role=search on generic containers.

<FeatureDemo slug="search-element" />

## What It Solves

Search UI semantics for screen readers and document structure.

## Syntax

```html
<search>
  <form action="/search">
    <label for="q">Search docs</label>
    <input id="q" name="q" type="search">
  </form>
</search>
```

## Practical Guidance

Use around the controls that perform search or filtering, not around the search results.

## Watch Outs

- The element does not implement search logic.
- Results should remain in the main content, not inside search.
- Do not nest multiple search landmarks without clear labels.

## Accessibility Notes

- Keep visible labels for fields.
- Name multiple search landmarks with aria-label.
- Use type=search for query fields.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search)
- [HTML Standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)
- [Compatibility](https://caniuse.com/?search=search%20element)
