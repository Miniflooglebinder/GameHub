import { Button } from "@/components/ui/button";
import useGameQueryStore from "@/GameQueryStore";
import useGenres from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import getCroppedImage from "@/util/image-crop";

const GenreList = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const { data: genres } = useGenres();

  return (
    <>
      <h2 className="text-2xl font-semibold ml-1.5 mb-2">Genres</h2>
      <ul>
        {genres.results.map((genre) => (
          <Button
            key={genre.id}
            asChild
            onClick={() => setGenreId(genre.id)}
            variant={"ghost"}
            className="text-lg leading-normal text-left justify-start whitespace-normal grow-1 shrink-1 w-full py-1 px-1.5 h-auto">
            <li
              className={cn(
                "flex items-center gap-2 my-1 cursor-default",
                genre.id === genreId && "bg-accent dark:bg-accent/50"
              )}>
              <img
                src={getCroppedImage(genre.image_background)}
                alt={`${genre.name} genre image`}
                className="size-[32px] rounded-md object-cover"
              />
              {genre.name}
            </li>
          </Button>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
