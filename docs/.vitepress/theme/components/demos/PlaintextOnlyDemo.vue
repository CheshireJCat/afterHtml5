<script setup>
import { onMounted, ref } from 'vue';

const editor = ref(null);
const htmlSnapshot = ref('');
const textSnapshot = ref('');

const updateSnapshot = () => {
  htmlSnapshot.value = editor.value?.innerHTML || '';
  textSnapshot.value = editor.value?.innerText || '';
};

const insertRichSample = async () => {
  editor.value?.focus();
  await navigator.clipboard?.writeText?.('Pasted text only: <strong>markup is data, not formatting</strong>');
  textSnapshot.value = 'Copied a rich-looking sample to the clipboard. Paste it into the editor.';
};

onMounted(updateSnapshot);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <label class="editor-label" for="plain-editor">Release note scratchpad</label>
      <div
        id="plain-editor"
        ref="editor"
        class="plain-editor"
        contenteditable="plaintext-only"
        role="textbox"
        aria-multiline="true"
        @input="updateSnapshot"
      >Paste formatted text here. It should stay plain.</div>

      <button class="demo-button" type="button" @click="insertRichSample">Copy paste sample</button>

      <div class="snapshot-grid">
        <div>
          <strong>innerText</strong>
          <pre class="demo-code"><code>{{ textSnapshot }}</code></pre>
        </div>
        <div>
          <strong>innerHTML</strong>
          <pre class="demo-code"><code>{{ htmlSnapshot }}</code></pre>
        </div>
      </div>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>The surface behaves like contenteditable, but paste should not bring rich markup into the DOM.</p>
      <pre class="demo-code"><code>&lt;div contenteditable="plaintext-only"
     role="textbox"
     aria-multiline="true"&gt;
&lt;/div&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.editor-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 700;
}

.plain-editor {
  min-height: 130px;
  margin-bottom: 12px;
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface);
  padding: 14px;
  line-height: 1.6;
}

.snapshot-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
}

@media (max-width: 700px) {
  .snapshot-grid {
    grid-template-columns: 1fr;
  }
}
</style>
