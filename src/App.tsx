import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

// Follow the "query pattern" and store query info in one spot
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="w-full lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block px-5">
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </div>
      <div>
        <PlatformSelector
          onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
        />
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
