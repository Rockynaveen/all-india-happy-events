import { useQuery } from "@tanstack/react-query";
import { fetchRealWeddings } from "../services/real-wedding-service";

export const useRealWeddings = () => {
  return useQuery({
    queryKey: ["real-weddings"],
    queryFn: fetchRealWeddings,
  });
};