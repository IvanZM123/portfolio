<template>
  <div>
    <section class="w-100">
      <h2 v-animation data-effect="fade-and-displacement-right" data-delay=".1">
        <strong>{{ title }}</strong>
      </h2>
      <p
        v-animation
        data-effect="fade-and-displacement-right"
        data-delay=".3"
        class="text-muted"
      >
        {{ subtitle }}
      </p>
    </section>

    <section class="w-100">
      <slot />
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
    subtitle: String,
  },
})
export default class ContainerDynamicComponent extends Vue {}
</script>
