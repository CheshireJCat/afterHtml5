<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        title: '配送选项',
        standard: '标准时段',
        standardBody: '3 到 5 个工作日送达。适合低风险货件和合并打包。',
        appointment: '预约配送',
        appointmentBody: '客户选择两小时时段。适合受监管或高价值物品。',
        pickup: '门店自提',
        pickupBody: '转运到合作柜台，避免多次配送失败。',
        notice: '这些 disclosure 共享同一个 name 值，所以打开其中一个会关闭其他项。',
      }
    : {
        title: 'Delivery options',
        standard: 'Standard window',
        standardBody: 'Arrives in 3 to 5 business days. Best for low-risk shipments and consolidated packing.',
        appointment: 'Appointment delivery',
        appointmentBody: 'Customer chooses a two-hour window. Useful for regulated or expensive items.',
        pickup: 'Hold for pickup',
        pickupBody: 'Route to a partner counter and avoid failed delivery attempts.',
        notice: 'Opening one disclosure closes the others because they share the same name value.',
      },
);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <h3>{{ copy.title }}</h3>
      <div class="details-stack">
        <details name="delivery-choice" open>
          <summary>{{ copy.standard }}</summary>
          <p>{{ copy.standardBody }}</p>
        </details>
        <details name="delivery-choice">
          <summary>{{ copy.appointment }}</summary>
          <p>{{ copy.appointmentBody }}</p>
        </details>
        <details name="delivery-choice">
          <summary>{{ copy.pickup }}</summary>
          <p>{{ copy.pickupBody }}</p>
        </details>
      </div>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>&lt;details name="delivery-choice"&gt;
  &lt;summary&gt;Appointment delivery&lt;/summary&gt;
&lt;/details&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.details-stack {
  display: grid;
  gap: 10px;
}

details {
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface);
  overflow: hidden;
}

summary {
  min-height: 48px;
  padding: 14px 16px;
  cursor: pointer;
  font-weight: 700;
}

details[open] summary {
  border-bottom: 1px solid var(--ah5-line);
  color: var(--ah5-accent);
}

details p {
  margin: 0;
  padding: 16px;
  color: var(--ah5-muted);
}
</style>
