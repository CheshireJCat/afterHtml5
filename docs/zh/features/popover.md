---
title: "Popover"
description: "用原生 top layer 构建菜单、引导气泡和非模态浮层，不再自己维护 z-index、外部点击和 Esc 关闭逻辑。"
---

# Popover

<span class="feature-meta">原生交互 · Baseline 新近可用</span>

用原生 top layer 构建菜单、引导气泡和非模态浮层，不再自己维护 z-index、外部点击和 Esc 关闭逻辑。

<FeatureDemo slug="popover" />

## 解决什么问题

适合需要轻量关闭和顶层展示的浮层 UI，但不需要让页面其余区域变为不可交互。

## 语法

```html
<button popovertarget="quick-actions">Actions</button>
<div id="quick-actions" popover>...</div>
```

## 使用建议

用于短暂出现的小型界面：菜单、快捷操作、提示、引导说明和工具面板。若任务必须阻塞页面，应使用 dialog。

## 注意事项

- Popover 本身不会提供 dialog 语义。
- 根据是否需要轻量关闭和单实例打开行为，选择 auto、hint 或 manual。
- 定位仍然需要 CSS；top layer 只解决层级堆叠。

## 可访问性要点

- 使用语义明确的 button 作为触发器。
- 只有内容真的表现为菜单、tooltip 或注释时，才添加对应 role。
- 不要把必须完成的流程步骤放进可轻易关闭的 popover。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover)
- [HTML Standard](https://html.spec.whatwg.org/multipage/popover.html)
- [Compatibility](https://caniuse.com/?search=popover)
