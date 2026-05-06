// category-service.ts

import Api from "../api/axios";

export interface PopularCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export const getPopularCategories = async (): Promise<PopularCategory[]> => {
  const res = await Api.get("/categories"); 

  return res.data.data;
};