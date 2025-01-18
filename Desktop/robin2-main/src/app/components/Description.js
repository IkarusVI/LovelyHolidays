import { motion, useTransform } from "framer-motion";
import React from "react";

const AccordionContext = React.createContext({});
const useAccordion = () => React.useContext(AccordionContext);

function Accordion({ children, multiple, defaultIndex }) {
  const [activeIndex, setActiveIndex] = React.useState(
    multiple ? [defaultIndex] : defaultIndex
  );

  function onChangeIndex(index) {
    setActiveIndex((currentActiveIndex) => {
      if (!multiple) {
        return index === activeIndex ? -1 : index;
      }

      if (currentActiveIndex.includes(index)) {
        return currentActiveIndex.filter((i) => i !== index);
      }

      return currentActiveIndex.concat(index);
    });
  }

  return React.Children.map(children, (child, index) => {
    const isActive =
      multiple && Array.isArray(activeIndex)
        ? activeIndex.includes(index)
        : activeIndex === index;

    return (
      <AccordionContext.Provider value={{ isActive, index, onChangeIndex }}>
        {child}
      </AccordionContext.Provider>
    );
  });
}

function AccordionItem({ children }) {
  return <div className="overflow-hidden">{children}</div>;
}

function AccordionHeader({ children }) {
  const { isActive, index, onChangeIndex } = useAccordion();

  return (
    <motion.div
      className={`${
        index == 4 ? "bg-[#EFFF11] text-[#10100E]" : "bg-[#10100E]"
      } ${
        isActive
          ? "active border-t-[1px] border-x-[1px]"
          : "border-[1px] border-white"
      } text-xl font-semibold p-4 cursor-pointer hover:bg-[#dee48f] hover:text-[#10100E] transition duration-[1500]`}
      onClick={() => onChangeIndex(index)}
    >
      <div className="flex justify-between">
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" className={`${index == 4 ? "fill-[#10100E]": "fill-white" }`}/></svg>
      </div>
    </motion.div>
  );
}

function AccordionPanel({ children }) {
  const { isActive } = useAccordion();

  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: isActive ? "auto" : 0 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
      className={`${isActive ? "visible" : "invisible h-0 overflow-hidden"}`}
    >
      <div className="p-4 border-white border-b-[1px] border-x-[1px]">
        {children}
      </div>
    </motion.div>
  );
}

const services = [
  {
    title: "Desarrollo Web",
    description:
      "Un sitio web diseñado para elevar tu marca a nuevos niveles. Páginas web desarrolladas a medida y meticulosamente elaboradas para reflejar identidades únicas.",
    extra: (
      <ol className="list-decimal pl-5 py-8">
        <li>
          <h4 className="opacity-0 absolute">
            Diseño y prototipado de la web.
          </h4>
          Diseño y prototipado de la web.
        </li>
        <li>
          <h4 className="opacity-0 absolute">
            Desarrollo con tecnologías nativas y sin plantillas.
          </h4>
          Desarrollo con tecnologías nativas y sin plantillas.
        </li>
        <li>
          <h4 className="opacity-0 absolute">
            Versiones de la web periódicas para que nuestros clientes sigan
            vigentes en su sector.
          </h4>
          Versiones de la web periódicas para que nuestros clientes sigan
          vigentes en su sector.
        </li>
      </ol>
    ),
  },
  {
    title: "SEO",
    description:
      "Tu sitio web merece ser visto. Optimizamos tu presencia online para aumentar su visibilidad en los resultados de búsqueda, ayudando a tu empresa a atraer al público adecuado y a destacar.",
    extra: (
      <ol className="list-decimal pl-5 py-8">
        <li>
          <h4 className="opacity-0 absolute">SEO Técnico.</h4>
          SEO Técnico.
        </li>
        <li>
          <h4 className="opacity-0 absolute">SEO On-Page y contenido.</h4>
          SEO On-Page y contenido.
        </li>
        <li>
          <h4 className="opacity-0 absolute">SEO Off-Page.</h4>
          SEO Off-Page.
        </li>
      </ol>
    ),
  },
  {
    title: "Auditorías de Seguridad",
    description:
      "Revisamos la estructura tanto externa como interna de tu servicio online y proporcionamos soluciones sencillas que aumentan la seguridad y la velocidad.",
    extra: (
      <ol className="list-decimal pl-5 py-8">
        <li>
          <h4 className="opacity-0 absolute">
            Reconocimiento de vulnerabilidades.
          </h4>
          Reconocimiento de vulnerabilidades.
        </li>
        <li>
          <h4 className="opacity-0 absolute">
            Hardening de arquitecturas de red.
          </h4>
          Hardening de arquitecturas de red.
        </li>
        <li>
          <h4 className="opacity-0 absolute">
            Informes que incluyen exploitation, foothold y post-exploitation.
          </h4>
          Informes que incluyen exploitation, foothold y post-exploitation.
        </li>
      </ol>
    ),
  },
  {
    title: "Automatización de Procesos",
    description:
      "Desarrollamos soluciones a medida que hacen la vida más fácil a nuestros clientes. Ofrecemos software que automatiza la gestión de empleados y clientes en cada sector.",
    extra: <div></div>,
  },
  {
    title: "Sin Permanencia",
    description: "Confiamos en nuestro producto. Sólo ganamos si tú ganas.",
    extra: (
      <ol className="list-decimal pl-5 py-8">
        <li>
          <p className="inline font-bold">Mes de prueba gratuito.</p> Desarrolla
          con nosotros el producto y cuando estés orgulloso de él, prueba un mes
          gratuito y sin compromiso.
        </li>
        <li>
          <p className="inline font-bold">
            Sabemos lo difícil que es emprender.
          </p>{" "}
          Si en algún momento tu negocio no va como te gustaría podrás
          beneficiarte de nuestro servicio sin permanencia.
        </li>
      </ol>
    ),
  },
];

export default function Description({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
  return (
    <motion.div
      style={{ scale, rotate, scale: scale, rotate: rotate }}
      className="min-h-[100vh] relative w-full bg-[#10100E] flex items-start justify-center"
    >
      <div className="max-w-[1400px] w-full pt-40">
        <div id="services" className="p-8 md:px-24 flex gap-y-2 flex-col">
          <h2 className="text-4xl md:text-7xl font-bold">
            CÓMO PODEMOS AYUDARTE
          </h2>
          <div className="md:flex md:justify-end lg:py-0 py-4">
            <div className="flex gap-x-2 md:w-[55%] lg:w-[35%]">
              <p className="font-mono text-[#EFFF11] pt-[1px]">(SERVICIOS)</p>
              <p className="font-light text-lg text-white/80 pb-2">
                ¿Cansado de sitios web que no reflejan la identidad de tu marca
                ni impulsan su crecimiento?
              </p>
            </div>
          </div>
          <Accordion>
            {services.map((item, idx) => (
              <AccordionItem key={idx}>
                <AccordionHeader>
                  <h3>{item.title}</h3>
                </AccordionHeader>
                <AccordionPanel>
                  {item.description}
                  {item.extra}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
}
