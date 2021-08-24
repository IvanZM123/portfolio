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

      <section class="py-4">
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

      <main class="py-4">
        <div class="row">
          <div class="col-12 col-xl-8 p-2">
            <section>
              <div class="section-header pb-3">
                <h2>
                  <strong>Top applications</strong>
                </h2>
                <p class="text-muted m-0">Take a look at the top apps.</p>
              </div>

              <div class="row">
                <div
                  class="col-12 col-sm-6 p-3"
                  v-for="(app, i) in apps"
                  :key="i"
                >
                  <app-card-component v-bind:app="app" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { SectionService, Section } from "@/services/section.service";

import CarouselComponent from "@/components/Carousel.vue";
import ItemCardComponent from "@/components/ItemCard.vue";
import AppCardComponent from "@/components/AppCard.vue";

@Options({
  components: {
    CarouselComponent,
    ItemCardComponent,
    AppCardComponent,
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
  apps = [
    {
      title: "Kampweather",
      subtitle: "Weather App",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, nobis! Officia totam itaque delectus.",
      picture:
        "https://res.cloudinary.com/dlkfpx8lb/image/upload/v1609967502/App_banners/kampweather_vnsrti.png",
      technologies: [
        {
          name: "Typescript",
          color: "primary",
        },
        {
          name: "Javascript",
          color: "warning",
        },
        {
          name: "Vue.js",
          color: "success",
        },
      ],
    },
  ];
  sections: Array<Section> = [];

  async created(): Promise<void> {
    this.sections = await this.sectionService.list();
  }
}
</script>
