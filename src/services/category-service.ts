import Api from "../api/axios"; 

export interface PopularCategory {
  id: number;
  title: string;
  image: string;
  count: number;
  icon: string;
}

export const getPopularCategories = async (): Promise<PopularCategory[]> => {
  const { data } = await Api.get("/popular-categories");
  // if response is { data: [...] } then: return data.data;
  return data;
};