import { useQuery } from "@tanstack/react-query";
import { fetchBlogBySlug } from "../services/blogs-service";

export const useBlogDetail = (slug: string) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => fetchBlogBySlug(slug),
    enabled: !!slug,
  });
};