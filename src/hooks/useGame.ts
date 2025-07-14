import { Game } from "../entities/Game";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const api = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => api.get(slug),
    staleTime: ms("24h"),
  });

export default useGame;
