import { Input } from "@/components/ui/input";
import useGameQueryStore from "@/GameQueryStore";
import { Search, X } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const { searchText } = useGameQueryStore((s) => s.gameQuery);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/");
    }
  };

  const handleClearSearch = () => {
    if (!ref.current) return;
    setSearchText("");
    ref.current.value = "";
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <span className="flex items-center w-full *:rounded-md *:first:rounded-r-none *:last:rounded-l-none *:not-first:not-last:rounded-none *:not-first:border-l-0 *:border *:border-input">
        <div className="flex items-center justify-center bg-transparent dark:bg-input/30 size-9 shadow-xs">
          <Search />
        </div>
        <Input ref={ref} className="w-full" placeholder="Search games..." />
        {searchText && (
          <div
            className="flex items-center justify-center bg-transparent dark:bg-input/30 size-9 shadow-xs"
            onClick={handleClearSearch}>
            <X />
          </div>
        )}
      </span>
    </form>
  );
};

export default SearchInput;
