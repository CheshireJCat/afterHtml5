import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import featuresEn from '../../generated/features.en.json';
import featuresZh from '../../generated/features.zh.json';

const text = {
  en: {
    home: {
      kicker: 'HTML Living Standard after the HTML5 era',
      lead: 'A practical map of modern HTML capabilities: what problem they solve, how the syntax works, when to ship them, and how the browser behaves in a real UI.',
      browse: 'Browse features',
      specimen: 'feature specimen',
      entries: 'entries',
      startTitle: 'Start With Problems',
      startBody: 'Each page is anchored by a concrete UI job. The demo is not decorative; it exists to show exactly what the HTML primitive gives you.',
      modelTitle: 'Content Model',
      modelBody: 'The source of truth is structured data. Pages, sidebar, index rows, maturity labels, references, and demos stay in sync.',
    },
    index: {
      searchAria: 'Feature search and filters',
      searchLabel: 'Search features',
      searchPlaceholder: 'popover, form, shadow, search',
      categoryLabel: 'Category',
      allCategories: 'All categories',
      maturityLabel: 'Maturity',
      allMaturity: 'All maturity levels',
      matchPrefix: '',
      matchSuffix: 'features match the current filters.',
    },
    demo: {
      label: 'Demo',
      notice: 'What to notice',
      noDemo: 'No demo component is registered for this feature yet.',
    },
    maturity: {
      baseline: 'baseline',
      widely: 'widely',
      limited: 'limited',
      modern: 'modern',
    },
  },
  zh: {
    home: {
      kicker: 'HTML5 时代之后的 HTML Living Standard',
      lead: '一份面向前端开发者的现代 HTML 能力地图：它解决什么问题，语法怎么写，什么时候适合上线，以及浏览器在真实 UI 中会怎么表现。',
      browse: '浏览特性',
      specimen: '特性样本',
      entries: '个条目',
      startTitle: '从问题出发',
      startBody: '每个页面都绑定一个具体 UI 任务。demo 不是装饰，而是为了展示这个 HTML 原语到底替你处理了什么。',
      modelTitle: '内容模型',
      modelBody: '结构化数据是唯一源头。页面、侧边栏、索引、成熟度标签、参考链接和 demo 保持同步。',
    },
    index: {
      searchAria: '特性搜索和筛选',
      searchLabel: '搜索特性',
      searchPlaceholder: 'popover、表单、shadow、搜索',
      categoryLabel: '分类',
      allCategories: '全部分类',
      maturityLabel: '成熟度',
      allMaturity: '全部成熟度',
      matchPrefix: '当前筛选匹配',
      matchSuffix: '个特性',
    },
    demo: {
      label: '演示',
      notice: '观察重点',
      noDemo: '这个特性还没有注册 demo 组件。',
    },
    maturity: {
      baseline: 'Baseline',
      widely: '广泛可用',
      limited: '有限支持',
      modern: '现代 HTML',
    },
  },
};

export function useLocale() {
  const { lang } = useData();
  const locale = computed(() => (lang.value || '').startsWith('zh') ? 'zh' : 'en');
  const isZh = computed(() => locale.value === 'zh');
  const features = computed(() => (isZh.value ? featuresZh : featuresEn));
  const labels = computed(() => text[locale.value]);
  const featureBase = computed(() => (isZh.value ? '/zh/features/' : '/features/'));
  const indexLink = computed(() => withBase(featureBase.value));
  const featureLink = (slug) => withBase(`${featureBase.value}${slug}`);

  return {
    locale,
    isZh,
    features,
    text: labels,
    indexLink,
    featureLink,
    withBase,
  };
}
