import { Image } from "@/store/galleryStore";

export const getImgFirstAndLastId = (
  images: Image[]
): { firstId: number; lastId: number } => {
  const firstId = Number(images[0]?.id);
  let lastId = Number(images[images.length - 1]?.id);

  //this is workaround for BE images id inconsistency bug on page 5
  if (lastId === 101) {
    lastId = 99;
  }

  return { firstId, lastId };
};
