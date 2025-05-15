import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === gameQuery.platformId);

  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="text-5xl font-semibold capitalize mb-4">{text}</h1>;
};

export default GameHeading;
