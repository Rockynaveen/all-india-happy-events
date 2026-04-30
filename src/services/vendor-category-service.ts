import { api } from "../api/api";
import  type { Category } from "../types/vendor-category-type";

export const getCategories = async (): Promise<Category[]> => {
  const res = await api.get("/categories");
  return res.data.data;
};