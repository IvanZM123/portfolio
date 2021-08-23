<template>
  <div class="app">
    <navbar-component />

    <main class="container-fluid">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import NavbarComponent from "@/components/Navbar.vue";

@Options({
  components: {
    NavbarComponent,
  },
})
export default class App extends Vue {}
</script>
