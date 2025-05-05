import { Button } from "@/components/ui/button";
import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImage from "@/util/image-crop";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: GenreListProps) => {
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id} className="flex items-center gap-2 my-2">
          <img
            src={getCroppedImage(genre.image_background)}
            alt={`${genre.name} genre image`}
            className="size-[32px] rounded-md"
          />
          <Button
            onClick={() => onSelectGenre(genre)}
            variant={"link"}
            className="text-lg leading-normal text-left justify-start whitespace-normal grow-1 shrink-1 p-1 h-auto">
            {genre.name}
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
