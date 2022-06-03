import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Status = "unset" | "success" | "fail";

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
