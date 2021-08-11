<template>
  <main id="body-pd">
    <header class="header bg-darken shadow" id="header">
      <div class="header_toggle">
        <i @click="toggle" class="bx bx-menu" id="header-toggle"></i>
      </div>
      <div class="header_img">
        <!-- <img src="..." alt="" /> -->
      </div>
    </header>
    <div class="l-navbar bg-darken" id="nav-bar">
      <nav class="nav bg-darken">
        <div>
          <a href="#" class="nav_logo">
            <i class="bx bxs-business nav_logo-icon"></i>
            <span class="nav_logo-name">Portfolio</span>
          </a>
          <div class="nav_list">
            <a class="nav_link">
              <i class="bx bx-grid-alt nav_icon"></i>
              <span class="nav_name">Dashboard</span>
            </a>
            <a routerLink="products" routerLinkActive="active" class="nav_link">
              <i class="bx bx-box nav_icon"></i>
              <span class="nav_name">Productos</span>
            </a>
            <a routerLink="orders" routerLinkActive="active" class="nav_link">
              <i class="bx bx-list-ul nav_icon"></i>
              <span class="nav_name">Pedidos</span>
            </a>
            <a routerLink="clients" routerLinkActive="active" class="nav_link">
              <i class="bx bx-user nav_icon"></i>
              <span class="nav_name">Clientes</span>
            </a>
          </div>
        </div>
      </nav>
    </div>

    <!--Container Main start-->
    <div class="height-100 py-4">
      <router-view />
    </div>
    <!--Container Main end-->
  </main>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class App extends Vue {
  private nav: Element | null = null;
  private body: Element | null = null;
  private header: Element | null = null;

  mounted(): void {
    this.header = document.getElementById("header");
    this.nav = document.getElementById("nav-bar");
    this.body = document.getElementById("body-pd");
  }

  toggle(): void {
    this.header?.classList.toggle("body-pd");
    this.nav?.classList.toggle("show");
    this.body?.classList.toggle("body-pd");
  }
}
</script>

<style lang="scss">
$body-font: "Poppins";
$first-color-light: #d2cbeb;
$first-color: #9c27b0;
$white-color: #f7f6fb;
$normal-font-size: 1rem;
$header-height: 3rem;
$nav-width: 68px;
$z-fixed: 100;

*,
::before,
::after {
  box-sizing: border-box;
}

main {
  position: relative;
  margin: $header-height 0 0 0;
  padding: 0 1rem;
  font-family: $body-font !important;
  font-size: $normal-font-size;
  transition: 0.5s;
}

a {
  text-decoration: none !important;
}

.header {
  width: 100%;
  height: $header-height;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: $white-color;
  z-index: $z-fixed;
  transition: 0.5s;
}

.header_toggle {
  font-size: 1.5rem;
  cursor: pointer;
}

.header_img {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
}

.header_img img {
  width: 40px;
}

.l-navbar {
  position: fixed;
  top: 0;
  left: -30%;
  width: $nav-width;
  height: 100vh;
  background-color: $first-color;
  padding: 0.5rem 1rem 0 0;
  transition: 0.5s;
  z-index: $z-fixed;
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav_logo,
.nav_link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 1rem;
  padding: 0.5rem 0 0.5rem 1.5rem;
}

.nav_logo {
  margin-bottom: 2rem;
}

.nav_logo-icon {
  font-size: 1.25rem;
  color: $white-color;
}

.nav_logo-name {
  color: $white-color;
  font-weight: 700;
}

.nav_link {
  position: relative;
  color: $first-color-light;
  margin-bottom: 1.5rem;
  transition: 0.3s;
}

.nav_link:hover {
  color: $white-color;
}

.nav_icon {
  font-size: 1.25rem;
}

.show {
  left: 0;
}

.body-pd {
  padding-left: calc(#{$nav-width} + 1rem);
}

.active {
  color: $white-color;
}

.active::before {
  content: "";
  position: absolute;
  left: 0;
  width: 2px;
  height: 32px;
  background-color: $white-color;
}

.height-100 {
  height: 100vh;
}

@media screen and (min-width: 768px) {
  main {
    margin: calc(#{$header-height} + 1rem) 0 0 0;
    padding-left: calc(#{$nav-width} + 2rem);
  }

  .header {
    height: calc(#{$header-height} + 1rem);
    padding: 0 2rem 0 calc(#{$nav-width} + 2rem);
  }

  .header_img {
    width: 40px;
    height: 40px;
  }

  .header_img img {
    width: 45px;
  }

  .l-navbar {
    left: 0;
    padding: 1rem 1rem 0 0;
  }

  .show {
    width: calc(#{$nav-width} + 156px);
  }

  .body-pd {
    padding-left: calc(#{$nav-width} + 188px);
  }
}
</style>
