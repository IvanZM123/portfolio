<template>
  <div>
    <section class="w-100">
      <h2>
        <strong>{{ title }}</strong>
      </h2>
      <p class="text-muted">{{ subtitle }}</p>
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
