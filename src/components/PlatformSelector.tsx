import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useGameQueryStore from "@/GameQueryStore";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onValueChange={(slug) => {
        const platform = platforms.results.find((p) => p.slug === slug);
        if (!platform) throw new Error("you messed up the platform thing");
        setPlatformId(platform.id);
      }}>
      <SelectTrigger>
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        {platforms.results.map((platform) => (
          <SelectItem key={platform.id} value={platform.slug}>
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
