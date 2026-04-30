import { useEffect, useState } from "react";

const API_URL = "https://allhappyevents.jbservices.in/api";

export const useHomeData = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoriesRes, citiesRes] = await Promise.all([
          fetch(`${API_URL}/categories`),
          fetch(`${API_URL}/cities`)
        ]);

        const categoriesData = await categoriesRes.json();
        const citiesData = await citiesRes.json();

        setData({
          categories: categoriesData.data || [],
          cities: citiesData.data || []
        });

      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, isLoading, error };
};