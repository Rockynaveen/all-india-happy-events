// services/vendor-service.ts
import  api  from "../api/api";

export const getVendors = async () => {
  const res = await api.get("/vendors");
  return res.data.data.vendors;
};