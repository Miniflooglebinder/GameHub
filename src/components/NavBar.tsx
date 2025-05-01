import ThemeToggle from "@/components/ThemeToggle";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between gap-4 p-2">
      <p className="text-4xl font-semibold">GH</p>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
