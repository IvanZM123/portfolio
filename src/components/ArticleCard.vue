<template>
  <div class="card border-0">
    <div class="card-body p-0">
      <div class="card-body-img">
        <img :src="article.picture" :alt="`Picture ${article.title}`" />
      </div>
      <div class="card-body-content p-3">
        <div class="d-flex align-items-center w-100">
          <p class="d-flex align-items-center m-0">
            <i class="bx bx-calendar"></i>
            <span class="ms-2">{{ article.date }}</span>
          </p>
          <div class="spacer"></div>
        </div>
        <div class="card-body-content-main py-2 w-100">
          <h5>
            <strong>{{ article.title }}</strong>
          </h5>
          <div>
            <small v-for="tag in article.tags" :key="tag" class="m-1">
              <strong>#{{ tag }}</strong>
            </small>
          </div>
        </div>
        <div class="card-body-content-text w-100">
          <p class="m-0">{{ article.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
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
.card {
  background-color: transparent;
}
.card-body {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
}
.card-body-img {
  width: 100%;
  height: 230px;
}
.card-body-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-body-content {
  position: absolute;
  content: "";
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.7);
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.chip {
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
