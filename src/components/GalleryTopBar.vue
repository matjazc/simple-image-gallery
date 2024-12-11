<template>
  <div class="galleryTopBar">
    <div class="paginationInfo">
      {{ `${firstImgOnPage} - ${lastImgOnPage} of ${GALLERY_TOTAL_IMAGES}` }}
    </div>
    <vue-awesome-paginate
      :total-items="5"
      :items-per-page="1"
      :max-pages-shown="5"
      v-model="currentPage"
      @click="onClickHandler"
    >
      <template #prev-button>
        <div class="navButton">
          <img src="../assets/caret-left-regular.svg" height="25" />
        </div>
      </template>

      <template #next-button>
        <div class="navButton">
          <img src="../assets/caret-right-regular.svg" height="25" />
        </div>
      </template>
    </vue-awesome-paginate>
  </div>
</template>

<script lang="ts">
import { GALLERY_TOTAL_IMAGES } from "@/constants/constants";
import { useGalleryStore } from "@/store/galleryStore";
import { getImgFirstAndLastId } from "@/utils/paginationUtil";
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";

export default {
  name: "GalleryTopBar",
  setup() {
    const store = useGalleryStore();
    const { images, currentPage } = storeToRefs(store);
    const { getImages, setCurrentPage } = store;

    const firstImgOnPage = ref(0);
    const lastImgOnPage = ref(0);

    const onClickHandler = (page: number) => {
      setCurrentPage(page);
      getImages();
    };

    const updatePaginationInfo = () => {
      const { firstId, lastId } = getImgFirstAndLastId(images.value);
      firstImgOnPage.value = firstId + 1;
      lastImgOnPage.value = lastId + 1;
    };

    watch(images, () => {
      if (images) {
        updatePaginationInfo();
      }
    });

    return {
      currentPage,
      onClickHandler,
      firstImgOnPage,
      lastImgOnPage,
      GALLERY_TOTAL_IMAGES,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryTopBar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $primary-color;
  color: $secondary-text-color;
  padding: 5px 10px;

  .paginationInfo {
    align-self: center;
    font-weight: bold;
    font-size: 14px;
  }

  .navButton {
    display: flex;
    justify-content: center;
  }
}

.pagination-container {
  display: flex;
  column-gap: 2px;
  margin: unset;
}

.paginate-buttons {
  height: 30px;
  width: 30px;
  border: none;
  background-color: $background-color;
  color: $primary-text-color;
  font-weight: bold;
  cursor: pointer;
}

.paginate-buttons:hover {
  border-radius: 4px;
  background-color: $secondary-color;
}

.active-page {
  background-color: $background-color;
  border: 2px solid $tertiary-color;
  border-radius: 4px;
  color: $tertiary-color;
}

.active-page:hover {
  background-color: unset;
}
</style>
