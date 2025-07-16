import { Button } from "@/components/ui/button";
import useGameQueryStore from "@/GameQueryStore";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const ClearFiltersButton = ({ className, children }: Props) => {
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
    <Button variant="destructive" onClick={handleClearFilters} className={className}>
      {children}
    </Button>
  ) : null;
};

export default ClearFiltersButton;
