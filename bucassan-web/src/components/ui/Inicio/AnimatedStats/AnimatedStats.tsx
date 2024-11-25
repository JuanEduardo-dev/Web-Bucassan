'use client'

import { useState, useEffect, useRef } from 'react';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
      }
    );

    const currentRef = statsRef.current; // Guardar la referencia actual localmente

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // Duración en milisegundos
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;

        // Calcular el progreso basado en easeOutQuad
        const progress = currentStep / steps;
        const easeProgress = 1 - Math.pow(1 - progress, 2);

        setCount1(Math.min(Math.round(7 * easeProgress), 7));
        setCount2(Math.min(Math.round(8 * easeProgress), 8));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <div ref={statsRef} className="flex justify-center gap-[25px] xl:gap-24">
      {/* First Stat */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-3 rounded-full flex items-center justify-center mb-4">
          {/* SVG de ejemplo */}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-2xl font-bold mb-1 text-pallette-10">
            <span className="text-3xl">+</span>
            <span className="text-4xl">{count1}</span>
          </div>
          <span className="text-sm">Años de experiencia</span>
        </div>
      </div>

      {/* Second Stat */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-3 rounded-full flex items-center justify-center mb-4">
          {/* SVG de ejemplo */}
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-2xl font-bold mb-1 text-pallette-10">
            <span className="text-3xl">+</span>
            <span className="text-4xl">{count2}</span>
          </div>
          <span className="text-sm">Proyectos completados</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;