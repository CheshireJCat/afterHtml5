<script setup>
import { computed, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        choose: '选择一个原生 picker。',
        dateLabel: '出行日期',
        colorLabel: '标签颜色',
        fileLabel: '票据文件',
        datePicker: '日期',
        colorPicker: '颜色',
        filePicker: '文件',
        openDate: '打开日期 picker',
        openColor: '打开颜色 picker',
        openFile: '打开文件 picker',
        opened: (label) => `${label} picker 已由 showPicker() 打开。`,
        unsupported: (label) => `这个浏览器没有暴露 ${label} picker 的 showPicker()。`,
        selectedFile: (name) => `已选择文件：${name}`,
        noFile: '未选择文件。',
        value: (label, value) => `${label}：${value || '空'}`,
        notice: '你的按钮可以匹配产品布局，而实际 picker 仍然保持原生、平台相关。',
      }
    : {
        choose: 'Choose a native picker.',
        dateLabel: 'Trip date',
        colorLabel: 'Tag color',
        fileLabel: 'Receipt file',
        datePicker: 'Date',
        colorPicker: 'Color',
        filePicker: 'File',
        openDate: 'Open date picker',
        openColor: 'Open color picker',
        openFile: 'Open file picker',
        opened: (label) => `${label} picker opened by showPicker().`,
        unsupported: (label) => `${label} picker does not expose showPicker() in this browser.`,
        selectedFile: (name) => `Selected file: ${name}`,
        noFile: 'No file selected.',
        value: (label, value) => `${label}: ${value || 'empty'}`,
        notice: 'Your button can match the layout, while the actual picker stays native and platform-specific.',
      },
);

const dateInput = ref(null);
const colorInput = ref(null);
const fileInput = ref(null);
const status = ref('');
const statusText = computed(() => status.value || copy.value.choose);

const openPicker = (input, label) => {
  if (input?.showPicker) {
    input.showPicker();
    status.value = copy.value.opened(label);
  } else {
    status.value = copy.value.unsupported(label);
    input?.focus();
  }
};

const updateStatus = (event, label) => {
  if (event.target.type === 'file') {
    status.value = event.target.files?.[0]?.name
      ? copy.value.selectedFile(event.target.files[0].name)
      : copy.value.noFile;
    return;
  }
  status.value = copy.value.value(label, event.target.value);
};
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel picker-board">
      <p class="demo-note">{{ statusText }}</p>

      <div class="picker-row">
        <label for="trip-date">{{ copy.dateLabel }}</label>
        <input id="trip-date" ref="dateInput" type="date" @change="updateStatus($event, copy.dateLabel)" />
        <button class="demo-button" type="button" @click="openPicker(dateInput, copy.datePicker)">{{ copy.openDate }}</button>
      </div>

      <div class="picker-row">
        <label for="tag-color">{{ copy.colorLabel }}</label>
        <input id="tag-color" ref="colorInput" type="color" value="#2563eb" @change="updateStatus($event, copy.colorLabel)" />
        <button class="demo-button" type="button" @click="openPicker(colorInput, copy.colorPicker)">{{ copy.openColor }}</button>
      </div>

      <div class="picker-row">
        <label for="receipt-file">{{ copy.fileLabel }}</label>
        <input id="receipt-file" ref="fileInput" type="file" @change="updateStatus($event, copy.fileLabel)" />
        <button class="demo-button" type="button" @click="openPicker(fileInput, copy.filePicker)">{{ copy.openFile }}</button>
      </div>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>const input = document.querySelector('input[type="date"]');
input.showPicker();</code></pre>
    </div>
  </div>
</template>

<style scoped>
.picker-board {
  display: grid;
  gap: 14px;
}

.picker-row {
  display: grid;
  grid-template-columns: minmax(100px, 0.5fr) minmax(160px, 1fr) max-content;
  align-items: center;
  gap: 10px;
}

.picker-row label {
  font-weight: 700;
}

.picker-row input {
  min-height: 44px;
  border: 1px solid var(--ah5-line);
  border-radius: 8px;
  background: var(--ah5-surface);
  color: var(--ah5-ink);
  padding: 0 10px;
  font: inherit;
}

@media (max-width: 700px) {
  .picker-row {
    grid-template-columns: 1fr;
  }
}
</style>
