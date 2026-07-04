---
title: "modulepreload"
description: "把 ES module 预加载到 module map 中，让应用入口和依赖更早可用。"
---

# modulepreload

<span class="feature-meta">加载与性能 · Baseline 广泛可用</span>

把 ES module 预加载到 module map 中，让应用入口和依赖更早可用。

<FeatureDemo slug="modulepreload" />

## 解决什么问题

适合模块化应用，避免依赖图被一步一步发现。

## 语法

```html
<link rel="modulepreload" href="/assets/app.js">
<script type="module" src="/assets/app.js"></script>
```

## 使用建议

用于当前页面一定会执行的重要 module 入口或 chunk。

## 注意事项

- modulepreload 不是代码分割的替代品。
- 预加载陈旧或仅其他路由使用的 chunk 会浪费带宽。
- 跨域模块需要正确的 CORS 行为。

## 可访问性要点

- 核心可读内容不应依赖 module 预热才出现。
- 模块执行前的服务端渲染内容也要有意义。
- 避免把关键控制阻塞在非关键模块上。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/modulepreload)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#link-type-modulepreload)
- [Compatibility](https://caniuse.com/mdn-html_elements_link_rel_modulepreload)
