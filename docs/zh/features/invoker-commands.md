---
title: "Invoker Commands"
description: "让按钮用声明式方式控制 popover、dialog 和自定义命令，不必等应用 JavaScript 绑定 click 监听。"
---

# Invoker Commands

<span class="feature-meta">原生交互 · Baseline 2025</span>

让按钮用声明式方式控制 popover、dialog 和自定义命令，不必等应用 JavaScript 绑定 click 监听。

<FeatureDemo slug="invoker-commands" />

## 解决什么问题

为常见的显示、隐藏、切换和关闭行为提供 HTML 优先的控制关系。

## 语法

```html
<button commandfor="panel" command="toggle-popover">Toggle</button>
<div id="panel" popover>...</div>
```

## 使用建议

适合作为内建交互元素的渐进增强，尤其适合框架 hydration 完成前也需要基础可用的界面。

## 注意事项

- 只有 button 可以作为 invoker。
- 内建命令刻意保持有限。
- 框架抽象可能需要升级后才能完整透传这些属性。

## 可访问性要点

- 触发器保持为真实 button。
- 使用可见标签，不要只依赖图标命令。
- 只有支持目标确实需要时，才补 JS fallback。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Invoker_Commands_API)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-commandfor)
- [Compatibility](https://caniuse.com/?search=commandfor)
