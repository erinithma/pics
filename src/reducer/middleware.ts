import { set } from "./error";

export const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.payload?.error !== undefined) {
    next(action);
    next({ type: set.type, payload: action.payload.error });
  } else {
    next(action);
  }
};
