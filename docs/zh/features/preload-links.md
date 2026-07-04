---
title: "Preload links"
description: "在浏览器原本发现关键字体、图片或脚本之前就开始获取它们。"
---

# Preload links

<span class="feature-meta">加载与性能 · Baseline 广泛可用</span>

在浏览器原本发现关键字体、图片或脚本之前就开始获取它们。

<FeatureDemo slug="preload-links" />

## 解决什么问题

适合 CSS 中引用的关键资源、较晚出现的模板块，以及首屏必须更早到达的资产。

## 语法

```html
<link rel="preload" href="/fonts/plex.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/hero.avif" as="image" imagesrcset="hero.avif 1200w, hero@2x.avif 2400w" imagesizes="100vw">
```

## 使用建议

只用于当前导航确实需要的资源。写对 as、type 和 crossorigin。

## 注意事项

- 预加载未使用资源会浪费带宽。
- 错误的 as 或 crossorigin 可能导致重复下载。
- 不要 preload 一切；浏览器本来就有调度器。

## 可访问性要点

- Preload 应改善交付，而不改变语义顺序。
- 不要在等待预加载资源时隐藏有意义 fallback 文本。
- 优先加载能帮助用户阅读或操作页面的资源。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel/preload)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#link-type-preload)
- [Compatibility](https://caniuse.com/link-rel-preload)
