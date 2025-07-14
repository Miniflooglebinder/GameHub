import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  // By using `slug!`, we are telling typescript that this will never be null

  if (error || (!isLoading && !game)) throw error;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {game && (
        <>
          <h1 className="text-4xl font-semibold">{game.name}</h1>
          <p className="max-w-[60ch]">{game.description_raw}</p>
        </>
      )}
    </div>
  );
};

export default GameDetailsPage;
