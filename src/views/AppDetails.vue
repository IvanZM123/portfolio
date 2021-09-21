<template>
  <div v-if="app" class="app-details">
    <section>
      <div class="container-fluid py-3">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-3">
            <div
              class="card border-0 bg-darken shadow"
              style="border-radius: 20px; overflow: hidden"
              v-animation
              data-effect="displacement-bottom"
            >
              <img
                :src="app.picture"
                class="w-100 h-100"
                :alt="`Picture of ${app.title}`"
              />
            </div>
          </div>
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-3">
            <h1 v-animation data-effect="fade-and-displacement-right">
              <strong>{{ app.title }}</strong>
            </h1>
            <h5
              v-animation
              data-effect="fade-and-displacement-right"
              data-delay=".2"
              class="text-muted mb-3"
            >
              {{ app.subtitle }}
            </h5>
            <p
              v-animation
              data-effect="fade-and-displacement-right"
              data-delay=".4"
            >
              {{ app.description }}
            </p>
            <div
              v-animation
              data-effect="fade-and-displacement-right"
              data-delay=".6"
              class="d-flex align-items-center mt-4"
            >
              <a
                :href="app.demoUrl"
                target="_blank"
                :class="`
                  btn
                  d-flex
                  text-white
                  align-items-center
                  border-0
                  me-2
                  bg-${app.color}
                  shadow
                  px-4
                  py-2
                  rounded-pill
                `"
              >
                <i class="bx bx-world"></i>
                <span class="ms-2">Demo</span>
              </a>
              <a
                :href="app.githubUrl"
                target="_blank"
                class="
                  mx-2
                  btn
                  rounded-circle
                  border-light
                  d-flex
                  align-items-center
                  text-white
                  p-2
                "
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center">
        <div
          v-for="(item, i) in app.features"
          :key="i"
          class="col-12 col-sm-6 col-xl-3 p-3"
          v-animation
          data-effect="displacement-bottom"
          :data-delay="i * 0.15"
        >
          <feature-card :feature="item" />
        </div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-12 col-xl-7 p-3">
          <div class="card border-0 bg-darken shadow radius-20">
            <div class="card-header border-0 bg-darken radius-20">
              <div class="d-flex align-items-center text-muted">
                <i class="bx bx-code-alt"></i>
                <span class="ms-2">Technologies</span>
              </div>
            </div>
            <div class="card-body">
              <ul class="list-group">
                <tech-sticker
                  v-for="(item, i) in app.technologies"
                  :key="i"
                  :item="item"
                  v-animation
                  data-effect="fade-and-displacement-right"
                  :data-delay="i * 0.15"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-5 p-3">
          <div class="card border-0 bg-darken shadow radius-20">
            <div class="card-header border-0 bg-darken radius-20">
              <div class="d-flex align-items-center text-muted">
                <i class="bx bx-video"></i>
                <span class="ms-2">Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { apps, App } from "@/mock/apps.mock";

import FeatureCard from "@/components/FeatureCard.vue";
import TechSticker from "@/components/TechSticker.vue";

@Options({
  components: {
    FeatureCard,
    TechSticker,
  },
})
export default class AppDetails extends Vue {
  created(): void {
    !this.app ? this.$router.replace({ name: "Apps" }) : null;
  }

  get app(): App | undefined {
    const { appId = "" } = this.$route.params;
    const app: App | undefined = apps.find(
      (app) => app.title.toLowerCase() === appId
    );
    return app;
  }
}
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
