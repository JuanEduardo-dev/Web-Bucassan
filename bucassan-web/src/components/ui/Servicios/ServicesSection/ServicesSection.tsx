"use client";

import Image from 'next/image';
import Link from 'next/link';

// Interfaces
interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  iconUrl: string;
  linkUrl: string;
  linkText?: string;
}

interface Service {
  title: string;
  description: string;
  imageUrl?: string;
  iconUrl: string;
  linkUrl: string;
  linkText?: string;
}

// ServiceCard component
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  iconUrl,
  linkUrl
}) => {

  return (
    <div className="reveal fade-up overflow-hidden drop-shadow-md transition-transform h-full rounded-xl">
      <div className="relative w-full h-48 ">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="transition-opacity opacity-90 object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-4 bg-white h-[calc(100%-12rem)] flex flex-col justify-between">
        <div>
          <div className="relative -mt-12 mb-4 w-16 h-16 mx-auto">
            <div className="rounded-full bg-gradient-3 overflow-hidden">
              <Image
                src={iconUrl}
                alt={`${title} icon`}
                width={64}
                height={64}
                className="w-full h-full object-cover p-4 [filter:brightness(0)_saturate(100%)_invert(13%)_sepia(100%)_saturate(5000%)_hue-rotate(180deg)_brightness(100%)_contrast(100%)]"
              />
            </div>
          </div>
          <h3 className="text-xl font-normal text-center mb-2 text-pallette-10">{title}</h3>
          <p className="text-gray-600 text-left">{description}</p>
        </div>
        <Link 
          href={linkUrl}
          className="mt-4 block w-full text-pallette-10 hover:text-pallette-10-contrast transition-colors text-right"
        >
          Solicitar servicio →
        </Link>
      </div>

    </div>
  );
};

// Services section component
const ServicesSection: React.FC = () => {

  const services: Service[] = [
    {
      "title": "Odontología Estética",
      "description": "Transforma tu sonrisa con nuestros tratamientos estéticos de última generación. Ofrecemos blanqueamiento dental profesional, carillas de porcelana personalizadas y restauraciones que lucen completamente naturales. Diseñamos la sonrisa perfecta que refleje tu personalidad.",
      "imageUrl": "/images/servicios/1.jpg",
      "iconUrl": "/icons/servicios/estetica.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontolog%C3%ADa%20Est%C3%A9tica.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20personalizados%20que%20ofrecen%2C%20como%20blanqueamiento%2C%20carillas%20y%20restauraciones%20dentales.%20Gracias."
    },
    {
      "title": "Odontopediatría",
      "description": "Especialistas en hacer que las visitas dentales sean una experiencia positiva para los niños. Combinamos tecnología amigable con un ambiente amigable para brindar tratamientos preventivos, restauraciones y educación en salud bucal, construyendo bases sólidas para una sonrisa saludable de por vida.",
      "imageUrl": "/images/servicios/2.jpg",
      "iconUrl": "/icons/servicios/pediatria.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontopediatr%C3%ADa.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20cuidado%20dental%20especializado%20para%20los%20m%C3%A1s%20peque%C3%B1os.%20Gracias."
    },
    {
      "title": "Odontología Preventiva",
      "description": "Protege tu salud bucal con nuestro programa integral de prevención. Incluye limpiezas profesionales avanzadas, aplicación de selladores, evaluación de riesgo de caries y orientación personalizada para mantener una higiene óptima. Prevenir es mejor que curar.",
      "imageUrl": "/images/servicios/3.png",
      "iconUrl": "/icons/servicios/preventiva.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontolog%C3%ADa%20Preventiva.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20chequeos%20regulares%20y%20las%20limpiezas%20profesionales.%20Gracias."
    },
    {
      "title": "Prótesis Dental",
      "description": "Recupera la confianza en tu sonrisa con nuestras prótesis dentales de alta precisión. Utilizamos tecnología CAD/CAM y materiales de última generación para crear prótesis fijas, removibles o sobre implantes que combinan perfectamente funcionalidad, comodidad y naturalidad.",
      "imageUrl": "/images/servicios/4.jpg",
      "iconUrl": "/icons/servicios/protesis.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Pr%C3%B3tesis%20Dental.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20pr%C3%B3tesis%20dentales%20personalizadas.%20Gracias."
    },
    {
      "title": "Ortodoncia",
      "description": "Alcanza la sonrisa perfectamente alineada que siempre has deseado. Ofrecemos múltiples opciones de tratamiento, desde brackets tradicionales hasta sistemas invisibles y alineadores transparentes, adaptándonos a tu estilo de vida con las técnicas más innovadoras.",
      "imageUrl": "/images/servicios/5.jpg",
      "iconUrl": "/icons/servicios/ortodoncia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Ortodoncia.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20ortod%C3%B3nticos%20avanzados.%20Gracias."
    },
    {
      "title": "Cirugía Oral",
      "description": "Expertos en procedimientos quirúrgicos orales avanzados, desde extracciones de muelas del juicio hasta implantes dentales y cirugías reconstructivas. Utilizamos técnicas mínimamente invasivas y planificación 3D para garantizar resultados óptimos y una recuperación más rápida.",
      "imageUrl": "/images/servicios/6.jpg",
      "iconUrl": "/icons/servicios/cirugia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Cirug%C3%ADa%20Oral.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20soluciones%20quir%C3%BArgicas%20para%20problemas%20dentales%20complejos.%20Gracias."
    },
    {
      "title": "Periodoncia",
      "description": "Tratamientos especializados para la salud de tus encías, desde limpiezas profundas hasta cirugías periodontales regenerativas. Combatimos la enfermedad periodontal con técnicas avanzadas, protegiendo tanto la estética de tu sonrisa como la salud de tu boca.",
      "imageUrl": "/images/servicios/7.jpg",
      "iconUrl": "/icons/servicios/periodoncia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Periodoncia.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20tratamiento%20especializado%20para%20enfermedades%20de%20las%20enc%C3%ADas%20y%20tejidos%20de%20soporte%20dental.%20Gracias."
    },
    {
      "title": "Consulta dental",
      "description": "Evaluación integral de tu salud bucal con tecnología diagnóstica de vanguardia. Incluye examen clínico completo, radiografías digitales y plan de tratamiento personalizado. Detectamos problemas tempranamente para mantener tu sonrisa saludable y radiante.",
      "imageUrl": "/images/servicios/8.webp",
      "iconUrl": "/icons/servicios/consulta.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Consulta%20dental.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20evaluaciones%20completas%20para%20mantener%20mi%20salud%20bucal%20en%20%C3%B3ptimas%20condiciones.%20Gracias."
    }
  ];
  

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard  key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;