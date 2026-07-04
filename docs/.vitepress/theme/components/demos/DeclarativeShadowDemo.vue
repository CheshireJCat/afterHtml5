<script setup>
const srcdoc = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, sans-serif;
      background: #f8fafc;
      color: #0f172a;
    }
    .outside {
      padding: 14px;
      border-bottom: 1px solid #cbd5e1;
      color: #475569;
    }
    x-profile {
      display: block;
      margin: 18px;
    }
  </style>
</head>
<body>
  <p class="outside">Page styles stay outside the shadow root.</p>
  <x-profile>
    <template shadowrootmode="open">
      <style>
        :host {
          display: grid;
          gap: 10px;
          max-width: 360px;
          border: 1px solid #bfdbfe;
          border-radius: 14px;
          padding: 18px;
          background: white;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
        }
        strong {
          font-size: 20px;
        }
        span {
          color: #2563eb;
          font-weight: 700;
        }
      </style>
      <strong><slot name="name"></slot></strong>
      <span><slot name="role"></slot></span>
      <slot></slot>
    </template>
    <span slot="name">Server-rendered component</span>
    <span slot="role">Shadow root attached during parse</span>
    <p>No client-side attachShadow call is required for this initial tree.</p>
  </x-profile>
</body>
</html>`;
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <iframe title="Declarative Shadow DOM parser demo" class="dsd-frame" :srcdoc="srcdoc"></iframe>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>
        The iframe forces real HTML parsing. Declarative Shadow DOM is parser-only, so this is closer
        to how SSR markup arrives from a server.
      </p>
      <pre class="demo-code"><code>&lt;template shadowrootmode="open"&gt;
  &lt;style&gt;:host { ... }&lt;/style&gt;
  &lt;slot&gt;&lt;/slot&gt;
&lt;/template&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.dsd-frame {
  width: 100%;
  min-height: 280px;
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface-soft);
}
</style>
