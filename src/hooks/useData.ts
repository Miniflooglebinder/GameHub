/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "@/services/api-client";
import { AxiosError, AxiosRequestConfig, CanceledError } from "axios";
import { useState, useEffect } from "react";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Generic data fetcher for the api
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
  // States for the data
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Fetch logic
  useEffect(
    () => {
      setLoading(true);
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
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
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
