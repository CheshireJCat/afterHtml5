import { defineConfig } from 'vitepress';
import { sidebarEn } from './generated/sidebar.en.mjs';
import { sidebarZh } from './generated/sidebar.zh.mjs';

const githubLink = 'https://github.com/CheshireJCat/afterHtml5';

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
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      title: 'After HTML5',
      description: 'HTML capabilities after the HTML5 era.',
      themeConfig: {
        nav: [
          { text: 'Features', link: '/features/' },
          { text: 'GitHub', link: githubLink },
        ],
        sidebar: sidebarEn,
        langMenuLabel: 'Change language',
        footer: {
          message: 'Curated modern HTML demos. Verify production support with MDN and compatibility data.',
          copyright: 'Released under the MIT License.',
        },
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: 'After HTML5',
      description: 'HTML5 之后的新 HTML 能力展示项目。',
      themeConfig: {
        nav: [
          { text: '特性', link: '/zh/features/' },
          { text: 'GitHub', link: githubLink },
        ],
        sidebar: sidebarZh,
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        skipToContentLabel: '跳到内容',
        outline: {
          label: '本页目录',
          level: [2, 3],
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        search: {
          provider: 'local',
          options: {
            locales: {
              zh: {
                translations: {
                  button: {
                    buttonText: '搜索',
                    buttonAriaLabel: '搜索文档',
                  },
                  modal: {
                    displayDetails: '显示详细列表',
                    resetButtonTitle: '重置搜索',
                    backButtonTitle: '关闭搜索',
                    noResultsText: '没有结果：',
                    footer: {
                      selectText: '选择',
                      selectKeyAriaLabel: '回车',
                      navigateText: '导航',
                      navigateUpKeyAriaLabel: '上箭头',
                      navigateDownKeyAriaLabel: '下箭头',
                      closeText: '关闭',
                      closeKeyAriaLabel: 'Esc',
                    },
                  },
                },
              },
            },
          },
        },
        footer: {
          message: '现代 HTML demo 导航。生产环境支持情况请以 MDN 和兼容性数据为准。',
          copyright: 'Released under the MIT License.',
        },
      },
    },
  },
  themeConfig: {
    logo: '/after-html5-mark.svg',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: githubLink },
    ],
    outline: {
      level: [2, 3],
    },
  },
});
