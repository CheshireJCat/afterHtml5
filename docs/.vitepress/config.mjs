import { defineConfig } from 'vitepress';
import { sidebar } from './generated/sidebar.mjs';

export default defineConfig({
  title: 'After HTML5',
  description: 'HTML capabilities after the HTML5 era.',
  base: process.env.NODE_ENV === 'production' ? '/afterHtml5/' : '/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/after-html5-mark.svg',
    nav: [
      { text: 'Features', link: '/features/' },
      { text: 'GitHub', link: 'https://github.com/CheshireJCat/afterHtml5' },
    ],
    search: {
      provider: 'local',
    },
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CheshireJCat/afterHtml5' },
    ],
    outline: {
      level: [2, 3],
    },
    footer: {
      message: 'Curated modern HTML demos. Verify production support with MDN and compatibility data.',
      copyright: 'Released under the MIT License.',
    },
  },
});
