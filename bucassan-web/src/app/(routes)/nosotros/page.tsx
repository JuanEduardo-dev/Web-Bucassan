'use client'

import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { DentalFeatures } from '@/components/ui/Nosotros/DentalFeatures';

export default function Nosotros() {
  useScrollAnimation();

  return (
    <>
      {/* Curva hacia abajo
      <section className="relative h-[calc(100vh-550px)] overflow-x-hidden flex items-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[calc(100vh-550px)] w-[220vw] sm:w-[150vw] rounded-b-[100%] bg-gradient-to-t from-pallette-30/80 via-pallette-30/90 to-pallette-30/100 z-10"></div>
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto w-1/2  text-white">
            <p>
              En Buccasan, tenemos el firme compromiso de brindarte salud bucal, para que tengas una linda sonrisa 😁.
              Para lograrlo contamos con todo un equipo profesional multidisciplinario y altamente capacitado, donde atendemos especialidades como: ortodoncia, odontopediatría, periodoncia, implantología, endodoncia, estética dental y rehabilitación oral. 
              Sabemos la importancia de seguir capacitándonos, es por ello que contamos con la especialidad de periodoncia e implantología por la Universidad de Sao Paolo (FACOP). Todo con el fin de brindar una atención de máxima calidad, innovadora, y a la vanguardia de la tecnología.
            </p>
          </div>
        </div>
      </section>*/}
    
      {/* Hero Section */}
      <section className="relative h-36 mt-24">
        {/* Background */}
        <div className="absolute h-full w-full z-[-2] bg-gradient-to-r from-pallette-30/90 via-pallette-30/60 to-transparent">
          <Image
            className="absolute object-cover top-0 right-0 h-full z-[-1] bg-cover"
            src="/images/nosotros-top.png"
            alt=""
            style={{
              width: 'auto', height: '100%',
              maskImage: 'linear-gradient(to right, transparent 1%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 10%, black 100%)'
            }}
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
        <div className="h-full w-full bg-black bg-opacity-10">
          {/* Contenido */}
          <div  className="animate-fade-in-left max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">
            <h1 className="text-3xl font-bold w-fit max-w-screen-sm drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              Somos Bucassan
            </h1>
            <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]'>Tu consultorio dental de confianza</p>
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
            <div className="animate-fade-in-up">
              <div className="mb-2">
                <span className="text-cyan-500 text-sm font-medium block">
                  Nuestra
                </span>
                <h2 className="text-pallette-10 text-3xl font-bold">
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
            <div className="animate-fade-in-up">
              <div className="mb-2">
                <span className="text-cyan-500 text-sm font-medium block">
                  Nuestra
                </span>
                <h2 className="text-pallette-10 text-3xl font-bold">
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

      <section>
        <div className="bg-gradient-3 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className='animate-fade-in-up flex justify-center m-4 font-bold text-xl text-pallette-10'>¿Qué nos distingue?</h2>
            <div className='reveal fade-left'>
              <DentalFeatures/>
            </div>
          </div>
        </div>
      </section>

      <section className="m-4 mb-8 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-4">
          <h1 className="reveal fade-up text-2xl text-pallette-10">
            ¡Sonríe y cuida de tu salud bucal con <span className="font-medium">Bucassan</span>!
          </h1>
          <p className='reveal fade-up'>
            En Buccasan brindamos un servicio de alta calidad con profesionales de amplia experiencia para que obtengas la sonrisa que siempre soñaste.
          </p>
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
          <p className='reveal fade-down mt-4 mb-2'>
            Buscamos que nuestros pacientes disfruten de una experiencia cómoda, en un ambiente de atención y servicio de alta calidad.
          </p>
          <p className='reveal fade-down font-medium text-pallette-10'>
            Tu salud dental y la de tu familia son nuestra principal prioridad.
          </p>
          <Image
            className=""
            src="/images/logo-scroll.png"
            alt=""
            width={382}
            height={136}
          />
        </div>
      </section>
    </>
  );
}