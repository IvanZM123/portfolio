<template>
  <div class="packages">
    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-8 col-md-6 col-xl-4 p-3"
        v-animation
        data-effect="displacement-bottom"
        :data-delay="i * 0.1"
        v-for="(item, i) in packages"
        :key="i"
      >
        <div class="card shadow bg-darken radius-20">
          <div class="card-picture">
            <img
              width="100%"
              :src="item.banner"
              :alt="`${item - title} banner`"
            />
            <div :class="`logo bg-${item.color}-transparent`">
              <img :src="require(`@/assets/images/${item.badge}`)" alt="Logo" />
            </div>
          </div>
          <div class="card-body bg-darken pt-4 mt-2">
            <h4>{{ item.title }}</h4>
            <p class="text-muted m-0">{{ item.description }}</p>
          </div>
          <div class="card-footer border-0 bg-darken text-center p-0">
            <a
              :href="item.githubUrl"
              target="_blank"
              class="btn w-100 px-3 py-2 text-white"
              style="background-color: rgba(0, 0, 0, 0.35)"
            >
              <div class="d-flex align-items-center justify-content-center">
                <i class="bx bxl-github"></i>
                <span class="ms-2">Repository</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { packages, Package } from "@/mock/packages.mock";

@Options({})
export default class PackagesPage extends Vue {
  packages: Package[] = packages;
}
</script>

<style scoped>
.card-picture {
  position: relative;
}
.card-picture > img {
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
}
.logo {
  position: absolute;
  bottom: -25px;
  left: 20px;
  widows: 55px;
  height: 55px;
  border-radius: 50%;
  padding: 10px;
}
.logo > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
