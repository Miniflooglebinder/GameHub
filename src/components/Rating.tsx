import { Separator } from "@/components/ui/separator";
import { Star, Users } from "lucide-react";

interface RatingProps {
  rating: number;
  count: number;
}

const Rating = ({ rating, count }: RatingProps) => {
  return (
    <div className="flex items-center text-muted-foreground gap-1.5 h-6">
      <span className="inline-flex items-center h-full gap-px">
        <p>{rating}</p>
        <Star className="size-4" />
      </span>
      <Separator orientation="vertical" />
      <span className="inline-flex items-center h-full gap-px">
        <Users className="size-4" />
        <p>{count}</p>
      </span>
    </div>
  );
};

export default Rating;
