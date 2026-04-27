import axiosInstance from "../api/axios";

export const vendorService = {
  async getVendors() {
    const res = await axiosInstance.get("/vendors");
    return res.data.data;
  },

  async getVendorBySlug(slug: string) {
    const res = await axiosInstance.get(`/vendors/${slug}`);
    return res.data.data;
  },
};