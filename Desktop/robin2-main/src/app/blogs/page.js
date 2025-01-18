"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import { motion } from "framer-motion";
import Link from "next/link";
import { helix } from "ldrs";
helix.register();

export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(1); // Controla la página actual
  const [hasMore, setHasMore] = useState(true); // Verifica si hay más entradas para cargar

  // Función para cargar las entradas
  const fetchEntries = async (page) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/posts?per_page=3&page=${page}&_embed`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      // Verifica si los datos son un array y si hay entradas
      if (Array.isArray(data) && data.length > 0) {
        const formattedEntries = data.map((post) => ({
          id: post.id,
          title: post.title.rendered,
          minutes: 5, // Valor estático
          date: new Date(post.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          author: post._embedded?.author?.[0]?.name || "Unknown Author",
          profile: post._embedded?.author?.[0]?.avatar_urls?.["96"] || "/avatar.webp",
          bg: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/default-image.webp",
        }));

        // Añadir las nuevas entradas al estado
        setEntries((prevEntries) => [...prevEntries, ...formattedEntries]);

        // Si no hay más entradas, desactivar el botón "Ver más"
        if (data.length < 3) {
          setHasMore(false);
        }
      } else {
        setHasMore(false); // Si no es un array o está vacío, desactivar el botón
      }
    } catch (err) {
      console.error("Error fetching WordPress posts:", err);
    } finally {
      setLoading(false);
    }
  };

  // Llamada inicial para cargar las entradas
  useEffect(() => {
    fetchEntries(page);
  }, [page]);

  // Función para cargar más entradas
  const loadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1); // Incrementar el número de página
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center md:px-5 md:pt-32 font-grotesk">
        <div className="max-w-[900px] w-full overflow-hidden">
          <div className="w-full h-[70vh] bg-[#10100E] relative text-white md:rounded-xl overflow-hidden flex items-center justify-center">
            <l-helix size="100" speed="2.5" color="#EFFF11"></l-helix>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link href="/" className="flex justify-between top-8 left-8 md:left-16 w-[100px] md:w-[150px] absolute z-10">
        <img src="/logorobin.svg" title="logo" alt="Logo Robin Web Blanco" loading="lazy" />
      </Link>
      <Header />
      <div className="flex items-center justify-center w-full min-h-[100vh] flex-col py-[100px] gap-5">
        <div className="flex gap-x-5 gap-y-5 flex-wrap max-w-[1400px] justify-center px-3">
          {entries.map((item, idx) => (
            <div key={idx} className="max-w-[350px] xl:max-w-[400px] w-full group">
              <Link href={`/blog?id=${item.id}`}>
                <div className="h-60 md:h-72 relative overflow-hidden">
                  <div className="relative z-20 flex flex-col justify-between h-full p-4 bg-black bg-opacity-30">
                    <div className="flex gap-x-4 items-center">
                      <img src={item.profile} alt={item.author} className="w-10 h-10 rounded-full object-cover" />
                      <p className="font-bold text-white">{item.author}</p>
                    </div>
                    <div className="flex flex-col gap-y-2 text-white">
                      <div className="flex gap-x-2 text-sm">
                        <p className="text-[#EFFF11]">{item.date}</p> - <p>{item.minutes} min lectura</p>
                      </div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                  </div>

                  <img
                    src={item.bg}
                    className="absolute top-0 w-full h-full object-cover pointer-events-none opacity-90 transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>

        <button
          onClick={loadMore} 
          className={` ${hasMore? "bg-[#EFFF11] text-[#10100E]":"bg-[#efff1138]"}  py-2 text-lg xl:text-xl font-semibold w-fit px-4 gap-x-2 flex items-center justify-center`}
          disabled={!hasMore} 
        >
          <p>Ver más</p>
          <img src="/arrow-right-double-fill.svg" className="w-8" alt="Icono botón ver más" title="Icono" />
        </button>
      </div>
    </>
  );
}
