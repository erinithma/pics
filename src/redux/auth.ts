import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../common/api";
import { UserData } from "../common/types";

export const auth = createAsyncThunk("api/auth", async (data: UserData) => {
  try {
    await Api.auth(data);
    return {
      status: "success",
    };
  } catch {
    return {
      status: "fail",
    };
  }
});

export const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
});

export const { reducer } = slice;
