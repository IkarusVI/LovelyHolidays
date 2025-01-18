import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "Estamos orgullosos de haber trabajado con Robin Web en el desarrollo y diseño de nuestro ecommerce de venta de zapatos. Ofrecen un servicio excepcional y siempre encuentran soluciones para cualquier necesidad que surja.",
    author: "Jaime Pastor",
    role: "Slowwalk",
    logo: "/logow.webp",
    profile: "/1712680401643.webp",
    dark: true,
  },
  {
    text: "Nuestra antigua página estaba obsoleta y tenía muchos problemas técnicos que afectaban la forma en que nuestros clientes nos encontraban y entendían nuestro trabajo. Crearon un diseño moderno y funcional que representa perfectamente la calidad de nuestros productos y servicios. ",
    author: "Adrián",
    role: "Mem Interiores",
    logo: "/logotipointeriores.webp",
    profile: "/avatar.webp",
    dark: false
  },
];

export default function Testimonial() {
  return (
    <div className="relative flex flex-col gap-y-8">
      {/* Animated Header */}
      <div className="absolute bottom-0 w-full bg-[#EFFF11] text-[#10100E] overflow-hidden">
        <motion.div
          className="flex gap-x-4 text-7xl whitespace-nowrap w-fit"
          animate={{
            x: ["0", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array(2)
            .fill(["ESTO DICEN", "DE NOSOTROS", "ESTO DICEN", "DE NOSOTROS"])
            .flat()
            .map((item, index) => (
              <p key={index} className="font-extrabold flex-shrink-0">
                {item} -
              </p>
            ))}
        </motion.div>
      </div>

      <div className="flex items-center justify-center overflow-hidden">
        <div className="max-w-[1400px]">
          <div className="w-full  py-12 px-8 md:px-24 md:py-36">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              NUESTROS CLIENTES NUESTRO ORGULLO
            </h2>
            <div className="md:flex md:justify-end">
              <div className="flex gap-x-2 mt-4 md:w-[55%] lg:w-[35%]">
                <p className="font-mono text-[#EFFF11] pt-[1px]">
                  (TESTIMONIOS)
                </p>
                <p className="font-light">
                  Esto es lo que opinan nuestros clientes sobre nuestro trabajo.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-24 py-12 pb-20">
              {testimonials.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-y-8">
                  <div className="flex flex-col gap-y-4 items-start">
                    <img src="/Stars.svg" alt="Valoración 5 estrellas" title="Valoración" className="h-4" />
                    <p className="font-light">{item.text}</p>
                    <div className="flex divide-x gap-x-4 divide-white">
                      <div className="flex gap-x-2">
                        <div className="w-14 h-14">
                          <img
                            src={item.profile}
                            alt={`${item.author}'s profile`}
                            className="w-full h-full object-cover rounded-full"
                            title="avatar"
                          />
                        </div>
                        <div className="flex flex-col whitespace-nowrap">
                          <p className="font-light">{item.author}</p>
                          <p className="font-semibold">{item.role}</p>
                        </div>
                      </div>
                      <div className={`w-full max-w-40 flex items-center justify-center pl-6 md:pl-2 `}>

                        <img
                          src={item.logo}
                          alt={`${item.author}'s company logo`}
                          className={`w-full object-contain h-full p-4 rounded-md ${item.dark ? '' : 'bg-white'}`}
                          title="logo empresa"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
