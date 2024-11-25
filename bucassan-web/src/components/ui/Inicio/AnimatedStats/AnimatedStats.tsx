'use client'

import { useState, useEffect, useRef } from 'react';

const AnimatedStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const statsRef = useRef(null);

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
        rootMargin: '-50px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        
        // Calculate current value based on easeOutQuad
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
    <div ref={statsRef} className='flex justify-center gap-[25px] xl:gap-24'>
      {/* First Stat */}
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-3 rounded-full flex items-center justify-center mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-pallette-10" 
            viewBox="0 0 50 50" 
            fill="currentColor"
          >
            <path d="M39.199 16.0603L43.5306 9.15996C43.6723 8.93428 43.6802 8.64932 43.5513 8.41611C43.4223 8.18291 43.1768 8.03809 42.9103 8.03809H21.1592V6.48193C21.911 5.8002 22.384 4.81611 22.384 3.72363C22.384 1.67041 20.7136 0 18.6603 0C16.6071 0 14.9367 1.67041 14.9367 3.72363C14.9367 4.81484 15.4085 5.79785 16.1588 6.47949V39.5669H11.7764C10.7643 39.5669 9.94101 40.3902 9.94101 41.4022V44.0523H8.19267C7.18065 44.0523 6.35732 44.8757 6.35732 45.8877V48.1645C6.35732 49.1765 7.18065 49.9998 8.19267 49.9998H30.5259C31.5379 49.9998 32.3612 49.1765 32.3612 48.1645V45.8877C32.3612 44.8757 31.5379 44.0523 30.5259 44.0523H28.7775V41.4023C28.7775 40.3903 27.9542 39.567 26.9422 39.567H21.1592V24.0823H32.2753C32.6799 24.0823 33.0077 23.7544 33.0077 23.3499C33.0077 22.9454 32.6799 22.6175 32.2753 22.6175H21.1592V9.50303H41.5857L37.7139 15.6708C37.5644 15.9089 37.5644 16.2115 37.7139 16.4497L41.5857 22.6175H35.7371C35.3325 22.6175 35.0047 22.9454 35.0047 23.3499C35.0047 23.7544 35.3325 24.0823 35.7371 24.0823H42.9102C43.1767 24.0823 43.4222 23.9376 43.5512 23.7043C43.6801 23.471 43.6722 23.1861 43.5306 22.9604L39.199 16.0603ZM18.6603 1.46484C19.9058 1.46484 20.9191 2.47813 20.9191 3.72363C20.9191 4.47617 20.5489 5.14346 19.9813 5.5542C19.2174 6.10898 18.1619 6.11748 17.3842 5.58613C16.7913 5.17861 16.4016 4.4959 16.4016 3.72363C16.4016 2.47813 17.4148 1.46484 18.6603 1.46484V1.46484ZM27.3127 41.4023V44.0524H20.3928C19.9882 44.0524 19.6603 44.3804 19.6603 44.7849C19.6603 45.1894 19.9882 45.5173 20.3928 45.5173H30.526C30.7268 45.5173 30.8965 45.6869 30.8965 45.8878V48.1645C30.8965 48.3654 30.7268 48.5351 30.526 48.5351H8.19267C7.99179 48.5351 7.82216 48.3654 7.82216 48.1645V45.8878C7.82216 45.6869 7.99179 45.5173 8.19267 45.5173H16.928C17.3326 45.5173 17.6604 45.1894 17.6604 44.7849C17.6604 44.3804 17.3326 44.0524 16.928 44.0524H11.4058V41.4023C11.4058 41.2015 11.5755 41.0318 11.7764 41.0318H26.9422C27.143 41.0318 27.3127 41.2016 27.3127 41.4023ZM17.6236 39.567V7.30146C18.294 7.49531 19.0237 7.4957 19.6943 7.30234V39.567H17.6236Z" />
          </svg>
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
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 h-14 text-pallette-10" 
            viewBox="0 0 50 50" 
            fill="currentColor"
          >
            <path d="M5.16458 26.2099C7.53978 30.8672 9.34114 35.0878 10.7882 38.4818C13.8379 45.6332 15.6783 49.9495 19.212 49.9495C22.9603 49.9495 23.3703 47.0196 23.3703 40.8013C23.3703 33.1102 24.1238 32.4848 25.0336 32.4848C25.9434 32.4848 26.6969 33.1102 26.6969 40.8013C26.6969 47.0196 27.1069 49.9495 30.8552 49.9495C34.3889 49.9495 36.2293 45.6332 39.279 38.4818C40.7261 35.0878 42.5274 30.8647 44.9026 26.2099L45.1812 25.6644C46.6566 22.7977 48.3199 19.5476 48.3199 15.8517C48.3199 6.99127 42.475 0.050293 35.0134 0.050293C32.1372 0.0830884 29.3433 1.01544 27.0238 2.71657C26.4307 3.0997 25.7397 3.30349 25.0336 3.30349C24.3276 3.30349 23.6365 3.0997 23.0435 2.71657C20.7239 1.01544 17.9301 0.0830884 15.0538 0.050293C7.59217 0.050293 1.74731 6.99127 1.74731 15.8517C1.74731 19.5476 3.41478 22.7977 4.88597 25.6652L5.16458 26.2099ZM15.0538 1.7136C17.5659 1.74076 20.0066 2.55327 22.0338 4.03724V4.03724C24.4893 5.65724 27.3821 6.48643 30.3229 6.41327C32.4001 6.40129 34.4616 6.05275 36.4273 5.38119L35.9008 3.80105C33.1596 4.77418 30.2084 4.99896 27.3514 4.45223C27.5916 4.33647 27.8198 4.19718 28.0325 4.03641C30.0601 2.55257 32.5011 1.74035 35.0134 1.7136C41.5428 1.7136 46.6566 7.92355 46.6566 15.8517C46.6566 19.1459 45.0864 22.2055 43.7017 24.9051L43.4206 25.4531C41.0196 30.1603 39.2066 34.4125 37.7496 37.829C35.0642 44.1279 33.2903 48.2862 30.8552 48.2862C29.0447 48.2862 28.3602 47.6408 28.3602 40.8013C28.3602 33.7639 27.8978 30.8215 25.0336 30.8215C22.1694 30.8215 21.707 33.7639 21.707 40.8013C21.707 47.6408 21.0225 48.2862 19.212 48.2862C16.777 48.2862 15.003 44.1279 12.3176 37.829C10.8606 34.4125 9.04757 30.1603 6.64658 25.4531L6.36549 24.9051C4.98078 22.2055 3.41062 19.1459 3.41062 15.8517C3.41062 7.92355 8.52446 1.7136 15.0538 1.7136Z" />
          </svg>
        </div>
        <div className="text-center max-w-[200px]">
          <div className="flex items-center justify-center text-2xl font-bold mb-1 text-pallette-10">
            <span className="text-3xl">+</span>
            <span className="text-4xl">{count2}</span>
          </div>
          <span className="text-sm">Especialidades odontológicas a tu disposición</span>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStats;