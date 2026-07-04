---
title: "Native lazy loading"
description: "用一个属性延迟加载屏幕外图片和 iframe，不必为每个资源写滚动监听。"
---

# Native lazy loading

<span class="feature-meta">加载与性能 · Baseline 广泛可用</span>

用一个属性延迟加载屏幕外图片和 iframe，不必为每个资源写滚动监听。

<FeatureDemo slug="native-lazy-loading" />

## 解决什么问题

适合长内容页、图库、嵌入内容和文档页，让非关键媒体不与首屏资源抢带宽。

## 语法

```html
<img src="report-chart.png" loading="lazy" alt="Quarterly report chart">
<iframe src="/demo/map" loading="lazy" title="Office map"></iframe>
```

## 使用建议

屏幕外媒体用 lazy。关键 hero 图保持 eager，并写明 width/height 避免布局偏移。

## 注意事项

- 首屏图片 lazy loading 可能损害感知性能。
- 浏览器决定 lazy 资源何时足够接近视口。
- 始终预留尺寸，避免未加载媒体造成内容跳动。

## 可访问性要点

- 保留有意义的 alt 和 iframe title。
- 理解页面所必需的内容不要 lazy。
- 不要用不可访问占位内容替代 lazy 媒体。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img)
- [HTML Standard](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#lazy-loading-attributes)
- [Compatibility](https://caniuse.com/loading-lazy-attr)
