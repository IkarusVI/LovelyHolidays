import Link from 'next/link';
import React from 'react';

const links = [
    
    {
        "title": "Instagram",
        "link": "https://www.instagram.com/robinwebagency/",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
    },
    {
        "title": "Linkedin",
        "link": "https://www.linkedin.com/company/robin-web-agency/",
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 448 512"> <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/> </svg>
    },
];


{/*
    
  {
        "title": "Facebook",
        "link": "",
        "icon": <FaFacebook />
    },  
    
*/
}

export default function Footer() {
  return (
    <footer className="relative bg-[#EFFF11] pt-24 text-[#10100E]">
        <div className='pb-8 px-24'>
            <div className='h-6'>
                <img src='/logowithoutfoxblack.svg' alt='Logo Robin Web Agency negro' title='logo' className='object-contain h-full' loading='lazy'/>
            </div>
        </div>
        <div className='flex flex-col gap-y-6 border-b-[1px] border-[#10100E] pb-12 px-24'>
            <div className='flex flex-col gap-y-2'>
                <h2 className='font-bold'>Contacto:</h2>
               
                <a className='' href="tel:+34694494217" title="Llamar a +34 694 49 42 17">+34 694 49 42 17</a>
                
                
                <a  href="mailto:info@robinwebagency.com"className='' title="Enviar un correo a info@robinwebagency.com">info@robinwebagency.com</a>
                
            </div>
            <div className='flex gap-x-4'>
                {links.map((item, idx) => (
                    <Link prefetch={false} href={item.link} key={idx} title={`Ir al perfil de ${item.title}`}>
                        <>{item.icon}</>
                    </Link>
                ))}
            </div>
        </div>
        <p className='py-4 px-24'>© 2025 Robin Web Agency. All rights reserved.</p>
    </footer>
  );
}
