import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(root, 'docs');
const generatedDir = path.join(docsDir, '.vitepress', 'generated');
const dataPath = path.join(root, 'data', 'features.json');
const zhPath = path.join(root, 'data', 'zh.json');

const sourceFeatures = JSON.parse(await fs.readFile(dataPath, 'utf8'));
const zh = JSON.parse(await fs.readFile(zhPath, 'utf8'));

const enSite = {
  title: 'After HTML5',
  description: 'HTML capabilities after the HTML5 era.',
  featureIndexTitle: 'Features',
  featureIndexDescription: 'Browse modern HTML capabilities by problem area, maturity, and usage.',
  overview: 'Overview',
  sections: {
    whatItSolves: 'What It Solves',
    syntax: 'Syntax',
    practicalGuidance: 'Practical Guidance',
    watchOuts: 'Watch Outs',
    accessibilityNotes: 'Accessibility Notes',
    references: 'References',
  },
};

const locales = [
  {
    key: 'en',
    prefix: '',
    docsRoot: docsDir,
    featureDir: path.join(docsDir, 'features'),
    site: enSite,
    categories: {},
    features: {},
  },
  {
    key: 'zh',
    prefix: '/zh',
    docsRoot: path.join(docsDir, 'zh'),
    featureDir: path.join(docsDir, 'zh', 'features'),
    site: zh.site,
    categories: zh.categories,
    features: zh.features,
  },
];

await fs.mkdir(generatedDir, { recursive: true });

const titleCase = (value) =>
  value
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const fence = (value, language = 'html') => `\`\`\`${language}\n${value}\n\`\`\``;

const frontmatter = (values) => {
  const body = Object.entries(values)
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
    .join('\n');
  return `---\n${body}\n---`;
};

const localizeFeature = (feature, locale) => {
  const copy = locale.features[feature.slug] || {};
  return {
    ...feature,
    ...copy,
    originalCategory: feature.category,
    category: locale.categories[feature.category] || feature.category,
    categorySlug: slugify(feature.category),
  };
};

const writeLocale = async (locale) => {
  await fs.mkdir(locale.docsRoot, { recursive: true });
  await fs.mkdir(locale.featureDir, { recursive: true });

  const features = sourceFeatures.map((feature) => localizeFeature(feature, locale));
  const originalCategories = [...new Set(sourceFeatures.map((feature) => feature.category))];
  const displayCategory = (category) => locale.categories[category] || category;
  const categoryLink = (category) => `${locale.prefix}/features/#${slugify(category)}`;

  const homepage = `${frontmatter({
    title: locale.site.title,
    description: locale.site.description,
    sidebar: false,
    aside: false,
    lastUpdated: false,
  })}

<HomePage />
`;

  const featureIndex = `${frontmatter({
    title: locale.site.featureIndexTitle,
    description: locale.site.featureIndexDescription,
  })}

<FeatureIndex />
`;

  await fs.writeFile(path.join(locale.docsRoot, 'index.md'), homepage);
  await fs.writeFile(path.join(locale.featureDir, 'index.md'), featureIndex);
  await fs.writeFile(
    path.join(generatedDir, `features.${locale.key}.json`),
    `${JSON.stringify(features, null, 2)}\n`,
  );

  for (const feature of features) {
    const markdown = `${frontmatter({
      title: feature.name,
      description: feature.summary,
    })}

# ${feature.name}

<span class="feature-meta">${feature.category} · ${feature.status}</span>

${feature.summary}

<FeatureDemo slug="${feature.slug}" />

## ${locale.site.sections.whatItSolves}

${feature.solves}

## ${locale.site.sections.syntax}

${fence(feature.syntax)}

## ${locale.site.sections.practicalGuidance}

${feature.usage}

## ${locale.site.sections.watchOuts}

${feature.pitfalls.map((item) => `- ${escapeHtml(item)}`).join('\n')}

## ${locale.site.sections.accessibilityNotes}

${feature.accessibility.map((item) => `- ${escapeHtml(item)}`).join('\n')}

## ${locale.site.sections.references}

- [MDN](${feature.mdn})
- [HTML Standard](${feature.spec})
- [Compatibility](${feature.caniuse})
`;

    await fs.writeFile(path.join(locale.featureDir, `${feature.slug}.md`), markdown);
  }

  const featureSidebar = originalCategories.map((category) => ({
    text: displayCategory(category),
    collapsed: false,
    items: features
      .filter((feature) => feature.originalCategory === category)
      .map((feature) => ({
        text: feature.name,
        link: `${locale.prefix}/features/${feature.slug}`,
      })),
  }));

  const sidebar = [
    {
      text: locale.site.overview,
      items: [
        { text: locale.site.featureIndexTitle, link: `${locale.prefix}/features/` },
        ...originalCategories.map((category) => ({
          text: locale.key === 'en' ? titleCase(category) : displayCategory(category),
          link: categoryLink(category),
        })),
      ],
    },
    ...featureSidebar,
  ];

  await fs.writeFile(
    path.join(generatedDir, `sidebar.${locale.key}.mjs`),
    `export const sidebar${locale.key === 'en' ? 'En' : 'Zh'} = ${JSON.stringify(sidebar, null, 2)};\n`,
  );

  return { features, sidebar };
};

const results = Object.fromEntries(
  await Promise.all(locales.map(async (locale) => [locale.key, await writeLocale(locale)])),
);

await fs.writeFile(path.join(generatedDir, 'features.json'), `${JSON.stringify(results.en.features, null, 2)}\n`);
await fs.writeFile(
  path.join(generatedDir, 'sidebar.mjs'),
  `export const sidebar = ${JSON.stringify(results.en.sidebar, null, 2)};\n`,
);

console.log(`Generated ${sourceFeatures.length} feature pages for ${locales.length} locales.`);
