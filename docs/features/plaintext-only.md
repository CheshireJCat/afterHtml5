---
title: "Plaintext-only editing"
description: "Make an element editable while forcing pasted and edited content to remain plain text."
---

# Plaintext-only editing

<span class="feature-meta">Editing · Baseline 2025</span>

Make an element editable while forcing pasted and edited content to remain plain text.

<FeatureDemo slug="plaintext-only" />

## What It Solves

Comment boxes, command inputs, note fields, and token editors that need contenteditable ergonomics without rich-text paste cleanup.

## Syntax

```html
<div contenteditable="plaintext-only">Paste formatted text here</div>
```

## Practical Guidance

Use when textarea is too restrictive but rich content would create sanitization and formatting problems.

## Watch Outs

- It is not a complete form control by itself.
- You still need validation, persistence, and submission logic.
- Line breaks and whitespace need product-specific handling.

## Accessibility Notes

- Give the editable region a label.
- Expose role=textbox and aria-multiline when appropriate.
- Preserve focus styling.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable)
- [Compatibility](https://caniuse.com/?search=contenteditable%20plaintext-only)
