<script setup>
const srcdoc = `<!doctype html>
<html lang="en">
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
    <label for="ship-method"><strong>Shipping method</strong></label>
    <select id="ship-method">
      <button>
        <selectedcontent></selectedcontent>
      </button>
      <option value="standard">
        <span class="method">Standard</span>
        <span class="meta">3 to 5 days · consolidated route</span>
      </option>
      <option value="appointment">
        <span class="method">Appointment</span>
        <span class="meta">Customer picks a delivery window</span>
      </option>
      <option value="pickup">
        <span class="method">Hold for pickup</span>
        <span class="meta">Partner counter handoff</span>
      </option>
    </select>
    <p class="fallback">If unsupported, this falls back toward a classic select. In supporting browsers the selectedcontent clone is styleable.</p>
  </div>
</body>
</html>`;
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <iframe title="Customizable select demo" class="select-frame" :srcdoc="srcdoc"></iframe>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>The option can contain structured content while the closed button can render a trimmed selected view.</p>
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
