---
title: "Dialog requestClose"
description: "使用原生 modal 行为、returnValue、form method=dialog 和可取消的关闭请求，而不是重新实现焦点管理。"
---

# Dialog requestClose

<span class="feature-meta">原生交互 · Baseline 2025</span>

使用原生 modal 行为、returnValue、form method=dialog 和可取消的关闭请求，而不是重新实现焦点管理。

<FeatureDemo slug="dialog-request-close" />

## 解决什么问题

适合确认流程和模态表单：既需要平台级焦点处理，也需要明确结果值。

## 语法

```html
<dialog id="confirm">
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="ship">Ship</button>
  </form>
</dialog>
```

## 使用建议

用于模态任务、确认和短表单。配合 form method=dialog 可以用极少代码获得按钮返回值。

## 注意事项

- showModal() 仍是命令式调用；除非配合 invoker commands，否则仍需要一个很小的触发逻辑。
- requestClose() 可以被取消，close() 不可以。
- 点击 backdrop 关闭依赖更新的 closedby 支持，应作为增强能力看待。

## 可访问性要点

- 每个 dialog 都要有可见标题。
- 提供明显的关闭或取消路径。
- 避免把复杂应用导航塞进 modal。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/requestClose)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#dom-dialog-requestclose)
- [Compatibility](https://caniuse.com/?search=requestClose)
