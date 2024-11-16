import { FaArrowRight } from "react-icons/fa";

export default function OurTeam(){
    return(
        
           
                    <div className="mt-[7vh] px-10  flex flex-wrap 2xl:justify-center xl:gap-10 w-full " >
                        <div className="lg:w-[23%] lg:max-w-[270px]">
                            <div className="flex gap-8">
                                <span>3</span>
                                <span className="w-[60px] border-b-black border-b-[1px] translate-y-[-12px]"></span>
                            </div>
                            <div className="grid grid-cols-2 items-center mt-2 lg:grid-cols-1 "  >
                                <p className=" font-bold text-2xl"> Nuestro Equipo</p>
                                <p className="text-sm mt-5 md:w-4/5">Tenemos un experto para cada tratamiento que necesites</p>
                                <button className="w-fit mt-5 py-3 px-4 bg-[#EBE3DE] border-[1px] border-[#c7aa99] text-[12px] font-semibold tracking-[2px] text-black/60 flex items-center justify-center gap-2">EL EQUIPO <FaArrowRight className="text-[10px] text-black/30"></FaArrowRight> </button>
                            </div>
                        </div>

                        <div className="flex flex-grow lg:max-w-[650px] xl:max-w-[800px] 2xl:max-w-[1100px] min-w-[300px] ">
                            <div className="grid grid-cols-2 mt-7 gap-4 lg:grid-cols-3 lg:max-h-[60vh] w-full">
                                
                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e1.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div className="p-2">
                                            <p className="font-bold">Helen Kato</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>
                                
                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e2.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div className="p-2">
                                            <p className="font-bold">Robert Thur</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>

                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e3.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div className="p-2">
                                            <p className="font-bold">Mazuzu Ahi</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>

                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e4.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div className="p-2">
                                            <p className="font-bold">Vamu mimir</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>

                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e5.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div className="p-2">
                                            <p className="font-bold">Mequielo Molil</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>
                                
                                <div className="w-full min-h-[30vh] xl:min-h-[40vh] relative">
                                    <img src="e6.jpg" className="w-full h-full object-cover"></img>
                                    <div className="bg-[#EBE3DE] w-full min-h-[25%] absolute bottom-0 flex items-center gap-10 px-5">
                                        <div>
                                            <p className="font-bold">Helen Kato</p>
                                            <p className="text-sm">Dentista</p>
                                        </div>
                                        <FaArrowRight className="text-[10px] text-black/80"></FaArrowRight>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
           
       
    )
}