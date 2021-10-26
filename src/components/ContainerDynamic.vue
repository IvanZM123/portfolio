<template>
  <div>
    <section class="d-flex align-items-center w-100">
      <div>
        <h2
          v-animation
          data-effect="fade-and-displacement-right"
          data-delay=".1"
        >
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
      </div>
      <span class="spacer"></span>
      <div
        v-if="pathName"
        v-animation
        data-effect="displacement-bottom"
        data-delay=".3"
      >
        <router-link :to="{ name: pathName }">
          <button class="text-white btn p-0 m-0">
            <i class="bx bx-window-open"></i>
          </button>
        </router-link>
      </div>
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
    pathName: String,
  },
})
export default class ContainerDynamicComponent extends Vue {}
</script>
