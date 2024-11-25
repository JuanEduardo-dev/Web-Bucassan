'use client'

import Image from 'next/image';
import Link from 'next/link';

import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/Shadcn/carousel"

const PostsFacebook = () => {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <>
    <Carousel
      plugins={[plugin]}
      onMouseEnter={plugin.stop}
      onMouseLeave={plugin.reset}
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/1.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/4.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/5.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/6.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/7.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/8.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/9.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/11.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <Link href={'https://www.facebook.com/Buccasan.pe'} target='_blank'>
            <Image
              className="h-full"
              src="/images/facebook/12.jpg"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
            />
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    </>
  );
};

export default PostsFacebook;