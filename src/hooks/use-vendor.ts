import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchVendors = async () => {
  const res = await axios.get(
    "https://allhappyevents.jbservices.in/api/vendors"
  );

  return res.data; // 🔥 REQUIRED
};

export const useVendor = () => {
  return useQuery({
    queryKey: ["vendors"],
    queryFn: fetchVendors,
  });
};