import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/hooks/useGames";
import PlatformIconList from "@/components/PlatformIconList";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="overflow-hidden pt-0">
      {/* <img src={game.background_image} /> */}
      <CardHeader className="p-0">
        <img src={game.background_image} />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{game.name}</CardTitle>
      </CardContent>
      <CardFooter>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
      </CardFooter>
    </Card>
  );
};

export default GameCard;
