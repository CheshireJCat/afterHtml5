<script setup>
import { computed, ref } from 'vue';
import { withBase } from 'vitepress';
import features from '../../generated/features.json';

const query = ref('');
const category = ref('all');
const maturity = ref('all');

const categories = computed(() => [...new Set(features.map((feature) => feature.category))]);
const maturities = computed(() => [...new Set(features.map((feature) => feature.maturity))]);

const filtered = computed(() => {
  const needle = query.value.trim().toLowerCase();
  return features.filter((feature) => {
    const haystack = `${feature.name} ${feature.category} ${feature.summary} ${feature.solves}`.toLowerCase();
    return (
      (!needle || haystack.includes(needle)) &&
      (category.value === 'all' || feature.category === category.value) &&
      (maturity.value === 'all' || feature.maturity === maturity.value)
    );
  });
});

const grouped = computed(() =>
  categories.value
    .map((name) => ({
      name,
      items: filtered.value.filter((feature) => feature.category === name),
    }))
    .filter((group) => group.items.length),
);
</script>

<template>
  <section class="ah5-index">
    <search class="ah5-filter-bar" aria-label="Feature search and filters">
      <div class="ah5-field">
        <label for="feature-query">Search features</label>
        <input id="feature-query" v-model="query" type="search" placeholder="popover, form, shadow, search" />
      </div>
      <div class="ah5-field">
        <label for="feature-category">Category</label>
        <select id="feature-category" v-model="category">
          <option value="all">All categories</option>
          <option v-for="item in categories" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
      <div class="ah5-field">
        <label for="feature-maturity">Maturity</label>
        <select id="feature-maturity" v-model="maturity">
          <option value="all">All maturity levels</option>
          <option v-for="item in maturities" :key="item" :value="item">{{ item }}</option>
        </select>
      </div>
    </search>

    <p class="demo-note">{{ filtered.length }} features match the current filters.</p>

    <div v-for="group in grouped" :id="group.name.toLowerCase().replaceAll(' ', '-')" :key="group.name" class="ah5-category-group">
      <h2>{{ group.name }}</h2>
      <div class="ah5-index-list">
        <a
          v-for="feature in group.items"
          :key="feature.slug"
          class="ah5-index-row"
          :href="withBase(`/features/${feature.slug}`)"
        >
          <strong>{{ feature.name }}</strong>
          <span>{{ feature.summary }}</span>
          <span class="ah5-status" :data-maturity="feature.maturity">{{ feature.status }}</span>
        </a>
      </div>
    </div>
  </section>
</template>
