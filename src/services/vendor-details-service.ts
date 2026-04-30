import { api } from "../api/api";

export const getVendorBySlug = async (slug: string) => {
  const res = await api.get(`/vendors/${slug}`);
  return res.data.data;
};