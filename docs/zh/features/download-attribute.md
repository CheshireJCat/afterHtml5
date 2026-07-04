---
title: "download attribute"
description: "不写 JavaScript，就能把链接标记为下载并建议文件名。"
---

# download attribute

<span class="feature-meta">链接与元数据 · Baseline 广泛可用</span>

不写 JavaScript，就能把链接标记为下载并建议文件名。

<FeatureDemo slug="download-attribute" />

## 解决什么问题

适合导出按钮、生成报表、发票、CSV 模板和本地 Blob 下载。

## 语法

```html
<a href="/exports/orders.csv" download="orders-2026-07.csv">Download CSV</a>
```

## 使用建议

用于同源文件或生成的 Blob URL，并且用户意图确实是下载。

## 注意事项

- 跨域下载可能忽略建议文件名。
- 浏览器可能调整非法文件名。
- download 是提示，不是权限绕过。

## 可访问性要点

- 链接文本说明会下载什么文件类型或结果。
- 文件较大时展示大小。
- 不要让普通导航链接意外触发下载。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a)
- [HTML Standard](https://html.spec.whatwg.org/multipage/links.html#attr-hyperlink-download)
- [Compatibility](https://caniuse.com/download)
