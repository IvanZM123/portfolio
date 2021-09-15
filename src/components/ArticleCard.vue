<template>
  <li class="list-group-item text-white border-0">
    <div class="row">
      <div class="col-12 col-sm-2 text-center">
        <div class="avatar mx-auto d-block">
          <img :src="article.picture" class="w-100 h-100" alt="Banner" />
        </div>
      </div>
      <div class="col-12 col-sm-10 mt-3 mt-sm-0">
        <h6>
          <strong>{{ article.title }}</strong>
        </h6>
        <p class="text-muted m-0">{{ article.subtitle }}</p>
      </div>
      <div class="col-12 col-sm-9 col-md-10 mt-3">
        <div class="tags w-100">
          <small
            v-for="tag in article.tags"
            :key="tag"
            class="chip bg-darken m-1"
            >{{ tag }}</small
          >
        </div>
      </div>
      <div class="col-12 col-sm-3 col-md-2 mt-3">
        <a
          :href="article.url"
          target="_blank"
          class="btn bg-purple w-100 text-white border-0 py-1 px-2"
          >See</a
        >
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
.tags {
  display: flex;
  flex-wrap: wrap !important;
  flex-direction: row !important;
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
.chip {
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
