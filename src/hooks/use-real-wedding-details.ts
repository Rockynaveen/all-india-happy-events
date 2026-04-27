import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchWeddingBySlug = async (slug: string) => {
  const res = await axios.get(
    `https://allhappyevents.jbservices.in/api/real-weddings/${slug}`
  );

  return res.data?.data;
};

export const useRealWeddingDetails = (slug: string) => {
  return useQuery({
    queryKey: ["real-wedding", slug],
    queryFn: () => fetchWeddingBySlug(slug),
    enabled: !!slug,
  });
};