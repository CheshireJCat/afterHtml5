# AGENTS.md

This repository is a VitePress site for practical demos of modern HTML features after the HTML5 branding era.
Keep future changes focused, generated, bilingual, and feature-led.

## Project Contract

- The site name is `After HTML5`.
- English lives at `/`; Simplified Chinese lives at `/zh/`.
- English feature pages live under `/features/<slug>`.
- Chinese feature pages live under `/zh/features/<slug>`.
- GitHub Pages deploys from GitHub Actions with production base `/afterHtml5/`.
- The homepage must not show the VitePress sidebar.

## Source Of Truth

- `data/features.json` is the canonical English feature data.
- `data/zh.json` contains Chinese site labels, category labels, and feature translations.
- `scripts/generate-docs.mjs` generates Markdown pages and sidebar/data modules.
- Do not hand-edit generated feature pages for content changes:
  - `docs/features/*.md`
  - `docs/zh/features/*.md`
  - `docs/.vitepress/generated/*`
- Instead, edit `data/features.json`, `data/zh.json`, or `scripts/generate-docs.mjs`, then run `npm run docs:generate`.

## Bilingual Rules

- Any new feature must be represented in both English and Chinese.
- Keep `slug` stable; routes and generated links depend on it.
- Category anchors should stay stable across languages by using the English source category slug.
- UI strings in Vue components should go through `docs/.vitepress/theme/components/useLocale.js` unless they are intentionally code literals.
- Demo code snippets can remain in English when they are literal HTML/JS examples, but visible explanatory UI should be localized.

## Homepage Rules

- Generated homepages must keep this frontmatter:

```yaml
sidebar: false
aside: false
lastUpdated: false
```

- Verify both `/` and `/zh/` do not render `aside.VPSidebar` after layout changes.
- Feature index and feature detail pages should keep the sidebar.

## Demo And Content Rules

- Demos should be practical and feature-focused, not generic documentation cards.
- Each demo should highlight what the HTML capability gives the browser ownership over.
- Prefer concrete UI jobs: dialogs, forms, command panels, findability, editing, disclosure, etc.
- Keep explanations short and production-oriented.
- Link to official references where possible: MDN, WHATWG HTML, Can I Use, and browser vendor docs.
- Browser support is time-sensitive; link out rather than copying large compatibility tables.
- Do not describe `HTML6` as a formal release.

## Styling And UX

- Follow the existing VitePress theme extension and `docs/.vitepress/theme/style.css` tokens.
- Keep the site useful and scannable rather than landing-page-like.
- Avoid adding unrelated visual decoration.
- Preserve responsive behavior for homepage grids, feature rows, demos, and form controls.
- Keep cards and framed panels purposeful: demos, repeated feature rows, and tool surfaces are fine.

## Commands

```bash
npm install
npm run docs:generate
npm run docs:dev
npm run docs:build
npm run docs:preview
```

- Use `npm run docs:build` before finishing changes that affect content generation, routing, VitePress config, Vue components, or CSS.
- For docs-only prose changes outside generated files, a build is optional but still useful when frontmatter or links change.

## Deployment Notes

- Do not remove the production `base` logic in `docs/.vitepress/config.mjs`.
- The Pages URL is `https://cheshirejcat.github.io/afterHtml5/`.
- The Chinese Pages URL is `https://cheshirejcat.github.io/afterHtml5/zh/`.
- The workflow in `.github/workflows/deploy.yml` is the deployment path; keep it compatible with Pages artifact upload.

## Git Hygiene

- Check `git status --short --branch` before editing and before finishing.
- Do not revert user changes unless explicitly asked.
- Keep diffs scoped to the requested behavior.
- Generated files may be committed when they are the expected output of `npm run docs:generate`.
