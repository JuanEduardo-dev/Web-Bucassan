'use client';

import React, { useEffect } from 'react';

// Definir interfaces específicas para Landbot
interface LandbotConfig {
  configUrl: string;
}

interface LandbotLivechat {
  new (config: LandbotConfig): LandbotInstance;
}

interface LandbotInstance {
  destroy?: () => void;
}

declare global {
  interface Window {
    myLandbot: LandbotInstance | undefined;
    Landbot: {
      Livechat: LandbotLivechat;
    };
  }
}

const LandbotComponent: React.FC = () => {
  useEffect(() => {
    const initLandbot = () => {
      if (!window.myLandbot) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.addEventListener('load', () => {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-2691870-GMMJR8IGJ7KUZLNR/index.json',
          });
        });
        script.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
        document.head.appendChild(script);
      }
    };

    window.addEventListener('mouseover', initLandbot, { once: true });
    window.addEventListener('touchstart', initLandbot, { once: true });

    return () => {
      window.removeEventListener('mouseover', initLandbot);
      window.removeEventListener('touchstart', initLandbot);
    };
  }, []);

  return <div id="landbot-container"/>;
};

export default LandbotComponent;