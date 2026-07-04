<script setup>
import { ref } from 'vue';

const dateInput = ref(null);
const colorInput = ref(null);
const fileInput = ref(null);
const status = ref('Choose a native picker.');

const openPicker = (input, label) => {
  if (input?.showPicker) {
    input.showPicker();
    status.value = `${label} picker opened by showPicker().`;
  } else {
    status.value = `${label} picker does not expose showPicker() in this browser.`;
    input?.focus();
  }
};

const updateStatus = (event, label) => {
  if (event.target.type === 'file') {
    status.value = event.target.files?.[0]?.name
      ? `Selected file: ${event.target.files[0].name}`
      : 'No file selected.';
    return;
  }
  status.value = `${label}: ${event.target.value || 'empty'}`;
};
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel picker-board">
      <p class="demo-note">{{ status }}</p>

      <div class="picker-row">
        <label for="trip-date">Trip date</label>
        <input id="trip-date" ref="dateInput" type="date" @change="updateStatus($event, 'Trip date')" />
        <button class="demo-button" type="button" @click="openPicker(dateInput, 'Date')">Open date picker</button>
      </div>

      <div class="picker-row">
        <label for="tag-color">Tag color</label>
        <input id="tag-color" ref="colorInput" type="color" value="#2563eb" @change="updateStatus($event, 'Tag color')" />
        <button class="demo-button" type="button" @click="openPicker(colorInput, 'Color')">Open color picker</button>
      </div>

      <div class="picker-row">
        <label for="receipt-file">Receipt file</label>
        <input id="receipt-file" ref="fileInput" type="file" @change="updateStatus($event, 'Receipt')" />
        <button class="demo-button" type="button" @click="openPicker(fileInput, 'File')">Open file picker</button>
      </div>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>Your button can match the layout, while the actual picker stays native and platform-specific.</p>
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
