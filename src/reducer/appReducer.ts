import { combineReducers } from "redux";
import { reducer as page } from "./page";
import { reducer as images } from "./images";
import { reducer as error } from "./error";

const reducers = {
  page,
  images,
  error,
};

export const appReducer = combineReducers(reducers);
