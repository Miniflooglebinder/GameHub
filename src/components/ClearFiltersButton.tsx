import { Button } from "@/components/ui/button";
import useGameQueryStore from "@/GameQueryStore";
import { X } from "lucide-react";

const ClearFiltersButton = () => {
  const { genreId, platformId, sortOrder } = useGameQueryStore((s) => s.gameQuery);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const handleClearFilters = () => {
    setGenreId(undefined);
    setPlatformId(undefined);
    setSortOrder(undefined);
  };

  return genreId || platformId || sortOrder ? (
    <Button variant="destructive" size="icon" onClick={handleClearFilters}>
      <X />
    </Button>
  ) : null;
};

export default ClearFiltersButton;
