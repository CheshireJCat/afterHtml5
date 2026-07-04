---
title: "hidden until found"
description: "让内容保持折叠，同时允许页面内查找和 URL fragment 自动把它显露出来。"
---

# hidden until found

<span class="feature-meta">可发现性 · 有限支持</span>

让内容保持折叠，同时允许页面内查找和 URL fragment 自动把它显露出来。

<FeatureDemo slug="hidden-until-found" />

## 解决什么问题

适合大型参考页、归档段落和密集文档：内容可折叠，但仍应被浏览器搜索和深链发现。

## 语法

```html
<section id="billing-note" hidden="until-found">...</section>
```

## 使用建议

用于非关键折叠内容，这些内容仍需要被浏览器搜索和深链发现。

## 注意事项

- 并非所有浏览器都会显露 until-found 内容。
- 支持浏览器中，该元素仍会以 containment 行为参与布局。
- 不要用它隐藏主导航或必填表单字段。

## 可访问性要点

- 提供一个普通的可见路径来展开同一内容。
- 使用稳定的 fragment id。
- 不要让搜索成为找到重要内容的唯一方式。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/hidden)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute)
- [Compatibility](https://caniuse.com/mdn-html_global_attributes_hidden_until-found)
