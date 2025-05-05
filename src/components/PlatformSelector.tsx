import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlatforms from "@/hooks/usePlatforms";

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Select>
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
