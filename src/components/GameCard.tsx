import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/entities/Game";
import PlatformIconList from "@/components/PlatformIconList";
import CriticScore from "@/components/CriticScore";
import getCroppedImage from "@/util/image-crop";
import Rating from "@/components/Rating";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();

  const handleRedirect = () => navigate(`/games/${game.slug}`);

  return (
    <Card
      className="overflow-hidden w-full max-w-[600px] mx-auto pt-0 cursor-pointer hover:scale-105 transition-transform"
      onClick={handleRedirect}>
      <CardHeader className="p-0">
        <img src={getCroppedImage(game.background_image)} />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between gap-2 mb-2">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </div>
        <CardTitle className="text-2xl">{game.name}</CardTitle>
      </CardContent>
      <CardFooter className="mt-auto">
        <span className="ml-auto">
          <Rating rating={game.rating_top} count={game.ratings_count} />
        </span>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
