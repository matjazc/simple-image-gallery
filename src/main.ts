import "@fontsource/open-sans";
import { createPinia } from "pinia";
import { createApp } from "vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueAwesomePaginate)
  .mount("#app");
