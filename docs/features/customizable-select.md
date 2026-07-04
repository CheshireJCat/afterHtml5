---
title: "Customizable select"
description: "Style native select internals with HTML and CSS hooks such as button, selectedcontent, ::picker(select), and appearance: base-select."
---

# Customizable select

<span class="feature-meta">Forms · Limited availability</span>

Style native select internals with HTML and CSS hooks such as button, selectedcontent, ::picker(select), and appearance: base-select.

<FeatureDemo slug="customizable-select" />

## What It Solves

Rich option displays that preserve native select behavior instead of replacing it with ARIA-heavy custom widgets.

## Syntax

```html
<select>
  <button><selectedcontent></selectedcontent></button>
  <option>Express</option>
</select>
```

## Practical Guidance

Use experimentally or behind progressive enhancement checks; classic select fallback remains important.

## Watch Outs

- Not Baseline yet.
- Framework hydration may disagree with browser-managed selectedcontent cloning.
- Dynamic option updates may not automatically re-clone selectedcontent.

## Accessibility Notes

- Do not use it for split buttons or unrelated composite controls.
- Keep option text meaningful without decoration.
- Confirm keyboard behavior in every target browser.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/selectedcontent)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)
- [Compatibility](https://caniuse.com/mdn-html_elements_selectedcontent)
