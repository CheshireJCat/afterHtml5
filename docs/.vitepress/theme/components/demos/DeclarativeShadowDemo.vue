<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        frameTitle: 'Declarative Shadow DOM 解析演示',
        outside: '页面样式停留在 shadow root 外部。',
        name: '服务端渲染组件',
        role: '解析阶段附加 shadow root',
        body: '这个初始树不需要客户端调用 attachShadow。',
        notice:
          'iframe 会触发真实 HTML 解析。Declarative Shadow DOM 只在解析阶段生效，因此这里更接近服务端返回 SSR 标记的方式。',
      }
    : {
        frameTitle: 'Declarative Shadow DOM parser demo',
        outside: 'Page styles stay outside the shadow root.',
        name: 'Server-rendered component',
        role: 'Shadow root attached during parse',
        body: 'No client-side attachShadow call is required for this initial tree.',
        notice:
          'The iframe forces real HTML parsing. Declarative Shadow DOM is parser-only, so this is closer to how SSR markup arrives from a server.',
      },
);

const srcdoc = computed(() => `<!doctype html>
<html lang="${isZh.value ? 'zh-CN' : 'en'}">
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
  <p class="outside">${copy.value.outside}</p>
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
    <span slot="name">${copy.value.name}</span>
    <span slot="role">${copy.value.role}</span>
    <p>${copy.value.body}</p>
  </x-profile>
</body>
</html>`);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <iframe :title="copy.frameTitle" class="dsd-frame" :srcdoc="srcdoc"></iframe>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
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
