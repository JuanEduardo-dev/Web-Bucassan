"use client";

import { useEffect } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { SubmitStatus } from './types';

interface NotificationMessageProps {
  status: SubmitStatus;
  onStatusChange: (status: SubmitStatus) => void;
}

export function NotificationMessage({ status, onStatusChange }: NotificationMessageProps) {
  useEffect(() => {
    if (status !== 'idle') {
      const timer = setTimeout(() => {
        onStatusChange('idle');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status, onStatusChange]);

  if (status === 'idle') return null;

  return (
    <div className="fixed notification-message top-80 md:top-60 left-4 right-4 md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-100">
      <div className={`mx-auto max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg transition-all duration-300 px-4 md:px-6 py-3 flex items-center justify-center ${
        status === 'loading' ? 'bg-blue-50 text-blue-700' :
        status === 'success' ? 'bg-green-50 text-green-700' :
        'bg-red-50 text-red-700'
      }`}>
        <div className="flex items-center space-x-2 md:space-x-3">
          {status === 'loading' && (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
              <span className="text-sm md:text-base">Enviando mensaje...</span>
            </>
          )}
          {status === 'success' && (
            <>
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">¡Mensaje enviado! Nos contactaremos de inmediato.</span>
            </>
          )}
          {status === 'error' && (
            <>
              <XCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">Error al enviar el mensaje. Por favor, intente nuevamente.</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default NotificationMessage;
