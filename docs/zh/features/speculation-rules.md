---
title: "Speculation rules"
description: "声明可能发生的未来导航，让浏览器可以预取或预渲染整个文档。"
---

# Speculation rules

<span class="feature-meta">脚本与导航 · 有限支持</span>

声明可能发生的未来导航，让浏览器可以预取或预渲染整个文档。

<FeatureDemo slug="speculation-rules" />

## 解决什么问题

适合多页应用、文档、电商流程和仪表盘中可预测的下一步导航。

## 语法

```html
<script type="speculationrules">
{
  "prefetch": [{ "urls": ["/pricing", "/docs/start"] }],
  "prerender": [{ "where": { "href_matches": "/checkout/*" } }]
}
</script>
```

## 使用建议

只用于安全的 GET 导航。先从保守 prefetch 规则开始，再考虑 prerender。

## 注意事项

- 不要推测 logout、购物车变更或重 analytics 路由。
- Prerender 可能比用户预期更早运行页面代码。
- 规则应尊重认证和隐私边界。

## 可访问性要点

- 推测加载不能在导航前改变焦点、播报内容或修改状态。
- 没有 speculation 支持时链接仍要可用。
- 避免在共享设备上预加载敏感页面。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type/speculationrules)
- [HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html#attr-script-type)
- [Compatibility](https://caniuse.com/speculation-rules)
