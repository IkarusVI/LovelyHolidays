"use client";

import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll(); // Hook para el progreso del scroll
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Establecer el ancho de la ventana
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Actualizar el ancho cuando se redimensione la ventana
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      setScrollPercentage(value * 100); // Convertir progreso a porcentaje
    });

    return () => unsubscribe(); // Limpiar la suscripción al desmontar el componente
  }, [scrollYProgress]);

  return (
    <>
      <div>
        <motion.div
          className={`text-[#10100E] bg-[#EFFF11]/90 backdrop-blur-sm overflow-hidden items-center whitespace-nowrap font-grotesk px-2  flex gap-2 ${scrollPercentage > 5 ? "flex" : "hidden"}`}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "30px",
            width: `${(scrollPercentage / 100) * (windowWidth - 160)}px`, // Calculando el ancho correcto
            zIndex: 20,
            overflow: "hidden",
          }}
        >
          <img className="min-w-[75px] w-[75px]" src="/logowithoutfoxblack.svg"></img> Leido el: {Math.round(scrollPercentage)}%
        </motion.div>
      </div>
    </>
  );
};

export default ScrollBar;
