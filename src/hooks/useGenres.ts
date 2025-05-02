import apiClient from "@/services/api-client";
import { AxiosError, CanceledError } from "axios";
import { useState, useEffect } from "react";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  // States for genres
  const [genres, setGenres] = useState<Genre[]>([] as Genre[]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Fetch logic
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    apiClient
      .get<FetchGenresResponse>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return; // If request is cancelled don't show error
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort(); // Cleanup function
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
