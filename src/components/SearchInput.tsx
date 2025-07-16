import { Input } from "@/components/ui/input";
import useGameQueryStore from "@/GameQueryStore";
import { Search } from "lucide-react";
import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/");
    }
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
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
