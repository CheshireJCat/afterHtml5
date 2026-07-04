---
title: "Search element"
description: "用专门的 search landmark 表达站点、页面或应用搜索，而不是反复在通用容器上写 role=search。"
---

# Search element

<span class="feature-meta">语义 · Baseline 2023</span>

用专门的 search landmark 表达站点、页面或应用搜索，而不是反复在通用容器上写 role=search。

<FeatureDemo slug="search-element" />

## 解决什么问题

为搜索 UI 提供清晰的屏幕阅读器语义和文档结构。

## 语法

```html
<search>
  <form action="/search">
    <label for="q">Search docs</label>
    <input id="q" name="q" type="search">
  </form>
</search>
```

## 使用建议

包裹执行搜索或筛选的控件，不要把搜索结果也放在 search 元素里。

## 注意事项

- 这个元素不会替你实现搜索逻辑。
- 结果应留在 main 内容中，而不是放进 search。
- 不要无标签地嵌套多个 search landmark。

## 可访问性要点

- 为字段保留可见 label。
- 页面中有多个 search landmark 时，用 aria-label 命名。
- 查询字段使用 type=search。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/search)
- [HTML Standard](https://html.spec.whatwg.org/multipage/grouping-content.html#the-search-element)
- [Compatibility](https://caniuse.com/?search=search%20element)
