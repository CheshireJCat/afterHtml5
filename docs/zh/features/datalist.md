---
title: "datalist"
description: "为 input 提供原生建议，同时仍允许用户输入建议列表外的值。"
---

# datalist

<span class="feature-meta">表单 · Baseline 广泛可用</span>

为 input 提供原生建议，同时仍允许用户输入建议列表外的值。

<FeatureDemo slug="datalist" />

## 解决什么问题

适合搜索框、机场代码、保存的筛选器和管理后台输入：建议有帮助，但不应限制用户。

## 语法

```html
<label for="airport">Airport</label>
<input id="airport" name="airport" list="airport-options">
<datalist id="airport-options">
  <option value="SFO"></option>
  <option value="HND"></option>
</datalist>
```

## 使用建议

当建议有帮助但不是唯一合法值时使用。必须从固定集合中选择时用 select。

## 注意事项

- 弹出层样式受限。
- 部分 input 类型的 datalist 支持并不均匀。
- 建议不是校验。

## 可访问性要点

- 为 input 保留可见 label。
- 不要只靠 placeholder 说明用途。
- 后端有约束时仍要校验自由输入值。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/datalist)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-elements.html#the-datalist-element)
- [Compatibility](https://caniuse.com/datalist)
