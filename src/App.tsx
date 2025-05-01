import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="w-full lg:col-span-2">
        <NavBar />
      </div>
      <div className="hidden lg:block">Aside</div>
      <div>
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
