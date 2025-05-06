import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <span className="flex items-center w-full *:rounded-md *:first:rounded-r-none *:last:rounded-l-none *:border *:border-input *:first:border-r-0">
      <div className="flex items-center justify-center bg-transparent dark:bg-input/30 size-9 shadow-xs">
        <Search />
      </div>
      <Input className="w-full" placeholder="Search games..." />
    </span>
  );
};

export default SearchInput;
