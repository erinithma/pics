export type Image = {
  url: string;
  name: string;
};

export type UserData = {
  name: string;
  password: string;
};

export type Status = "unset" | "success" | "fail";
