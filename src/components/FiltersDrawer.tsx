import ClearFiltersButton from "@/components/ClearFiltersButton";
import GenreList from "@/components/GenreList";
import PlatformSelector from "@/components/PlatformSelector";
import SortSelector from "@/components/SortSelector";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FilterIcon } from "lucide-react";

const FiltersDrawer = () => {
  return (
    <Drawer dismissible direction="left">
      <DrawerTrigger className="fixed lg:hidden right-5 bottom-3">
        <Button variant="secondary" className="size-12 rounded-xl">
          <FilterIcon className="size-6" strokeWidth="1.5" />
        </Button>
      </DrawerTrigger>
      <DrawerOverlay className="fixed inset-0">
        <DrawerContent className="fixed inset-0">
          <div className="overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle className="text-3xl">Filters</DrawerTitle>
            </DrawerHeader>
            <div className="px-4 space-y-4 h-fit">
              <SortSelector />
              <PlatformSelector />
              <GenreList />
            </div>
            <DrawerFooter>
              <DrawerClose>
                <ClearFiltersButton className="w-full">Clear Filters</ClearFiltersButton>
              </DrawerClose>
              <DrawerClose asChild>
                <Button size="lg">Done</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default FiltersDrawer;
