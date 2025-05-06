import { GameQuery } from "@/App";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const text = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return <h1 className="text-5xl font-semibold capitalize mb-4">{text}</h1>;
};

export default GameHeading;
