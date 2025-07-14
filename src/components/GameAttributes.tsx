import CriticScore from "@/components/CriticScore";
import DefinitionItem from "@/components/DefinitionItem";
import ExpandableText from "@/components/ExpandableText";
import PlatformIconList from "@/components/PlatformIconList";
import Rating from "@/components/Rating";
import { Separator } from "@/components/ui/separator";
import { Game } from "@/entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-semibold mb-4">{game.name}</h1>
      <div className="flex items-center gap-4 mb-2 w-fit">
        <span className="inline-block bg-card border rounded-sm px-2 py-1 w-fit">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
        </span>
        <CriticScore score={game.metacritic} className="text-md" />
      </div>
      <div className="mb-4">
        <Rating rating={game.rating_top} count={game.ratings_count} />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <ExpandableText maxChars={300}>{game.description_raw}</ExpandableText>

        <div className="border rounded-sm h-fit w-full md:max-w-[20rem] mx-auto md:mx-0">
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
      </div>
    </>
  );
};

export default GameAttributes;
