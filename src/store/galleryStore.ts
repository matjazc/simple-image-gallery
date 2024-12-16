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
  isLoading: boolean;
  currentPage: number;
  markedImages: string[];
}

export const useGalleryStore = defineStore("gallery", {
  state: (): State => ({
    images: [],
    imgDetails: null,
    isLoading: false,
    currentPage: 1,
    markedImages: [],
  }),
  actions: {
    async getImages() {
      this.isLoading = true;

      try {
        const response = await axios.get<Image[]>(
          `${apiRoutes.RANDOM_IMAGES}/v2/list?page=${this.currentPage}&limit=${MAX_ITEMS_PER_PAGE}`
        );

        this.images = response.data;
      } catch (error) {
        return error;
      } finally {
        this.isLoading = false;
      }
    },
    async getImgDetails(id: string) {
      this.isLoading = true;

      try {
        const response = await axios.get<Image>(
          `${apiRoutes.RANDOM_IMAGES}/id/${id}/info`
        );

        this.imgDetails = response.data;
      } catch (error) {
        return error;
      } finally {
        this.isLoading = false;
      }
    },
    setCurrentPage(page: number) {
      this.currentPage = page;
    },
    addMarkedId(id: string) {
      this.markedImages.push(id);
    },
  },
});
