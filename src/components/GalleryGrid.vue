<template>
  <Loading v-if="isLoading" :active="isLoading" />
  <div class="galleryGrid">
    <div v-for="image in images" :key="image.id">
      <GalleryCard :author="image.author" :id="image.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { useGalleryStore } from "@/store/galleryStore";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import GalleryCard from "./GalleryCard.vue";

export default defineComponent({
  name: "GalleryGrid",
  components: {
    GalleryCard,
    Loading,
  },
  setup() {
    const store = useGalleryStore();
    const { images, isLoading } = storeToRefs(store);
    const { getImages } = store;

    onMounted(() => {
      getImages();
    });

    return {
      images,
      isLoading,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 12px;
  margin: 20px 20px 0;
}
</style>
