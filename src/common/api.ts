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

  static getUnsorted(
    page: number,
    perPage: number
  ): Promise<{ images: Image[]; count: number }> {
    return Api.request("/unsorted", "POST", { page, perPage });
  }

  static removeImage(name: string) {
    return Api.request("/delete", "POST", { name });
  }

  static removeUnsorted(name: string) {
    return Api.request("/delete_unsorted", "POST", { name });
  }

  static move12(name: string) {
    return Api.request("/move/12", "POST", { name });
  }

  static move18(name: string) {
    return Api.request("/move/18", "POST", { name });
  }

  static moveAnime(name: string) {
    return Api.request("/move/anime", "POST", { name });
  }

  static moveMem(name: string) {
    return Api.request("/move/mem", "POST", { name });
  }

  static getImages18(
    page: number,
    perPage: number
  ): Promise<{ images: Image[]; count: number }> {
    return Api.request("/images18", "POST", { page, perPage });
  }

  static removeImage18(name: string) {
    return Api.request("/delete18", "POST", { name });
  }

  static getMemes(
    page: number,
    perPage: number
  ): Promise<{ images: Image[]; count: number }> {
    return Api.request("/mem", "POST", { page, perPage });
  }

  static removeMem(name: string) {
    return Api.request("/delete_mem", "POST", { name });
  }

  static getAnimes(
    page: number,
    perPage: number
  ): Promise<{ images: Image[]; count: number }> {
    return Api.request("/anime", "POST", { page, perPage });
  }

  static removeAnime(name: string) {
    return Api.request("/delete_anime", "POST", { name });
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
