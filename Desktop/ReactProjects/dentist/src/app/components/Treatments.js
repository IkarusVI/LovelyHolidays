import { CiFaceSmile } from "react-icons/ci";
import { PiToothThin } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa";

export default function treatments(){
    return(
        <div className="flex justify-center mt-[7vh] flex-col items-center px-10">
            <div className="flex gap-8">
                <span>1</span>
                <span className="w-[60px] border-b-black border-b-[1px] translate-y-[-12px]"></span>
                <h2>Tratamientos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full mt-[5vh] max-w-[1550px] gap-5">
                   
                    <div className="w-full min-h-[85vh] bg-[#FAFAEB] max-w-[500px]">
                         <img src="t1.jpg" className="w-full object-cover h-[30%]"></img>
                         <h3 className="text-2xl text-center font-semibold pt-10">Dentista General</h3>
                         <p className="px-8 mt-4 text-center text-black/80">Nos especializamos en ayudar a los pacientes a cuidar su sonrisa durante el día a día</p>
                    
                        <div className="grid grid-cols-2 px-8 mt-3 w-full relative items-center justify-center">
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 w-[30px] h-[30px]  absolute justify-self-center  flex items-center">
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute"></span>
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute rotate-90"></span>
                                </div>
                        </div>
                        
                        <button className="tracking-[2px] mt-4 flex items-center justify-center bg-gray-400/20 w-[85%] mx-auto text-[10px] font-semibold py-3 border-[1px] border-black/30 gap-2">
                            DENTISTA GENERAL
                            <FaArrowRight className="text-[10px]"/>
                        </button>
                    
                    </div>
                    
                    <div className="w-full min-h-[85vh] bg-[#ECFCF3] max-w-[500px]">
                         <img src="t1.jpg" className="w-full object-cover h-[30%]"></img>
                         <h3 className="text-2xl text-center font-semibold pt-10">Estética Dental</h3>
                         <p className="px-8 mt-4 text-center text-black/80">Nuestra clínica estética dental ayuda a llevar tu sonrisa al siguiente nivel</p>
                    
                        <div className="grid grid-cols-2 px-8 mt-8 w-full relative items-center justify-center">
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 w-[30px] h-[30px]  absolute justify-self-center  flex items-center">
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute"></span>
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute rotate-90"></span>
                                </div>
                        </div>
                        
                        <button className="tracking-[2px] mt-4 flex items-center justify-center bg-gray-400/20 w-[85%] mx-auto text-[10px] font-semibold py-3 border-[1px] border-black/30 gap-2">
                            ESTÉTICA DENTAL
                            <FaArrowRight className="text-[10px]"/>
                        </button>
                    
                    </div>
                    <div className="w-full min-h-[85vh] bg-[#EBF6FA] max-w-[500px]">
                         <img src="t1.jpg" className="w-full object-cover h-[30%]"></img>
                         <h3 className="text-2xl text-center font-semibold pt-10">Correción dental</h3>
                         <p className="px-8 mt-4 text-center text-black/80">Te ayudamos a enderezar tus dientes de manera de manera discreta</p>
                    
                        <div className="grid grid-cols-2 px-8 mt-8 w-full relative items-center justify-center">
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <CiFaceSmile />
                                    <p className="text-sm mt-1 ">Higiene dental</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 h-[100px] flex flex-col items-center justify-center text-4xl">
                                    <PiToothThin />
                                    <p className="text-sm mt-1 ">Empastes</p>
                                </div>
                                <div className=" hover:bg-white transition-colors duration-300 w-[30px] h-[30px]  absolute justify-self-center  flex items-center">
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute"></span>
                                    <span className="border-b-black/50 border-b-[1px] w-full absolute rotate-90"></span>
                                </div>
                        </div>
                        
                        <button className="tracking-[2px] mt-4 flex items-center justify-center bg-gray-400/20 w-[85%] mx-auto text-[10px] font-semibold py-3 border-[1px] border-black/30 gap-2">
                            CORRECIÓN DENTAL
                            <FaArrowRight className="text-[10px]"/>
                        </button>
                    
                    </div>
            </div>
        </div>
    )
}