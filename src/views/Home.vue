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
                <div class="col-12 col-lg-6 p-3">
                  <div
                    class="card p-2 px-3 bg-darken shadow"
                    style="border-radius: 20px"
                  >
                    <div class="card-header border-0 bg-darken px-0">
                      <div class="card-banner">
                        <img
                          src="https://res.cloudinary.com/dlkfpx8lb/image/upload/v1609967502/App_banners/kampweather_vnsrti.png"
                          alt="image banner"
                        />
                      </div>
                    </div>
                    <div class="card-body px-0">
                      <div class="d-flex flex-wrap w-100 mb-3">
                        <small class="text-primary mx-1">
                          <strong>Typescript</strong>
                        </small>
                        <small class="text-success mx-1">
                          <strong>Vue.js</strong>
                        </small>
                        <small class="text-warning mx-1">
                          <strong>Firebase</strong>
                        </small>
                      </div>
                      <p class="mb-2"><strong>Kampweather</strong></p>
                      <small class="text-"
                        >Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Laborum, nobis! Officia totam itaque
                        delectus.</small
                      >
                    </div>
                  </div>
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

<style scoped>
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
</style>
