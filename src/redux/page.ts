import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: { value: number } = {
  value: 1,
};

const slice = createSlice({
  name: "page",
  initialState,
  reducers: {
    set(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { reducer } = slice;

export const { set } = slice.actions;
