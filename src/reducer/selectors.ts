import { RootState } from "./types";

export const getPage = (state: RootState) => state.page.value;
export const getImages = (state: RootState) => state.images.images;
export const getCount = (state: RootState) => state.images.count;
export const getStatus = (state: RootState) => state.status.value;
