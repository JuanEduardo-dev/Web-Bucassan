'use client';

import React, { useState } from 'react';

type TextItem = {
  label?: string;
  content: string;
  isLink?: boolean;
  href?: string;
};

type PaymentIcon = {
  svg: React.ReactNode;
  alt: string;
};

type CardContent = {
  icon: React.ReactNode;
  iconBackgroundColor: string;
  backgroundColor: string;
  textItems?: TextItem[];
  paymentIcons?: PaymentIcon[];
};

const Card: React.FC<CardContent> = ({ icon, iconBackgroundColor, backgroundColor, textItems, paymentIcons }) => {
  return (
    <div className="relative">
      <div className="absolute left-1/2 -top-6 -translate-x-1/2">
        <div className={`flex items-center justify-center w-12 h-12 ${iconBackgroundColor} rounded-full text-white`}>
          {icon}
        </div>
      </div>

      <div className={`${backgroundColor} text-white flex items-center p-8 pt-10 h-full min-h-[250px]`}>
        <div className="space-y-2">
          {textItems?.map((item, index) => (
            <div key={index}>
              {item.label && <p className="font-medium">{item.label}:</p>}
              {item.isLink ? (
                <a href={item.href} className="text-white hover:underline">
                  {item.content}
                </a>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}

          {paymentIcons && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {paymentIcons.map((icon, index) => (
                <div key={index} role="img" aria-label={icon.alt}>
                  {icon.svg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MobileCard: React.FC<{ contents: CardContent[] }> = ({ contents }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 -top-6 flex justify-center gap-4">
        {contents.map((content, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center justify-center w-12 h-12 rounded-full text-white transition-all 
              ${index === activeIndex ? 'scale-110 ring-2 ring-white' : 'opacity-80 hover:opacity-100'}
              ${content.backgroundColor}`}
          >
            {content.icon}
          </button>
        ))}
      </div>

      <div 
        className={`${contents[activeIndex].backgroundColor} text-white flex items-center p-8 pt-10 h-full min-h-[250px] transition-colors duration-300`}
      >
        <div className="space-y-2">
          {contents[activeIndex].textItems?.map((item, index) => (
            <div key={index}>
              {item.label && <p className="font-medium">{item.label}:</p>}
              {item.isLink ? (
                <a href={item.href} className="text-white hover:underline">
                  {item.content}
                </a>
              ) : (
                <p>{item.content}</p>
              )}
            </div>
          ))}

          {contents[activeIndex].paymentIcons && (
            <div className="flex items-center justify-center gap-2 mt-4">
              {contents[activeIndex].paymentIcons.map((icon, index) => (
                <div key={index} role="img" aria-label={icon.alt}>
                  {icon.svg}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const CardHero: React.FC<{ contents: CardContent[] }> = ({ contents }) => {
  return (
    <>
      {/* Versión móvil - solo visible en pantallas pequeñas */}
      <div className="md:hidden">
        <MobileCard contents={contents} />
      </div>

      {/* Versión desktop - visible en pantallas md y mayores */}
      <div className="hidden md:grid md:grid-cols-3">
        {contents.map((content, index) => (
          <Card key={index} {...content} />
        ))}
      </div>
    </>
  );
};

export default CardHero;