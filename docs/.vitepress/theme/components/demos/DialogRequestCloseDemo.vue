<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        noDecision: '还没有发货决策。',
        closedEmpty: 'Dialog 已关闭，没有 returnValue。',
        intercepted: '关闭请求已被拦截，等待复核。',
        returned: 'Dialog 返回：',
        results: {
          cancel: '取消',
          hold: '暂缓复核',
          ship: '立即发货',
          'manual-review': '手动复核',
        },
        title: '发货确认',
        guard: '订单需要复核时，拦截 Esc / requestClose',
        open: '打开确认框',
        callRequestClose: '调用 requestClose()',
        dialogTitle: '发出订单 1026？',
        dialogBody: '原生 dialog 处理模态焦点。form method=dialog 会把提交按钮的 value 变成 returnValue。',
        cancel: '取消',
        hold: '暂缓复核',
        ship: '立即发货',
        notice:
          'requestClose 走的是可取消关闭路径。form method 会给你结构化 returnValue，不需要给每个按钮单独绑定逻辑。',
      }
    : {
        noDecision: 'No shipment decision yet.',
        closedEmpty: 'Dialog closed with no return value.',
        intercepted: 'Close request was intercepted for review.',
        returned: 'Dialog returned:',
        results: {
          cancel: 'cancel',
          hold: 'hold for review',
          ship: 'ship now',
          'manual-review': 'manual review',
        },
        title: 'Shipping confirmation',
        guard: 'Intercept Esc / requestClose while shipment needs review',
        open: 'Open confirmation',
        callRequestClose: 'Call requestClose()',
        dialogTitle: 'Ship order 1026?',
        dialogBody:
          'Native dialog handles modal focus. form method=dialog turns submit button values into returnValue.',
        cancel: 'Cancel',
        hold: 'Hold for review',
        ship: 'Ship now',
        notice:
          'requestClose fires a cancellable close path. The form method gives you structured return values without wiring each button.',
      },
);

const dialog = ref(null);
const lastResult = ref('');
const preventRiskyClose = ref(true);
const resultMessage = computed(() => lastResult.value || copy.value.noDecision);

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
    const returnValue = dialog.value?.returnValue;
    lastResult.value = returnValue
      ? `${copy.value.returned} ${copy.value.results[returnValue] || returnValue}`
      : copy.value.closedEmpty;
  };

  cancelHandler = (event) => {
    if (preventRiskyClose.value) {
      event.preventDefault();
      lastResult.value = copy.value.intercepted;
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
      <h3>{{ copy.title }}</h3>
      <p class="demo-note">{{ resultMessage }}</p>
      <label class="guard-row">
        <input v-model="preventRiskyClose" type="checkbox" />
        {{ copy.guard }}
      </label>
      <div class="dialog-actions">
        <button class="demo-button primary" type="button" @click="openDialog">{{ copy.open }}</button>
        <button class="demo-button" type="button" @click="requestClose">{{ copy.callRequestClose }}</button>
      </div>

      <dialog ref="dialog" class="ship-dialog" aria-labelledby="ship-dialog-title">
        <form method="dialog">
          <h3 id="ship-dialog-title">{{ copy.dialogTitle }}</h3>
          <p>{{ copy.dialogBody }}</p>
          <menu>
            <button value="cancel">{{ copy.cancel }}</button>
            <button value="hold">{{ copy.hold }}</button>
            <button value="ship">{{ copy.ship }}</button>
          </menu>
        </form>
      </dialog>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
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
