---
title: "iframe srcdoc"
description: "用内联 HTML 标记创建一个自包含 iframe 文档。"
---

# iframe srcdoc

<span class="feature-meta">嵌入与安全 · Baseline 广泛可用</span>

用内联 HTML 标记创建一个自包含 iframe 文档。

<FeatureDemo slug="iframe-srcdoc" />

## 解决什么问题

适合实时预览、邮件模板 sandbox、组件文档和生成代码片段，不必写临时路由。

## 语法

```html
<iframe title="Email preview" sandbox srcdoc="<h1>Receipt</h1><p>Total: $42</p>"></iframe>
```

## 使用建议

对不可信或用户编写的标记配合 sandbox 使用。在严格环境中从脚本赋值时优先使用 TrustedHTML。

## 注意事项

- 没有 sandbox 的不可信 srcdoc 内容仍然危险。
- 内联 HTML 转义很快会变得难读。
- 大型 srcdoc 文档比 URL 嵌入更难缓存。

## 可访问性要点

- 给 iframe 一个描述性 title。
- 嵌入文档内部也要有有意义的标题。
- 避免让键盘用户困在预览 frame 中。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [HTML Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-srcdoc)
- [Compatibility](https://caniuse.com/iframe-srcdoc)
