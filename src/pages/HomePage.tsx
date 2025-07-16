import ClearFiltersButton from "@/components/ClearFiltersButton";
import FiltersDrawer from "@/components/FiltersDrawer";
import GameGrid from "@/components/GameGrid";
import GameHeading from "@/components/GameHeading";
import GenreList from "@/components/GenreList";
import NavBreadcrumb from "@/components/NavBreadcrumb";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { X } from "lucide-react";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[fit_auto] lg:grid-cols-[200px_auto]">
      <div className="hidden lg:block">
        <GenreList />
      </div>
      <div className="w-full">
        <div className="mb-4 w-full">
          <NavBreadcrumb crumbs={{ to: "/", label: "Home" }} />
          <GameHeading />
          <div className="hidden lg:flex items-center gap-4">
            <PlatformSelector />
            <SortSelector />
            <ClearFiltersButton className="size-9">
              <X />
            </ClearFiltersButton>
          </div>
        </div>
        <GameGrid />
      </div>
      <FiltersDrawer />
    </div>
  );
};

export default HomePage;
