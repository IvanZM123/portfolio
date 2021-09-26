<template>
  <div :class="`card border-0 p-3 bg-${item.color}-transparent`">
    <div class="card-body text-center">
      <div :class="`card-avatar mb-2 p-3 bg-${item.color}`">
        <img :src="require(`@/assets/images/${item.picture}`)" alt="Proyects" />
      </div>
      <h5>
        <strong>{{ item.title }}</strong>
      </h5>
      <p class="m-0 text-muted">{{ item.subtitle }}</p>
    </div>
    <div class="card-footer border-0">
      <router-link :to="{ name: item.route }">
        <button
          class="
            btn
            bg-white
            shadow
            d-inline-block
            rounded-pill
            text-center
            w-100
          "
        >
          More information...
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    item: Object,
  },
})
export default class ItemCardComponent extends Vue {}
</script>

<style scoped>
.card {
  border-radius: 20px;
}
.card-footer {
  background: none;
}
.card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
}
</style>
