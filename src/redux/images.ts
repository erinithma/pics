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

export const fetchImages18 = createAsyncThunk(
  "api/images18",
  async (page: number) => {
    try {
      return {
        ...(await Api.getImages18(
          page,
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

export const fetchMemes = createAsyncThunk(
  "api/memes",
  async (page: number) => {
    try {
      return {
        ...(await Api.getMemes(page, +(process.env.REACT_APP_PER_PAGE || 20))),
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

export const fetchAnimes = createAsyncThunk(
  "api/animes",
  async (page: number) => {
    try {
      return {
        ...(await Api.getAnimes(page, +(process.env.REACT_APP_PER_PAGE || 20))),
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

export const deleteImage18 = createAsyncThunk(
  "api/deleteImage18",
  async (data: { name: string; page: number }) => {
    try {
      await Api.removeImage18(data.name);
      return {
        ...(await Api.getImages18(
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

export const deleteAnime = createAsyncThunk(
  "api/deleteAnime",
  async (data: { name: string; page: number }) => {
    try {
      await Api.removeAnime(data.name);
      return {
        ...(await Api.getAnimes(
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

export const deleteMem = createAsyncThunk(
  "api/deleteMem",
  async (data: { name: string; page: number }) => {
    try {
      await Api.removeMem(data.name);
      return {
        ...(await Api.getMemes(
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
    builder.addCase(fetchImages18.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(deleteImage18.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(fetchMemes.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(deleteMem.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(fetchAnimes.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
    builder.addCase(deleteAnime.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.count = action.payload.count;
    });
  },
});

export const { reducer } = slice;
export const { reset } = slice.actions;
