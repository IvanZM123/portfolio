<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <carousel-component v-bind:items="carouselItems" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CarouselComponent from "@/components/Carousel.vue";

@Options({
  components: {
    CarouselComponent,
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
}
</script>
