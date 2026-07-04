<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const dialog = ref(null);
const lastResult = ref('No shipment decision yet.');
const preventRiskyClose = ref(true);

const openDialog = () => {
  dialog.value?.showModal();
};

const requestClose = () => {
  dialog.value?.requestClose?.('manual-review');
};

let closeHandler;
let cancelHandler;

onMounted(() => {
  closeHandler = () => {
    lastResult.value = dialog.value?.returnValue
      ? `Dialog returned: ${dialog.value.returnValue}`
      : 'Dialog closed with no return value.';
  };

  cancelHandler = (event) => {
    if (preventRiskyClose.value) {
      event.preventDefault();
      lastResult.value = 'Close request was intercepted for review.';
    }
  };

  dialog.value?.addEventListener('close', closeHandler);
  dialog.value?.addEventListener('cancel', cancelHandler);
});

onUnmounted(() => {
  dialog.value?.removeEventListener('close', closeHandler);
  dialog.value?.removeEventListener('cancel', cancelHandler);
});
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <h3>Shipping confirmation</h3>
      <p class="demo-note">{{ lastResult }}</p>
      <label class="guard-row">
        <input v-model="preventRiskyClose" type="checkbox" />
        Intercept Esc / requestClose while shipment needs review
      </label>
      <div class="dialog-actions">
        <button class="demo-button primary" type="button" @click="openDialog">Open confirmation</button>
        <button class="demo-button" type="button" @click="requestClose">Call requestClose()</button>
      </div>

      <dialog ref="dialog" class="ship-dialog" aria-labelledby="ship-dialog-title">
        <form method="dialog">
          <h3 id="ship-dialog-title">Ship order 1026?</h3>
          <p>Native dialog handles modal focus. form method=dialog turns submit button values into returnValue.</p>
          <menu>
            <button value="cancel">Cancel</button>
            <button value="hold">Hold for review</button>
            <button value="ship">Ship now</button>
          </menu>
        </form>
      </dialog>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>
        requestClose fires a cancellable close path. The form method gives you structured return values
        without wiring each button.
      </p>
      <pre class="demo-code"><code>&lt;form method="dialog"&gt;
  &lt;button value="ship"&gt;Ship now&lt;/button&gt;
&lt;/form&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.guard-row {
  display: flex;
  align-items: start;
  gap: 10px;
  margin: 18px 0;
}

.guard-row input {
  margin-top: 5px;
}

.dialog-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.ship-dialog {
  width: min(440px, calc(100vw - 32px));
  border: 1px solid var(--ah5-line);
  border-radius: 12px;
  background: var(--ah5-surface);
  color: var(--ah5-ink);
  padding: 22px;
}

.ship-dialog::backdrop {
  background: rgba(15, 23, 42, 0.5);
}

.ship-dialog menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 10px;
  padding: 0;
  margin: 22px 0 0;
}

.ship-dialog button {
  min-height: 40px;
  border: 1px solid var(--ah5-line);
  border-radius: 8px;
  background: var(--ah5-surface-soft);
  color: var(--ah5-ink);
  padding: 0 12px;
  font: inherit;
  cursor: pointer;
}
</style>
