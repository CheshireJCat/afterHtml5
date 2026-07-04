<script setup>
import { computed, ref } from 'vue';

const query = ref('');
const rows = [
  ['Popover', 'Layered UI'],
  ['Dialog', 'Modal tasks'],
  ['Search', 'Semantic landmark'],
  ['showPicker', 'Native form pickers'],
  ['inert', 'Interaction safety'],
];

const filteredRows = computed(() => {
  const needle = query.value.trim().toLowerCase();
  if (!needle) return rows;
  return rows.filter((row) => row.join(' ').toLowerCase().includes(needle));
});
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <search aria-label="Filter feature examples" class="native-search">
        <label for="search-demo-query">Filter feature table</label>
        <input id="search-demo-query" v-model="query" class="demo-input" type="search" placeholder="Try dialog or form" />
      </search>

      <table class="feature-table">
        <caption>Results stay in the main content, outside the search landmark.</caption>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Problem area</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in filteredRows" :key="row[0]">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="demo-panel">
      <h3>What to notice</h3>
      <p>The search element marks the controls as search/filter UI. It is not a results container.</p>
      <pre class="demo-code"><code>&lt;search aria-label="Filter feature examples"&gt;
  &lt;label for="q"&gt;Filter&lt;/label&gt;
  &lt;input id="q" type="search"&gt;
&lt;/search&gt;</code></pre>
    </div>
  </div>
</template>

<style scoped>
.native-search {
  display: grid;
  gap: 8px;
}

.native-search label {
  font-weight: 700;
}

.feature-table {
  width: 100%;
  margin-top: 18px;
  border-collapse: collapse;
  font-size: 14px;
}

.feature-table caption {
  caption-side: bottom;
  padding-top: 10px;
  color: var(--ah5-muted);
  text-align: left;
}

.feature-table th,
.feature-table td {
  border-bottom: 1px solid var(--ah5-line);
  padding: 12px 8px;
  text-align: left;
}
</style>
