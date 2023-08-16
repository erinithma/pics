import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../common/api";

export const fetchApart = createAsyncThunk(
  "api/apart",
  async (word: string) => {
    try {
      return {
        ...(await Api.getApart(word)),
        status: "success",
      };
    } catch {
      return {
        words: [],
        status: "fail",
      };
    }
  }
);

export const fetchAdverb = createAsyncThunk(
  "api/adverb",
  async (word: string) => {
    try {
      return {
        ...(await Api.getAdverb(word)),
        status: "success",
      };
    } catch {
      return {
        words: [],
        status: "fail",
      };
    }
  }
);

export const slice = createSlice({
  name: "words",
  initialState: {
    words: [],
  } as { words: string[] },
  reducers: {
    reset(state) {
      state.words = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApart.fulfilled, (state, action) => {
      state.words = action.payload.words;
    });
    builder.addCase(fetchAdverb.fulfilled, (state, action) => {
      state.words = action.payload.words;
    });
  },
});

export const { reducer } = slice;
export const { reset } = slice.actions;
