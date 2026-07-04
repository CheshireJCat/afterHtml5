# After HTML5

After HTML5 is a curated navigation site for modern HTML capabilities after the HTML5 branding era.

It is not an MDN mirror. Each feature page answers a narrower set of practical questions:

- What problem does this HTML capability solve?
- What does the syntax look like?
- Can I use it in production today?
- What does a real, feature-focused demo feel like?
- What accessibility or progressive-enhancement details should I watch?

## What Is Included

- A VitePress documentation site generated from structured data.
- English and Simplified Chinese routes with localized navigation, sidebars, feature pages, and demo copy.
- 30 feature pages across native interaction, forms, semantics, Web Components, editing, media, loading, metadata, embedding, and findability.
- Purpose-built demos for each feature, such as:
  - `popover` as a top-layer command tray.
  - Invoker Commands as hydration-independent controls.
  - `<dialog>` with `form method="dialog"` and `requestClose()`.
  - `<details name>` as a JavaScript-free exclusive accordion.
  - `<search>` as a semantic filter landmark.
  - Declarative Shadow DOM rendered through parser-owned iframe markup.
  - `contenteditable="plaintext-only"` as a plain-text editing surface.
  - `showPicker()` for native date, color, and file pickers.
  - `inert` for true workspace lockout.
  - Customizable `<select>` / `<selectedcontent>` as a progressive enhancement.
  - `hidden="until-found"` for searchable collapsed reference content.
  - Responsive images, native lazy loading, preload, modulepreload, and fetch priority for resource planning.
  - Import maps and speculation rules for browser-owned module and navigation behavior.
  - Form ownership, submitter overrides, datalist, constraint validation, and input hints for practical forms.
  - iframe sandbox, srcdoc, and credentialless patterns for embedded content boundaries.

## Quick Start

```bash
npm install
npm run docs:dev
```

## Available Scripts

```bash
npm run docs:generate
npm run docs:dev
npm run docs:build
npm run docs:preview
```

- `docs:generate`: reads `data/features.json` and regenerates feature pages, feature index data, and sidebar data.
- `docs:dev`: regenerates docs and starts VitePress locally.
- `docs:build`: regenerates docs and builds the static site.
- `docs:preview`: previews the built site locally.

## Language Routes

- English: `/`
- Simplified Chinese: `/zh/`
- English feature pages: `/features/<slug>`
- Chinese feature pages: `/zh/features/<slug>`

## Project Structure

```text
.
|-- data/
|   |-- features.json              # Structured source of HTML capability data
|   `-- zh.json                    # Chinese labels and feature translations
|-- docs/
|   |-- .vitepress/
|   |   |-- config.mjs             # VitePress config
|   |   |-- generated/             # Generated feature/sidebar data
|   |   `-- theme/
|   |       |-- components/         # Home, index, demo components
|   |       `-- style.css          # Site design tokens and global UI
|   |-- features/                  # Generated English feature pages
|   |-- zh/                        # Generated Simplified Chinese pages
|   `-- index.md                   # Generated English homepage
|-- scripts/
|   `-- generate-docs.mjs          # Data-to-Markdown generator
`-- .github/workflows/
    `-- deploy.yml                 # GitHub Pages deployment workflow
```

## Content Model

The source of truth is `data/features.json`. Chinese UI labels and feature translations live in `data/zh.json`.
Each feature includes:

- `name`, `slug`, `category`
- `maturity`, `status`, `support`
- `summary`, `solves`, `usage`
- `syntax`, `demo`
- `pitfalls`, `accessibility`
- `mdn`, `spec`, `caniuse`

After editing the data, regenerate the site:

```bash
npm run docs:generate
```

## Content Guidelines

- Keep explanations practical and short.
- Prefer official references: MDN, WHATWG HTML, Web Platform DX, browser vendor docs, and Can I Use.
- Treat browser support as time-sensitive; link out instead of copying large compatibility tables.
- Mark Limited availability and experimental features clearly.
- Make demos highlight the feature itself, not a generic documentation card.
- Do not present "HTML6" as a formal release.

## Deployment

The site is configured for GitHub Pages at:

```text
https://cheshirejcat.github.io/afterHtml5/
https://cheshirejcat.github.io/afterHtml5/zh/
```

Repository Pages settings should use:

- Source: GitHub Actions
- Base path: `/afterHtml5/`

## License

MIT
