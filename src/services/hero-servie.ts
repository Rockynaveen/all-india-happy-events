import api from "../api/api";
import type {  CategoriesResponse } from "../types/vendor-category-type";


export const getVendorCategories = async (): Promise< CategoriesResponse> => {
  const res = await api.get("/categories");
  return res.data;
};      export const getLocations = async () => {
  const res = await api.get("/cities");
   return res.data.data;
};