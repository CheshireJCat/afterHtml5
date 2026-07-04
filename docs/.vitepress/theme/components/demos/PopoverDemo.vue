<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        workspace: '订单工作区',
        open: '打开操作',
        recentOrders: '最近订单',
        order1024: '订单 1024',
        packed: '已打包',
        order1025: '订单 1025',
        review: '需要核对地址',
        order1026: '订单 1026',
        ready: '待发货',
        quickActions: '快捷操作',
        print: '打印装箱单',
        returnLabel: '创建退货标签',
        tracking: '复制物流摘要',
        dismiss: '点击外部或按 Esc 关闭。轻量关闭行为由浏览器处理。',
        notice:
          'Popover 会进入 top layer，不会被父级 overflow 或 z-index 困住。打开关系由 HTML 属性声明。',
      }
    : {
        workspace: 'Orders workspace',
        open: 'Open actions',
        recentOrders: 'Recent orders',
        order1024: 'Order 1024',
        packed: 'Packed',
        order1025: 'Order 1025',
        review: 'Needs address review',
        order1026: 'Order 1026',
        ready: 'Ready to ship',
        quickActions: 'Quick actions',
        print: 'Print packing slip',
        returnLabel: 'Create return label',
        tracking: 'Copy tracking summary',
        dismiss: 'Click outside or press Esc. The browser handles the light-dismiss behavior.',
        notice:
          'The popover jumps into the top layer and is not trapped by parent overflow or z-index. The HTML attribute owns the opening relationship.',
      },
);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel command-surface">
      <div class="command-header">
        <strong>{{ copy.workspace }}</strong>
        <button class="demo-button primary" popovertarget="quick-actions">{{ copy.open }}</button>
      </div>
      <div class="order-list" :aria-label="copy.recentOrders">
        <span>{{ copy.order1024 }}</span>
        <span>{{ copy.packed }}</span>
        <span>{{ copy.order1025 }}</span>
        <span>{{ copy.review }}</span>
        <span>{{ copy.order1026 }}</span>
        <span>{{ copy.ready }}</span>
      </div>
      <div id="quick-actions" class="quick-actions" popover>
        <strong>{{ copy.quickActions }}</strong>
        <button type="button">{{ copy.print }}</button>
        <button type="button">{{ copy.returnLabel }}</button>
        <button type="button">{{ copy.tracking }}</button>
        <p>{{ copy.dismiss }}</p>
      </div>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>&lt;button popovertarget="quick-actions"&gt;
  Open actions
&lt;/button&gt;
&lt;div id="quick-actions" popover&gt;...&lt;/div&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.command-surface {
  position: relative;
  min-height: 280px;
}

.command-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.order-list {
  display: grid;
  grid-template-columns: 1fr max-content;
  gap: 1px;
  border: 1px solid var(--ah5-line);
  background: var(--ah5-line);
}

.order-list span {
  padding: 14px;
  background: var(--ah5-surface);
}

.quick-actions {
  width: min(320px, calc(100vw - 32px));
  margin: 0;
  padding: 14px;
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface);
  color: var(--ah5-ink);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.24);
}

.quick-actions::backdrop {
  background: transparent;
}

.quick-actions:popover-open {
  display: grid;
  gap: 8px;
}

.quick-actions button {
  min-height: 40px;
  border: 1px solid var(--ah5-line);
  border-radius: 8px;
  background: var(--ah5-surface-soft);
  color: var(--ah5-ink);
  text-align: left;
  padding: 0 12px;
  font: inherit;
  cursor: pointer;
}

.quick-actions p {
  margin: 4px 0 0;
  color: var(--ah5-muted);
  font-size: 13px;
}
</style>
