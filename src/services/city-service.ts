import  Api  from "../api/axios"; 

export interface City {
  id: number;
  name: string;
  image: string;
  vendors_count: number;
}

export const getCities = async (): Promise<City[]> => {
  const res = await Api.get("/cities");

  return res.data.data;
};