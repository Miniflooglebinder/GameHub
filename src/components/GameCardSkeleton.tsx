import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden pt-0">
      <CardHeader className="p-0">
        <Skeleton className="h-[200px] rounded-none" />
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
