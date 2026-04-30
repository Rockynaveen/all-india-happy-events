import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useVendorDetails = (slug: string) => {
  return useQuery({
    queryKey: ["vendor-details", slug],
    queryFn: async () => {
      const res = await axios.get(
        `https://allhappyevents.jbservices.in/api/vendors/${slug}`
      );
      return res.data;
    },
    enabled: !!slug,
  });
};