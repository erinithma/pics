import { combineReducers } from "redux";
import { reducer as page } from "./page";
import { reducer as images } from "./images";
import { reducer as status } from "./status";
import { reducer as auth } from "./auth";

const reducers = {
  page,
  images,
  status,
  auth,
};

export const appReducer = combineReducers(reducers);
