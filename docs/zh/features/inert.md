---
title: "inert"
description: "把一棵子树标记为不可交互，使其中内容不能点击、聚焦、选中，也不会被辅助技术访问。"
---

# inert

<span class="feature-meta">交互安全 · Baseline 广泛可用</span>

把一棵子树标记为不可交互，使其中内容不能点击、聚焦、选中，也不会被辅助技术访问。

<FeatureDemo slug="inert" />

## 解决什么问题

适合覆盖层背后的禁用页面区域、预览面板、非活动步骤和临时 UI 锁定。

## 语法

```html
<main inert>Temporarily disabled content</main>
```

## 使用建议

当整个区域都应不可用时使用，而不是只做视觉变暗。

## 注意事项

- inert 会移除后代的交互性，包括链接和表单控件。
- 不要 inert 仍然必须用于完成任务的内容。
- 视觉变暗是另一回事；需要配合 CSS 让状态明显。

## 可访问性要点

- 把 inert 与清晰的活动区域配对。
- 启用 overlay 时主动移动焦点。
- 离开 inert 状态后恢复焦点。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inert)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#the-inert-attribute)
- [Compatibility](https://caniuse.com/mdn-html_global_attributes_inert)
