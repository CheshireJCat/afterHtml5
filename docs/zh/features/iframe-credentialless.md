---
title: "iframe credentialless"
description: "把 iframe 加载到临时上下文中，不带嵌入源平常的 cookies、storage 或凭据。"
---

# iframe credentialless

<span class="feature-meta">嵌入与安全 · 有限支持</span>

把 iframe 加载到临时上下文中，不带嵌入源平常的 cookies、storage 或凭据。

<FeatureDemo slug="iframe-credentialless" />

## 解决什么问题

适合需要跨源隔离的 COEP 页面嵌入未设置 COEP 的第三方内容。

## 语法

```html
<iframe title="Partner widget" src="https://partner.example/widget" credentialless></iframe>
```

## 使用建议

只有理解 cross-origin isolation 需求，并且嵌入内容不依赖常规凭据时再使用。

## 注意事项

- 嵌入页面看到的是全新的临时存储。
- 依赖登录的 widget 可能失效。
- 支持面不足以承载必需功能。

## 可访问性要点

- 为不支持的浏览器提供 fallback 链接。
- iframe title 清楚说明第三方内容。
- 不要把关键流程步骤藏在可选 credentialless embed 中。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/credentialless)
- [HTML Standard](https://wicg.github.io/anonymous-iframe/)
- [Compatibility](https://caniuse.com/?search=credentialless)
