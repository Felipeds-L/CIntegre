'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ActivityCard from '@/components/general/ActivityCard';
import { useEffect, useState } from 'react';
import getActivities, { Activity } from '@/actions/getActivities';

export function CarouselCard({cards}: { cards: Activity[] | null}) {

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {cards && cards.map((card) => (
          <CarouselItem key={card.id} className="basis-1/2 max-lg:basis-full">
            <ActivityCard apiData={card} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious variant={"ghost"}></CarouselPrevious>
      <CarouselNext variant={"ghost"}></CarouselNext>
    </Carousel>
  );
}
