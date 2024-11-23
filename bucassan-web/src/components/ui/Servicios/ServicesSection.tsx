import Image from 'next/image';
import Link from 'next/link';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
  useScrollAnimation();

  return (
    <div className="reveal fade-left overflow-hidden drop-shadow-md transition-transform h-full rounded-xl">
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
            <div className="rounded-full bg-gradient-4 overflow-hidden">
              <Image
                src={iconUrl}
                alt={`${title} icon`}
                width={64}
                height={64}
                className="w-full h-full object-cover p-4"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-center mb-2 text-pallette-10">{title}</h3>
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
      "description": "Mejora tu sonrisa con tratamientos personalizados que incluyen blanqueamiento, carillas y restauraciones dentales.",
      "imageUrl": "/images/servicios/1.jpg",
      "iconUrl": "/icons/servicios/estetica.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontolog%C3%ADa%20Est%C3%A9tica.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20personalizados%20que%20ofrecen%2C%20como%20blanqueamiento%2C%20carillas%20y%20restauraciones%20dentales.%20Gracias."
    },
    {
      "title": "Odontopediatría",
      "description": "Cuidado dental especializado para los más pequeños, asegurando sonrisas saludables desde temprana edad.",
      "imageUrl": "/images/servicios/2.jpg",
      "iconUrl": "/icons/servicios/pediatria.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontopediatr%C3%ADa.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20cuidado%20dental%20especializado%20para%20los%20m%C3%A1s%20peque%C3%B1os.%20Gracias."
    },
    {
      "title": "Odontología Preventiva",
      "description": "Mantén tu salud bucal con chequeos regulares y limpiezas profesionales.",
      "imageUrl": "/images/servicios/3.png",
      "iconUrl": "/icons/servicios/preventiva.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Odontolog%C3%ADa%20Preventiva.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20chequeos%20regulares%20y%20las%20limpiezas%20profesionales.%20Gracias."
    },
    {
      "title": "Prótesis Dental",
      "description": "Recupera la funcionalidad y estética de tu boca con prótesis dentales personalizadas.",
      "imageUrl": "/images/servicios/4.jpg",
      "iconUrl": "/icons/servicios/protesis.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Pr%C3%B3tesis%20Dental.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20pr%C3%B3tesis%20dentales%20personalizadas.%20Gracias."
    },
    {
      "title": "Ortodoncia",
      "description": "Corrige la alineación de tus dientes con tratamientos ortodónticos avanzados.",
      "imageUrl": "/images/servicios/5.jpg",
      "iconUrl": "/icons/servicios/ortodoncia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Ortodoncia.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20tratamientos%20ortod%C3%B3nticos%20avanzados.%20Gracias."
    },
    {
      "title": "Cirugía Oral",
      "description": "Soluciones quirúrgicas para problemas dentales complejos, incluyendo extracciones y cirugías reconstructivas.",
      "imageUrl": "/images/servicios/6.jpg",
      "iconUrl": "/icons/servicios/cirugia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Cirug%C3%ADa%20Oral.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20soluciones%20quir%C3%BArgicas%20para%20problemas%20dentales%20complejos.%20Gracias."
    },
    {
      "title": "Periodoncia",
      "description": "Tratamiento especializado para enfermedades de las encías y tejidos de soporte dental.",
      "imageUrl": "/images/servicios/7.jpg",
      "iconUrl": "/icons/servicios/periodoncia.png",
      "linkUrl": "/contacto?mensaje=Hola%2C%20me%20interesa%20el%20servicio%20de%20Periodoncia.%20Quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20tratamiento%20especializado%20para%20enfermedades%20de%20las%20enc%C3%ADas%20y%20tejidos%20de%20soporte%20dental.%20Gracias."
    },
    {
      "title": "Consulta dental",
      "description": "Evaluaciones completas para mantener tu salud bucal en óptimas condiciones.",
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