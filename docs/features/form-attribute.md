---
title: "form attribute"
description: "Associate controls with a form by id even when layout places them outside the form element."
---

# form attribute

<span class="feature-meta">Forms · Baseline widely available</span>

Associate controls with a form by id even when layout places them outside the form element.

<FeatureDemo slug="form-attribute" />

## What It Solves

Sticky toolbars, split layouts, tables, and modals where submit buttons or inputs cannot live inside the form markup.

## Syntax

```html
<form id="profile-form"></form>
<input name="displayName" form="profile-form">
<button type="submit" form="profile-form">Save profile</button>
```

## Practical Guidance

Use when layout structure and form ownership need to differ. Keep the relationship obvious in code with stable ids.

## Watch Outs

- The target form id must be stable and unique.
- Not every custom abstraction forwards form attributes correctly.
- The visual grouping can mislead users if labels and sections are unclear.

## Accessibility Notes

- Keep related controls visually grouped and labeled.
- Make submit buttons clearly describe which form they submit.
- Do not separate controls so far that keyboard users lose context.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/form)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form)
- [Compatibility](https://caniuse.com/?search=form%20attribute)
