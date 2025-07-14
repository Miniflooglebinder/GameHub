import GameAttributes from "@/components/GameAttributes";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  // By using `slug!`, we are telling typescript that this will never be null

  if (error || (!isLoading && !game)) throw error;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="w-fit mx-auto">
      {game && <GameAttributes game={game} />}
    </div>
  );
};

export default GameDetailsPage;
