---
title: "Submitter overrides"
description: "让单个提交按钮覆盖表单提交目的地和提交方式。"
---

# Submitter overrides

<span class="feature-meta">表单 · Baseline 广泛可用</span>

让单个提交按钮覆盖表单提交目的地和提交方式。

<FeatureDemo slug="submitter-overrides" />

## 解决什么问题

适合保存草稿、发布、预览、导出和危险确认：字段相同，但提交意图不同。

## 语法

```html
<form action="/publish" method="post">
  <button type="submit" formaction="/drafts" formnovalidate>Save draft</button>
  <button type="submit">Publish</button>
</form>
```

## 使用建议

当一组字段有多个合法提交目标或校验模式时使用。

## 注意事项

- 只有 submit button 能使用这些覆盖属性。
- 服务端路由仍要验证用户意图。
- formnovalidate 不应用来绕过最终提交的必要检查。

## 可访问性要点

- 按钮标签必须说明结果。
- 不可逆操作前给出警告。
- 最终提交路径保留校验信息。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#attr-button-formaction)
- [Compatibility](https://caniuse.com/?search=formaction)
