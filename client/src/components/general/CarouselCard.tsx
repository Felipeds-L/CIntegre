import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselCardProps {
  cards: React.ReactNode[];
}

export function CarouselCard({ cards }: CarouselCardProps) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="basis-1/2 max-lg:basis-full">
            {card}
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious variant={"ghost"}></CarouselPrevious>
      <CarouselNext variant={"ghost"}></CarouselNext>
    </Carousel>
  );
}
