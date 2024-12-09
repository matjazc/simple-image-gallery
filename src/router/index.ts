import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GalleryView from "../views/GalleryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "gallery",
    component: GalleryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
