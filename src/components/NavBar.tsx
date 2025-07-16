import SearchInput from "@/components/SearchInput";
import ThemeToggle from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center gap-4 p-2">
      <Link to="/" className="text-4xl font-semibold cursor-pointer select-none">
        GH
      </Link>
      <SearchInput />
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
