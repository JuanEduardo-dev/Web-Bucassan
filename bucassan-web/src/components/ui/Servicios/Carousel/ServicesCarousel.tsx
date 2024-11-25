'use client'

import Image from 'next/image';

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Shadcn/carousel"

const ServicesCarousel: React.FC = () => {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <>
    <section className='bg-gradient-3 py-2'>
      <div className="max-w-7xl mx-auto">
        <h2 className='animate-fade-in-up text-center text-2xl m-4 text-pallette-10'>Los<span className="font-medium"> resultados </span>nos respaldan</h2>
        <div className='mb-4 animate-fade-in-up'>
        <Carousel
          plugins={[plugin]}
          onMouseEnter={plugin.stop}
          onMouseLeave={plugin.reset}
        >
          <CarouselContent className="">
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/1.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/2.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/3.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/4.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/5.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Image
                className="h-full"
                src="/images/casos/6.jpg"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        </div>
      </div>
    </section>
    </>
  );
}

export default ServicesCarousel;