import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFaqs = async () => {
  const res = await axios.get(
    "https://allhappyevents.jbservices.in/api/faqs"
  );

  return res.data?.data || [];
};

export const useFaqs = () => {
  return useQuery({
    queryKey: ["faqs"],
    queryFn: fetchFaqs,
  });
};