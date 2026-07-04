---
title: "showPicker"
description: "用自己的可见按钮打开原生日期、颜色、文件等浏览器 picker，而不是重建 picker UI。"
---

# showPicker

<span class="feature-meta">表单 · Baseline 广泛可用</span>

用自己的可见按钮打开原生日期、颜色、文件等浏览器 picker，而不是重建 picker UI。

<FeatureDemo slug="show-picker" />

## 解决什么问题

设计上需要独立触发按钮，但实际选择器仍应保持平台原生。

## 语法

```html
<input id="date" type="date">
<button onclick="date.showPicker()">Choose date</button>
```

## 使用建议

当布局需要独立触发器，但 picker 本身应由浏览器和平台负责时使用。

## 注意事项

- 这个方法通常必须在点击等用户激活中调用。
- 不同 input 类型和平台支持并不完全一致。
- 不要伪造 picker 内容；让浏览器拥有这一部分。

## 可访问性要点

- 除非有强理由，否则真实 input 保持在 tab 顺序中。
- label 与 input 正确关联。
- 使用紧凑控件时，在可读文本中同步已选值。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker)
- [HTML Standard](https://html.spec.whatwg.org/multipage/input.html#dom-input-showpicker)
- [Compatibility](https://caniuse.com/mdn-api_htmlinputelement_showpicker)
