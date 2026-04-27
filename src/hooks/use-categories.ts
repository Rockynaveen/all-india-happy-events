import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = async () => {
  const res = await axios.get(
    "https://allhappyevents.jbservices.in/api/categories"
  );

  return res.data;
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};