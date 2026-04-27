import axiosInstance from "../api/axios";

export const fetchBlogBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/blogs/${slug}`);
  return res.data?.data;
};