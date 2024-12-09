<template>
  <div class="galleryGrid">
    <div v-for="image in images" :key="image.id">
      <img
        :src="`https://picsum.photos/id/${image.id}/240`"
        :alt="image.author"
      />
      <p>{{ image.author }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useGalleryStore } from "@/store/galleryStore";
import { storeToRefs } from "pinia";
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "GalleryGrid",
  setup() {
    const store = useGalleryStore();
    const { images, currentPage } = storeToRefs(store);
    const { getImages } = store;

    onMounted(() => {
      getImages(currentPage.value);
    });

    return {
      images,
    };
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryGrid {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px 20px 0 20px;
}
</style>
