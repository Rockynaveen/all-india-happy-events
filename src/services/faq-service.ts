import api from "../api/axios";

export const getFaqs = async () => {
  const res = await api.get("/faqs"); 
  return res.data.data.faqs; 
};