<template>
  <div class="card border-0 bg-darken shadow" style="border-radius: 20px">
    <div class="card-header d-block border-0 bg-darken mt-3">
      <button
        :class="`d-flex btn border-0 bg-${feature.color}-transparent avatar-icon text-white`"
      >
        <i :class="`bx bx-${feature.icon}`"></i>
      </button>
    </div>
    <div class="card-body">
      <h5>{{ feature.title }}</h5>
      <p class="text-muted m-0">{{ feature.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Feature } from "@/mock/apps.mock";

@Options({
  props: {
    feature: Object as unknown as Feature,
  },
})
export default class FeatureCard extends Vue {}
</script>

<style scoped>
.avatar-icon {
  padding: 10px;
  border-radius: 10px;
}
.avatar-icon i {
  font-size: 40px;
}
</style>
