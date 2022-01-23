import { User } from "./user";

export interface Tweet {
  user: User,
  contents: string,
  images: string[],
  createdDate: Date,
}