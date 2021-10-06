<template>
  <router-link
    :to="{ name: 'Apps-Details', params: { appId: app.slug } }"
    class="text-decoration-none"
  >
    <div class="card p-2 px-3 bg-darken shadow radius-20">
      <div class="card-header border-0 bg-darken px-0">
        <div class="card-banner radius-20">
          <img :src="app.picture" :alt="app.title" />
        </div>
      </div>
      <div class="card-body px-0">
        <div class="d-flex flex-wrap w-100 mb-3">
          <small
            class="text-muted mx-1"
            v-for="(item, i) in technologies || 0"
            :key="i"
          >
            <strong>{{ item.name }}</strong>
          </small>
        </div>
        <p class="mb-2">
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
import { Technology } from "@/mock/technologies.mock";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    app: Object,
  },
})
export default class AppCard extends Vue {
  get technologies(): Technology[] {
    const items = (this as any).app.technologies as Technology[];
    const copies = items.slice();
    return copies.splice(0, 3);
  }
}
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
  width: 100%;
  height: 170px;
  overflow: hidden;
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
