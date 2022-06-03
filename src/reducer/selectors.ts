import { RootState } from "./types";

export const getPage = (state: RootState) => state.page.value;
export const getImages = (state: RootState) => state.images.images;
export const getCount = (state: RootState) => state.images.count;
export const isError = (state: RootState) => {
  console.log("STATE", state.error.value);
  return state.error.value;
};
