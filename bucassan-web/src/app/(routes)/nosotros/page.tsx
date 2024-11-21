import Image from 'next/image';

export default function Nosotros() {
  return (
    <>
      {/* Curva hacia abajo */}
      <section className="relative h-[calc(100vh-550px)] overflow-x-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[calc(100vh-550px)] w-[220vw] sm:w-[150vw] rounded-b-[100%] bg-gradient-to-t from-pallette-30/80 via-pallette-30/90 to-pallette-30/100 z-10">
          </div>
          <div className="relative z-20">
            <div className="max-w-7xl mx-auto  text-white">
              <p>En Buccasan, tenemos el firme compromiso de brindarte salud bucal, para que tengas una linda sonrisa 😁.
Para lograrlo contamos con todo un equipo profesional multidisciplinario y altamente capacitado, donde atendemos especialidades como: ortodoncia, odontopediatría, periodoncia, implantología, endodoncia, estética dental y rehabilitación oral. 
Sabemos la importancia de seguir capacitándonos, es por ello que contamos con la especialidad de periodoncia e implantología por la Universidad de Sao Paolo (FACOP). Todo con el fin de brindar una atención de máxima calidad, innovadora, y a la vanguardia de la tecnología.</p>
            </div>
          </div>
      </section>




    <div className="bg-gray-50 min-h-screen p-4 md:p-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image - hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image 
              src="/images/mision_vision.jpg" 
              alt="Dental consultation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Content */}
        <div className="w-full md:w-1/2 space-y-8">
          {/* Mission Section */}
          <div>
            <div className="mb-2">
              <span className="text-cyan-500 text-sm font-medium block">
                Nuestra
              </span>
              <h2 className="text-complement text-3xl font-bold">
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
          <div>
            <div className="mb-2">
              <span className="text-cyan-500 text-sm font-medium block">
                Nuestra
              </span>
              <h2 className="text-cyan-500 text-3xl font-bold">
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
    </div>
    </>
  );
}