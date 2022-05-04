<template>
  <div class="footer">
    <footer>
      <div class="card border-0 bg-darken pt-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 col-xl-8 p-3">
              <h1>
                <strong>{Portfolio}</strong>
              </h1>
              <p class="text-muted py-2">
                This is my portfolio, in which you will find some of the
                technologies that I can handle, encompassing frameworks,
                libraries, design patterns, interface design, among others. As
                you will find the most representative projects of what I am
                capable of offering.
              </p>
              <div class="d-flex align-items-center">
                <a
                  v-for="(item, i) in items"
                  :key="i"
                  :href="item.url"
                  target="_blank"
                  class="
                    btn
                    border-white
                    text-white
                    rounded-circle
                    d-flex
                    align-items-center
                    mx-2
                    p-2
                  "
                >
                  <i :class="`bx bxl-${item.icon}`"></i>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-5 col-xl-4 p-3 text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1635/1635299.png"
                alt="Picture Footer"
              />
              <a
                href="mailto:ivanzaldivar16@gmail.com"
                class="btn btn-light w-100 rounded-pill border-0 my-3"
                >Contact me</a
              >
            </div>
            <div class="col-12">
              <p>
                © {{ new Date().getFullYear() }} Portfolio. Created by
                <strong>Ivan Zaldivar</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

interface Item {
  icon: string;
  url: string;
}

@Options({})
export default class Footer extends Vue {
  items: Item[] = [
    {
      url: "https://twitter.com/thebug404",
      icon: "twitter",
    },
    {
      url: "https://github.com/thebug404",
      icon: "github",
    },
    {
      url: "https://dev.to/ivanzm123",
      icon: "dev-to",
    },
  ];
}
</script>

<style scoped>
img {
  width: 200px;
  object-fit: contain;
}
</style>
