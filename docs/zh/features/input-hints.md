---
title: "Input hints"
description: "在不改变语义 input type 的情况下，提示合适的移动键盘和 Enter 键动作。"
---

# Input hints

<span class="feature-meta">表单 · Baseline 2021</span>

在不改变语义 input type 的情况下，提示合适的移动键盘和 Enter 键动作。

<FeatureDemo slug="input-hints" />

## 解决什么问题

适合 OTP、价格、搜索和聊天输入：键盘体验重要，但校验语义应分开处理。

## 语法

```html
<input autocomplete="one-time-code" inputmode="numeric" enterkeyhint="done" maxlength="6">
<input type="search" enterkeyhint="search" autocomplete="off">
```

## 使用建议

inputmode 决定键盘形态，type 负责数据语义，autocomplete token 表达自动填充意图。

## 注意事项

- inputmode 不会校验值。
- 虚拟键盘行为因平台不同而变化。
- autocomplete token 必须匹配真实字段用途。

## 可访问性要点

- 保留可见 label 和说明。
- 不要禁用一次性验证码粘贴。
- 谨慎为个人数据使用 autocomplete。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode)
- [HTML Standard](https://html.spec.whatwg.org/multipage/interaction.html#attr-inputmode)
- [Compatibility](https://caniuse.com/input-inputmode)
