import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: PlatformSelectorProps) => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Select
      onValueChange={(slug) => {
        const platform = platforms.find((p) => p.slug === slug);
        if (!platform) throw new Error("you fucked up the platform thing");
        onSelectPlatform(platform);
      }}>
      <SelectTrigger>
        <SelectValue placeholder="Platforms" />
      </SelectTrigger>
      <SelectContent>
        {platforms.map((platform) => (
          <SelectItem key={platform.id} value={platform.slug}>
            {platform.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default PlatformSelector;
