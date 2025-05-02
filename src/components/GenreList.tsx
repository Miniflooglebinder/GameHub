import useGenres from "@/hooks/useGenres";
import getCroppedImage from "@/util/image-crop";

const GenreList = () => {
  const { data: genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>
          <div className="flex items-center gap-4 my-2">
            <img
              src={getCroppedImage(genre.image_background)}
              alt={`${genre.name} genre image`}
              className="size-[32px] rounded-md"
            />
            <p className="text-lg">{genre.name}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default GenreList;
