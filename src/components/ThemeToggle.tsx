import { useCallback } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const toggle = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme]
  );

  return (
    <Button onClick={toggle} size={"icon"} variant={"outline"}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
