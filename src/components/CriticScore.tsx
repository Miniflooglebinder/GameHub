import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface CriticScoreProps {
  score: number;
  className?: string;
}

const CriticScore = ({ score, className }: CriticScoreProps) => {
  const color =
    score > 75
      ? "text-green-700 bg-green-200 border-green-300 dark:text-green-200 dark:bg-green-900 dark:border-green-700"
      : score > 60
      ? "text-yellow-700 bg-yellow-200 border-yellow-200 dark:text-yellow-300 dark:bg-yellow-800 dark:border-yellow-700"
      : "text-foreground bg-accent border-border";

  return <Badge className={cn(color, className)}>{score}</Badge>;
};

export default CriticScore;
