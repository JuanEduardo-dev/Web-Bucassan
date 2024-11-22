'use client';

import { useEffect } from "react";

const ClarityIntegration = () => {
  useEffect(() => {
    (function (c: any, l: Document, a: string, r: string, i: string) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      const t = l.createElement(r) as HTMLScriptElement; // Especifica el tipo aquí
      t.async = true;
      t.src = "https://www.clarity.ms/tag/" + i;
      const y = l.getElementsByTagName(r)[0];
      y?.parentNode?.insertBefore(t, y);
    })(window, document, "clarity", "script", "p2rj0iq37x");
  }, []);

  return null;
};

export default ClarityIntegration;
