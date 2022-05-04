<template>
  <div class="card shadow bg-darken radius-20">
    <div class="card-picture">
      <img width="100%" :src="item.banner" :alt="`${item.title} banner`" />
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
</template>

<script lang="ts">
import { Package } from "@/mock/packages.mock";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    item: Object as unknown as Package,
  },
  components: {},
})
export default class PackageCard extends Vue {}
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
