import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchLocations = async () => {
  const res = await axios.get(
    "https://allhappyevents.jbservices.in/api/locations"
  );

  return res.data;
};

export const useLocations = () => {
  return useQuery({
    queryKey: ["locations"],
    queryFn: fetchLocations,
  });
};