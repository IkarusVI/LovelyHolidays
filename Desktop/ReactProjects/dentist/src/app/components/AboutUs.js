import { BsFire } from "react-icons/bs";
import { BsShieldPlus } from "react-icons/bs";
import { BsAward } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

export default function AboutUs(){
    return(
        <div className="flex mt-[7vh] flex-col items-center">
            <div className="flex gap-8">
                <span>2</span>
                <span className="w-[60px] border-b-black border-b-[1px] translate-y-[-12px]"></span>
                <h2>Sobre nosotros</h2>
            </div>


            <div className="flex items-center justify-center px-10">
                <div className="grid grid-cols-3 items-start gap-10 mt-[5vh] md:gap-20">
                        <div className="flex flex-col items-center justify-center gap-1">
                            <div className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border-[1px] border-black text-2xl flex items-center justify-center">
                            <BsFire className="lg:text-5xl"></BsFire>
                            </div>
                            <h3 className="font-bold">Pasión</h3>
                            <p className="text-[12px] text-center mt-5 max-w-[120px] lg:text-[15px] lg:max-w-[180px]">Nos encanta lo que hacemos,siempre te recibiremos con una sonrisa</p>
                        </div>
                        
                        <div className="flex flex-col items-center justify-center gap-1">
                            <div className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border-[1px] border-black text-2xl flex items-center justify-center">
                            <BsShieldPlus className="lg:text-5xl"/>
                            </div>
                            <h3 className="font-bold">Equipo</h3>
                            <p className="text-[12px] text-center mt-5 max-w-[120px] lg:text-[15px] lg:max-w-[180px]">Contamos con un equipo de profesionales increible</p>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-1">
                            <div className="w-[60px] h-[60px] lg:w-[120px] lg:h-[120px] border-[1px] border-black text-2xl flex items-center justify-center">
                            <BsAward className="lg:text-5xl"/>
                            </div>
                            <h3 className="font-bold">Experiencia</h3>
                            <p className="text-[12px] text-center mt-5 max-w-[120px] lg:text-[15px] lg:max-w-[180px]">Más de 20 años brindando excelencia a nuestros clientes</p>
                        </div>
                </div>
            </div>


            <div className="mt-[10vh] w-full flex gap-2 pl-10">
                <div className="flex flex-col w-[60%] mt-[15vh] md:pl-[10%]">
                    <div className="flex items-center gap-6">
                        <span className="border-b-[1px] border-b-black w-[40px]" >
                        </span>
                        <p>Nuestro método</p>
                    </div>
                    <p className="font-lora text-[5vw] md:text-[4vw] text-black/60 mt-[3vh] w-[80%] leading-[5.5vw] md:leading-[4vw]">TENEMOS MÁS DE <span className="text-black/90">20 AÑOS</span> DE EXPERIENCIA</p>
                </div>
                <img src="about1.webp" className="h-[50vh] w-[40%] md:h-[80vh] object-cover object-center" ></img>
            </div>


            <div className="w-full flex gap-2 pr-10">
                <img src="about2.webp" className="h-[60vh] w-[40%] md:h-[50vh] object-cover object-center max-w-[900px]" ></img>
                <div className="flex flex-col w-[60%] mt-[10vh] pl-[10%] max-w-[700px]">
                    <div className="flex items-center  gap-5">
                        <span className="border-b-[1px] border-b-black w-[50px] translate-y-[-1px]" >
                        </span>
                        <p>Clínicas</p>
                    </div>
                    <p className="font-semibold mt-[3vh] lg:text-xl">
                        Nos especializamos en ayudar a los pacientes con la salud dental y hacer que sus sonrisas se ven muy bien.
                    </p>
                    <p className="mt-5 text-black/70 lg:text-lg">
                        Los tratamientos dentales son una parte vital de su salud. Elegir el mejor tratamiento dental para sus necesidades particulares es difícil. Nuestro equipo te ayudará.
                    </p>

                    <button className="w-fit mt-5 py-3 px-8 bg-[#EBE3DE] border-[1px] border-[#c7aa99] text-[12px] font-semibold tracking-[2px] text-black/60 flex items-center justify-center gap-2">EL EQUIPO <FaArrowRight className="text-[10px] text-black/30"></FaArrowRight> </button>

                </div>
            </div>

            <div className="w-full h-[200vh] mt-[10vh] relative">
                <video 
                        className="w-full h-[100vh] object-cover sticky top-0" 
                        autoPlay 
                        muted 
                        loop
                    >
                        <source src="video2.mp4" type="video/mp4" />
                        Tu navegador no soporta este video.
                </video>
                <div className="bg-white w-[250px] md:w-full md:max-w-[350px] lg:max-w-[400px] 2xl:max-w-[500px] md:left-[20%] h-[160vh] absolute top-20 left-10 flex flex-col items-center">

                        <div className="text-center mt-[20vh]">
                            <span className="font-bold text-6xl tracking-[-2px]">10+</span>
                            <p className="mt-5 font-semibold text-black/70">Trabajadores expertos</p>
                            <p className="mt-10 text-sm text-black/30">Equipo</p>
                        </div>
                        <div className="text-center mt-[30vh]">
                            <span className="font-bold text-6xl tracking-[-2px]">2+</span>
                            <p className="mt-5 font-semibold text-black/70">Clínicas especializadas</p>
                            <p className="mt-10 text-sm text-black/30">Local</p>
                        </div>
                        <div className="text-center mt-[30vh]">
                            <span className="font-bold text-6xl tracking-[-2px]">200+</span>
                            <p className="mt-5 font-semibold text-black/70">Tratamientos exitosos</p>
                            <p className="mt-10 text-sm text-black/30">Pacientes</p>
                        </div>
                </div>

            </div>


        </div>
    )
}