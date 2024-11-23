// hooks/useScrollAnimation.js
'use client';
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    // Observar todos los elementos con la clase 'reveal'
    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Limpiar el observer
      document.querySelectorAll('.reveal').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};