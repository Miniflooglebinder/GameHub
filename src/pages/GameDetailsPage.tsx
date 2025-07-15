import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import ScreenshotCarousel from "@/components/ScreenshotCarousel";
import { Separator } from "@/components/ui/separator";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router-dom";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  // By using `slug!`, we are telling typescript that this will never be null

  if (isLoading) return <p>Loading...</p>;
  if (error || !game) throw error;

  return (
    <div className="mx-auto w-fit md:w-full">
      <div className="flex flex-col md:flex-col-reverse gap-4">
        <GameAttributes game={game} />
        <ScreenshotCarousel gameId={game.id} />
      </div>
      <Separator className="my-4" />
      <Separator className="my-4" />
      <GameTrailer gameId={game.id} />
    </div>
  );
};

export default GameDetailsPage;
