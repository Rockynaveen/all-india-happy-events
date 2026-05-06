
import  api  from "../api/api";

export const getRealWeddings = async () => {
  const res = await api.get("/real-weddings");
  return res.data.data;
};