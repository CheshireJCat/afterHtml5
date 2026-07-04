---
title: "Fetch priority"
description: "直接在标记里告诉浏览器：同类资源中哪些应更高或更低优先级获取。"
---

# Fetch priority

<span class="feature-meta">加载与性能 · Baseline 2024</span>

直接在标记里告诉浏览器：同类资源中哪些应更高或更低优先级获取。

<FeatureDemo slug="fetch-priority" />

## 解决什么问题

适合 hero 图、较晚发现的 preload 和低价值装饰资源的相对排序。

## 语法

```html
<img src="hero.avif" fetchpriority="high" alt="Dashboard overview">
<img src="avatar.png" loading="lazy" fetchpriority="low" alt="Team member">
```

## 使用建议

只在浏览器无法推断重要性的资源上谨慎使用。优先修正资源发现顺序，再加 priority hint。

## 注意事项

- fetchpriority 不会让隐藏或很晚发现的资源神奇提前。
- 太多 high 会抵消信号。
- 优先级提示不是下载顺序保证。

## 可访问性要点

- 性能提示不应改变源码顺序或阅读顺序。
- 不要让装饰媒体优先于有意义内容。
- fallback 和 alt 文本不应依赖优先级。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/fetchPriority)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#fetch-priority-attributes)
- [Compatibility](https://caniuse.com/mdn-api_htmlimageelement_fetchpriority)
