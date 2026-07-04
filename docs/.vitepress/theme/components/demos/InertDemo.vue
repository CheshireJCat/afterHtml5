<script setup>
import { nextTick, ref } from 'vue';

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
        <h3>Settings workspace</h3>
        <label>
          Storefront name
          <input class="demo-input" value="Northwind Supply" />
        </label>
        <button class="demo-button" type="button">Save settings</button>
      </div>

      <aside v-if="locked" class="review-layer" aria-label="Review layer">
        <strong>Review required</strong>
        <p>The workspace behind this layer is inert: no clicks, focus, selection, or assistive-tech access.</p>
        <button ref="reviewButton" class="demo-button primary" type="button" @click="toggleLock">Resume editing</button>
      </aside>

      <button v-if="!locked" class="demo-button primary" type="button" @click="toggleLock">Lock workspace</button>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>inert is not just dimming. It changes interaction semantics for an entire subtree.</p>
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
