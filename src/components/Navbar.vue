<template>
  <nav class="navbar navbar-expand-lg navbar-dark py-3 border-0 bg-darken">
    <div class="container-fluid">
      <router-link to="/">
        <a class="navbar-brand">
          <strong>Portfolio</strong>
        </a>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="(item, i) in items" :key="i">
            <router-link :to="{ name: item.text }">
              <a class="nav-link">{{ item.text }}</a>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NavbarComponent extends Vue {
  items: Array<Record<string, string>> = [
    {
      text: "Articles",
    },
    {
      text: "Apps",
    },
    {
      text: "Packages",
    },
  ];
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
