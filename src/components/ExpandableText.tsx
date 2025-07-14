import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxChars: number;
  className?: string;
}

const ExpandableText = ({ maxChars, className, children }: ExpandableTextProps) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  if (children.length <= maxChars)
    return <p className={cn("max-w-[60ch]", className)}>{children}</p>;

  const text = expanded ? children : children.substring(0, maxChars).trimEnd() + "...";

  return (
    <div>
      <p className={cn("max-w-[60ch]", className)}>
        {text}
        <Button onClick={toggleExpanded} variant={"ghost"} size={"sm"} className="ml-2">
          {expanded ? "Show less" : "Show More"}
        </Button>
      </p>
    </div>
  );
};

export default ExpandableText;
