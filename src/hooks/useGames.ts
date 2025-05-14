import { GameQuery } from "@/App";
import { FetchResponse } from "@/services/api-client";
import { Platform } from "@/hooks/usePlatforms";
import apiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

// Game object interface
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  ratings_count: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

export default useGames;
