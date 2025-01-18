import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function Blog() {
  const [entries, setEntries] = useState([]);
  const swiperRef = useRef(null);
  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/posts?per_page=6&_embed`, {
          method: "GET",
        });
        const data = await response.json();
        
        // Map the WordPress API response to the required structure
        const formattedEntries = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          minutes: 5, // Example static value
          date: new Date(post.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          author: post._embedded?.author?.[0]?.name || "Unknown Author",
          profile: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/avatar.webp",
          bg: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.webp",
        }));

        setEntries(formattedEntries); // Update state with formatted data
      } catch (err) {
        console.error("Error fetching WordPress posts:", err);
      }
    };

    fetchEntries();
  }, []);


  return (
    <div className="relative min-h-[100vh]  ">
      
      <div className="absolute left-0 bottom-24 h-[500px] lg:h-[750px]">
        <img
          src="download.png"
          className="h-full w-full object-contain"
          style={{
            filter: "drop-shadow(0 0 5px rgba(0, 0, 0, .5))",
            maskImage:
              "linear-gradient(to bottom, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 90%, transparent 100%)",
          }}
        />
      </div>

      <div className="absolute bottom-20 bg-[#EFFF11] w-full text-[#10100E] overflow-hidden">
        <motion.div
          className="flex gap-x-4 text-7xl whitespace-nowrap w-fit"
          animate={{
            x: ["0", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array(2)
            .fill(["BIENVENIDOS", "AL", "BLOG", "BIENVENIDOS", "AL", "BLOG"])
            .flat()
            .map((item, index) => (
              <p key={index} className="font-extrabold flex-shrink-0">
                {item} -
              </p>
            ))}
        </motion.div>
      </div>

      <div
        id="blog"
        className="py-2 md:pt-40 pl-8 md:pl-[250px] pb-4 flex gap-y-1 flex-col relative z-10"
      >
        <h2 className="text-4xl lg:text-6xl font-bold pr-8">NUESTRO BLOG</h2>
        <div className="flex gap-x-2 pr-8">
          <p className="font-mono text-[#EFFF11] pt-[1px]">(BLOG)</p>
          <p className="font-light text-lg pb-6 lg:pb-32">
            Aquí encontrarás contenido de valor que te ayudará con tu negocio.
          </p>
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture Swiper instance
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: "", // Custom pagination element
              renderBullet: (index, className) =>
                `<span class="${className} ">HOLA </span>`, // Custom bullet
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              500: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1424: { slidesPerView: 3.5 },
            }}
          >
            {entries.map((item, idx) => (
              <SwiperSlide key={idx}>
                <Link href={"/blog?id="+item.id}>
                <div className="h-60 md:h-72 2xl:h-[350px] relative">
                  <div
                    style={{ backgroundImage: `url(${item.bg})` }}
                    className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-90"
                  ></div>
                  <div className="relative flex flex-col justify-between h-full p-4 bg-black  bg-opacity-30">
                    <div className="flex gap-x-4 items-center">
                      <img
                        src={item.profile}
                        alt={item.author}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <p className="font-bold text-white">{item.author}</p>
                    </div>
                    <div className="flex flex-col gap-y-2 text-white">
                      <div className="flex gap-x-2 text-sm">
                        <p className="text-[#EFFF11]">{item.date}</p> -{" "}
                        <p>{item.minutes} min lectura</p>
                      </div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </div>
                </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 -translate-y-1/2 left-1 z-10">
            <button
              onClick={() => swiperRef.current?.slidePrev()} // Scroll to previous slide
              className="p-2 bg-[#EFFF11]/80 text-black rounded-full"
            >
              <RiArrowLeftSLine size={30} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-1 z-10">
            <button
              onClick={() => swiperRef.current?.slideNext()} // Scroll to next slide
              className="p-2 bg-[#EFFF11]/80 text-black rounded-full"
            >
              <RiArrowRightSLine size={30} />
            </button>
          </div>
          <div className="custom-pagination mt-4 flex justify-center gap-x-2"></div>
        </div>
      </div>

      <div className="relative md:py-36">
        <div className="pl-8 md:pl-48">
          <button className="bg-[#EFFF11]/90 text-[#10100E] py-2 md:text-xl text-2xl font-semibold w-fit px-4 gap-x-2 flex items-center justify-center absolute top-4 z-10 right-4 xl:left-[310px]">
            <Link href="/blogs">Ver todos</Link>
            <img
              src="/arrow-right-double-fill.svg"
              className="w-8"
              alt="Icono botón de contacto"
              title="Icono"
            />
          </button>
        </div>
      </div>

    </div>
  );
}
