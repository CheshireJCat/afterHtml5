<script setup>
import { computed, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const copy = computed(() =>
  isZh.value
    ? {
        intro:
          '下面的归档账单备注初始为隐藏。使用 fragment 链接让浏览器显露它，或在支持的浏览器中尝试页面内查找 “invoice exception”。',
        open: '打开 fragment',
        hide: '再次隐藏',
        title: '归档账单备注',
        body: 'Invoice exception：客户要求所有出口单据都包含采购订单号。',
        notice: '内容可以保持折叠，但浏览器搜索和 fragment 导航仍然能把它显露出来。',
      }
    : {
        intro:
          'The archived billing note below starts hidden. Use the fragment link to let the browser reveal it, or try find-in-page for "invoice exception" in a supporting browser.',
        open: 'Open fragment',
        hide: 'Hide again',
        title: 'Archived billing note',
        body: 'Invoice exception: customer requires a purchase-order number on all exports.',
        notice: 'The content can be collapsed, but browser search and fragment navigation can still surface it.',
      },
);

const hiddenSection = ref(null);

const hideAgain = () => {
  hiddenSection.value?.setAttribute('hidden', 'until-found');
};
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <p>{{ copy.intro }}</p>
      <div class="fragment-actions">
        <a class="demo-button primary" href="#archived-billing-note">{{ copy.open }}</a>
        <button class="demo-button" type="button" @click="hideAgain">{{ copy.hide }}</button>
      </div>

      <section id="archived-billing-note" ref="hiddenSection" class="found-section" hidden="until-found">
        <h3>{{ copy.title }}</h3>
        <p>{{ copy.body }}</p>
      </section>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
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
