import { useQuery } from "@tanstack/react-query";
import { getRealWeddings } from "../services/real-wedding-service";

export const useRealWeddings = () => {
  return useQuery({
    queryKey: ["real-weddings"],
    queryFn: getRealWeddings,
  });
};