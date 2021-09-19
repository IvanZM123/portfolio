<template>
  <div class="articles">
    <div class="container-fluid py-3">
      <carousel :items="items" />
      <div class="row justify-content-center justify-content-md-start mt-5">
        <div
          v-for="(article, i) in articles"
          :key="i"
          class="col-12 col-sm-10 col-md-6 col-xl-4 p-3"
        >
          <article-card :article="article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { articles, Article } from "@/mock/articles.mock";

import ArticleCard from "@/components/ArticleCard.vue";
import Carousel from "@/components/Carousel.vue";

@Options({
  components: {
    ArticleCard,
    Carousel,
  },
})
export default class ArticlesPage extends Vue {
  articles: Article[] = articles;

  get items(): Article[] {
    return articles.slice(0, 3);
  }
}
</script>
