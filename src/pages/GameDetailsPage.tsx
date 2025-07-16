import CriticScore from "@/components/CriticScore";
import DefinitionItem from "@/components/DefinitionItem";
import ExpandableText from "@/components/ExpandableText";
import PlatformIconList from "@/components/PlatformIconList";
import Rating from "@/components/Rating";
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
    <div className="max-w-[1280px] mt-4 mx-auto">
      <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
      <Separator className="my-2 max-w-[22ch]" />
      <div className="flex items-center mb-8 h-8">
        <Rating rating={game.rating_top} count={game.ratings_count} />
        <Separator orientation="vertical" className="mx-2" />
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
        <Separator orientation="vertical" className="mx-2" />
        <CriticScore score={game.metacritic} className="text-sm h-fit" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-y-5 gap-x-10">
        <ScreenshotCarousel gameId={game.id} />
        <div className="row-start-3 md:row-start-auto border rounded-sm h-fit w-fit min-w-[20rem] md:justify-self-end">
          <DefinitionItem term="Platforms">
            {game.parent_platforms.map(({ platform }) => (
              <p key={platform.id}>{platform.name}</p>
            ))}
          </DefinitionItem>
          <Separator />
          <DefinitionItem term="Genres">
            {game.genres.map((g) => (
              <p key={g.id}>{g.name}</p>
            ))}
          </DefinitionItem>
          <Separator />
          <DefinitionItem term="Publishers">
            {game.publishers?.map((p) => (
              <p key={p.id}>{p.name}</p>
            ))}
          </DefinitionItem>
        </div>
        <ExpandableText maxChars={300} className="text-lg">
          {game.description_raw}
        </ExpandableText>
      </div>
    </div>
  );
};

export default GameDetailsPage;
