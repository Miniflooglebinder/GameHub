import { GameQuery } from "@/App";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import useGames from "@/hooks/useGames";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons: number[] = Array.from({ length: 20 });

  return (
    <>
      {error && <p>{error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-2">
        {isLoading && skeletons.map((_, i) => <GameCardSkeleton key={i} />)}
        {games?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
