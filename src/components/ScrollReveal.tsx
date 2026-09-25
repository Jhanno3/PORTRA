"use client";

import Script from "next/script";

declare global {
  interface Window {
    ScrollCraft?: { mount: (root?: Document | Element) => unknown };
  }
}

// Carga el motor scroll-craft (public/vendor/scrollcraft.js) y lo monta sobre
// el documento. El motor solo actúa sobre elementos marcados con data-sc-*
// (ver devices.md del skill); no genera ni restylea nada por su cuenta.
// Si el script no carga, .sc-fallback en <html> evita que el CSS de
// pre-pintado (globals.css) deje el contenido en opacity:0 para siempre.
export function ScrollReveal() {
  return (
    <Script
      src="/vendor/scrollcraft.js"
      strategy="afterInteractive"
      onReady={() => {
        window.ScrollCraft?.mount();
      }}
      onError={() => {
        document.documentElement.classList.add("sc-fallback");
      }}
    />
  );
}
