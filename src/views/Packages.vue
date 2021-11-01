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
        <package-card :item="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { packages, Package } from "@/mock/packages.mock";

import PackageCard from "@/components/PackageCard.vue";

@Options({
  components: {
    PackageCard,
  },
})
export default class PackagesPage extends Vue {
  packages: Package[] = packages;
}
</script>
