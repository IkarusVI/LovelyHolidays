"use client";
import Footer from "../components/Footer";
import Header from "../components/header";
import BlogsRecomended from "../components/BlogsRecomended";
import ScrollBar from "../components/ScrollBar";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import TurndownService from "turndown";
import ReactMarkdown from "react-markdown";
import { helix } from 'ldrs'
import Link from "next/link"

helix.register()


export default function BlogTemplate() {
  const [entry, setEntry] = useState({});
  const searchParams = useSearchParams();
  const [id, setId] = useState(searchParams.get("id") || "");
  const [loading, setLoading] = useState(true);
  if (!id) {
    return (
      <div>
        <p>Error: Blog post not found.</p>
      </div>
    );
  }

  const turndownService = new TurndownService();

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_WORDPRESS_ENDPOINT}/wp-json/wp/v2/posts/${id}?_embed`
        );
        const data = await response.json();

        const markdownContent = turndownService.turndown(data.content.rendered);

        setEntry({
          title: data.title.rendered,
          minutes: 5,
          date: new Date(data.date).toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
          author: data._embedded?.author?.[0]?.name || "Unknown Author",
          profile:
            data._embedded?.author?.[0]?.avatar_urls?.["96"] || "/avatar.webp",
          bg:
            data._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            "/default-image.webp",
          content: markdownContent, // Converted Markdown content
        });
      } catch (err) {
        console.error("Error fetching WordPress post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEntry();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center md:px-5 md:pt-32 font-grotesk">
        <div className="max-w-[900px] w-full overflow-hidden">
          <div className="w-full h-[70vh] bg-[#10100E] relative text-white md:rounded-xl overflow-hidden flex items-center justify-center">
            <l-helix
              size="100"
              speed="2.5" 
              color="#EFFF11" 
            ></l-helix>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollBar />
      <Link href="/" className="flex justify-between top-8 left-8 md:left-16 w-[100px] md:w-[150px] absolute z-10 ">
        <img
          src="/logorobin.svg"
          title="logo"
          alt="Logo Robin Web Blanco"
          loading="lazy"
        />
      </Link>
      <Header />
      <div className="flex items-center justify-center md:px-5 md:pt-32 font-grotesk">
        <div className="max-w-[900px] w-full overflow-hidden">
          {/* Header Section */}
          <div className="w-full h-[70vh] bg-[#10100E] relative text-white md:rounded-xl overflow-hidden flex items-center justify-center">
            <div className="relative z-10 w-full gap-1 h-full flex flex-col items-start p-5 2xl:px-8 pb-10 2xl:pb-16 justify-end max-w-[900px] ">
              <div className="flex gap-x-2 text-sm">
                <p className="text-[#EFFF11]">{entry.date}</p> -
                <p>{entry.minutes} min lectura</p>
              </div>
              <h1 className="font-bold text-4xl">{entry.title}</h1>
              <div className="flex gap-x-4 items-center pt-2 ">
                <img
                  src={entry.profile}
                  alt={entry.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white/70">Autor</p>
                  <p className="font-semibold text-sm">{entry.author}</p>
                </div>
              </div>
            </div>
            <img
              src={entry.bg}
              className="absolute h-full top-0 w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex items-center justify-center ">
            <div className="bg-[#10100E] text-white translate-y-[-20px] lg:translate-y-0 rounded-t-[30px] md:rounded-none w-full min-h-[100vh] max-w-[900px]">
              <div className="px-6 flex flex-col gap-y-3 text-white/95 py-10">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="font-semibold text-3xl text-[#EFFF11]">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-light text-xl text-[#EFFF11]">
                        {children}
                      </h3>
                    ),
                    p: ({ children }) => (
                      <p className="my-2 text-[20px] font-thin">{children}</p>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-5">{children}</ul>
                    ),
                    li: ({ children }) => (
                      <li className="text-[20px]">{children}</li>
                    ),
                  }}
                >
                  {entry.content}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BlogsRecomended />
      <Footer />
    </>
  );
}
