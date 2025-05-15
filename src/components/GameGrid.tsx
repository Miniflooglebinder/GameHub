import { GameQuery } from "@/App";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import { Button } from "@/components/ui/button";
import useGames from "@/hooks/useGames";
import React from "react";

interface GameGridProps {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons: number[] = Array.from({ length: 20 });

  return (
    <div className="p-2">
      {error && <p>{error.message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {isLoading && skeletons.map((_, i) => <GameCardSkeleton key={i} />)}
        {games?.pages.map((games, i) => (
          <React.Fragment key={i}>
            {games.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </div>
      {hasNextPage && (
        <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} className="my-5">
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </div>
  );
};

export default GameGrid;
