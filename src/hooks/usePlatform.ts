import usePlatforms from "@/hooks/usePlatforms";

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((p) => p.id === id);

  return platform;
};

export default usePlatform;
