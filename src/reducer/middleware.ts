import { set } from "./status";

export const apiMiddleware = (store: any) => (next: any) => (action: any) => {
  if (action.payload?.status !== undefined) {
    next(action);
    next({ type: set.type, payload: action.payload.status });
  } else {
    next(action);
  }
};
