import SearchInput from "@/components/SearchInput";
import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center gap-4 p-2">
      <p className="text-4xl font-semibold">GH</p>
      <SearchInput />
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
