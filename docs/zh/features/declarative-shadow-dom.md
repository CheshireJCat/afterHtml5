---
title: "Declarative Shadow DOM"
description: "直接在 HTML 中声明 shadow root，让服务器输出带有作用域样式边界的组件标记。"
---

# Declarative Shadow DOM

<span class="feature-meta">Web Components · Baseline 2024</span>

直接在 HTML 中声明 shadow root，让服务器输出带有作用域样式边界的组件标记。

<FeatureDemo slug="declarative-shadow-dom" />

## 解决什么问题

适合需要 SSR、流式输出或静态 HTML 的 Web Components，同时希望 JavaScript 升级前就有样式隔离。

## 语法

```html
<user-card>
  <template shadowrootmode="open">
    <style>...</style>
    <slot></slot>
  </template>
  Ada Lovelace
</user-card>
```

## 使用建议

当组件需要 SSR、streaming 或静态 HTML 输出，同时仍受益于 shadow DOM 边界时使用。

## 注意事项

- shadowrootmode template 只在解析阶段生效；之后用 innerHTML 设置不会附加 shadow root。
- 旧示例可能还在使用已移除的 shadowroot 属性。
- hydration 自定义元素时要先检查是否已有 shadowRoot。

## 可访问性要点

- 升级前的 light DOM 内容也要有意义。
- 不要把关键文本藏进不可访问的自定义控件内部。
- 有意识地使用 slot，保证阅读顺序合理。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM)
- [HTML Standard](https://html.spec.whatwg.org/multipage/scripting.html#attr-template-shadowrootmode)
- [Compatibility](https://caniuse.com/?search=declarative%20shadow%20dom)
