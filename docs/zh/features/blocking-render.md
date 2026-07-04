---
title: "blocking=render"
description: "让动态插入的 script、style 或 stylesheet 明确阻塞渲染，直到资源准备好。"
---

# blocking=render

<span class="feature-meta">加载与性能 · 有限支持</span>

让动态插入的 script、style 或 stylesheet 明确阻塞渲染，直到资源准备好。

<FeatureDemo slug="blocking-render" />

## 解决什么问题

适合很小的关键 head 资源：虽然动态注入，但仍必须在首次绘制前生效。

## 语法

```html
<script async blocking="render" src="/critical-theme.js"></script>
<link rel="stylesheet" blocking="render" href="/critical.css">
```

## 使用建议

只用于真正关键且很小的资源。大多数页面应优先使用解析器发现的普通 stylesheet。

## 注意事项

- 阻塞渲染会推迟首次绘制。
- 只有 head 中的资源可能影响渲染阻塞。
- 大型脚本或样式会让页面像卡住一样。

## 可访问性要点

- 不要为了纯装饰资源阻塞渲染。
- 增强失败时初始内容仍应可理解。
- 不要阻塞紧急或账户流程所需的控制。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLScriptElement/blocking)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#blocking-attributes)
- [Compatibility](https://caniuse.com/?search=blocking%3D%22render%22)
