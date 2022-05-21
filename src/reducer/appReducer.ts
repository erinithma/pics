import { combineReducers } from "redux";
import { reducer as page } from "./page";
import { reducer as images } from "./images";

const reducers = {
  page,
  images,
};

export const appReducer = combineReducers(reducers);
