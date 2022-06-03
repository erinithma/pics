import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducer";
import { apiMiddleware } from "./reducer/middleware";

const store = configureStore({
  reducer: appReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiMiddleware),
});

export default store;
