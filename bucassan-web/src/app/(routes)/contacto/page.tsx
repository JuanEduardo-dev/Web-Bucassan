"use client";

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/ui/Contacto/ContactForm';
import { MapPin, Clock, Phone, Mail, CheckCircle, XCircle } from 'lucide-react';

export default function Contacto() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.notification-message');
      if (element) {
        if (window.scrollY > 0) { // Cambia 100 por la cantidad de píxeles que desees
          element.classList.remove('top-28');
          element.classList.add('top-20');
        } else {
          element.classList.remove('top-20');
          element.classList.add('top-28');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFormSubmit = (status: 'loading' | 'success' | 'error') => {
    setSubmitStatus(status);
  };

  return (
    <>
      {/* Notification Messages */}
      {submitStatus !== 'idle' && (
        <div className="fixed notification-message top-28 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-100">
          <div className={`mx-auto max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg transition-all duration-300 px-4 md:px-6 py-3 flex items-center justify-center ${
            submitStatus === 'loading' ? 'bg-blue-50 text-blue-700' :
            submitStatus === 'success' ? 'bg-green-50 text-green-700' :
            'bg-red-50 text-red-700'
          }`}>
            <div className="flex items-center space-x-2 md:space-x-3">
              {submitStatus === 'loading' && (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                  <span className="text-sm md:text-base">Enviando mensaje...</span>
                </>
              )}
              {submitStatus === 'success' && (
                <>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">¡Mensaje enviado! Nos contactaremos de inmediato.</span>
                </>
              )}
              {submitStatus === 'error' && (
                <>
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm md:text-base">Error al enviar el mensaje. Por favor, intente nuevamente.</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section className='max-w-7xl mx-auto flex justify-center items-center min-h-screen'> 
        <div className="grid grid-cols-1 lg:grid-cols-5 items-start mt-24">
          {/* Info Section */}
          <div className="animate-fade-in-left lg:col-span-2 w-full flex flex-col p-4 space-y-4 order-2 lg:order-1">
            <div className="space-y-6 w-full">
              <hr className='opacity-0'/>
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <MapPin className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Dirección</h3>
                </div>
                <p className="text-gray-600">Av. los laureles 328, Paucarbambilla</p>
                <p className="text-gray-600">Amarilis, Huánuco</p>
              </div>
              <hr />
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Clock className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Horario</h3>
                </div>
                <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-600">Sábados: 8:00 AM - 8:00 PM</p>
              </div>
              <hr />
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Phone className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Teléfono</h3>
                </div>
                <p className="text-gray-600">Llámanos: +51 974 980 380</p>
              </div>
              <hr />
              <div className="w-full">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-pallette-30/10 rounded-full">
                    <Mail className="w-6 h-6 text-pallette-30" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Correo</h3>
                </div>
                <p className="text-gray-600">E-mail: buccasanclinica@gmail.com</p>
              </div>
              <hr className='opacity-0'/>
            </div>
          </div>

          {/* Form Section */}
          <div className="animate-fade-in-right lg:col-span-3 w-full order-1 lg:order-2">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      </section>
    </>
  );
}
