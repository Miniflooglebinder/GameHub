import useGameQueryStore from "@/GameQueryStore";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const text = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return <h1 className="text-5xl font-semibold capitalize mb-4">{text}</h1>;
};

export default GameHeading;
