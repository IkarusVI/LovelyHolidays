import {
  motion,
  useMotionTemplate,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import './cienciaficcion.css'
import './scrollbutton.css'
import Lenis from 'lenis'

const divisiones = [
  {
    "img": "plaginsa_logo.webp",
    'title': "PLAGINSA",
    'description': "Planchas de goma para calzado"
  },
  {
    "img": "bootymats_logo.webp",
    'title': "Bootymats",
    'description': "Material Fitness"
  },
  {
    "img": "confortagri_logo.webp",
    'title': "ConfortAGRI",
    'description': "Pavimento para ganado"
  },
  {
    "img": "confortsonic_logo.webp",
    'title': "ConfortSONIC",
    'description': "Aislamiento sónico"
  },
  {
    "img": "lubaby_logo.webp",
    'title': "LüBabymats",
    'description': "Suelos infantiles"
  },
  {
    "img": "paviflex_logo.webp",
    'title': "PaviFLEX",
    'description': "Suelo deportivo"
  },
]
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.webp",
  "10.jpg",
  "11.jpg",
  "12.jpg",
]

function App() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const ref = useRef(null);
  const gallery = useRef(null);
  const { height } = dimension;


  const { scrollYProgress: scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });
  const scrollYProgressSpring2 = useSpring(scrollYProgress2, {
    stiffness: 300,
    damping: 40,
  });

  const [completed, setCompleted] = useState(false);
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 50]);
  const y = useTransform(scrollYProgress2, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress2, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress2, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress2, [0, 1], [0, height * 3])

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  const [change, setChange] = useState(false);
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      if (latest >= 0.24 || (latest >= 0.15 && windowSize.width < 1024)) {
        setChange(true);
        if (latest == 1) {
          setCompleted(true);
        } else {
          setCompleted(false);
        }
      } else {
        setChange(false);
        setCompleted(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress]);
  useEffect(() => {
    const unsubscribe = scrollYProgress2.onChange((latest) => {
      console.log(latest)
    });
    return () => {
      unsubscribe();
    };
  }, [scrollYProgress2]);
  const columns = [
    { top: '-45%' },
    { top: '-95%' },
    { top: '-45%' },
    { top: '-75%' },
  ];

  return (
    <main>
      <div ref={ref} className="relative z-10 h-[200vh] overflow-clip">
        <motion.div
          style={{ scale }}
          className="hero-background sticky left-0 top-0 grid h-screen origin-[50%_50%]  md:origin-[50%_50%]"
        >
          {
            change == false ?
              (
                <>
                  <div className="window-mask flex flex-col bg-neutral-100 p-12 md:flex-row">
                    <div className="mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]" />
                  </div>
                </>
              ) :
              (
                <>
                  <div className="window-mask2 flex flex-col bg-neutral-100 p-12 md:flex-row">
                    <div className="mx-auto -mb-7 mt-4 box-content aspect-[5/8] w-[150px] min-w-[150px] rounded-full md:my-auto md:-mr-1 md:ml-auto md:w-[300px] md:min-w-[300px]" />
                  </div>
                </>
              )

          }
          <div className="scroll-btn absolute left-0 right-0 bottom-0 pb-16 text-center">
            <a href="#sec1">
              <div className="mouse relative block w-9 h-14 mx-auto mb-5 box-border border-[1px] border-[#1F3C77] rounded-full">
                <div className="mouse-pointer absolute block w-2 h-2 bg-[#1F3C77] rounded-full"></div>
              </div>
              <p className="text-[#1F3C77]">¡Desliza o púlsame!</p>
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mt-[-200vh] h-[200vh] overflow-clip pb-20 relative bg-neutral-100">
        <div className="top-[55%] absolute w-full z-[6] flex items-center justify-center">
          <img src="logo.webp" className="opacity-95 w-1/2 max-w-[700px]"/>
        </div>

        <div className="sticky top-1/2 block  bg-neutral-100 md:top-0 z-[5] h-full">
          <div className="bg-gradient-to-t from-black absolute w-full h-full z-[5] "></div>
          <video
              className="w-full h-full object-cover"
              src="video.mp4"
              autoPlay={true}
              loop={true}
              muted={true}
              controls={false}
            />
        </div>
      </div>

      <div className="bg-neutral-100">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
            <h2 id="sec1" className="text-2xl font-semibold md:text-3xl md:leading-tight text-neutral-700 pt-10">Nuestras divisiones</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-6">
            {divisiones.map((item) => (
              <a className="flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-xl transition hover:-translate-y-1" href="#">
                <img className="rounded-t-xl max-h-48 min-h-48 object-contain p-10" src={item['img']} alt="Image Description" />
                <div className="p-4 md:p-5">
                  <h3 className="text-lg font-bold text-gray-800">
                    {item['title']}
                  </h3>
                  <p className="mt-1 text-gray-500">
                    {item['description']}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-neutral-100">
        <div className="w-full mx-auto text-center mb-6 md:mb-12">
              <h2 className="text-3xl font-semibold md:text-3xl md:leading-tight text-neutral-700 pt-10">Llevamos desde 1983 brindando excelencia a nuestros clientes.</h2>
        </div>
        <div ref={gallery} className="h-[175vh] bg-neutral-800 relative flex gap-4 p-4 box-border overflow-hidden">
          <div className="absolute w-full h-full z-10 left-0 right-0 top-0 bottom-0 bg-transparent">a</div>
          <div className="h-full w-full relative -top-[45%]">
            <Column images={[images[0], images[1], images[2]]} y={y} />
          </div>
          <div className="h-full w-full relative  -top-[70%] md:-top-[95%]">
            <Column images={[images[3], images[4], images[5]]} y={y2} />
          </div>
          <div className="h-full w-full relative -top-[30%] md:-top-[45%]">
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          </div>
          <div className="h-full w-full relative -top-[75%]">
          <Column images={[images[9], images[10], images[11]]} y={y4} />
          </div>
        </div>
      </div>
      <div className="h-48"></div>
    </main>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div
      className="relative w-full min-w-[150px] flex flex-col gap-4 h-full"
      style={{ y }}
    >
      {
        images.map((src, i) => {
          return (
            <div
              key={i}
              className='h-[300px] w-[150px] md:h-full md:w-full relative rounded-md overflow-hidden'
            >
              <img
                src={`/images/${src}`}
                alt='image'
                className="object-cover h-full w-full"
              />
            </div>
          )
        })
      }
    </motion.div>
  )
}

export default App;
