<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        frameTitle: 'Customizable select 演示',
        label: '配送方式',
        standard: '标准配送',
        standardMeta: '3 到 5 天 · 合并路线',
        appointment: '预约配送',
        appointmentMeta: '客户选择配送时段',
        pickup: '门店自提',
        pickupMeta: '合作柜台交接',
        fallback: '如果不支持，会回退到经典 select。在支持的浏览器中，selectedcontent 克隆内容可以被样式化。',
        notice: 'option 可以包含结构化内容，关闭状态的按钮可以渲染更精简的选中视图。',
      }
    : {
        frameTitle: 'Customizable select demo',
        label: 'Shipping method',
        standard: 'Standard',
        standardMeta: '3 to 5 days · consolidated route',
        appointment: 'Appointment',
        appointmentMeta: 'Customer picks a delivery window',
        pickup: 'Hold for pickup',
        pickupMeta: 'Partner counter handoff',
        fallback:
          'If unsupported, this falls back toward a classic select. In supporting browsers the selectedcontent clone is styleable.',
        notice: 'The option can contain structured content while the closed button can render a trimmed selected view.',
      },
);

const srcdoc = computed(() => `<!doctype html>
<html lang="${isZh.value ? 'zh-CN' : 'en'}">
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      display: grid;
      place-items: center;
      min-height: 260px;
      font-family: ui-sans-serif, system-ui, sans-serif;
      background: #f8fafc;
      color: #0f172a;
    }
    .wrap {
      display: grid;
      gap: 12px;
      width: min(420px, calc(100vw - 32px));
    }
    select,
    select::picker(select) {
      appearance: base-select;
    }
    select {
      min-height: 52px;
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      background: white;
      padding: 8px 12px;
      font: inherit;
    }
    select::picker(select) {
      border: 1px solid #bfdbfe;
      border-radius: 12px;
      padding: 8px;
      background: white;
      box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
    }
    option {
      display: grid;
      gap: 2px;
      padding: 10px;
      border-radius: 8px;
    }
    option:checked {
      background: #dbeafe;
    }
    .method {
      font-weight: 800;
    }
    .meta {
      color: #475569;
      font-size: 13px;
    }
    selectedcontent .meta {
      display: none;
    }
    .fallback {
      color: #475569;
      font-size: 13px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <label for="ship-method"><strong>${copy.value.label}</strong></label>
    <select id="ship-method">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="standard">
        <span class="method">${copy.value.standard}</span>
        <span class="meta">${copy.value.standardMeta}</span>
      </option>
      <option value="appointment">
        <span class="method">${copy.value.appointment}</span>
        <span class="meta">${copy.value.appointmentMeta}</span>
      </option>
      <option value="pickup">
        <span class="method">${copy.value.pickup}</span>
        <span class="meta">${copy.value.pickupMeta}</span>
      </option>
    </select>
    <p class="fallback">${copy.value.fallback}</p>
  </div>
</body>
</html>`);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <iframe :title="copy.frameTitle" class="select-frame" :srcdoc="srcdoc"></iframe>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>&lt;select&gt;
  &lt;button&gt;
    &lt;selectedcontent&gt;&lt;/selectedcontent&gt;
  &lt;/button&gt;
  &lt;option&gt;...&lt;/option&gt;
&lt;/select&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.select-frame {
  width: 100%;
  min-height: 300px;
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface-soft);
}
</style>
