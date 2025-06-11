import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="text-5xl font-semibold capitalize mb-4">{text}</h1>;
};

export default GameHeading;
