---
title: "Exclusive details"
description: "给一组 details 元素同一个 name，就能得到原生互斥 accordion。"
---

# Exclusive details

<span class="feature-meta">原生交互 · 现代 HTML</span>

给一组 details 元素同一个 name，就能得到原生互斥 accordion。

<FeatureDemo slug="exclusive-details" />

## 解决什么问题

适合 FAQ、设置和对比信息：用户每次只需要展开一个说明块。

## 语法

```html
<details name="shipping">
  <summary>Delivery windows</summary>
  ...
</details>
```

## 使用建议

当内容本质上是披露说明时使用；不要把它当 tabs 或应用导航替代品。

## 注意事项

- details 不是 tab 组件。
- 只有关闭上一个面板不会造成数据丢失时，才使用互斥行为。
- 自定义 summary 样式时必须保留焦点和展开状态的可见性。

## 可访问性要点

- summary 文案保持清晰，并说明用户会看到什么。
- 不要移除默认键盘行为。
- 避免把大型表单放进 summary。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/blog/html-details-exclusive-accordions/)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)
- [Compatibility](https://caniuse.com/?search=details%20name)
