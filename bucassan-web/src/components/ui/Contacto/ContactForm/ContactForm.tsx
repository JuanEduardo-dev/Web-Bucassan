"use client";

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import { NotificationMessage } from '../NotificationMessage';
import { SubmitStatus } from '../NotificationMessage/types';

interface FormData {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  consulta: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    consulta: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mensaje = urlParams.get('mensaje');
    if (mensaje) {
      setFormData((prevData) => ({
        ...prevData,
        consulta: mensaje
      }));
    }
  }, []);

  const resetForm = () => {
    setFormData({
      nombres: '',
      apellidos: '',
      email: '',
      telefono: '',
      consulta: ''
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');
    
    try {
      const response = await fetch('https://bucassan-xyfr.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        resetForm();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <NotificationMessage 
        status={submitStatus} 
        onStatusChange={setSubmitStatus}
      />
      <div className="w-full max-w-2xl mx-auto p-2">
        <div className="bg-transparent">
          <div className="p-2 space-y-2">
            <h2 className="text-2xl font-bold text-left text-pallette-10">
              Reserve su cita
            </h2>
            <p className="text-gray-600 text-left">
              Déjenos sus datos e indíquenos en qué horario prefiere su cita, en breve le contestaremos!
            </p>
          </div>
          
          <div className="p-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label 
                    htmlFor="nombres" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nombres
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="border-gray-400 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pallette-30 focus:border-transparent outline-none"
                    placeholder="Ingresa tus nombres"
                  />
                </div>
                
                <div className="space-y-2">
                  <label 
                    htmlFor="apellidos" 
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apellidos
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="border-gray-400 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pallette-30 focus:border-transparent outline-none"
                    placeholder="Ingresa tus apellidos"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-gray-400 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pallette-30 focus:border-transparent outline-none"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="telefono" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Teléfono de contacto
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="border-gray-400 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pallette-30 focus:border-transparent outline-none"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div className="space-y-2">
                <label 
                  htmlFor="consulta" 
                  className="block text-sm font-medium text-gray-700"
                >
                  Consulta
                </label>
                <textarea
                  id="consulta"
                  name="consulta"
                  value={formData.consulta}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="border-gray-400 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pallette-30 focus:border-transparent outline-none"
                  placeholder="Describe tu consulta aquí..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg transition-colors duration-200 font-medium flex items-center justify-center
                  ${isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-pallette-10 hover:bg-pallette-10-contrast'} text-white`}
              > 
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={24} className="mr-2" /> 
                    Enviar mensaje
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;