import { getToken, setToken } from "./storage";
import { Image, UserData } from "./types";

type Method = "POST" | "GET" | "DELETE";

export class Api {
  static request<Request, Response>(
    url: string,
    method: Method,
    data: Request,
    addToken: boolean = true
  ): Promise<Response> {
    const body: any = data;

    const obj: RequestInit = {
      body: JSON.stringify(body),
      method,
    };

    if (addToken) {
      obj.headers = { Authorization: `Bearer ${getToken()}` };
    }

    return fetch(`${process.env.REACT_APP_URL}${url}`, obj)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return json as Response;
      })
      .catch(() => {
        return Promise.reject();
      });
  }

  static getImages(
    page: number,
    perPage: number
  ): Promise<{ images: Image[]; count: number }> {
    return Api.request("/images", "POST", { page, perPage });
  }

  static removeImage(name: string) {
    return Api.request("/delete", "POST", { name });
  }

  static auth(data: UserData) {
    return Api.request<UserData, { token: string }>(
      "/auth",
      "POST",
      data,
      false
    ).then(({ token }) => {
      setToken(token);
    });
  }
}
