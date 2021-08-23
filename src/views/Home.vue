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
            class="col-12 col-sm-6 col-md-4 col-xl-3 p-3"
            v-for="(item, i) in sections"
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

import { SectionService, Section } from "@/services/section.service";

import CarouselComponent from "@/components/Carousel.vue";
import ItemCardComponent from "@/components/ItemCard.vue";

@Options({
  components: {
    CarouselComponent,
    ItemCardComponent,
  },
})
export default class Home extends Vue {
  private sectionService: SectionService = new SectionService();
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
  sections: Array<Section> = [];

  async created(): Promise<void> {
    this.sections = await this.sectionService.list();
  }
}
</script>
