<template>
  <div class="app">
    <navbar />

    <main class="container-fluid">
      <router-view />
    </main>

    <footer-component />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import Navbar from "@/components/Navbar.vue";
import FooterComponent from "@/components/Footer.vue";

@Options({
  components: {
    Navbar,
    FooterComponent,
  },
})
export default class App extends Vue {}
</script>
