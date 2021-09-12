<template>
  <li class="list-group-item text-white">
    <div class="d-sm-flex align-items-center">
      <div class="avatar mx-auto mx-sm-0 mb-3 mb-sm-0">
        <img :src="article.picture" class="w-100 h-100" alt="Banner" />
      </div>
      <div class="ms-3">
        <h6>
          <strong>{{ article.title }}</strong>
        </h6>
        <p class="text-muted m-0">{{ article.subtitle }}</p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    article: Object,
  },
})
export default class ArticleCard extends Vue {}
</script>

<style scoped>
.list-group-item {
  background-color: transparent;
}
.avatar {
  height: 70px;
  width: 70px;
  overflow: hidden;
  border-radius: 10px;
}
.avatar img {
  object-fit: cover;
}
</style>
