<script setup>
import { computed, onMounted, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        label: '发布说明草稿框',
        editorText: '把带格式的文本粘贴到这里。它应该保持为纯文本。',
        sampleText: '只粘贴文本：<strong>标记是数据，不是格式</strong>',
        sampleCopied: '已把一个看起来像富文本的示例复制到剪贴板。请粘贴到编辑器里。',
        copySample: '复制粘贴示例',
        notice: '这个区域像 contenteditable 一样可编辑，但粘贴内容不应把富文本标记带进 DOM。',
      }
    : {
        label: 'Release note scratchpad',
        editorText: 'Paste formatted text here. It should stay plain.',
        sampleText: 'Pasted text only: <strong>markup is data, not formatting</strong>',
        sampleCopied: 'Copied a rich-looking sample to the clipboard. Paste it into the editor.',
        copySample: 'Copy paste sample',
        notice: 'The surface behaves like contenteditable, but paste should not bring rich markup into the DOM.',
      },
);

const editor = ref(null);
const htmlSnapshot = ref('');
const textSnapshot = ref('');

const updateSnapshot = () => {
  htmlSnapshot.value = editor.value?.innerHTML || '';
  textSnapshot.value = editor.value?.innerText || '';
};

const insertRichSample = async () => {
  editor.value?.focus();
  await navigator.clipboard?.writeText?.(copy.value.sampleText);
  textSnapshot.value = copy.value.sampleCopied;
};

onMounted(updateSnapshot);
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <label class="editor-label" for="plain-editor">{{ copy.label }}</label>
      <div
        id="plain-editor"
        ref="editor"
        class="plain-editor"
        contenteditable="plaintext-only"
        role="textbox"
        aria-multiline="true"
        @input="updateSnapshot"
      >{{ copy.editorText }}</div>

      <button class="demo-button" type="button" @click="insertRichSample">{{ copy.copySample }}</button>

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
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
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
