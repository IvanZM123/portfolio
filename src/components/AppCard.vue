<template>
  <router-link
    :to="{ name: 'Apps-Details', params: { appId: app.slug } }"
    class="text-decoration-none"
  >
    <div class="card p-2 px-3 bg-darken shadow" style="border-radius: 20px">
      <div class="card-header border-0 bg-darken px-0">
        <div class="card-banner">
          <img :src="app.picture" :alt="app.title" />
        </div>
      </div>
      <div class="card-body px-0">
        <div class="d-flex flex-wrap w-100 mb-3">
          <small
            :class="`text-${item.color} mx-1`"
            v-for="(item, i) in app.technologies || 0"
            :key="i"
          >
            <strong>{{ item.name }}</strong>
          </small>
        </div>
        <p class="mb-2 text-purple">
          <strong>{{ app.title }} - {{ app.subtitle }}</strong>
        </p>
        <div class="card-description">
          <small>{{ app.description }}</small>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    app: Object,
  },
})
export default class AppCard extends Vue {}
</script>

<style scoped>
.card {
  transition: 0.3s all;
  cursor: pointer;
}
.card:hover {
  transform: scale(1.03);
}
.card-banner {
  border-radius: 20px;
  width: 100%;
  height: 170px;
  overflow: hidden;
}
.card-banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.chip {
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.card-description {
  height: 50px;
  overflow: hidden;
}
</style>
