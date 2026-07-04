<script setup>
import { computed } from 'vue';
import { useLocale } from '../useLocale';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const { locale, text } = useLocale();
const endScript = '</' + 'script>';

const demos = {
  en: {
    'responsive-images': {
      title: 'Editorial image slot',
      body: 'The browser gets candidates for format, crop, and width, then picks the smallest usable asset for the current layout.',
      rows: [
        ['Desktop crop', 'Wide AVIF source for split hero layouts'],
        ['Mobile crop', 'Fallback img keeps the same meaning in a tighter frame'],
        ['Sizes contract', 'Documents the rendered width the browser should expect'],
      ],
      note: 'Resize the page and the markup stays declarative; the choice belongs to the browser.',
      notice: 'The useful part is not the syntax volume; it is that image choice moves out of JavaScript and into the preload scanner.',
      code: '<picture>\n  <source type="image/avif" srcset="hero.avif 1200w, hero@2x.avif 2400w" sizes="(min-width: 900px) 50vw, 100vw">\n  <img src="hero.jpg" srcset="hero-600.jpg 600w, hero-1200.jpg 1200w" sizes="100vw" alt="Project preview">\n</picture>',
    },
    'native-lazy-loading': {
      title: 'Gallery loading queue',
      body: 'Critical media stays eager; supporting screenshots defer until the browser thinks they are close enough.',
      rows: [
        ['Hero screenshot', 'eager, explicit dimensions'],
        ['Changelog image', 'loading="lazy"'],
        ['Map embed', 'iframe loading="lazy" with a real title'],
      ],
      note: 'Lazy loading is a scheduling hint, not a replacement for dimensions or alt text.',
      notice: 'This is strongest when it reduces competition for first-screen content without hiding meaningful information.',
      code: '<img src="report-chart.png" width="960" height="540" loading="lazy" alt="Quarterly report chart">\n<iframe src="/demo/map" loading="lazy" title="Office map"></iframe>',
    },
    'fetch-priority': {
      title: 'Launch page priorities',
      body: 'The hero image is high priority, while decorative avatars and offscreen images are intentionally low priority.',
      rows: [
        ['Hero artwork', 'fetchpriority="high"'],
        ['Customer avatar', 'fetchpriority="low"'],
        ['Offscreen media', 'lazy plus low priority'],
      ],
      note: 'Use this after the HTML already discovers the important resource early.',
      notice: 'Priority hints work best as a tie-breaker between comparable resources, not as a repair for hidden assets.',
      code: '<img src="hero.avif" fetchpriority="high" alt="Dashboard overview">\n<img src="avatar.png" loading="lazy" fetchpriority="low" alt="Team member">',
    },
    'preload-links': {
      title: 'Checkout head plan',
      body: 'The font and hero receipt image are declared before CSS and templates would otherwise reveal them.',
      rows: [
        ['Font file', 'preload as font with crossorigin'],
        ['Hero image', 'preload as image with responsive hints'],
        ['Icon sprite', 'ordinary request, not current-screen critical'],
      ],
      note: 'A preload that is not used soon is a bandwidth bug wearing a performance costume.',
      notice: 'The key is confidence: preload only what the current navigation definitely needs.',
      code: '<link rel="preload" href="/fonts/plex.woff2" as="font" type="font/woff2" crossorigin>\n<link rel="preload" href="/hero.avif" as="image">',
    },
    modulepreload: {
      title: 'Module graph warmup',
      body: 'The app shell module is fetched into the module map before hydration asks for it.',
      rows: [
        ['app.js', 'modulepreload because the page will execute it'],
        ['checkout.js', 'route chunk, do not preload on every page'],
        ['analytics.js', 'defer; not required for interaction'],
      ],
      note: 'Good modulepreload choices are boring and predictable.',
      notice: 'This highlights ES module loading, not generic asset prefetching.',
      code: `<link rel="modulepreload" href="/assets/app.js">\n<script type="module" src="/assets/app.js">${endScript}`,
    },
    'blocking-render': {
      title: 'First-paint gate',
      body: 'Only a tiny critical theme resource is allowed to block render; analytics and widgets wait.',
      rows: [
        ['Theme boot', 'blocking="render"'],
        ['Widget bundle', 'async, not render-blocking'],
        ['Experiment tag', 'late, never blocks first paint'],
      ],
      note: 'If the resource is not essential to the first readable frame, it should not block rendering.',
      notice: 'The feature is powerful precisely because it is risky: render blocking is a budget, not a default.',
      code: `<script async blocking="render" src="/critical-theme.js">${endScript}\n<link rel="stylesheet" blocking="render" href="/critical.css">`,
    },
    'import-maps': {
      title: 'Design-system module aliases',
      body: 'Readable imports point to versioned browser modules without a build-time rewrite.',
      rows: [
        ['lit', '/vendor/lit.js'],
        ['app/', '/assets/app/'],
        ['tokens', '/assets/design-tokens.js'],
      ],
      note: 'The import map must be parsed before modules that use these aliases.',
      notice: 'This is most useful when a document owns its runtime module contract explicitly.',
      code: `<script type="importmap">\n{\n  "imports": {\n    "lit": "/vendor/lit.js",\n    "app/": "/assets/app/"\n  }\n}\n${endScript}`,
    },
    'speculation-rules': {
      title: 'Docs navigation speculation',
      body: 'Likely next pages are prefetched, while account mutation routes are deliberately excluded.',
      rows: [
        ['/docs/start', 'safe prefetch'],
        ['/pricing', 'safe prefetch'],
        ['/logout', 'never speculate'],
      ],
      note: 'Start with prefetch. Prerender deserves a tighter privacy and side-effect review.',
      notice: 'Speculation rules target future navigations, not arbitrary assets.',
      code: `<script type="speculationrules">\n{\n  "prefetch": [{ "urls": ["/pricing", "/docs/start"] }]\n}\n${endScript}`,
    },
    datalist: {
      title: 'Route planner suggestions',
      body: 'Airport codes are suggested, but charter stops and private fields remain valid free-form input.',
      rows: [
        ['SFO', 'Frequent route'],
        ['HND', 'International hub'],
        ['Custom stop', 'Still accepted'],
      ],
      note: 'Use datalist when suggestions should help, not constrain.',
      notice: 'The distinction from select matters: datalist is autocomplete, not a closed list.',
      code: '<input id="airport" name="airport" list="airport-options">\n<datalist id="airport-options">\n  <option value="SFO"></option>\n  <option value="HND"></option>\n</datalist>',
    },
    'form-attribute': {
      title: 'Split profile editor',
      body: 'A sticky footer submit button belongs to a form elsewhere in the DOM.',
      rows: [
        ['Main form', 'id="profile-form"'],
        ['Name input', 'form="profile-form"'],
        ['Sticky save button', 'type submit plus same form id'],
      ],
      note: 'This keeps layout flexible without losing native form ownership.',
      notice: 'The win is that form semantics do not have to mirror visual layout wrappers.',
      code: '<form id="profile-form"></form>\n<input name="displayName" form="profile-form">\n<button type="submit" form="profile-form">Save profile</button>',
    },
    'submitter-overrides': {
      title: 'CMS action bar',
      body: 'Save draft and Publish share fields but submit with different validation and destinations.',
      rows: [
        ['Save draft', 'formaction="/drafts" formnovalidate'],
        ['Preview', 'formtarget="_blank"'],
        ['Publish', 'default action with validation'],
      ],
      note: 'The clicked submitter becomes part of the form contract.',
      notice: 'This avoids duplicate forms when the user is choosing an action, not a different data model.',
      code: '<form action="/publish" method="post">\n  <button type="submit" formaction="/drafts" formnovalidate>Save draft</button>\n  <button type="submit">Publish</button>\n</form>',
    },
    'constraint-validation': {
      title: 'Repository settings validation',
      body: 'Presence, length, and syntax constraints are native; business rules still stay server-owned.',
      rows: [
        ['Repository slug', 'required pattern minlength'],
        ['Star limit', 'number min step'],
        ['Reserved names', 'product rule, not native'],
      ],
      note: 'Native constraints reduce boilerplate but do not replace final validation.',
      notice: 'Use the browser validity model for shape checks, then layer domain logic on top.',
      code: '<input name="repo" required pattern="[a-z0-9-]+" minlength="3">\n<input name="stars" type="number" min="0" step="1">',
    },
    'input-hints': {
      title: 'One-time code sign-in',
      body: 'The field remains text-like but asks mobile browsers for a numeric keypad and a done key.',
      rows: [
        ['Keyboard', 'inputmode="numeric"'],
        ['Autofill', 'autocomplete="one-time-code"'],
        ['Enter key', 'enterkeyhint="done"'],
      ],
      note: 'Hints improve input ergonomics; validation is still separate.',
      notice: 'This is a UX contract with virtual keyboards, not a data type conversion.',
      code: '<input autocomplete="one-time-code" inputmode="numeric" enterkeyhint="done" maxlength="6">',
    },
    'download-attribute': {
      title: 'Report export',
      body: 'The link clearly downloads a CSV and suggests the saved filename.',
      rows: [
        ['Destination', 'same-origin CSV'],
        ['Filename', 'orders-2026-07.csv'],
        ['Label', 'states format and action'],
      ],
      note: 'The browser may still adjust or ignore the filename depending on policy.',
      notice: 'download is a link behavior hint; it is not a way to bypass browser security.',
      code: '<a href="/exports/orders.csv" download="orders-2026-07.csv">Download CSV</a>',
    },
    'theme-color': {
      title: 'Browser chrome palette',
      body: 'Light and dark theme colors are declared with media queries so surrounding UI can match the page.',
      rows: [
        ['Light', '#ffffff'],
        ['Dark', '#0f172a'],
        ['Fallback', 'browser may transform or ignore'],
      ],
      note: 'This affects browser UI surfaces, not the page theme by itself.',
      notice: 'It is useful polish, but platform behavior is intentionally not identical everywhere.',
      code: '<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">\n<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)">',
    },
    'color-scheme-meta': {
      title: 'Native control scheme',
      body: 'The document tells the browser it supports dark and light before all CSS is parsed.',
      rows: [
        ['Scrollbars', 'use compatible defaults'],
        ['Form controls', 'avoid wrong-scheme flash'],
        ['Components', 'can refine with CSS color-scheme'],
      ],
      note: 'This is an early document-level declaration, not a full design token system.',
      notice: 'The key benefit is user-agent UI alignment before component CSS arrives.',
      code: '<meta name="color-scheme" content="dark light">',
    },
    'iframe-sandbox': {
      title: 'User-content preview',
      body: 'The preview starts restricted and opts into only the features the embedded document needs.',
      rows: [
        ['Default sandbox', 'scripts, forms, popups blocked'],
        ['allow-forms', 'needed for preview form testing'],
        ['allow-scripts', 'review before adding'],
      ],
      note: 'The smallest token list is usually the safest token list.',
      notice: 'Sandboxing is a capability budget for embedded documents.',
      code: '<iframe title="Preview" src="/preview" sandbox="allow-forms allow-scripts"></iframe>',
    },
    'iframe-srcdoc': {
      title: 'Email template preview',
      body: 'Generated markup renders inside a contained iframe without creating a temporary route.',
      rows: [
        ['Markup', 'srcdoc string'],
        ['Isolation', 'iframe document'],
        ['Safety', 'pair with sandbox for untrusted content'],
      ],
      note: 'srcdoc is convenient; untrusted HTML still needs a security plan.',
      notice: 'This is most useful for previews where the embedded document is the point of the UI.',
      code: '<iframe title="Email preview" sandbox srcdoc="<h1>Receipt</h1><p>Total: $42</p>"></iframe>',
    },
    'iframe-credentialless': {
      title: 'Third-party widget isolation',
      body: 'The embed gets an ephemeral context instead of the third-party origin’s normal credentials.',
      rows: [
        ['COEP page', 'needs cross-origin isolation'],
        ['Partner widget', 'does not send COEP'],
        ['credentialless', 'fresh storage and no cookies'],
      ],
      note: 'Only use when the widget can work without its usual logged-in state.',
      notice: 'This is not the same as sandbox; it is about credential and storage context.',
      code: '<iframe title="Partner widget" src="https://partner.example/widget" credentialless></iframe>',
    },
  },
  zh: {
    'responsive-images': {
      title: '编辑型图片位',
      body: '浏览器拿到格式、裁切和宽度候选项，再为当前布局选择最小可用资源。',
      rows: [
        ['桌面裁切', '分栏 hero 使用宽版 AVIF source'],
        ['移动裁切', 'fallback img 在紧凑画面里保留同一语义'],
        ['sizes 合约', '说明浏览器应预期的渲染宽度'],
      ],
      note: '改变视口时，标记仍是声明式的；选择权交给浏览器。',
      notice: '价值不在语法多，而在图片选择进入 HTML 和 preload scanner，而不是 JavaScript。',
      code: '<picture>\n  <source type="image/avif" srcset="hero.avif 1200w, hero@2x.avif 2400w" sizes="(min-width: 900px) 50vw, 100vw">\n  <img src="hero.jpg" srcset="hero-600.jpg 600w, hero-1200.jpg 1200w" sizes="100vw" alt="Project preview">\n</picture>',
    },
    'native-lazy-loading': {
      title: '图库加载队列',
      body: '关键媒体保持 eager；辅助截图交给浏览器判断何时足够接近视口再加载。',
      rows: [
        ['Hero 截图', 'eager，并写明尺寸'],
        ['Changelog 图片', 'loading="lazy"'],
        ['地图嵌入', 'iframe loading="lazy" 且有 title'],
      ],
      note: 'Lazy loading 是调度提示，不替代尺寸和 alt 文本。',
      notice: '它最适合减少首屏资源竞争，而不是隐藏有意义内容。',
      code: '<img src="report-chart.png" width="960" height="540" loading="lazy" alt="Quarterly report chart">\n<iframe src="/demo/map" loading="lazy" title="Office map"></iframe>',
    },
    'fetch-priority': {
      title: '发布页资源优先级',
      body: 'Hero 图设为高优先级，装饰头像和屏幕外图片明确降为低优先级。',
      rows: [
        ['Hero 视觉', 'fetchpriority="high"'],
        ['客户头像', 'fetchpriority="low"'],
        ['屏幕外媒体', 'lazy 加 low priority'],
      ],
      note: '先让 HTML 尽早发现关键资源，再用这个提示微调。',
      notice: '优先级提示更适合作为同类资源的排序信号，而不是修复隐藏资源。',
      code: '<img src="hero.avif" fetchpriority="high" alt="Dashboard overview">\n<img src="avatar.png" loading="lazy" fetchpriority="low" alt="Team member">',
    },
    'preload-links': {
      title: '结账页 head 计划',
      body: '字体和收据 hero 图在 CSS 与模板发现它们之前就被声明。',
      rows: [
        ['字体文件', 'preload as font 并带 crossorigin'],
        ['Hero 图', 'preload as image，可带响应式提示'],
        ['图标 sprite', '普通请求，不是首屏关键'],
      ],
      note: '没有很快用到的 preload，就是披着性能外衣的带宽浪费。',
      notice: '关键点是确定性：只 preload 当前导航一定需要的资源。',
      code: '<link rel="preload" href="/fonts/plex.woff2" as="font" type="font/woff2" crossorigin>\n<link rel="preload" href="/hero.avif" as="image">',
    },
    modulepreload: {
      title: 'Module graph 预热',
      body: '应用 shell 模块会在 hydration 请求它之前进入 module map。',
      rows: [
        ['app.js', '当前页一定执行，所以 modulepreload'],
        ['checkout.js', '路由 chunk，不应每页预加载'],
        ['analytics.js', '延后；交互不依赖它'],
      ],
      note: '好的 modulepreload 选择通常很无聊，也很确定。',
      notice: '这里展示的是 ES module 加载，不是普通资源 prefetch。',
      code: `<link rel="modulepreload" href="/assets/app.js">\n<script type="module" src="/assets/app.js">${endScript}`,
    },
    'blocking-render': {
      title: '首次绘制闸门',
      body: '只有很小的关键主题资源允许阻塞渲染；analytics 和 widget 等待。',
      rows: [
        ['主题启动', 'blocking="render"'],
        ['Widget bundle', 'async，不阻塞渲染'],
        ['实验标签', '晚点加载，永不阻塞首屏'],
      ],
      note: '如果资源不是首个可读画面必需，就不应该阻塞渲染。',
      notice: '这个能力很强，也正因此危险：render blocking 是预算，不是默认值。',
      code: `<script async blocking="render" src="/critical-theme.js">${endScript}\n<link rel="stylesheet" blocking="render" href="/critical.css">`,
    },
    'import-maps': {
      title: '设计系统模块别名',
      body: '可读 import 指向带版本的浏览器模块，不需要构建期改写。',
      rows: [
        ['lit', '/vendor/lit.js'],
        ['app/', '/assets/app/'],
        ['tokens', '/assets/design-tokens.js'],
      ],
      note: 'Import map 必须在使用这些别名的 module 前被解析。',
      notice: '当文档需要明确拥有运行时模块合约时，这个能力尤其有用。',
      code: `<script type="importmap">\n{\n  "imports": {\n    "lit": "/vendor/lit.js",\n    "app/": "/assets/app/"\n  }\n}\n${endScript}`,
    },
    'speculation-rules': {
      title: '文档导航推测',
      body: '可能的下一页被预取，而账户变更路由被明确排除。',
      rows: [
        ['/docs/start', '安全 prefetch'],
        ['/pricing', '安全 prefetch'],
        ['/logout', '永不推测'],
      ],
      note: '先从 prefetch 开始。Prerender 需要更严格的隐私和副作用审查。',
      notice: 'Speculation rules 面向未来导航，不是任意资源预取。',
      code: `<script type="speculationrules">\n{\n  "prefetch": [{ "urls": ["/pricing", "/docs/start"] }]\n}\n${endScript}`,
    },
    datalist: {
      title: '航线规划建议',
      body: '机场代码会被建议，但包机停靠点和私人机场仍是合法自由输入。',
      rows: [
        ['SFO', '常用航线'],
        ['HND', '国际枢纽'],
        ['自定义停靠点', '仍然接受'],
      ],
      note: '当建议用于帮助而不是限制时，用 datalist。',
      notice: '它和 select 的区别很关键：datalist 是自动建议，不是封闭列表。',
      code: '<input id="airport" name="airport" list="airport-options">\n<datalist id="airport-options">\n  <option value="SFO"></option>\n  <option value="HND"></option>\n</datalist>',
    },
    'form-attribute': {
      title: '分栏资料编辑器',
      body: 'Sticky footer 提交按钮属于 DOM 其他位置的 form。',
      rows: [
        ['主表单', 'id="profile-form"'],
        ['姓名输入', 'form="profile-form"'],
        ['Sticky 保存按钮', 'submit 且使用同一个 form id'],
      ],
      note: '这让布局保持灵活，同时不丢掉原生表单归属。',
      notice: '收益在于：表单语义不必完全跟随视觉 wrapper。',
      code: '<form id="profile-form"></form>\n<input name="displayName" form="profile-form">\n<button type="submit" form="profile-form">Save profile</button>',
    },
    'submitter-overrides': {
      title: 'CMS 操作栏',
      body: '保存草稿和发布共用字段，但用不同的校验和提交目标。',
      rows: [
        ['保存草稿', 'formaction="/drafts" formnovalidate'],
        ['预览', 'formtarget="_blank"'],
        ['发布', '默认 action 且完整校验'],
      ],
      note: '被点击的 submitter 本身就是表单合约的一部分。',
      notice: '当用户选择的是动作，而不是另一套数据模型时，它能避免重复表单。',
      code: '<form action="/publish" method="post">\n  <button type="submit" formaction="/drafts" formnovalidate>Save draft</button>\n  <button type="submit">Publish</button>\n</form>',
    },
    'constraint-validation': {
      title: '仓库设置校验',
      body: '必填、长度和语法约束交给原生；业务规则仍由服务端负责。',
      rows: [
        ['仓库 slug', 'required pattern minlength'],
        ['Star 限制', 'number min step'],
        ['保留名称', '产品规则，不是原生约束'],
      ],
      note: '原生约束减少样板代码，但不替代最终校验。',
      notice: '用浏览器 validity model 做形状检查，再叠加领域逻辑。',
      code: '<input name="repo" required pattern="[a-z0-9-]+" minlength="3">\n<input name="stars" type="number" min="0" step="1">',
    },
    'input-hints': {
      title: '一次性验证码登录',
      body: '字段仍然像文本输入，但请求移动浏览器展示数字键盘和完成键。',
      rows: [
        ['键盘', 'inputmode="numeric"'],
        ['自动填充', 'autocomplete="one-time-code"'],
        ['Enter 键', 'enterkeyhint="done"'],
      ],
      note: 'Hint 改善输入体验；校验仍是另一件事。',
      notice: '这是和虚拟键盘的 UX 合约，不是数据类型转换。',
      code: '<input autocomplete="one-time-code" inputmode="numeric" enterkeyhint="done" maxlength="6">',
    },
    'download-attribute': {
      title: '报表导出',
      body: '链接明确下载 CSV，并建议保存文件名。',
      rows: [
        ['目标', '同源 CSV'],
        ['文件名', 'orders-2026-07.csv'],
        ['标签', '说明格式和动作'],
      ],
      note: '浏览器仍可能按策略调整或忽略文件名。',
      notice: 'download 是链接行为提示，不是绕过浏览器安全的方式。',
      code: '<a href="/exports/orders.csv" download="orders-2026-07.csv">Download CSV</a>',
    },
    'theme-color': {
      title: '浏览器 chrome 调色板',
      body: '明暗 theme-color 用媒体查询声明，让外围 UI 能匹配页面。',
      rows: [
        ['浅色', '#ffffff'],
        ['深色', '#0f172a'],
        ['Fallback', '浏览器可能转换或忽略'],
      ],
      note: '它影响浏览器 UI 表面，不会自己创建页面主题。',
      notice: '这是有用的打磨，但平台行为并不会处处一致。',
      code: '<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">\n<meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)">',
    },
    'color-scheme-meta': {
      title: '原生控件颜色方案',
      body: '文档在所有 CSS 解析完之前告诉浏览器：它支持深色和浅色。',
      rows: [
        ['滚动条', '使用兼容默认值'],
        ['表单控件', '避免闪成错误方案'],
        ['组件', '可用 CSS color-scheme 细化'],
      ],
      note: '这是早期文档级声明，不是完整设计 token 系统。',
      notice: '核心收益是组件 CSS 到达前，UA UI 已经知道该用什么方案。',
      code: '<meta name="color-scheme" content="dark light">',
    },
    'iframe-sandbox': {
      title: '用户内容预览',
      body: '预览默认受限，只放开嵌入文档真正需要的能力。',
      rows: [
        ['默认 sandbox', '脚本、表单、弹窗被阻止'],
        ['allow-forms', '测试预览表单时需要'],
        ['allow-scripts', '添加前先审查'],
      ],
      note: '最小 token 列表通常就是最安全的 token 列表。',
      notice: 'Sandbox 是嵌入文档的能力预算。',
      code: '<iframe title="Preview" src="/preview" sandbox="allow-forms allow-scripts"></iframe>',
    },
    'iframe-srcdoc': {
      title: '邮件模板预览',
      body: '生成的标记在独立 iframe 中渲染，不需要创建临时路由。',
      rows: [
        ['标记', 'srcdoc 字符串'],
        ['隔离', 'iframe document'],
        ['安全', '不可信内容配合 sandbox'],
      ],
      note: 'srcdoc 很方便；不可信 HTML 仍然需要安全方案。',
      notice: '当 UI 的核心就是预览嵌入文档时，它最有用。',
      code: '<iframe title="Email preview" sandbox srcdoc="<h1>Receipt</h1><p>Total: $42</p>"></iframe>',
    },
    'iframe-credentialless': {
      title: '第三方 widget 隔离',
      body: '嵌入内容获得临时上下文，而不是第三方源平常的凭据。',
      rows: [
        ['COEP 页面', '需要跨源隔离'],
        ['Partner widget', '没有发送 COEP'],
        ['credentialless', '全新 storage 且无 cookies'],
      ],
      note: '只有 widget 不依赖常规登录态时才适合使用。',
      notice: '这和 sandbox 不同；它处理的是凭据和存储上下文。',
      code: '<iframe title="Partner widget" src="https://partner.example/widget" credentialless></iframe>',
    },
  },
};

const demo = computed(() => demos[locale.value]?.[props.slug] || demos.en[props.slug]);
</script>

<template>
  <div v-if="demo" class="demo-two-col">
    <div class="demo-panel pattern-panel">
      <h3>{{ demo.title }}</h3>
      <p>{{ demo.body }}</p>
      <div class="pattern-stack">
        <div v-for="row in demo.rows" :key="row[0]" class="pattern-row">
          <strong>{{ row[0] }}</strong>
          <span>{{ row[1] }}</span>
        </div>
      </div>
      <p class="demo-note">{{ demo.note }}</p>
    </div>

    <div class="demo-panel">
      <h3>{{ text.demo.notice }}</h3>
      <p>{{ demo.notice }}</p>
      <pre class="demo-code"><code>{{ demo.code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.pattern-panel {
  display: grid;
  gap: 14px;
}

.pattern-panel p {
  margin: 0;
}

.pattern-stack {
  display: grid;
  gap: 1px;
  border: 1px solid var(--ah5-line);
  background: var(--ah5-line);
}

.pattern-row {
  display: grid;
  grid-template-columns: minmax(120px, 0.55fr) minmax(0, 1fr);
  gap: 14px;
  align-items: start;
  background: var(--ah5-surface);
  padding: 12px;
}

.pattern-row strong {
  color: var(--ah5-ink);
}

.pattern-row span {
  color: var(--ah5-muted);
}

@media (max-width: 700px) {
  .pattern-row {
    grid-template-columns: 1fr;
    gap: 4px;
  }
}
</style>
