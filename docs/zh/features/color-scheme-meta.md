---
title: "color-scheme meta"
description: "在 CSS 完全加载前告诉浏览器：文档支持哪些颜色方案。"
---

# color-scheme meta

<span class="feature-meta">链接与元数据 · Baseline 广泛可用</span>

在 CSS 完全加载前告诉浏览器：文档支持哪些颜色方案。

<FeatureDemo slug="color-scheme-meta" />

## 解决什么问题

适合深色模式页面，让原生控件和 UA 表面不要闪成错误方案。

## 语法

```html
<meta name="color-scheme" content="dark light">
```

## 使用建议

整个文档支持 light、dark 或两者时放在 head 中；组件级控制可配合 CSS color-scheme。

## 注意事项

- 它本身不会创建完整主题。
- 声明偏好时顺序有意义。
- 嵌入内容可能有自己的 scheme。

## 可访问性要点

- 尊重用户颜色方案偏好。
- 两种方案都要保持对比度。
- 测试原生控件、滚动条和选中文本颜色。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- [HTML Standard](https://html.spec.whatwg.org/multipage/semantics.html#meta-color-scheme)
- [Compatibility](https://caniuse.com/?search=color-scheme)
