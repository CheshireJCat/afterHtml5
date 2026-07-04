<template>
  <div class="demo-two-col">
    <div class="demo-panel invoker-board">
      <div class="toolbar" aria-label="Declarative command toolbar">
        <button class="demo-button primary" commandfor="invoker-popover" command="toggle-popover">Toggle panel</button>
        <button class="demo-button" commandfor="invoker-dialog" command="show-modal">Open dialog</button>
      </div>

      <div id="invoker-popover" class="invoker-popover" popover>
        <strong>Hydration-independent panel</strong>
        <p>This panel can open before framework click listeners are ready.</p>
        <button class="demo-button" commandfor="invoker-popover" command="hide-popover">Close panel</button>
      </div>

      <dialog id="invoker-dialog" class="invoker-dialog">
        <h3>Declarative dialog command</h3>
        <p>The button outside used command="show-modal". The close button uses command="close".</p>
        <button class="demo-button primary" commandfor="invoker-dialog" command="close">Close</button>
      </dialog>

      <p class="demo-note">
        In unsupported browsers these attributes are inert, which makes fallback wiring straightforward.
      </p>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>The buttons are still real buttons. The command relationship lives in HTML rather than a click handler.</p>
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
