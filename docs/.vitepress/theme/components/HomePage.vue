<script setup>
import { computed } from 'vue';
import { useLocale } from './useLocale';

const { features, text, indexLink, featureLink } = useLocale();

const categories = computed(() => [...new Set(features.value.map((feature) => feature.category))]);
const spotlight = computed(() => features.value.slice(0, 6));
const statusCounts = computed(() =>
  features.value.reduce((acc, feature) => {
    acc[feature.maturity] = (acc[feature.maturity] || 0) + 1;
    return acc;
  }, {}),
);
</script>

<template>
  <main class="ah5-home">
    <section class="ah5-hero">
      <div class="ah5-shell ah5-hero-grid">
        <div>
          <p class="ah5-kicker">{{ text.home.kicker }}</p>
          <h1>After HTML5</h1>
          <p>{{ text.home.lead }}</p>
          <div class="ah5-actions">
            <a class="ah5-button" :href="indexLink">{{ text.home.browse }}</a>
            <a class="ah5-secondary-button" href="https://github.com/CheshireJCat/afterHtml5">GitHub</a>
          </div>
        </div>

        <div class="ah5-specimen" aria-label="HTML feature specimen">
          <div class="ah5-specimen-top">
            <span>{{ text.home.specimen }}</span>
            <span>{{ features.length }} {{ text.home.entries }}</span>
          </div>
          <div class="ah5-specimen-screen">
            <div class="ah5-chip-row">
              <span v-for="category in categories" :key="category" class="ah5-chip">{{ category }}</span>
            </div>
            <pre class="ah5-specimen-code"><code>&lt;button commandfor="menu"
        command="toggle-popover"&gt;
  Actions
&lt;/button&gt;

&lt;div id="menu" popover&gt;
  Native top layer. Light dismiss.
&lt;/div&gt;</code></pre>
            <div class="ah5-chip-row">
              <span class="ah5-chip">{{ text.maturity.baseline }} {{ statusCounts.baseline || 0 }}</span>
              <span class="ah5-chip">{{ text.maturity.widely }} {{ statusCounts.widely || 0 }}</span>
              <span class="ah5-chip">{{ text.maturity.limited }} {{ statusCounts.limited || 0 }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ah5-section">
      <div class="ah5-shell">
        <div class="ah5-section-header">
          <h2>{{ text.home.startTitle }}</h2>
          <p>{{ text.home.startBody }}</p>
        </div>
        <div class="ah5-feature-grid">
          <a
            v-for="feature in spotlight"
            :key="feature.slug"
            class="ah5-feature-link"
            :href="featureLink(feature.slug)"
          >
            <span class="ah5-status" :data-maturity="feature.maturity">{{ feature.status }}</span>
            <strong>{{ feature.name }}</strong>
            <span>{{ feature.solves }}</span>
          </a>
        </div>
      </div>
    </section>

    <section class="ah5-section">
      <div class="ah5-shell">
        <div class="ah5-section-header">
          <h2>{{ text.home.modelTitle }}</h2>
          <p>{{ text.home.modelBody }}</p>
        </div>
        <pre class="ah5-specimen-code"><code>{
  "name": "Popover",
  "category": "Native interaction",
  "status": "Baseline newly available",
  "solves": "Layered UI with light dismiss",
  "syntax": "&lt;div popover&gt;...&lt;/div&gt;",
  "demo": "Command tray"
}</code></pre>
      </div>
    </section>
  </main>
</template>
