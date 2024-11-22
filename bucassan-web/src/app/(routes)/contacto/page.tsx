import { ContactForm } from '@/components/ui/Contacto/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Contacto() {
  return (
    <>
      {/* Contact Section */}
      <section className='max-w-7xl mx-auto py-2 px-2 flex justify-center items-center min-h-screen'>
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start mt-24">
          {/* Info Section - ocupa 2 columnas */}
          <div className="animate-fade-in-left lg:col-span-2 w-full flex flex-col p-4 space-y-4">
            <div className="space-y-6 w-full">
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <MapPin className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Dirección</h3>
                </div>
                <p className="text-gray-600">Av. los laureles 328, Paucarbambilla</p>
                <p className="text-gray-600">Amarilis, Huánuco</p>
              </div><hr />
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Clock className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Horario</h3>
                </div>
                <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sábados: 8:00 AM - 8:00 PM</p>
              </div><hr />

              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Phone className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                </div>
                <p className="text-gray-600">Llámanos: +51 974 980 380</p>
              </div><hr />

              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Mail className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Correo</h3>
                </div>
                <p className="text-gray-600">E-mail: buccasanclinica@gmail.com</p>
              </div><hr />
            </div>
          </div>
          {/* Formulario - ocupa 3 columnas */}
          <div className="animate-fade-in-right lg:col-span-3 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}