import apiClient from "@/services/api-client";
import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Generic data fetcher for the api
const useData = <T>(endpoint: string) => {
  // States for the data
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Fetch logic
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return; // If request is cancelled don't show error
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort(); // Cleanup function
  }, []);

  return { data, error, isLoading };
};

export default useData;
