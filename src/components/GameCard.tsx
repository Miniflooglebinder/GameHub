import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Game } from "@/hooks/useGames";

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
    </Card>
  );
};

export default GameCard;
