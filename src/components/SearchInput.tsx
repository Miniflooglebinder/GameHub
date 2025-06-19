import { Input } from "@/components/ui/input";
import useGameQueryStore from "@/GameQueryStore";
import { Search } from "lucide-react";
import { useRef } from "react";

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}>
      <span className="flex items-center w-full *:rounded-md *:first:rounded-r-none *:last:rounded-l-none *:border *:border-input *:first:border-r-0">
        <div className="flex items-center justify-center bg-transparent dark:bg-input/30 size-9 shadow-xs">
          <Search />
        </div>
        <Input ref={ref} className="w-full" placeholder="Search games..." />
      </span>
    </form>
  );
};

export default SearchInput;
