import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import useGames from "@/hooks/useGames";
import { Genre } from "@/hooks/useGenres";

interface GameGridProps {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons: number[] = Array.from({ length: 20 });

  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 p-2">
        {isLoading && skeletons.map((id) => <GameCardSkeleton key={id} />)}
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
