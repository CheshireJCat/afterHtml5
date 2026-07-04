---
title: "Exclusive details"
description: "Turn a group of details elements into a native exclusive accordion by giving them the same name."
---

# Exclusive details

<span class="feature-meta">Native interaction · Modern HTML</span>

Turn a group of details elements into a native exclusive accordion by giving them the same name.

<FeatureDemo slug="exclusive-details" />

## What It Solves

FAQ, settings, and comparison sections where only one disclosure should be open at a time.

## Syntax

```html
<details name="shipping">
  <summary>Delivery windows</summary>
  ...
</details>
```

## Practical Guidance

Use when the content is genuinely disclosure content, not tabs or app navigation.

## Watch Outs

- details is not a tab widget.
- Only use exclusive behavior when closing the previous panel will not cause data loss.
- Custom summary styling must keep focus and expanded state visible.

## Accessibility Notes

- Keep summary text clear and action-oriented.
- Do not remove default keyboard behavior.
- Avoid putting large forms inside summary.

## References

- [MDN](https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)
- [Compatibility](https://caniuse.com/?search=details%20name)
