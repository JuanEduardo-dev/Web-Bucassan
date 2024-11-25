'use client';

import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

export const ClarityInitializer = () => {
  useEffect(() => {
    clarity.init('p2rj0iq37x');
  }, []);

  return null;
};