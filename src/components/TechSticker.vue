<template>
  <li
    class="list-group-item d-sm-flex align-items-center bg-darken border-0 my-2"
  >
    <div
      :class="`avatar-circle mx-auto mx-sm-0 mb-3 mb-sm-0 bg-${item.color}-transparent`"
    >
      <img :src="item.picture" :alt="`Picture ${item.title}`" />
    </div>
    <div class="ms-3 text-white">
      <h5>
        <strong>{{ item.name }}</strong>
      </h5>
      <p class="m-0">{{ item.description }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { Technology } from "@/mock/technologies.mock";

@Options({
  props: {
    item: Object as unknown as Technology,
  },
})
export default class TechSticker extends Vue {}
</script>

<style scoped>
.avatar-circle {
  display: flex;
  align-items: center;
  border-radius: 50%;
  height: 55px;
  width: 55px;
  padding: 15px;
}
</style>
