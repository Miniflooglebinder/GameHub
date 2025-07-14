import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="hidden lg:block">
        <GenreList />
      </div>
      <div>
        <div className="pl-2 mb-4">
          <GameHeading />
          <div className="flex items-center gap-4">
            <PlatformSelector />
            <SortSelector />
          </div>
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
