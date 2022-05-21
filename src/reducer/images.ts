import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../common/api";
import { Image } from "../common/types";

export const fetchImages = createAsyncThunk(
  "api/images",
  async (page: number) => {
    try {
      return {
        ...(await Api.getImages(page)),
        error: false,
      };
    } catch {
      return {
        images: [],
        count: 0,
        error: true,
      };
    }
  }
);

export const deleteImage = createAsyncThunk(
  "api/deleteImage",
  async (data: { name: string; page: number }) => {
    try {
      await Api.removeImage(data.name);
      return {
        ...(await Api.getImages(data.page)),
        error: false,
      };
    } catch {
      return {
        images: [],
        count: 0,
        error: true,
      };
    }
  }
);

export const slice = createSlice({
  name: "images",
  initialState: {
    images: [],
    count: 0,
    error: false,
  } as { images: Image[]; count: number; error: boolean },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
      state.error = action.payload.error;
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
      state.error = action.payload.error;
    });
  },
});

export const { reducer } = slice;