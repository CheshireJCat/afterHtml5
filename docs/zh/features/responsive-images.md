---
title: "Responsive images"
description: "让浏览器根据视口、像素密度和格式选择合适图片，而不是给所有设备都发一张过大的图。"
---

# Responsive images

<span class="feature-meta">媒体 · Baseline 广泛可用</span>

让浏览器根据视口、像素密度和格式选择合适图片，而不是给所有设备都发一张过大的图。

<FeatureDemo slug="responsive-images" />

## 解决什么问题

适合需要按断点改变裁切、密集商品图和编辑型媒体内容的页面。

## 语法

```html
<picture>
  <source type="image/avif" srcset="hero.avif 1200w, hero@2x.avif 2400w" sizes="(min-width: 900px) 50vw, 100vw">
  <img src="hero.jpg" srcset="hero-600.jpg 600w, hero-1200.jpg 1200w" sizes="100vw" alt="Project preview">
</picture>
```

## 使用建议

弹性布局用 width descriptor 配合 sizes。只有裁切或格式要变时才用 picture，而不是只为了分辨率。

## 注意事项

- 错误的 sizes 会让浏览器选择过大的图片。
- picture 仍然需要带有有效 alt 的 img fallback。
- 不要用艺术裁切在小屏上隐藏重要内容。

## 可访问性要点

- alt 文本写在 img 元素上。
- 每个裁切版本都要保留同一语义。
- 能用真实文本时，不要把文字烘焙进响应式图片。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/picture)
- [HTML Standard](https://html.spec.whatwg.org/multipage/images.html#the-picture-element)
- [Compatibility](https://caniuse.com/srcset)
