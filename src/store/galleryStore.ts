import { apiRoutes } from "@/constants/apiRoutes";
import { MAX_ITEMS_PER_PAGE } from "@/constants/constants";
import axios from "axios";
import { defineStore } from "pinia";

export interface Image {
  id: string;
  author: string;
  download_url: string;
  width: number;
  height: number;
}

interface State {
  images: Image[];
  imgDetails: Image | null;
  loading: boolean;
  currentPage: number;
}

export const useGalleryStore = defineStore("gallery", {
  state: (): State => ({
    images: [],
    imgDetails: null,
    loading: false,
    currentPage: 1,
  }),
  actions: {
    async getImages() {
      this.loading = true;

      try {
        const response = await axios.get<Image[]>(
          `${apiRoutes.RANDOM_IMAGES}/v2/list?page=${this.currentPage}&limit=${MAX_ITEMS_PER_PAGE}`
        );

        this.images = response.data;
      } catch (error) {
        console.error("Error fetching images:", error);
        return error;
      } finally {
        this.loading = false;
      }
    },
    async getImgDetails(id: string) {
      this.loading = true;

      try {
        const response = await axios.get<Image>(
          `${apiRoutes.RANDOM_IMAGES}/id/${id}/info`
        );

        this.imgDetails = response.data;
      } catch (error) {
        console.error("Error fetching image details:", error);
        return error;
      } finally {
        this.loading = false;
      }
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
  },
});
