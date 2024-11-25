import Image from 'next/image';
import { ClientScrollAnimation } from "@/components/layout/ClientScrollAnimation";

import { FrameMap } from "@/components/ui/Sede/FrameMap";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Shadcn/breadcrumb"

export default function Sede() {

  return (
    <>
    <ClientScrollAnimation>
      {/* Hero Section */}
      <section className="relative h-36 mt-24">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-30/90 via-pallette-30/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/sede-top.png"
            alt=""
            style={{
              maskImage: 'linear-gradient(to right, transparent 20%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 20%, black 100%)'
            }}
            width={3216}
            height={360}
          />
        </div>
        <div className="h-full w-full bg-black bg-opacity-10">
          {/* Contenido */}
          <div className="animate-fade-in-left max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Sede</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl font-bold w-fit max-w-screen-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Ubicanos en Huánuco
            </h1>
            <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'>Amarilis, Av. Los laureles 328</p>
          </div>
        </div>
      </section>
      
      <FrameMap />

      <section className="bg-gradient-3">
        <div className="max-w-6xl mx-auto p-4 pb-8 pt-4 flex flex-col items-center justify-center gap-4">
          <h1 className="reveal fade-up text-2xl text-pallette-10">
            ¿No sabes cómo llegar?
          </h1>
          <div className="reveal fade-up relative w-full pt-[180%] md:pt-[56.25%]">
            <iframe
              className="absolute top-1 left-0 w-full h-full rounded-md"
              src="https://youtube.com/embed/YLrRMlduuq0?si=zJAWUK_4Okx0yWYj"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </ClientScrollAnimation>
    </>
  );
}
