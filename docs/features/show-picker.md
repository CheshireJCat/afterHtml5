---
title: "showPicker"
description: "Open native date, color, file, and related browser pickers from your own visible control without rebuilding the picker UI."
---

# showPicker

<span class="feature-meta">Forms · Baseline widely available</span>

Open native date, color, file, and related browser pickers from your own visible control without rebuilding the picker UI.

<FeatureDemo slug="show-picker" />

## What It Solves

Design-friendly trigger buttons that still use platform-native input pickers.

## Syntax

```html
<input id="date" type="date">
<button onclick="date.showPicker()">Choose date</button>
```

## Practical Guidance

Use when your layout needs a separate trigger but the actual picker should remain native.

## Watch Outs

- The method must usually run from a user activation such as a click.
- Support varies by input type and platform.
- Do not fake picker contents; let the browser own that part.

## Accessibility Notes

- Keep the real input in the tab order unless there is a strong reason not to.
- Connect labels to inputs.
- Mirror chosen values in readable text when using compact controls.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker)
- [HTML Standard](https://html.spec.whatwg.org/multipage/input.html#dom-input-showpicker)
- [Compatibility](https://caniuse.com/mdn-api_htmlinputelement_showpicker)
