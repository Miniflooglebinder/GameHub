import GameCard from "@/components/GameCard";
import useGames from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 p-2">
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
