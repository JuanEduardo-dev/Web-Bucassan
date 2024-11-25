'use client'

import Image from 'next/image';

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Shadcn/carousel"

const CarouselPacient = () => {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <>
    <Carousel
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/1.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/2.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/3.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/5.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/8.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/9.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/10.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/11.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/12.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4" disableSpacing>
          <Image
            className="h-full"
            src="/images/pacientes/15.jpg"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    </>
  );
};

export default CarouselPacient;