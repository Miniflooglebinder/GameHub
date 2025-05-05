import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import { Platform } from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";
import { useState } from "react";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="w-full lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block px-5">
        <GenreList
          onSelectGenre={(genre) => setSelectedGenre(genre)}
          selectedGenre={selectedGenre}
        />
      </div>
      <div>
        <PlatformSelector onSelectPlatform={(platform) => setSelectedPlatform(platform)} />
        <GameGrid selectedGenre={selectedGenre} selectedPlatform={selectedPlatform} />
      </div>
    </div>
  );
}

export default App;
