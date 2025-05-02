import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/hooks/useGames";
import PlatformIconList from "@/components/PlatformIconList";
import CriticScore from "@/components/CriticScore";
import getCroppedImage from "@/util/image-crop";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden pt-0">
      {/* <img src={game.background_image} /> */}
      <CardHeader className="p-0">
        <img src={getCroppedImage(game.background_image)} />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{game.name}</CardTitle>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
        <CriticScore score={game.metacritic} />
      </CardFooter>
    </Card>
  );
};

export default GameCard;
