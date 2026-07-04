<template>
  <div class="demo-two-col">
    <div class="demo-panel command-surface">
      <div class="command-header">
        <strong>Orders workspace</strong>
        <button class="demo-button primary" popovertarget="quick-actions">Open actions</button>
      </div>
      <div class="order-list" aria-label="Recent orders">
        <span>Order 1024</span>
        <span>Packed</span>
        <span>Order 1025</span>
        <span>Needs address review</span>
        <span>Order 1026</span>
        <span>Ready to ship</span>
      </div>
      <div id="quick-actions" class="quick-actions" popover>
        <strong>Quick actions</strong>
        <button type="button">Print packing slip</button>
        <button type="button">Create return label</button>
        <button type="button">Copy tracking summary</button>
        <p>Click outside or press Esc. The browser handles the light-dismiss behavior.</p>
      </div>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>
        The popover jumps into the top layer and is not trapped by parent overflow or z-index.
        The HTML attribute owns the opening relationship.
      </p>
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
