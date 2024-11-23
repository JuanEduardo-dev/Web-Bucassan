'use client'

import Image from 'next/image';
import { useState } from "react";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MapPin, Phone, Clock } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Sede() {
  useScrollAnimation();

  const [loadedIframes, setLoadedIframes] = useState<{ [key: string]: boolean }>({
    leftIframe: false,
    rightIframe: false,
  });

  const handleIframeLoad = (iframeKey: string) => {
    setLoadedIframes((prev) => ({
      ...prev,
      [iframeKey]: true,
    }));
  };

  return (
    <>
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
      
      {/* Sede Section */}
      <section className='flex max-w-[1480px] mx-auto mb-4 mt-4 lg:h-[calc(100vh-272px)]'>

        <div className="animate-fade-in-up w-full ml-4 mr-4 flex flex-col lg:flex-row lg:m-0">
          {/* Columna izquierda (tarjeta + primer iframe) */}
          <div className="lg:w-[30%] flex flex-col">
            {/* Location Card */}
            <div className="bg-pallette-10 text-white p-6 h-[250px] lg:w-full">
              <div className="mb-4">
                <h2 className="text-xl font-bold">Clínica Bucassan</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>Av. los laureles 328, Paucarbambilla, Amarilis, Huánuco</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p>+51 123 456 789</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <div>
                    <p>Lun - Vie: 8:00 AM - 8:00 PM</p>
                    <p>Sáb: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Street View iframe with Skeleton */}
            <div className="relative h-full hidden lg:block">
              {!loadedIframes.leftIframe && (
                <Skeleton className="absolute inset-0 w-full h-full flex flex-col items-center justify-center space-y-4">
                  <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                    />
                  </svg>
                  <div className="animate-pulse">
                    <div className="h-2 w-24 bg-gray-300 rounded"></div>
                  </div>
                </Skeleton>
              )}
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1731816540891!6m8!1m7!1sLl50qDVhnbbcvlPbJPi0KA!2m2!1d-9.939883282202144!2d-76.24682301093155!3f146.95901!4f0!5f0.7820865974627469"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                onLoad={() => handleIframeLoad("leftIframe")}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Columna derecha (mapa grande) */}
          <div className="lg:w-[70%] h-[600px] lg:h-full relative">
            {!loadedIframes.rightIframe && (
              <Skeleton className="absolute inset-0 w-full h-full flex flex-col items-center justify-center space-y-4">
                <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  />
                </svg>
                <div className="animate-pulse">
                  <div className="h-2 w-24 bg-gray-300 rounded"></div>
                </div>
              </Skeleton>
            )}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.9632560367825!2d-76.24773949106361!3d-9.940072598871282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e8115ba9df%3A0x25eb7bc387f060d3!2sCL%C3%8DNICA%20ODONTOL%C3%93GICA%20BUCCASAN!5e0!3m2!1ses!2spe!4v1732249878960!5m2!1ses!2spe"
              className="absolute inset-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              onLoad={() => handleIframeLoad("rightIframe")}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-3">
        <div className="max-w-6xl mx-auto p-4 pb-8 pt-4 flex flex-col items-center justify-center gap-4">
          <h1 className="reveal fade-up text-2xl text-pallette-10">
            ¿No sabes cómo llegar?
          </h1>
          <div className="reveal fade-up relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-1 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/DPzjolCgNfc?si=s71xA821WAiRPkup"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
