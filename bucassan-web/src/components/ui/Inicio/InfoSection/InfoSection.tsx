
import Image from 'next/image';
import Link from 'next/link';

import { AnimatedStats } from "../AnimatedStats";

const InfoSection = () => {
  return (
    <>
    {/* Main Content Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
      {/* Left Column - Image */}
      <div className="relative h-[465px] hidden lg:block">
        <Image 
          src="/images/img-trayectoria.png" 
          alt="" 
          className="w-full h-full object-cover rounded-lg"
          width={0}
          height={0}
          sizes="100vw"
          style={{width: 'auto', height: '100%'}}
        />
      </div>


      <div className="lg:container lg:mx-auto lg:px-4 py-4 md:py-8 lg:py-12">
        <div className="lg:max-w-3xl mx-auto reveal fade-right">

          <div className="mb-4">
            <span className="text-cyan-500 text-sm font-medium block">
              Sobre
            </span>
            <h2 className="text-pallette-10 text-3xl font-medium">
            Nuestra trayectoria
            </h2>
          </div>
          
          <p className="text-gray-700 mb-4">
            Desde hace muchos años venimos cumpliendo nuestro propósito:
            Cuidar de la salud bucal de nuestros pacientes.
          </p>
          
          <p className="text-gray-700 mb-8">
            Para lograrlo, <span className='text-pallette-10 font-medium'>contamos con todo un equipo profesional
            multidisciplinario y altamente capacitado</span>, donde atendemos
            especialidades como: ortodoncia, odontopediatría, periodoncia,
            implantología, endodoncia, estética dental y rehabilitación oral.
          </p>

          <AnimatedStats />
        </div>
      </div>
    </div>

    {/* Brazil Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Column - Text Content */}
      <div className="space-y-6 reveal fade-left">
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              100% { background-position: -200% 50%; }
            }
            .animate-gradient {
              animation: gradient 3s linear infinite;
              background-size: 200% auto;
            }
          `}
        </style>
        <h2 className="text-3xl font-medium text-transparent bg-clip-text animate-gradient"
            style={{
              backgroundImage: 'linear-gradient(to right, #009c3b, #ffdf00, #002776, #009c3b)'
            }}>
          Desde São Paolo Brasil
        </h2>

        <p className="text-gray-700">
          Sabemos la importancia de seguir capacitándonos, es por
          ello que contamos con la especialidad de periodoncia e
          implantología por la <span className='text-pallette-10 font-medium'>Universidad de São Paolo (FACOP)</span>. Todo
          con el fin de brindar una atención de máxima calidad,
          innovadora, y a la vanguardia de la tecnología.
        </p>
        <p className="text-gray-700">
          No lo pienses mas y ponte en contacto con nosotros.
        </p>
        <div className="relative flex items-center justify-start">
          <Link href={'/contacto'} className="group flex items-center gap-2 bg-pallette-10 text-white px-6 py-3 rounded-full hover:bg-pallette-10-contrast transition-all duration-300 ease-in-out hover:shadow-lg">
            <span className="font-medium">
              SEPARA TU CITA AHORA
            </span>
            <span className="animate-bounce-x">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="30" 
                height="15" 
                viewBox="0 0 16 9"
              >
                <path 
                  fill="currentColor" 
                  d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"
                />
              </svg>
            </span>
          </Link>

          <style>{`
            .animate-bounce-x {
              animation: bounceX 1s infinite;
            }

            @keyframes bounceX {
              0%, 100% {
                transform: translateX(0);
              }
              50% {
                transform: translateX(8px);
              }
            }
          `}</style>
        </div>
      </div>

      {/* Right Column - Video Placeholder */}
      <div className="rounded-lg aspect-video">
        {/* Video player */}
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/DPzjolCgNfc?si=s71xA821WAiRPkup"
          title="YouTube video player"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share;"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

    </div>
    </>
  );
};

export default InfoSection;