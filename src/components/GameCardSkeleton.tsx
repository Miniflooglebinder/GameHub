import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden w-full max-w-[600px] mx-auto pt-0">
      <CardHeader className="p-0">
        <AspectRatio ratio={600 / 400}>
          <Skeleton className="w-full h-full rounded-none" />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <Skeleton className="text-2xl h-6 w-full max-w-[20ch]" />
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-2">
        <Skeleton className="h-5 grow-1 max-w-[120px]" />
        <Skeleton className="h-5 w-8" />
      </CardFooter>
    </Card>
  );
};
export default GameCardSkeleton;
