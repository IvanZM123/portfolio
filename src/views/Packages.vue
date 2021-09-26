<template>
  <div class="packages">
    <div
      class="row justify-content-center align-items-center"
      style="min-height: 85vh"
    >
      <div class="col-12 col-sm-8 col-md-6 col-xl-4">
        <div class="card border-0 text-center" v-animation data-effect="scale">
          <picture>
            <img
              :src="require('@/assets/images/coming-soon-icon.png')"
              alt="Picture"
            />
          </picture>
          <div class="card-body">
            <h1>
              <strong>Coming Soooon! 🔥</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class PackagesPage extends Vue {}
</script>

<style scoped>
.card {
  background-color: transparent;
}
picture img {
  width: 300px;
  height: 300px;
}
</style>
