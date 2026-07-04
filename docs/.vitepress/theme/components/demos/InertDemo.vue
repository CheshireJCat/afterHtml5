<script setup>
import { computed, nextTick, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        workspace: '设置工作区',
        storefront: '店铺名称',
        save: '保存设置',
        reviewLayer: '复核层',
        reviewRequired: '需要复核',
        reviewBody: '这个层后面的工作区已经 inert：不能点击、聚焦、选择，也不会被辅助技术访问。',
        resume: '继续编辑',
        lock: '锁定工作区',
        notice: 'inert 不只是视觉变暗。它会改变整棵子树的交互语义。',
      }
    : {
        workspace: 'Settings workspace',
        storefront: 'Storefront name',
        save: 'Save settings',
        reviewLayer: 'Review layer',
        reviewRequired: 'Review required',
        reviewBody:
          'The workspace behind this layer is inert: no clicks, focus, selection, or assistive-tech access.',
        resume: 'Resume editing',
        lock: 'Lock workspace',
        notice: 'inert is not just dimming. It changes interaction semantics for an entire subtree.',
      },
);

const locked = ref(false);
const reviewButton = ref(null);

const toggleLock = async () => {
  locked.value = !locked.value;
  if (locked.value) {
    await nextTick();
    reviewButton.value?.focus();
  }
};
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel inert-stage">
      <div class="workspace" :class="{ locked }" :inert="locked">
        <h3>{{ copy.workspace }}</h3>
        <label>
          {{ copy.storefront }}
          <input class="demo-input" value="Northwind Supply" />
        </label>
        <button class="demo-button" type="button">{{ copy.save }}</button>
      </div>

      <aside v-if="locked" class="review-layer" :aria-label="copy.reviewLayer">
        <strong>{{ copy.reviewRequired }}</strong>
        <p>{{ copy.reviewBody }}</p>
        <button ref="reviewButton" class="demo-button primary" type="button" @click="toggleLock">{{ copy.resume }}</button>
      </aside>

      <button v-if="!locked" class="demo-button primary" type="button" @click="toggleLock">{{ copy.lock }}</button>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
      <pre class="demo-code"><code>&lt;main inert&gt;
  Disabled region
&lt;/main&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.inert-stage {
  position: relative;
  min-height: 310px;
}

.workspace {
  display: grid;
  gap: 14px;
  transition: opacity 180ms ease, filter 180ms ease;
}

.workspace label {
  display: grid;
  gap: 6px;
  font-weight: 700;
}

.workspace.locked {
  opacity: 0.42;
  filter: grayscale(0.35);
}

.review-layer {
  position: absolute;
  inset: 24px;
  display: grid;
  place-content: center;
  gap: 12px;
  border: 1px solid var(--ah5-line);
  border-radius: 12px;
  background: color-mix(in srgb, var(--ah5-surface) 92%, transparent);
  box-shadow: 0 24px 70px rgba(15, 23, 42, 0.2);
  padding: 18px;
}

.review-layer p {
  max-width: 340px;
  margin: 0;
  color: var(--ah5-muted);
}
</style>
