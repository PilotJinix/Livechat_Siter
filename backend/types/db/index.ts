import { DateTime } from "luxon";

export interface IUser {
  id: number;
  username: string;
  password: string;
  role: "admin" | "common";
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface INews {
  id: number;
  userId: number;
  title: string;
  description: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface IChat {
  id: number;
  from: number;
  to: number;
  message: string;
  createdAt: DateTime;
  updatedAt: DateTime;
}

export interface IComment {
  id: number;
  newsId: number;
  createdAt: DateTime;
  updatedAt: DateTime;
}
