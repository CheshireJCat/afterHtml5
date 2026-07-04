---
title: "Constraint validation"
description: "Use required, pattern, minlength, min, max, step, and related constraints before writing custom validators."
---

# Constraint validation

<span class="feature-meta">Forms · Baseline widely available</span>

Use required, pattern, minlength, min, max, step, and related constraints before writing custom validators.

<FeatureDemo slug="constraint-validation" />

## What It Solves

Forms that need immediate, native validation feedback without rebuilding basic validity state from scratch.

## Syntax

```html
<input name="repo" required pattern="[a-z0-9-]+" minlength="3">
<input name="stars" type="number" min="0" step="1">
<button>Save</button>
```

## Practical Guidance

Use native constraints for syntax and presence checks, then layer product-specific validation on top.

## Watch Outs

- pattern validates full values, not partial matches.
- Native messages vary by browser and locale.
- Client validation never replaces server validation.

## Accessibility Notes

- Associate errors with fields.
- Do not rely on color alone for invalid state.
- Keep instructions visible before the user submits.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#constraints)
- [Compatibility](https://caniuse.com/form-validation)
