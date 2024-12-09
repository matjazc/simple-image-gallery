import { apiRoutes } from "@/constants/apiRoutes";
import { MAX_ITEMS_PER_PAGE } from "@/constants/constants";
import axios from "axios";
import { defineStore } from "pinia";

interface Image {
  id: string;
  author: string;
  download_url: string;
}

interface State {
  images: Image[];
  loading: boolean;
  currentPage: number;
}

export const useGalleryStore = defineStore("counter", {
  state: (): State => ({
    images: [],
    loading: false,
    currentPage: 1,
  }),
  actions: {
    async getImages(page: number) {
      this.loading = true;

      try {
        const response = await axios.get<Image[]>(
          `${apiRoutes.RANDOM_IMAGES}/list?page=${page}&limit=${MAX_ITEMS_PER_PAGE}`
        );

        this.images = response.data;
      } catch (error) {
        console.error("Error fetching images:", error);
        return error;
      } finally {
        this.loading = false;
      }
    },
  },
});
