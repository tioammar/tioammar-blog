import { Blog } from "./blog";

// for passing JSON to object
// this object depends on json response model. see data.json for example model
export interface JsonResponse {
  blog: Blog[];
}