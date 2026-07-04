<script setup>
import { computed, ref } from 'vue';
import { useLocale } from '../useLocale';

const { isZh, text } = useLocale();

const query = ref('');

const copy = computed(() =>
  isZh.value
    ? {
        searchAria: '筛选特性示例',
        label: '筛选特性表格',
        placeholder: '试试 dialog 或 form',
        caption: '结果保留在 main 内容中，而不是放进 search landmark。',
        feature: '特性',
        problem: '问题场景',
        rows: [
          ['Popover', '分层 UI'],
          ['Dialog', '模态任务'],
          ['Search', '语义 landmark'],
          ['showPicker', '原生表单 picker'],
          ['inert', '交互安全'],
        ],
        notice: 'search 元素把控件标记为搜索/筛选 UI。它不是结果容器。',
      }
    : {
        searchAria: 'Filter feature examples',
        label: 'Filter feature table',
        placeholder: 'Try dialog or form',
        caption: 'Results stay in the main content, outside the search landmark.',
        feature: 'Feature',
        problem: 'Problem area',
        rows: [
          ['Popover', 'Layered UI'],
          ['Dialog', 'Modal tasks'],
          ['Search', 'Semantic landmark'],
          ['showPicker', 'Native form pickers'],
          ['inert', 'Interaction safety'],
        ],
        notice: 'The search element marks the controls as search/filter UI. It is not a results container.',
      },
);

const filteredRows = computed(() => {
  const needle = query.value.trim().toLowerCase();
  if (!needle) return copy.value.rows;
  return copy.value.rows.filter((row) => row.join(' ').toLowerCase().includes(needle));
});
</script>

<template>
  <div class="demo-two-col">
    <div class="demo-panel">
      <search :aria-label="copy.searchAria" class="native-search">
        <label for="search-demo-query">{{ copy.label }}</label>
        <input id="search-demo-query" v-model="query" class="demo-input" type="search" :placeholder="copy.placeholder" />
      </search>

      <table class="feature-table">
        <caption>{{ copy.caption }}</caption>
        <thead>
          <tr>
            <th>{{ copy.feature }}</th>
            <th>{{ copy.problem }}</th>
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
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ copy.notice }}</p>
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
