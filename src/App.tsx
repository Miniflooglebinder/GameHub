import GameGrid from "@/components/GameGrid";
import NavBar from "@/components/NavBar";

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:grid-rows-2">
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
