<script setup>
import { computed } from 'vue';
import features from '../../generated/features.json';
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

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

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
};

const feature = computed(() => features.find((item) => item.slug === props.slug));
const demoComponent = computed(() => components[props.slug]);
</script>

<template>
  <section v-if="feature" class="ah5-demo-wrap">
    <div class="ah5-demo-heading">
      <span class="ah5-status" :data-maturity="feature.maturity">{{ feature.status }}</span>
      <h2>Demo: {{ feature.demo }}</h2>
      <p>{{ feature.support }}</p>
    </div>
    <div class="ah5-demo-stage">
      <component :is="demoComponent" v-if="demoComponent" />
      <p v-else class="demo-note">No demo component is registered for this feature yet.</p>
    </div>
  </section>
</template>
