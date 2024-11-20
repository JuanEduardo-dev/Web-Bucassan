"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Send } from 'lucide-react'

interface FormData {
  nombres: string;
  apellidos: string;
  email: string;
  telefono: string;
  consulta: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    consulta: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
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
              className="w-full bg-pallette-10 text-white py-3 px-6 rounded-lg hover:bg-pallette-10-contrast transition-colors duration-200 font-medium"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;