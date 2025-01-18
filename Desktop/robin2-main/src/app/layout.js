"use client";
import { useEffect } from "react";
import "./globals.css";
import Lenis from "lenis";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time); // Update Lenis on each frame
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);
  return (
    <html lang="es">
      <head>
        <link rel="preload" as="image" href="/minitaFixed-optimized.webp"/>
        <title>Robin Web - Agencia de desarrollo web en Alicante</title>
        <meta
          name="description"
          content="¿Tienes una empresa en Alicante o Elche? Elige Robin web como tu agencia y disfruta de tu web gratis más mantenimiento en formato suscripción"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`antialiased bg-[#10100E]`}
      >
        {children}
      </body>
    </html>
  );
}
