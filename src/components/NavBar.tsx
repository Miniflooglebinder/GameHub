import SearchInput from "@/components/SearchInput";
import ThemeToggle from "@/components/ThemeToggle";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: NavBarProps) => {
  return (
    <nav className="flex items-center gap-4 p-2">
      <p className="text-4xl font-semibold">GH</p>
      <SearchInput onSearch={onSearch} />
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
