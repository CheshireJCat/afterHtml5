---
title: "hidden until found"
description: "Keep content collapsed while allowing find-in-page and URL fragments to reveal it automatically."
---

# hidden until found

<span class="feature-meta">Findability · Limited availability</span>

Keep content collapsed while allowing find-in-page and URL fragments to reveal it automatically.

<FeatureDemo slug="hidden-until-found" />

## What It Solves

Large reference pages, archived sections, and dense docs where hidden content should still be discoverable.

## Syntax

```html
<section id="billing-note" hidden="until-found">...</section>
```

## Practical Guidance

Use for non-critical collapsed content that still needs browser search and deep-link discovery.

## Watch Outs

- Not all browsers reveal until-found content.
- The element still participates in layout with containment behavior in supporting browsers.
- Do not hide primary navigation or required form fields this way.

## Accessibility Notes

- Provide a normal visible path to reveal the same content.
- Use stable fragment ids.
- Avoid making search the only way to find important information.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)
- [Compatibility](https://caniuse.com/mdn-html_global_attributes_hidden_until-found)
