import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/css/style.css";

import { animation } from "@/directives/animation.directive";

const VueApp = createApp(App);

VueApp.directive("animation", animation);

VueApp.use(router).mount("#app");
