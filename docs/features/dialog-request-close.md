---
title: "Dialog requestClose"
description: "Use native modal behavior, return values, form method=dialog, and cancellable close requests without recreating focus management."
---

# Dialog requestClose

<span class="feature-meta">Native interaction · Baseline 2025</span>

Use native modal behavior, return values, form method=dialog, and cancellable close requests without recreating focus management.

<FeatureDemo slug="dialog-request-close" />

## What It Solves

Confirmation flows and modal forms that need platform-level focus handling plus an explicit result.

## Syntax

```html
<dialog id="confirm">
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="ship">Ship</button>
  </form>
</dialog>
```

## Practical Guidance

Use for modal tasks, confirmations, and short forms. Pair with form method=dialog for zero-boilerplate button return values.

## Watch Outs

- showModal() is imperative; you still need a tiny trigger unless using invoker commands.
- requestClose() can be cancelled, close() cannot.
- Backdrop click behavior depends on newer closedby support and should be treated as an enhancement.

## Accessibility Notes

- Give every dialog a visible heading.
- Provide an obvious close or cancel path.
- Avoid nesting complex app navigation inside a modal.

## References

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-requestclose)
- [Compatibility](https://caniuse.com/?search=requestClose)
