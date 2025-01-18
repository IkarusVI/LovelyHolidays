"use client";
import Banner from "./components/Banner";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import Whatsapp from "./components/Whatsapp";
import dynamic from "next/dynamic";
import Blog from "./components/Blog"

const Header = dynamic(() => import('./components/header'));
const Portfolio = dynamic(() => import('./components/Portfolio'));
const Procesos = dynamic(() => import('./components/Procesos'));
const Footer = dynamic(() => import('./components/Footer'));
const Testimonial = dynamic(() => import('./components/Testimonial'));
const Description = dynamic(() => import('./components/Description'));

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <div className="font-grotesk text-white ">
      <Header />
      <main>
        <div ref={container} className="relative min-h-[200vh] bg-[#a5a20e]">
          <Banner scrollYProgress={scrollYProgress} />
          <Description scrollYProgress={scrollYProgress} />
        </div>
        <Testimonial />
        <Portfolio />
        <Blog />
        <Procesos />
      </main>
      <Footer />
      <Whatsapp />
    </div>
  );
}