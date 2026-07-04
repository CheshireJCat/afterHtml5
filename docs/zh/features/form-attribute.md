---
title: "form attribute"
description: "通过 id 把控件关联到某个 form，即使布局上它们不在 form 元素内部。"
---

# form attribute

<span class="feature-meta">表单 · Baseline 广泛可用</span>

通过 id 把控件关联到某个 form，即使布局上它们不在 form 元素内部。

<FeatureDemo slug="form-attribute" />

## 解决什么问题

适合 sticky 工具栏、分栏布局、表格和 modal：提交按钮或输入项无法包在 form 里。

## 语法

```html
<form id="profile-form"></form>
<input name="displayName" form="profile-form">
<button type="submit" form="profile-form">Save profile</button>
```

## 使用建议

当布局结构和表单归属需要分离时使用。用稳定 id 保持代码关系清晰。

## 注意事项

- 目标 form id 必须稳定且唯一。
- 并非所有自定义抽象都会正确透传 form 属性。
- 视觉分组不清时，用户可能误解控件归属。

## 可访问性要点

- 相关控件仍要在视觉上分组并标注。
- 提交按钮要说明提交的是哪个表单。
- 不要把控件分得太远，让键盘用户失去上下文。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/form)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fae-form)
- [Compatibility](https://caniuse.com/?search=form%20attribute)
