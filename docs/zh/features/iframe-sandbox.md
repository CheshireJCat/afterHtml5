---
title: "iframe sandbox"
description: "把嵌入文档放进受限环境，再只放开它真正需要的能力。"
---

# iframe sandbox

<span class="feature-meta">嵌入与安全 · Baseline 广泛可用</span>

把嵌入文档放进受限环境，再只放开它真正需要的能力。

<FeatureDemo slug="iframe-sandbox" />

## 解决什么问题

适合用户生成预览、第三方 widget、广告位和内部工具，避免它们继承完整页面能力。

## 语法

```html
<iframe title="Preview" src="/preview" sandbox="allow-forms allow-scripts"></iframe>
```

## 使用建议

从空 sandbox 开始，再加入让嵌入内容工作所需的最小 allow token。

## 注意事项

- allow-scripts 加 allow-same-origin 可能让同源嵌入移除 sandbox。
- 除非允许，否则 sandbox 会破坏表单、弹窗、下载和存储。
- 过宽的 token 列表会变成安全表演。

## 可访问性要点

- 每个 iframe 都需要有用的 title。
- 嵌入内容仍需要键盘和屏幕阅读器支持。
- 内容无法加载时提供 fallback 或链接。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)
- [HTML Standard](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#attr-iframe-sandbox)
- [Compatibility](https://caniuse.com/iframe-sandbox)
