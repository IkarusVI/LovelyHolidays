import Link from "next/link";
import React from "react";

export default function Procesos() {
  return (
    <div className="relative md:flex md:justify-center">
      <div className="relative max-w-[2000px]">
        <div className="relative flex gap-y-8 flex-col md:flex-row md:hidden">
          <div className="px-8 flex items-center justify-center flex-col">
            <img
              src="/procesos.svg"
              className="w-full max-w-[300px] max-h-[300px]"
              title="Ilustración Procesos"
              alt="Paso 1 Diseño, Paso 2 Desarrollo, Paso 3 entrega y Paso 4 Mejora continua"
              loading="lazy"
            />
            <div className="py-12 flex gap-y-2 flex-col">
              <h2 className="text-4xl font-bold">HAGAMOS QUE PASE</h2>
              <h3 className="font-light">
                Te entregamos tu MVP de forma gratuita y podrás mejorarlo al
                pagar mensualmente por el mantenimiento.
              </h3>
            </div>
          </div>
          <div className="h-80 relative">
            <img src="poser2.webp" className="h-full object-contain" 
             title="Imagen Estatua Decorativa"
              alt="Estatua de Robin Web Agency"
              loading="lazy"
            />
              <Link prefetch={false} title="Contactar con Robin" href="https://api.whatsapp.com/send/?phone=34694494217&text=%C2%A1Hola!%20Estar%C3%ADa%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Robin%20Web.">
            <div className="flex justify-end pr-4 z-10">
                <button className="bg-[#EFFF11]/90 text-[#10100E] py-2 text-2xl font-semibold w-fit px-4 gap-x-2 flex items-center justify-center absolute bottom-8">
                  <p>Contáctanos ahora</p>
                  <img src="/arrow-right-double-fill.svg" className="w-8" alt="Icono botón de contacto" title="Icono" />
                </button>
            </div>
              </Link>
          </div>
        </div>
        <div className="md:h-[100vh] hidden md:flex gap-x-2 lg:gap-x-12 items-center px-12 md:pr-60 lg:pr-72">
          <div className="py-12 flex gap-y-2 flex-col z-10">
            <p className="text-4xl lg:text-5xl xl:text-7xl font-bold">
              HAGAMOS QUE PASE
            </p>
            <p className="font-light  lg:text-2xl w-[95%] max-w-[600px]">
              Te entregamos tu MVP de forma gratuita y podrás mejorarlo al pagar
              mensualmente por el mantenimiento.
            </p>
            <div className="flex pr-4 pt-4">
              <Link prefetch={false} href="https://api.whatsapp.com/send/?phone=34694494217&text=%C2%A1Hola!%20Estar%C3%ADa%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Robin%20Web.">
                <button className="bg-[#EFFF11]/90 text-[#10100E] py-2 text-xl font-semibold w-fit px-4 gap-x-2 flex items-center justify-center whitespace-nowrap lg:text-2xl">
                  <p>Contáctanos ahora</p>
                  <img src="/arrow-right-double-fill.svg" className="w-8" alt="Icono botón de contacto" title="Icono" />
                </button>
              </Link>
            </div>
          </div>
          <div className="h-[240px] w-[240px] md:w-[230px] md:h-[230px] lg:w-[320px] lg:h-[320px] xl:w-[320px] xl:h-[320px] min-w-[240px] z-10">
            <img
              src="/procesos2.svg"
              className="w-full object-contain h-full"
              title="Ilustración Procesos"
              alt="Paso 1 Diseño, Paso 2 Desarrollo, Paso 3 entrega y Paso 4 Mejora continua"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 scale-x-[-1] w-full h-[100%] md:flex items-end hidden">
        <img
          title="Imagen Estatua Decorativa"
          alt="Estatua de Robin Web Agency"
          src="/poser2.webp"
          className="object-contain h-fit max-w-[400px] lg:max-w-[400px] xl:max-w-[400px] 2xl:max-w-[550px]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
