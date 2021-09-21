<template>
  <div v-if="app" class="app-details">
    <section>
      <div class="container-fluid py-3">
        <div class="row align-items-center justify-content-center">
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-3">
            <div
              class="card border-0 bg-darken shadow"
              style="border-radius: 20px; overflow: hidden"
            >
              <img
                :src="app.picture"
                class="w-100 h-100"
                :alt="`Picture of ${app.title}`"
              />
            </div>
          </div>
          <div class="col-12 col-sm-10 col-md-8 col-lg-6 p-3">
            <h1>
              <strong>{{ app.title }}</strong>
            </h1>
            <h5 class="text-muted mb-3">{{ app.subtitle }}</h5>
            <p>{{ app.description }}</p>
            <div class="d-flex align-items-center mt-4">
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
      <div class="row">
        <div class="col-12 p-3">
          <div class="row justify-content-center">
            <div
              v-for="(item, i) in app.features"
              :key="i"
              class="col-12 col-sm-6 col-xl-3 p-3"
            >
              <div
                class="card border-0 bg-darken shadow"
                style="border-radius: 20px"
              >
                <div class="card-header d-block border-0 bg-darken mt-3">
                  <button
                    :class="`d-flex btn border-0 bg-${item.color}-transparent avatar-icon text-white`"
                  >
                    <i :class="`bx bx-${item.icon}`"></i>
                  </button>
                </div>
                <div class="card-body">
                  <h5>{{ item.title }}</h5>
                  <p class="text-muted m-0">{{ item.description }}</p>
                </div>
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

@Options({})
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
.avatar-icon {
  padding: 10px;
  border-radius: 10px;
}
.avatar-icon i {
  font-size: 40px;
}
</style>
