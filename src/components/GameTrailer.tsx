import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  // Get the first video and return the markup if it exists
  const first = data?.results[0];
  return first ? (
    <div className="mx-auto max-w-[700px]">
      <video src={first.data[480]} poster={first.preview} controls />
    </div>
  ) : null;
};

export default GameTrailer;
