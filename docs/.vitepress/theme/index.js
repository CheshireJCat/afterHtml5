import DefaultTheme from 'vitepress/theme';
import HomePage from './components/HomePage.vue';
import FeatureIndex from './components/FeatureIndex.vue';
import FeatureDemo from './components/FeatureDemo.vue';
import './style.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomePage', HomePage);
    app.component('FeatureIndex', FeatureIndex);
    app.component('FeatureDemo', FeatureDemo);
  },
};
