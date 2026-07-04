<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        toolbar: '声明式命令工具栏',
        toggle: '切换面板',
        openDialog: '打开 dialog',
        panelTitle: '不依赖 hydration 的面板',
        panelBody: '这个面板可以在框架 click listener 准备好之前打开。',
        closePanel: '关闭面板',
        dialogTitle: '声明式 dialog 命令',
        dialogBody: '外部按钮使用 command="show-modal"。关闭按钮使用 command="close"。',
        close: '关闭',
        fallback: '在不支持的浏览器里，这些属性只是 inert，fallback 绑定会很直接。',
        notice: '按钮仍然是真实 button。命令关系写在 HTML 里，而不是藏在 click handler 里。',
      }
    : {
        toolbar: 'Declarative command toolbar',
        toggle: 'Toggle panel',
        openDialog: 'Open dialog',
        panelTitle: 'Hydration-independent panel',
        panelBody: 'This panel can open before framework click listeners are ready.',
        closePanel: 'Close panel',
        dialogTitle: 'Declarative dialog command',
        dialogBody: 'The button outside used command="show-modal". The close button uses command="close".',
        close: 'Close',
        fallback:
          'In unsupported browsers these attributes are inert, which makes fallback wiring straightforward.',
        notice: 'The buttons are still real buttons. The command relationship lives in HTML rather than a click handler.',
      },
);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel invoker-board">
      <div class="toolbar" :aria-label="copy.toolbar">
        <button class="demo-button primary" commandfor="invoker-popover" command="toggle-popover">{{ copy.toggle }}</button>
        <button class="demo-button" commandfor="invoker-dialog" command="show-modal">{{ copy.openDialog }}</button>
      </div>

      <div id="invoker-popover" class="invoker-popover" popover>
        <strong>{{ copy.panelTitle }}</strong>
        <p>{{ copy.panelBody }}</p>
        <button class="demo-button" commandfor="invoker-popover" command="hide-popover">{{ copy.closePanel }}</button>
      </div>

      <dialog id="invoker-dialog" class="invoker-dialog">
        <h3>{{ copy.dialogTitle }}</h3>
        <p>{{ copy.dialogBody }}</p>
        <button class="demo-button primary" commandfor="invoker-dialog" command="close">{{ copy.close }}</button>
      </dialog>

      <p class="demo-note">
        {{ copy.fallback }}
      </p>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>&lt;button commandfor="panel"
        command="toggle-popover"&gt;
  Toggle panel
&lt;/button&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.invoker-board {
  min-height: 280px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 18px;
}

.invoker-popover,
.invoker-dialog {
  border: 1px solid var(--ah5-line);
  border-radius: 12px;
  background: var(--ah5-surface);
  color: var(--ah5-ink);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.25);
}

.invoker-popover {
  width: min(340px, calc(100vw - 32px));
  padding: 16px;
}

.invoker-popover:popover-open {
  display: grid;
  gap: 10px;
}

.invoker-dialog {
  max-width: 420px;
  padding: 22px;
}

.invoker-dialog::backdrop {
  background: rgba(15, 23, 42, 0.42);
}
</style>
