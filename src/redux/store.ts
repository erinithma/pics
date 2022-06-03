import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from ".";
import { apiMiddleware } from "./middleware";

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export default store;
