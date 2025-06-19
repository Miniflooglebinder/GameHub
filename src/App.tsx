import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="w-full lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block pl-2">
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
}

export default App;
