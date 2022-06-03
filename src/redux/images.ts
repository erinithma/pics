import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../common/api";
import { Image } from "../common/types";

export const fetchImages = createAsyncThunk(
  "api/images",
  async (page: number) => {
    try {
      return {
        ...(await Api.getImages(page, +(process.env.REACT_APP_PER_PAGE || 20))),
        status: "success",
      };
    } catch {
      return {
        images: [],
        count: 0,
        status: "fail",
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
        ...(await Api.getImages(
          data.page,
          +(process.env.REACT_APP_PER_PAGE || 20)
        )),
        status: "success",
      };
    } catch {
      return {
        images: [],
        count: 0,
        status: "fail",
      };
    }
  }
);

export const slice = createSlice({
  name: "images",
  initialState: {
    images: [],
    count: 0,
  } as { images: Image[]; count: number },
  reducers: {
    reset(state) {
      state.images = [];
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchImages.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
  },
});

export const { reducer } = slice;
export const { reset } = slice.actions;
