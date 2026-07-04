<script setup>
import { ref } from 'vue';

const hiddenSection = ref(null);

const hideAgain = () => {
  hiddenSection.value?.setAttribute('hidden', 'until-found');
};
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <p>
        The archived billing note below starts hidden. Use the fragment link to let the browser reveal it,
        or try find-in-page for "invoice exception" in a supporting browser.
      </p>
      <div class="fragment-actions">
        <a class="demo-button primary" href="#archived-billing-note">Open fragment</a>
        <button class="demo-button" type="button" @click="hideAgain">Hide again</button>
      </div>

      <section id="archived-billing-note" ref="hiddenSection" class="found-section" hidden="until-found">
        <h3>Archived billing note</h3>
        <p>Invoice exception: customer requires a purchase-order number on all exports.</p>
      </section>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>The content can be collapsed, but browser search and fragment navigation can still surface it.</p>
      <pre class="demo-code"><code>&lt;section id="billing-note"
         hidden="until-found"&gt;
  ...
&lt;/section&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.fragment-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 16px 0;
}

.found-section {
  margin-top: 18px;
  border: 1px solid var(--ah5-line);
  border-radius: 10px;
  background: var(--ah5-surface);
  padding: 16px;
}

.found-section h3 {
  margin-top: 0;
}

.found-section p {
  margin-bottom: 0;
  color: var(--ah5-muted);
}
</style>
