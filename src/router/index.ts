import ImgDetailsView from "@/views/ImgDetailsView.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import GalleryView from "../views/GalleryView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/image/:id",
    name: "ImageDetails",
    component: ImgDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
