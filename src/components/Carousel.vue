<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(item, i) in items"
        :key="i"
        :class="`carousel-item ${!i ? 'active' : ''}`"
      >
        <div
          :class="`card bg-${item.color}-transparent border-0`"
          style="overflow: hidden"
        >
          <div class="row">
            <div
              v-animation
              data-effect="displacement-top"
              data-delay=".2"
              class="col-12 col-md-6 col-lg-6 p-5"
            >
              <div class="circle" :class="`bg-${item.color}`"></div>
              <div class="py-5">
                <h1>
                  {{ item.title }}
                </h1>
                <p class="m-0">{{ item.subtitle }}</p>
              </div>
              <div class="rectangle" :class="`bg-${item.color}`"></div>
            </div>
            <div
              v-animation
              data-effect="displacement-bottom"
              data-delay=".3"
              class="section-img col-12 col-md-6 col-lg-6 d-none d-md-block"
            >
              <div :class="`box h-100 bg-${item.color} ms-auto`">
                <img :src="item.picture" :alt="`${item.title} banner`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    items: Array,
  },
})
export default class Carousel extends Vue {}
</script>

<style scoped>
.card {
  border-radius: 35px;
  /* background-color: rgba(140, 82, 255, 0.1); */
}

.card h1 {
  font-size: 35px;
  font-weight: bold;
}

.bg-purple {
  background-color: #8c52ff;
}

.circle {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}

.rectangle {
  width: 50%;
  height: 10px;
  border-radius: 10px;
}

.box {
  /* background-color: #8c52ff; */
  width: 50%;
}

.section-img {
  position: relative;
}

.box img {
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  height: 300px;
  margin: auto;
  width: 300px;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}

@media screen and (min-width: 768px) {
  .card h1 {
    font-size: 50px;
  }
}

@media screen and (min-width: 1024px) {
  .card h1 {
    font-size: 55px;
  }
}
</style>
