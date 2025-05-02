import apiClient from "@/services/api-client";
import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Game object interface
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

// The response is shaped like this
interface FetchGamesResponse {
  count: number;
  results: Game[]; // The results we want are here
}

// For fetching from the '/games' endpoint
const useGames = () => {
  // States for games
  const [games, setGames] = useState<Game[]>([] as Game[]);
  const [error, setError] = useState("");

  // Fetch logic
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return; // If request is cancelled don't show error
        setError(error.message);
      });

    return () => controller.abort(); // Cleanup function
  }, []);

  return { games, error };
};

export default useGames;
