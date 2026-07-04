<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <h3>Delivery options</h3>
      <div class="details-stack">
        <details name="delivery-choice" open>
          <summary>Standard window</summary>
          <p>Arrives in 3 to 5 business days. Best for low-risk shipments and consolidated packing.</p>
        </details>
        <details name="delivery-choice">
          <summary>Appointment delivery</summary>
          <p>Customer chooses a two-hour window. Useful for regulated or expensive items.</p>
        </details>
        <details name="delivery-choice">
          <summary>Hold for pickup</summary>
          <p>Route to a partner counter and avoid failed delivery attempts.</p>
        </details>
      </div>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>Opening one disclosure closes the others because they share the same name value.</p>
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
