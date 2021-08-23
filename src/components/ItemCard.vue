<template>
  <div :class="`card border-0 p-3 bg-${item.color}-transparent`">
    <div class="card-body text-center">
      <div :class="`card-avatar mb-2 bg-${item.color}`">
        <img :src="item.image" alt="Proyects" />
      </div>
      <h5>
        <strong>{{ item.title }}</strong>
      </h5>
      <p class="m-0 text-muted">{{ item.subtitle }}</p>
    </div>
    <div class="card-footer border-0">
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
.bg-danger-transparent {
  background-color: rgba(234, 32, 39, 0.4);
}
.bg-yellow-transparent {
  background-color: rgba(243, 156, 18, 0.4);
}
.card-footer {
  background: none;
}
.card-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  padding: 10px;
  background-color: #f39c12;
  display: inline-block;
}
.card-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
