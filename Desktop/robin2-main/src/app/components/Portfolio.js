import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const examples = [
  {
    title: "Tienda Online para Slowwalk",
    description: "E-commerce",
    type: "DISEÑO",
    year: "2024",
    art: "/pietro.webp",
    video: "/slowwalk-cutted.webm",
    link: "https://www.slowwalk.es",
    alt: "video mostrando el nuevo ecommerce de slowwalk",
  },
  {
    title: "Meminteriores",
    description: "Landing page para renovar su presencia online",
    type: "DISEÑO",
    year: "2024",
    art: "/pietro2.webp",
    video: "/mem-cutted.webm",
    link: "https://www.meminteriores.com",
    alt: "video mostrando la nueva web de mem interiores",
  },
  {
    title: "Dentista",
    description: "Landing page",
    type: "DISEÑO",
    year: "2024",
    art: "/pietro3.webp",
    video: "/dentista-cutted.webm",
    link: "https://dentista.robinwebagency.com",
    alt: "Video mostrando una web de dentistas de ejemplo",
  },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[2000px]">
        <div className="relative flex gap-y-8 flex-col bg-[#10100E] md:mt-24">
          <div className="py-12 px-8 md:flex md:gap-x-24 relative">
            <div className="sticky top-0 z-10 h-full bg-[#10100E] py-4 flex gap-y-4 md:gap-y-40 flex-col w-full md:max-w-[40%]">
              <h2 className="text-4xl md:text-5xl font-bold md:pt-6 2xl:text-7xl">
                PORTFOLIO
              </h2>
              <div className="relative hidden md:h-[180px] overflow-hidden md:flex">
                <div className="text-[#CEA682] text-4xl md:text-[180px] xl:text-[250px] flex flex-col leading-[180px]">
                  0
                </div>
                <motion.div
                  animate={{ y: -activeIndex * 180 }} // Adjust for font size
                  transition={{ duration: 0.5 }}
                  className="text-[#CEA682] text-4xl md:text-[180px] xl:text-[250px] flex flex-col"
                  style={{ lineHeight: "180px" }}
                >
                  {examples.map((_, idx) => (
                    <p className="h-full" key={idx}>
                      {idx + 1}.
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
            <div
              id="portfolio"
              className="flex flex-col gap-y-12 py-12 pb-20 w-full md:max-w-[50%] lg:max-w-[60%]"
            >
              <div className="flex gap-x-2">
                <p className="font-mono text-[#EFFF11] pt-[1px]">(PROYECTOS)</p>
                <p className="font-light max-w-[400px]">
                  Proyectos destacados que han sido meticulosamente elaborados
                  para generar resultados y causar impacto.
                </p>
              </div>
              {examples.map((item, idx) => {
                const ref = useRef(null);
                const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
                const refVideo = useRef(null);
                const inViewVideo = useInView(ref, { margin: "-100px 0px 0px 0px" });
                if (inView && activeIndex !== idx) {
                  setActiveIndex(idx);
                }

                return (
                  <div ref={ref} className="flex flex-col gap-y-2" key={idx}>
                    <Link href={item.link} prefetch={false} title={`Ir a la web de ${item.title}`}>
                      <div
                        className="bg-gray-300 rounded-xl w-full h-[50vh] md:h-[70vh] md:aspect-[16/10] relative overflow-hidden"
                        ref={refVideo}
                        style={{
                          backgroundImage: inViewVideo
                            ? `url(${item.art})` // Lazy load the background image
                            : "none",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <video
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-2"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                          src={inViewVideo ? item.video : undefined}
                          playsInline
                          autoPlay
                          muted
                          loop
                          preload="none"
                          loading="lazy"
                          alt={item.alt}
                        />
                      </div>
                      <div className="flex justify-between pt-2">
                        <div className="flex flex-col gap-y-1">
                          <h3>{item.title}</h3>
                          <p className="font-light">{item.description}</p>
                        </div>
                        <div className="flex gap-x-1 md:gap-x-4">
                          <p className="rounded-md w-fit h-fit px-2 py-1 border-[1px]">
                            {item.type}
                          </p>
                          <p className="rounded-md w-fit h-fit px-2 py-1 border-[1px]">
                            {item.year}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
