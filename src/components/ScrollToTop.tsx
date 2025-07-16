import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpToLine } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// TODO: Clean this code up
const ScrollToTop = () => {
  const [atTop, setAtTop] = useState(true);
  const topElement = useRef<HTMLElement>(null);
  const visThreshold = 300; // Viewport offset distance to trigger visibility

  const checkOffset = () => {
    if (!topElement.current) return;
    const top = topElement.current.getBoundingClientRect().top;
    const onScreen = top + visThreshold >= 0 && top - visThreshold <= window.innerHeight;
    setAtTop(onScreen);
  };

  const scrollToTop = () => {
    // const top = document.getElementById("gameHeading");
    topElement.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    topElement.current = document.getElementById("gameHeading");

    document.addEventListener("scroll", checkOffset);
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      // variant="secondary"
      className={cn(
        "fixed bottom-18 right-5 size-12 rounded-xl lg:top-3 lg:bottom-auto lg:inset-x-1/2",
        atTop ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
      )}>
      <ArrowUpToLine />
    </Button>
  );
};

export default ScrollToTop;
