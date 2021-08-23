<template>
  <div class="home">
    <div class="container-fluid">
      <section class="py-3">
        <div class="row">
          <div class="col-12">
            <carousel-component v-bind:items="carouselItems" />
          </div>
        </div>
      </section>

      <section class="py-3">
        <div class="row justify-content-center">
          <div
            class="col-12 col-sm-6 col-ms-4 col-lg-3 p-3"
            v-for="(item, i) in sectionItems"
            :key="i"
          >
            <item-card-component v-bind:item="item" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CarouselComponent from "@/components/Carousel.vue";
import ItemCardComponent from "@/components/ItemCard.vue";

@Options({
  components: {
    CarouselComponent,
    ItemCardComponent,
  },
})
export default class Home extends Vue {
  carouselItems: Array<Record<string, string>> = [
    {
      title: "I'm Fullstack Developer",
      subtitle:
        "I can handle Backend, Frontend and interface design technologies. If solutions are what you want, that's my middle name.",
      image:
        "https://www.edureka.co/blog/wp-content/uploads/2018/10/How-to-become-a-Full-Stack-Web-Developer--451x300.png",
      color: "purple",
    },
  ];
  sectionItems: Array<Record<string, string>> = [
    {
      title: "Web applications",
      subtitle: "5 proyects",
      image: "https://image.flaticon.com/icons/png/512/2683/2683274.png",
      color: "yellow",
    },
    {
      title: "All articles",
      subtitle: "2 posts",
      image: "https://image.flaticon.com/icons/png/512/4149/4149770.png",
      color: "danger",
    },
  ];
}
</script>
