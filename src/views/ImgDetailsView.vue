<template>
  <div class="imgDetailsView">
    <ImgDetailsTopBar />
    <ImgDetailsContent />
  </div>
</template>

<script lang="ts">
import ImgDetailsContent from "@/components/ImgDetailsContent.vue";
import ImgDetailsTopBar from "@/components/ImgDetailsTopBar.vue";
import { GALLERY_TOTAL_IMAGES } from "@/constants/constants";
import router from "@/router";
import { useGalleryStore } from "@/store/galleryStore";
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ImgDetailsView",
  components: {
    ImgDetailsTopBar,
    ImgDetailsContent,
  },
  setup() {
    const route = useRoute();
    const store = useGalleryStore();
    const { getImgDetails } = store;
    const id = ref(route.params.id);

    const navigateToImage = (newId: number) => {
      router.replace({ name: "ImageDetails", params: { id: newId } });
    };

    const handleKeydown = (e: KeyboardEvent) => {
      const currentId = Number(id.value);
      if (e.key === "ArrowLeft" && currentId > 0) {
        navigateToImage(currentId - 1);
      } else if (e.key === "ArrowRight" && currentId < GALLERY_TOTAL_IMAGES) {
        navigateToImage(currentId + 1);
      }
    };

    watch(
      () => route.params.id,
      (newId) => {
        id.value = newId;
        getImgDetails(newId.toString());
      }
    );

    onMounted(() => {
      getImgDetails(id.value.toString());
      document.addEventListener("keydown", handleKeydown);
    });

    onUnmounted(() => {
      store.imgDetails = null;
      document.removeEventListener("keydown", handleKeydown);
    });
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.imgDetailsView {
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
