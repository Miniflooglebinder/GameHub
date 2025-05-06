import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

// Follow the "query pattern" and store query info in one spot
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="w-full lg:col-span-2">
        <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
      </div>
      <div className="hidden lg:block pl-2">
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        />
      </div>
      <div>
        <div className="pl-2 mb-4">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex items-center gap-4">
            <PlatformSelector
              onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              sortOrder={gameQuery.sortOrder}
            />
          </div>
        </div>
        <GameGrid gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
