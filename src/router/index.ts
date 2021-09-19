import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("@/views/Apps.vue"),
  },
  {
    path: "/apps/show/:appId",
    name: "Apps-Details",
    component: () => import("@/views/AppDetails.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("@/views/Articles.vue"),
  },
  {
    path: "/packages",
    name: "Packages",
    component: () => import("@/views/Packages.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
