import { motion } from 'framer-motion';
import { opacity, slideLeft, mountAnim } from '../anim';
import styles from './style.module.scss';
import Link from './link';

const menu = [
  {
    title: "SERVICIOS",
    description: "TODO LO QUE NECESITES",
    images: ['headerservices.webp', 'headerservices.webp'],
    link: '#services'
  },
  {
    title: "PORTFOLIO",
    description: "NUESTROS TRABAJOS",
    images: ['headerportfolio.webp', 'headerportfolio.webp'],
    link: '#portfolio'
  },
  {
    title: "BLOG",
    description: "CONSULTA NUESTRO BLOG",
    images: ['headerblog.webp', 'headerblog.webp'],
    link: '/blogs'
  }
]

export default function index({closeMenu}) {

  return (
    <motion.div className={styles.menu} variants={opacity} initial="initial" animate="enter" exit="exit">

        <div className={styles.header}>
          <motion.svg 
            variants={slideLeft} 
            {...mountAnim}
            onClick={() => {closeMenu()}} 
            width="68" 
            height="68" 
            viewBox="0 0 68 68" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 1.5L67 67" stroke="white"/>
              <path d="M66.5 1L0.999997 66.5" stroke="white"/>
          </motion.svg>
        </div>

        <div className={styles.body}>
          <div className='hidden sm:block'>
          {
            menu.map( (item, index) => {
              return <Link data={item} index={index} key={index} endpoint={item.link} closeMenu={closeMenu}/>
            })
          }
          </div>
          <div className='w-full h-full flex items-center justify-center sm:hidden'>
          <div className='flex flex-col items-center  divide-white '>
            {
              menu.map((item, index) => (
                <a href={item.link} className='w-full h-full' onClick={() => closeMenu()}>
                  <div className={`text-[15vw] py-8 w-full h-full ${index == menu.length -1 ? "border-y-[3px]": "border-t-[3px]"} border-white`}>
                    {item.title}
                  </div>
                </a>
              ))
            }
          </div>
          </div>
        </div>

        <motion.div 
          variants={opacity} 
          {...mountAnim} 
          custom={0.5} 
          className={styles.footer}>
            <img src='/logorobin.svg' className='w-32 lg:w-64' alt='Logo Robin Web' loading='lazy'/>
        </motion.div>

    </motion.div>
  )
}
