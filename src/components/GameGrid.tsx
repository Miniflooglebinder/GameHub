import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/GameCardSkeleton";
import useGames from "@/hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data: games, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const skeletons: number[] = Array.from({ length: 20 });

  // Calculate the total number of games fetch so far for the infinite scroll component
  const fetchedGamesCount =
    games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      {error && <p>{error.message}</p>}
      <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage} // The '!!' converts it to an actual boolean value (it was boolean || undefined before)
        next={() => fetchNextPage()}
        loader={<p>Loading...</p>}>
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
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
