import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useVenues = () => {
  return useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const res = await axios.get(
        "https://allhappyevents.jbservices.in/api/venues"
      );

      return res.data.data; // 👈 important (adjust if structure differs)
    },
  });
};