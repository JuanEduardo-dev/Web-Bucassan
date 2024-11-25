import * as React from "react"
import Image from 'next/image';

import { ClientScrollAnimation } from "@/components/layout/utils/ClientScrollAnimation";

import { ServicesSection } from "@/components/ui/Servicios/ServicesSection";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Shadcn/breadcrumb"
import { ServicesCarousel } from "@/components/ui/Servicios/Carousel";
import { CarouselPacients } from "@/components/ui/Inicio/CarouselPacients";

export default function Servicios() {

  return (
    <>
    <ClientScrollAnimation>
      {/*<section className="relative h-[calc(100vh-250px)] overflow-x-hidden flex items-center justify-center mt-24">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[calc(100vh-250px)] w-[190vw] sm:w-[120vw] rounded-b-[100%] bg-cover bg-center z-[-3]" style={{ backgroundImage: "url('/images/servicio-top.jpg')" }}>
          <div className="absolute inset-0 rounded-b-[100%] bg-pallette-30/70 bg-gradient-to-t from-black/5 to-black/15"></div>
        </div>
        <div className="relative z-20">
          <p className="text-white">Conoce todos nuestros casos de éxito</p>
        </div>
      </section>*/}
      {/* Hero Section */}
      <section className="relative h-36 mt-24">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-30/90 via-pallette-30/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/servicio-top.jpg"
            alt=""
            style={{
              width: 'auto', height: '100%',
              maskImage: 'linear-gradient(to right, transparent 1%, black 60%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 1%, black 60%)'
            }}
            width={0}
            height={0}
            sizes="100vw"
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
                  <BreadcrumbPage>Servicios</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl font-bold w-fit max-w-screen-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Nuestros servicios
            </h1>
            <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'>Resolvemos tus necesidades odontológicas</p>
          </div>
        </div>
      </section>
      
      <section className="m-4 mb-4 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Image - hidden on mobile */}
          <div className="block w-full md:w-1/2 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image 
                src="/images/servicios-muestra.jpg" 
                alt="Dental consultation" 
                className="w-full h-full object-cover"
                width={0}
                height={0}
                sizes="100vw"
                style={{width: 'auto', height: '100%'}}
              />
            </div>
          </div>
            
          {/* Content */}
          <div className="w-full md:w-1/2 space-y-8 order-1 lg:order-2">
            {/* Mission Section */}
            <div className="animate-fade-in-up">
              <div className="mb-2">
                <span className="text-cyan-500 text-sm block">
                  Tenemos
                </span>
                <h2 className="text-pallette-10 text-3xl font-normal">
                Todos los <span className='font-medium'>tratamientos dentales</span> en un solo lugar
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                En Buccasan, ofrecemos soluciones para cualquier problema de salud dental que pueda afectar tus dientes o boca.
                Aceptamos diversas formas de pago, incluyendo <span className='text-pallette-10 font-medium'>efectivo, transferencias y tarjetas de débito o crédito</span>, para que puedas acceder a nuestros servicios sin problemas.
                <br />
                Visítanos y conoce a nuestro equipo de odontólogos y dentistas especialistas, quienes están capacitados para ofrecerte el tratamiento más adecuado para tu caso.
                <br />
                <span className='text-pallette-10 font-medium'>Todas las especialidades odontológicas se realizan en nuestra clínica</span>, para tu mayor comodidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesCarousel />

      <section className=' py-4 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className="reveal fade-up text-3xl font-medium sm:text-center mb-2 text-pallette-10">Nuestros servicios</h2>
          <p className="reveal fade-up sm:text-center mb-8">
            Todos los tratamientos que podrás encontrar en nuestra clínica Buccasan.
          </p>
          <ServicesSection />
        </div>
      </section>
      <CarouselPacients />
    </ClientScrollAnimation>
    </>
  );
}