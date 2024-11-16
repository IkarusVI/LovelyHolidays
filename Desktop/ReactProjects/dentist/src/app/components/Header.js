import { GoNorthStar } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";

export default function Header(){
    return(
        <nav className="h-[6.5vh] md:h-[13vh] w-full bg-[#03192B] flex gap-6 items-center justify-between">
            <div className="bg-white w-[110px] md:w-[120px] h-full flex items-center justify-center flex-col">
                <img className="object-cover w-[75px]" src="logo.png"></img>
            </div>
            <p className="text-white/90 text-[8px] text-sm ml-auto flex items-center gap-2 font-medium tracking-[1px]"><GoNorthStar /> PEDIR CITA</p>
            <div className="bg-white w-[110px] md:w-[120px] h-full flex items-center justify-center text-2xl">
                <IoIosMenu />
            </div>
        </nav>
    )
}