---
title: "Input hints"
description: "Hint the right mobile keyboard and enter-key action without changing the semantic input type."
---

# Input hints

<span class="feature-meta">Forms · Baseline 2021</span>

Hint the right mobile keyboard and enter-key action without changing the semantic input type.

<FeatureDemo slug="input-hints" />

## What It Solves

OTP, price, search, and chat inputs where keyboard ergonomics matter but validation semantics are separate.

## Syntax

```html
<input autocomplete="one-time-code" inputmode="numeric" enterkeyhint="done" maxlength="6">
<input type="search" enterkeyhint="search" autocomplete="off">
```

## Practical Guidance

Use inputmode for keyboard shape, type for data semantics, and autocomplete tokens for autofill intent.

## Watch Outs

- inputmode does not validate the value.
- Virtual keyboard behavior varies by platform.
- autocomplete tokens must match real field purpose.

## Accessibility Notes

- Keep visible labels and instructions.
- Do not hide paste support for one-time codes.
- Use autocomplete responsibly for personal data.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)
- [Compatibility](https://caniuse.com/input-inputmode)
