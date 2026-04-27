import { useQuery } from "@tanstack/react-query";
import { vendorService } from "../services/vendor-service";

export const useVendors = () => {
  return useQuery({
    queryKey: ["vendors"],
    queryFn: vendorService.getVendors,
  });
};