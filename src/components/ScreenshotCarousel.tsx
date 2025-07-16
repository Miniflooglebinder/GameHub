import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import useScreenshots from "@/hooks/useScreenshots";

interface Props {
  gameId: number;
}

const ScreenshotCarousel = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  const skeletons: number[] = Array.from({ length: 5 });

  if (error) throw error;

  return (
    <div className="h-fit w-full">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {isLoading &&
            skeletons.map((_, i) => (
              <CarouselItem key={i}>
                <ScreenshotSkeleton />
              </CarouselItem>
            ))}
          {data?.results.map((s, i) => (
            <CarouselItem key={i}>
              <AspectRatio ratio={16 / 9}>
                <img src={s.image} className="rounded-md" />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const ScreenshotSkeleton = () => {
  return (
    <AspectRatio ratio={16 / 9}>
      <Skeleton className="w-full h-full" />
    </AspectRatio>
  );
};

export default ScreenshotCarousel;
