import axiosInstance from "../api/axios";

export type Category = {
  id: number;
  name: string;
  icon: string;
};

export type HomeData = {
  title: string;
  subtitle: string;
  categories: Category[];
};

export const fetchHomeData = async (): Promise<HomeData> => {
  const res = await axiosInstance.get<{ data: Category[] }>("/categories");

  return {
    title: "All Happy Events",
    subtitle: "Find services for your events easily",
    categories: res.data.data || [],
  };
};