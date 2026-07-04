---
title: "Import maps"
description: "直接在 HTML 中把裸 JavaScript module specifier 映射到 URL，不必靠 bundler 重写。"
---

# Import maps

<span class="feature-meta">脚本与导航 · Baseline 广泛可用</span>

直接在 HTML 中把裸 JavaScript module specifier 映射到 URL，不必靠 bundler 重写。

<FeatureDemo slug="import-maps" />

## 解决什么问题

适合小应用、原型、设计系统和服务端渲染页面，让浏览器里的 import 更可读。

## 语法

```html
<script type="importmap">
{
  "imports": {
    "lit": "/vendor/lit.js",
    "app/": "/assets/app/"
  }
}
</script>
<script type="module">import { html } from 'lit';</script>
```

## 使用建议

在依赖它的 module script 之前定义 import map。保持映射精简，并有意识地缓存模块 URL。

## 注意事项

- Import map 是文档级的。
- 必须在依赖模块加载前解析。
- 大型 map 会变成需要版本控制的部署配置。

## 可访问性要点

- 不要让基础内容依赖纯客户端 import map。
- 保持 no-JS 渲染有意义。
- 开发阶段让模块错误清晰可见。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/importmap)
- [HTML Standard](https://html.spec.whatwg.org/multipage/webappapis.html#import-maps)
- [Compatibility](https://caniuse.com/import-maps)
