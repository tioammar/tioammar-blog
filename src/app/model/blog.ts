import { User } from "./user";

export class Blog {
  constructor() {}

  id: number;
  title: string;
  datetime: number;
  content: string;
  picture: string;
  author: User;
  readcount: number;
  tag: string;
}