<script setup>
import { computed, ref } from 'vue';
import { useLocale } from './useLocale';

const { features, text, featureLink } = useLocale();

const query = ref('');
const category = ref('all');
const maturity = ref('all');

const categories = computed(() => [
  ...new Map(
    features.value.map((feature) => [
      feature.categorySlug,
      {
        slug: feature.categorySlug,
        name: feature.category,
      },
    ]),
  ).values(),
]);

const maturities = computed(() => [...new Set(features.value.map((feature) => feature.maturity))]);

const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase();
  return features.value.filter((feature) => {
    const haystack = `${feature.name} ${feature.category} ${feature.status} ${feature.summary} ${feature.solves}`.toLowerCase();
    return (
      (!needle || haystack.includes(needle)) &&
      (category.value === 'all' || feature.categorySlug === category.value) &&
      (maturity.value === 'all' || feature.maturity === maturity.value)
    );
  });
});

const grouped = computed(() =>
  categories.value
    .map((item) => ({
      ...item,
      items: filtered.value.filter((feature) => feature.categorySlug === item.slug),
    }))
    .filter((group) => group.items.length),
);

const resultText = computed(() =>
  text.value.index.matchPrefix
    ? `${text.value.index.matchPrefix} ${filtered.value.length} ${text.value.index.matchSuffix}`
    : `${filtered.value.length} ${text.value.index.matchSuffix}`,
);
</script>

<template>
  <section class="ah5-index">
    <search class="ah5-filter-bar" :aria-label="text.index.searchAria">
      <div class="ah5-field">
        <label for="feature-query">{{ text.index.searchLabel }}</label>
        <input id="feature-query" v-model="query" type="search" :placeholder="text.index.searchPlaceholder" />
      </div>
      <div class="ah5-field">
        <label for="feature-category">{{ text.index.categoryLabel }}</label>
        <select id="feature-category" v-model="category">
          <option value="all">{{ text.index.allCategories }}</option>
          <option v-for="item in categories" :key="item.slug" :value="item.slug">{{ item.name }}</option>
        </select>
      </div>
      <div class="ah5-field">
        <label for="feature-maturity">{{ text.index.maturityLabel }}</label>
        <select id="feature-maturity" v-model="maturity">
          <option value="all">{{ text.index.allMaturity }}</option>
          <option v-for="item in maturities" :key="item" :value="item">{{ text.maturity[item] || item }}</option>
        </select>
      </div>
    </search>

    <p class="demo-note">{{ resultText }}</p>

    <div v-for="group in grouped" :id="group.slug" :key="group.slug" class="ah5-category-group">
      <h2>{{ group.name }}</h2>
      <div class="ah5-index-list">
        <a
          v-for="feature in group.items"
          :key="feature.slug"
          class="ah5-index-row"
          :href="featureLink(feature.slug)"
        >
          <strong>{{ feature.name }}</strong>
          <span>{{ feature.summary }}</span>
          <span class="ah5-status" :data-maturity="feature.maturity">{{ feature.status }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
