import Image from 'next/image';

import { ClientScrollAnimation } from "@/components/layout/ClientScrollAnimation";
import { DentalFeatures } from '@/components/ui/Nosotros/DentalFeatures';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Shadcn/breadcrumb"


export default function Nosotros() {

  return (
    <>
    <ClientScrollAnimation>
      {/* Hero Section */}
      <section className="relative h-36 mt-24">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-30/90 via-pallette-30/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/nosotros-top.jpg"
            alt=""
            style={{
              width: 'auto', height: '100%',
              maskImage: 'linear-gradient(to right, transparent 1%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 1%, black 100%)'
            }}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="h-full w-full bg-black bg-opacity-10">
          {/* Contenido */}
          <div  className="animate-fade-in-left max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Nosotros</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-3xl font-bold w-fit max-w-screen-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Somos Buccasan
            </h1>
            <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'>Tu clínica dental de confianza</p>
          </div>
        </div>
      </section>
      <section className="m-4 mb-8 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Image - hidden on mobile */}
          <div className="hidden md:block w-full md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <Image 
                src="/images/mision_vision.jpg" 
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
          <div className="w-full md:w-1/2 space-y-8">
            {/* Mission Section */}
            <div className="animate-fade-in-left">
              <div className="mb-2">
                <span className="text-cyan-500 text-sm font-medium block">
                  Nuestra
                </span>
                <h2 className="text-pallette-10 text-3xl font-semibold">
                  Misión
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Somos una empresa odontológica que ofrece servicios por 
                especialidades. Ofrecemos una eficiente atención integral 
                de calidad para lograr el bienestar de nuestros pacientes.
              </p>
            </div>

            {/* Vision Section */}
            <div className="animate-fade-in-right">
              <div className="mb-2">
                <span className="text-cyan-500 text-sm font-medium block">
                  Nuestra
                </span>
                <h2 className="text-pallette-10 text-3xl font-semibold">
                  Visión
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser una empresa líder en odontología en afán de superación y 
                comprometida con el cambio. Satisfacer las expectativas de 
                nuestros pacientes a través de la eficiencia y ética, con 
                equidad, solidez y calidad de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-gradient-3 py-2 px-4 sm:px-6 lg:px-8'>
        <div className="max-w-7xl mx-auto">
          <h2 className='animate-fade-in-up flex justify-center m-4 font-medium text-xl text-pallette-10'>¿Qué nos distingue?</h2>
          <div className='reveal fade-up'>
            <DentalFeatures/>
          </div>
        </div>
      </section>

      <section className="m-4 mb-4 mt-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
          <div className='reveal fade-up'>
            <h1 className="text-2xl text-pallette-10 text-center">
              ¡Sonríe y cuida de tu salud bucal con <span className="font-medium">Buccasan</span>!
            </h1>
            <p>
              En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia para que obtengas la sonrisa que siempre soñaste.
            </p>
          </div>
          <div className="reveal fade-up relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-1 left-0 w-full h-full rounded-md"
              src="https://www.youtube.com/embed/DPzjolCgNfc?si=s71xA821WAiRPkup"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <p className='reveal fade-up font-medium text-pallette-10 mt-4'>
            Tu salud dental y la de tu familia son nuestra principal prioridad.
          </p>
          <Image
            className="reveal fade-up"
            src="/images/nuevo_logo.png"
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '300px', height: '100%' }}
          />
        </div>
      </section>
    </ClientScrollAnimation>
    </>
  );
}