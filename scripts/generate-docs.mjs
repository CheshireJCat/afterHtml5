import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');
const generatedDir = path.join(docsDir, '.vitepress', 'generated');
const featureDir = path.join(docsDir, 'features');
const dataPath = path.join(root, 'data', 'features.json');

const features = JSON.parse(await fs.readFile(dataPath, 'utf8'));
const categories = [...new Set(features.map((feature) => feature.category))];

await fs.mkdir(generatedDir, { recursive: true });
await fs.mkdir(featureDir, { recursive: true });

const titleCase = (value) =>
  value
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const fence = (value, language = 'html') => `\`\`\`${language}\n${value}\n\`\`\``;

const homepage = `---
title: ${JSON.stringify('After HTML5')}
description: ${JSON.stringify('HTML capabilities after the HTML5 era.')}
---

<HomePage />
`;

const featureIndex = `---
title: ${JSON.stringify('Features')}
description: ${JSON.stringify('Browse modern HTML capabilities by problem area, maturity, and usage.')}
---

<FeatureIndex />
`;

await fs.writeFile(path.join(docsDir, 'index.md'), homepage);
await fs.writeFile(path.join(featureDir, 'index.md'), featureIndex);
await fs.writeFile(path.join(generatedDir, 'features.json'), `${JSON.stringify(features, null, 2)}\n`);

for (const feature of features) {
  const markdown = `---
title: ${JSON.stringify(feature.name)}
description: ${JSON.stringify(feature.summary)}
---

# ${feature.name}

<span class="feature-meta">${feature.category} · ${feature.status}</span>

${feature.summary}

<FeatureDemo slug="${feature.slug}" />

## What It Solves

${feature.solves}

## Syntax

${fence(feature.syntax)}

## Practical Guidance

${feature.usage}

## Watch Outs

${feature.pitfalls.map((item) => `- ${escapeHtml(item)}`).join('\n')}

## Accessibility Notes

${feature.accessibility.map((item) => `- ${escapeHtml(item)}`).join('\n')}

## References

- [MDN](${feature.mdn})
- [HTML Standard](${feature.spec})
- [Compatibility](${feature.caniuse})
`;

  await fs.writeFile(path.join(featureDir, `${feature.slug}.md`), markdown);
}

const sidebar = categories.map((category) => ({
  text: category,
  collapsed: false,
  items: features
    .filter((feature) => feature.category === category)
    .map((feature) => ({
      text: feature.name,
      link: `/features/${feature.slug}`,
    })),
}));

const sidebarModule = `export const sidebar = ${JSON.stringify(
  [
    {
      text: 'Overview',
      items: [
        { text: 'Feature Index', link: '/features/' },
        ...categories.map((category) => ({
          text: titleCase(category),
          link: `/features/#${category.toLowerCase().replaceAll(' ', '-')}`,
        })),
      ],
    },
    ...sidebar,
  ],
  null,
  2,
)};
`;

await fs.writeFile(path.join(generatedDir, 'sidebar.mjs'), sidebarModule);

console.log(`Generated ${features.length} feature pages.`);
