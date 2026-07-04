---
title: "Plaintext-only editing"
description: "让元素可编辑，同时强制粘贴和编辑内容保持为纯文本。"
---

# Plaintext-only editing

<span class="feature-meta">编辑 · Baseline 2025</span>

让元素可编辑，同时强制粘贴和编辑内容保持为纯文本。

<FeatureDemo slug="plaintext-only" />

## 解决什么问题

适合评论框、命令输入、便签和 token 编辑器：需要 contenteditable 的灵活性，又不想处理富文本粘贴清理。

## 语法

```html
<div contenteditable="plaintext-only">Paste formatted text here</div>
```

## 使用建议

当 textarea 太受限，但富文本会带来清洗和格式问题时使用。

## 注意事项

- 它本身不是完整表单控件。
- 仍然需要校验、持久化和提交逻辑。
- 换行和空白字符需要按产品规则处理。

## 可访问性要点

- 为可编辑区域提供 label。
- 合适时暴露 role=textbox 和 aria-multiline。
- 保留清晰的焦点样式。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#attr-contenteditable)
- [Compatibility](https://caniuse.com/?search=contenteditable%20plaintext-only)
