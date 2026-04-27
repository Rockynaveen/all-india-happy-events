import { useQuery } from "@tanstack/react-query";
import { fetchHomeData } from "../services/home-service";

export const useHomeData = () => {
  return useQuery({
    queryKey: ["home-data"],
    queryFn: fetchHomeData,
  });
};