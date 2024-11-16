import { FaArrowDown } from "react-icons/fa";

export default function Banner(){
    return(
        <div className="w-full max-w-[100vw] overflow-hidden min-h-[74vh] md:min-h-[87vh] text-white flex flex-col items-center relative">
            <h1 className="w-4/5 font-medium sm:max-w-full text-center text-[9vw] leading-[10vw]  pt-[10vh] sm:text-4xl md:text-[6vw] lg:text-[5vw] 2xl:text-[100px]">Excelente cuidado dental</h1>
            <div className=" w-4/5 text-center pt-[7vh] flex items-center justify-center gap-5 md:mt-[4vh]">
                <div className="border-b-[1px] border-[#836f6a] w-full"></div>
                <p className="text-[10px] translate-y-[1px] tracking-[4px] px-1 md:text-md text-[#b1958e]">BIENVENIDO</p>
                <div className="border-b-[1px] border-[#836f6a] w-full"></div>
            </div>
            <h2 className="text-center w-3/4 text-md mt-[5vh] text-white leading-[25px] md:text-lg font-sans font-thin">Ofrecemos tratamientos dentales de vanguardia gracias a nuestros profesionales.</h2>
            <button className="text-[10px] tracking-[2px] font-bold mt-[5vh] px-4 py-3 border-[1px] border-white/50 bg-white/20 backdrop-blur-sm flex items-center justify-center gap-2 transition-colors duration-500 hover:bg-white/30">EXPLORAR <FaArrowDown className="text-[10px]" /></button>
            <div className=" flex items-center justify-center mt-auto w-full bg-white/50 backdrop-blur-md">
                <div className="max-w-[1200px] border-b-[1px] border-b-black/30 font-semibold grid grid-cols-4 text-[2vw] md:text-[13px]  w-full min-h-[7vh] md:min-h-[10vh] font-sans">
                    <a className="flex items-center justify-center hover:scale-110 transition-transform duration-300 text-neutral-600 tracking-[2px]">TRATAMIENTOS</a>
                    <a className="flex items-center justify-center hover:scale-110 transition-transform duration-300 text-neutral-700 tracking-[2px]">NOSOTROS</a>
                    <a className="flex items-center justify-center hover:scale-110 transition-transform duration-300 text-neutral-700 tracking-[2px]">EL EQUIPO</a>
                    <a className="flex items-center justify-center hover:scale-110 transition-transform duration-300 text-neutral-700 tracking-[2px]">CASOS DE ÉXITO</a>
                </div>
            </div>

            <div className="absolute w-full h-full z-[-1]">
                <div className="absolute bg-gradient-to-b w-full h-full from-[#091b27]/60  to-blue-950"></div>
                <video 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    muted 
                    loop
                >
                    <source src="video.mp4" type="video/mp4" />
                    Tu navegador no soporta este video.
                </video>
            </div>
        </div>
    )
}