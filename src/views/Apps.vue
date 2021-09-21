<template>
  <div class="apps">
    <div class="container-fluid py-3">
      <carousel :items="items" />
      <div class="row justify-content-center justify-content-md-start mt-5">
        <div
          v-for="(app, i) in apps"
          :key="i"
          class="col-12 col-sm-8 col-md-6 col-xl-4 p-3"
          v-animation
          data-effect="scale"
          :data-delay="i * 0.2"
        >
          <app-card :app="app" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { apps, App } from "@/mock/apps.mock";

import Carousel from "@/components/Carousel.vue";
import AppCard from "@/components/AppCard.vue";

@Options({
  components: {
    Carousel,
    AppCard,
  },
})
export default class AppsPage extends Vue {
  apps: App[] = apps;

  get items(): Partial<App>[] {
    return apps
      .slice(0, 3)
      .map(({ title, subtitle, description, picture, color }) => ({
        title: `${title} - ${subtitle}`,
        subtitle: description.slice(0, 200),
        picture,
        color,
      }));
  }
}
</script>
