import apiClient from "@/services/api-client";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";

// Game object interface
interface Game {
  id: number;
  name: string;
}

// The response is shaped like this
interface FetchGamesResponse {
  count: number;
  results: Game[]; // The results we want are here
}

const GameGrid = () => {
  // States for games
  const [games, setGames] = useState<Game[]>([] as Game[]);
  const [error, setError] = useState("");

  // Fetch logic
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((error: AxiosError) => setError(error.message));
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
