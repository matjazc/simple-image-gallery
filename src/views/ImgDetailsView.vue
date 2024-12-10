<template>
  <div class="imgDetailsView">
    <ImgDetailsTopBar />
    <ImgDetailsContent />
  </div>
</template>

<script lang="ts">
import ImgDetailsContent from "@/components/ImgDetailsContent.vue";
import ImgDetailsTopBar from "@/components/ImgDetailsTopBar.vue";
import { useGalleryStore } from "@/store/galleryStore";
import { defineComponent, onMounted, onUnmounted } from "vue";
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
    const id = route.params.id as string;
    const { getImgDetails } = store;

    onMounted(() => {
      getImgDetails(id);
    });

    onUnmounted(() => {
      store.imgDetails = null;
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
