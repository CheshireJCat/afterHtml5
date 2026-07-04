---
title: "datalist"
description: "Offer native suggestions for an input while still allowing values outside the suggestion list."
---

# datalist

<span class="feature-meta">Forms · Baseline widely available</span>

Offer native suggestions for an input while still allowing values outside the suggestion list.

<FeatureDemo slug="datalist" />

## What It Solves

Search boxes, airport codes, saved filters, and administrative inputs where suggestions help but should not constrain the user.

## Syntax

```html
<label for="airport">Airport</label>
<input id="airport" name="airport" list="airport-options">
<datalist id="airport-options">
  <option value="SFO"></option>
  <option value="HND"></option>
</datalist>
```

## Practical Guidance

Use when suggestions are helpful but not exclusive. Use select when the user must choose one of a fixed set.

## Watch Outs

- Styling the popup is intentionally limited.
- Some input types have uneven datalist support.
- Suggestions are not validation.

## Accessibility Notes

- Keep a visible label on the input.
- Do not rely on placeholder text as the only instruction.
- Validate free-form values when the backend has constraints.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)
- [Compatibility](https://caniuse.com/datalist)
