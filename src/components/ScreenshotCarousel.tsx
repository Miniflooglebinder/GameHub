import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import useScreenshots from "@/hooks/useScreenshots";

interface Props {
  gameId: number;
}

const ScreenshotCarousel = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="h-fit w-full">
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
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

export default ScreenshotCarousel;
