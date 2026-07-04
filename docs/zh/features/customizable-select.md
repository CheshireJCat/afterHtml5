---
title: "Customizable select"
description: "用 button、selectedcontent、::picker(select) 和 appearance: base-select 等 HTML/CSS 钩子定制原生 select 内部。"
---

# Customizable select

<span class="feature-meta">表单 · 有限支持</span>

用 button、selectedcontent、::picker(select) 和 appearance: base-select 等 HTML/CSS 钩子定制原生 select 内部。

<FeatureDemo slug="customizable-select" />

## 解决什么问题

需要富选项展示，又想保留原生 select 行为，避免重写复杂 ARIA 自定义组件。

## 语法

```html
<select>
  <button><selectedcontent></selectedcontent></button>
  <option>Express</option>
</select>
```

## 使用建议

用于实验或渐进增强；经典 select fallback 仍然重要。

## 注意事项

- 还不是 Baseline。
- 框架 hydration 可能与浏览器管理的 selectedcontent 克隆行为不一致。
- 动态更新 option 时，selectedcontent 不一定自动重新克隆。

## 可访问性要点

- 不要把它用成 split button 或无关的复合控件。
- 即使没有装饰，option 文本也要有意义。
- 在每个目标浏览器中确认键盘行为。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/selectedcontent)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#the-selectedcontent-element)
- [Compatibility](https://caniuse.com/mdn-html_elements_selectedcontent)
