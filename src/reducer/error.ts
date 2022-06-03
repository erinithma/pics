import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: { value: boolean } = {
  value: false,
};

const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    set(state, action: PayloadAction<boolean>) {
      state.value = action.payload;
    },
  },
});

export const { reducer } = slice;

export const { set } = slice.actions;
