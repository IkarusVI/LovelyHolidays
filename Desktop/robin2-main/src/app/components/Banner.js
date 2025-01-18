import { motion, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const [isSmallScreenAndTall, setIsSmallScreenAndTall] = useState(null);

  useEffect(() => {
    const checkWindowSize = () => {
      const isSmall = window.innerWidth < 1025;
      const isTall = window.innerHeight > window.innerWidth;
      setIsSmallScreenAndTall(isSmall && isTall);
    };

    // Verifica al cargar el componente
    checkWindowSize();

    // Escucha el evento resize
    window.addEventListener("resize", checkWindowSize);

    // Limpia el listener al desmontar
    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const girlVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.5,
        duration: 0.6,
      },
    },
  };

  return (
    <div
      className={`h-[100vh] sticky top-0 overflow-hidden flex flex-col justify-center`}
      style={{
        background:
          "linear-gradient(165deg, #10100e, #0d0d08, #0b0a04, #070702, #0e0e02, #1b1b03, #282803, #343400)",
        scale: scale,
        rotate: rotate,
      }}
    >
      <div className="flex justify-between top-8 left-8 md:left-16 w-[100px] md:w-[150px] absolute 2xl:left-[15vw]">
        <img
          src="/logorobin.svg"
          title="logo"
          alt="Logo Robin Web Blanco"
          loading="lazy"
        />
      </div>
      {isSmallScreenAndTall == null ? (
        <></>
      ) : (
        <>
          <div
            className={`absolute bottom-24 md:bottom-32 w-full text-[#EFFF11] overflow-hidden ${
              isSmallScreenAndTall ? "absolute" : "hidden"
            }`}
          >
            <motion.div
              className="flex gap-x-4 text-7xl whitespace-nowrap w-fit "
              animate={{
                x: ["-50%", "0%"], // Moves from 0% to -100%
              }}
              transition={{
                duration: 20, // Animation duration in seconds
                repeat: Infinity, // Loops infinitely
                ease: "linear", // Smooth linear animation
              }}
            >
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-0 w-full overflow-hidden " // Prevent overflow for the girl container
            variants={girlVariants}
            initial="hidden"
            animate="visible"
          >
            <div
              className={`flex justify-end h-[400px] md:h-[450px] lg:h-[50vw] max-h-[850px]  ${
                isSmallScreenAndTall ? "!h-[50vh]" : ""
              }`}
            >
              <img
                className="h-full object-contain z-[10]"
                src="/minitaFixed-optimized.webp"
                alt="Avatar Robin Web Agency"
                title="Avatar"
              />
            </div>
          </motion.div>
          <div
            className={`absolute bottom-6 w-full text-[#EFFF11] overflow-hidden ${
              isSmallScreenAndTall ? "absolute" : "hidden"
            }`}
          >
            <motion.div
              className="flex gap-x-4 text-7xl whitespace-nowrap w-fit relative z-20"
              animate={{
                x: ["0%", "-50%"], // Moves from 0% to -100%
              }}
              transition={{
                duration: 20, // Animation duration in seconds
                repeat: Infinity, // Loops infinitely
                ease: "linear", // Smooth linear animation
              }}
            >
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
            </motion.div>
          </div>

          <div
            className={`absolute w-full text-[#EFFF11] overflow-hidden translate-x-[47%] rotate-90 ${
              isSmallScreenAndTall ? "hidden" : ""
            }`}
          >
            <motion.div
              className="flex gap-x-4 text-7xl whitespace-nowrap w-fit"
              animate={{
                x: ["0%", "-50%"], // Moves from 0% to -100%
              }}
              transition={{
                duration: 20, // Animation duration in seconds
                repeat: Infinity, // Loops infinitely
                ease: "linear", // Smooth linear animation
              }}
            >
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
              {["DESARROLLO", "WEB", "A MEDIDA"].map((item, index) => (
                <p key={index} className="font-extrabold flex-shrink-0">
                  {item} -
                </p>
              ))}
            </motion.div>
          </div>

          <div className="py-12 mb-[16vh] sm:mb-0 px-8 md:px-16 md:py-36 2xl:pl-[15vw] z-10">
            <motion.div
              className="flex flex-col gap-y-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="text-[9vw] leading-[8vw] md:text-7xl 2xl:text-[100px]  font-bold ] md:leading-[60px] 2xl:leading-[80px] titulo"
                variants={itemVariants}
              >
                AGENCIA DE <br /> DESARROLLO WEB <br />
                EN ALICANTE
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl xl:text-2xl sm:max-w-[75%] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[900px] md:leading-5 font-light"
                variants={itemVariants}
              >
                Nos especializamos en hacer la vida más fácil a nuestros
                clientes, desde landing pages para la captación de leads hasta
                tiendas online y automatizaciones completas de gestión.
              </motion.p>

              <motion.a
                className="bg-[#EFFF11] text-[#10100E] py-2 text-xl lg:text-xl xl:text-2xl font-semibold w-fit px-4 gap-x-2 flex items-center justify-center"
                variants={itemVariants}
                href="https://api.whatsapp.com/send/?phone=34694494217&text=%C2%A1Hola!%20Estar%C3%ADa%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Robin%20Web."
                target="_blank"
                rel="noopener noreferrer"
                title="Contactar con Robin"
              >
                <p>Contáctanos ahora</p>
                <img
                  src="/arrow-right-double-fill.svg"
                  className="w-8"
                  alt="Icono botón de contacto"
                  title="Icono"
                />
              </motion.a>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
}
