
import Image from 'next/image';
import Link from 'next/link';

const InfoServices = () => {
  const services = [
    {
      title: "Odontología Estética",
      description: "Mejora tu sonrisa con tratamientos personalizados que incluyen blanqueamiento, carillas y restauraciones dentales.",
      icon: "/icons/servicios/estetica.png"
    },
    {
      title: "Odontopediatría",
      description: "Cuidado dental especializado para los más pequeños, asegurando sonrisas saludables desde temprana edad.",
      icon: "/icons/servicios/pediatria.png"
    },
    {
      title: "Odontología Preventiva",
      description: "Mantén tu salud bucal con chequeos regulares y limpiezas profesionales.",
      icon: "/icons/servicios/preventiva.png"
    },
    {
      title: "Prótesis Dental",
      description: "Recupera la funcionalidad y estética de tu boca con prótesis dentales personalizadas.",
      icon: "/icons/servicios/protesis.png"
    },
    {
      title: "Ortodoncia",
      description: "Corrige la alineación de tus dientes con tratamientos ortodónticos avanzados.",
      icon: "/icons/servicios/ortodoncia.png"
    },
    {
      title: "Cirugía Oral",
      description: "Soluciones quirúrgicas para problemas dentales complejos, incluyendo extracciones y cirugías reconstructivas.",
      icon: "/icons/servicios/cirugia.png"
    },
    {
      title: "Periodoncia",
      description: "Tratamiento especializado para enfermedades de las encías y tejidos de soporte dental.",
      icon: "/icons/servicios/periodoncia.png"
    },
    {
      title: "Consulta dental",
      description: "Evaluaciones completas para mantener tu salud bucal en óptimas condiciones.",
      icon: "/icons/servicios/consulta.png"
    }
  ];

  return (
    <>
    {/* Header Section */}
    <div className="text-left mb-8 reveal fade-left">
      <div className='mb-2'>
        <span className="text-cyan-500 text-sm font-medium">
          Descubre
        </span>
        <h1 className="text-3xl font-medium text-pallette-10">
          Nuestros Servicios
        </h1>
      </div>
      <p className=" text-gray-600">
        Brinda una variedad de servicios dentales para cuidar de la mejor manera su salud dental y la de su familia de por vida.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
      {/* Services Section */}
      <div className="w-full lg:w-3/4">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 reveal fade-up">
              <div className="bg-gradient-3 rounded-full p-3 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={48} 
                  height={48} 
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(13%)_sepia(100%)_saturate(5000%)_hue-rotate(180deg)_brightness(100%)_contrast(100%)]"
                />
              </div>
              <div>
                <h3 className="font-normal text-pallette-10-contrast underline">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {service.description}
                </p>
                <Link href={'/servicios'} className="text-pallette-30 font-normal text-sm mt-2">
                  Leer más →
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start text-left reveal fade-up">
              <div className="bg-gradient-3 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Image 
                  src={service.icon} 
                  alt={service.title} 
                  width={64} 
                  height={64} 
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(13%)_sepia(100%)_saturate(5000%)_hue-rotate(180deg)_brightness(100%)_contrast(100%)]"
                />
              </div>
              <h3 className="font-normal text-pallette-10-contrast text-lg mb-2 underline">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-3">
                {service.description}
              </p>
              <Link href={'/servicios'} className="text-pallette-30 font-normal">
                Leer más →
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      {/* Doctor Image - Desktop Only */}
      <div className="hidden lg:block lg:w-1/2 relative ml-20 reveal fade-right">
        <div className="relative -bottom-0 w-full text-center">
          <Image
            className="w-full object-cover"
            src="/images/doctor.png"
            alt=""
            style={{
              width: '100%', height: '100%',
            }}
            width={0}
            height={0}
            sizes="100vw"
          />
          <p className='text-pallette-10-contrast font-medium font-sans'>Dr. Ivan Rick Velasquez Rodriguez</p>
          <p className='text-pallette-10-contrast font-sans text-sm'>Especialista en periodoncia e implantología</p>
        </div>
      </div>
    </div>

    </>
  );
};

export default InfoServices;