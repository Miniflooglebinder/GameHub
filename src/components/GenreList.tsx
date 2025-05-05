import { Button } from "@/components/ui/button";
import useGenres, { Genre } from "@/hooks/useGenres";
import { cn } from "@/lib/utils";
import getCroppedImage from "@/util/image-crop";

interface GenreListProps {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <Button
          key={genre.id}
          asChild
          onClick={() => onSelectGenre(genre)}
          variant={"ghost"}
          className="text-lg leading-normal text-left justify-start whitespace-normal grow-1 shrink-1 w-full py-1 px-1.5 h-auto">
          <li
            className={cn(
              "flex items-center gap-2 my-2 cursor-default",
              genre.id === selectedGenre?.id && "bg-accent dark:bg-accent/50"
            )}>
            <img
              src={getCroppedImage(genre.image_background)}
              alt={`${genre.name} genre image`}
              className="size-[32px] rounded-md"
            />
            {genre.name}
          </li>
        </Button>
      ))}
    </ul>
  );
};

export default GenreList;
