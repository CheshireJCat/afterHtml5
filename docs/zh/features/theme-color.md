---
title: "theme-color"
description: "用 meta 标签建议浏览器或外围 UI 的颜色，并可用 media query 区分主题。"
---

# theme-color

<span class="feature-meta">链接与元数据 · 有限支持</span>

用 meta 标签建议浏览器或外围 UI 的颜色，并可用 media query 区分主题。

<FeatureDemo slug="theme-color" />

## 解决什么问题

适合移动浏览器 chrome、安装式 Web App 细节，以及页面画布外的明暗品牌一致性。

## 语法

```html
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)">
```

## 使用建议

在 head 中使用一个或多个 meta 标签。页面支持多套颜色时配合 media query。

## 注意事项

- 部分桌面浏览器会解析但不明显使用。
- 平台 UI 可能覆盖或转换颜色。
- 如果用户可切换主题，标签也应随之更新。

## 可访问性要点

- 在适用平台上选择与浏览器 UI 图标有足够对比度的颜色。
- 页面内容对比度不要依赖浏览器 chrome。
- 不要把 chrome 颜色作为唯一状态指示。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
- [HTML Standard](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color)
- [Compatibility](https://caniuse.com/?search=theme-color)
