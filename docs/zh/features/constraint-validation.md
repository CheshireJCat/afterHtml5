---
title: "Constraint validation"
description: "在写自定义校验器前，先用 required、pattern、minlength、min、max、step 等原生约束。"
---

# Constraint validation

<span class="feature-meta">表单 · Baseline 广泛可用</span>

在写自定义校验器前，先用 required、pattern、minlength、min、max、step 等原生约束。

<FeatureDemo slug="constraint-validation" />

## 解决什么问题

适合需要即时原生校验反馈的表单，不必从零重建基础 validity 状态。

## 语法

```html
<input name="repo" required pattern="[a-z0-9-]+" minlength="3">
<input name="stars" type="number" min="0" step="1">
<button>Save</button>
```

## 使用建议

用原生约束处理语法和必填，再叠加产品特定校验。

## 注意事项

- pattern 校验的是完整值，不是部分匹配。
- 原生提示因浏览器和语言环境不同而变化。
- 客户端校验永远不能替代服务端校验。

## 可访问性要点

- 错误信息要关联到字段。
- 不要只靠颜色表达 invalid 状态。
- 提交前保持说明可见。

## 参考资料

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Constraint_validation)
- [HTML Standard](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#constraints)
- [Compatibility](https://caniuse.com/form-validation)
