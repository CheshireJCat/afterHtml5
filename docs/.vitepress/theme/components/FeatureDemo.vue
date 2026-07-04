<script setup>
import { computed } from 'vue';
import { useLocale } from './useLocale';
import PopoverDemo from './demos/PopoverDemo.vue';
import InvokerCommandsDemo from './demos/InvokerCommandsDemo.vue';
import DialogRequestCloseDemo from './demos/DialogRequestCloseDemo.vue';
import ExclusiveDetailsDemo from './demos/ExclusiveDetailsDemo.vue';
import SearchElementDemo from './demos/SearchElementDemo.vue';
import DeclarativeShadowDemo from './demos/DeclarativeShadowDemo.vue';
import PlaintextOnlyDemo from './demos/PlaintextOnlyDemo.vue';
import ShowPickerDemo from './demos/ShowPickerDemo.vue';
import InertDemo from './demos/InertDemo.vue';
import CustomizableSelectDemo from './demos/CustomizableSelectDemo.vue';
import HiddenUntilFoundDemo from './demos/HiddenUntilFoundDemo.vue';
import ModernPatternDemo from './demos/ModernPatternDemo.vue';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const { features, text } = useLocale();

const components = {
  popover: PopoverDemo,
  'invoker-commands': InvokerCommandsDemo,
  'dialog-request-close': DialogRequestCloseDemo,
  'exclusive-details': ExclusiveDetailsDemo,
  'search-element': SearchElementDemo,
  'declarative-shadow-dom': DeclarativeShadowDemo,
  'plaintext-only': PlaintextOnlyDemo,
  'show-picker': ShowPickerDemo,
  inert: InertDemo,
  'customizable-select': CustomizableSelectDemo,
  'hidden-until-found': HiddenUntilFoundDemo,
  'responsive-images': ModernPatternDemo,
  'native-lazy-loading': ModernPatternDemo,
  'fetch-priority': ModernPatternDemo,
  'preload-links': ModernPatternDemo,
  modulepreload: ModernPatternDemo,
  'blocking-render': ModernPatternDemo,
  'import-maps': ModernPatternDemo,
  'speculation-rules': ModernPatternDemo,
  datalist: ModernPatternDemo,
  'form-attribute': ModernPatternDemo,
  'submitter-overrides': ModernPatternDemo,
  'constraint-validation': ModernPatternDemo,
  'input-hints': ModernPatternDemo,
  'download-attribute': ModernPatternDemo,
  'theme-color': ModernPatternDemo,
  'color-scheme-meta': ModernPatternDemo,
  'iframe-sandbox': ModernPatternDemo,
  'iframe-srcdoc': ModernPatternDemo,
  'iframe-credentialless': ModernPatternDemo,
};

const feature = computed(() => features.value.find((item) => item.slug === props.slug));
const demoComponent = computed(() => components[props.slug]);
</script>

<template>
  <section v-if="feature" class="ah5-demo-wrap">
    <div class="ah5-demo-heading">
      <span class="ah5-status" :data-maturity="feature.maturity">{{ feature.status }}</span>
      <h2>{{ text.demo.label }}: {{ feature.demo }}</h2>
      <p>{{ feature.support }}</p>
    </div>
    <div class="ah5-demo-stage">
      <component :is="demoComponent" v-if="demoComponent" :slug="props.slug" />
      <p v-else class="demo-note">{{ text.demo.noDemo }}</p>
    </div>
  </section>
</template>
