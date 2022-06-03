import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "../common/types";

export const initialState: { value: Status } = {
  value: "unset",
};

const slice = createSlice({
  name: "error",
  initialState,
  reducers: {
    set(state, action: PayloadAction<Status>) {
      state.value = action.payload;
    },
  },
});

export const { reducer } = slice;

export const { set } = slice.actions;
