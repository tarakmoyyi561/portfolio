import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/ProfilePic.jpg";
import { motion } from "framer-motion"
import Resume from '../assets/Moyyi_Tarakeswara_Rao_php_Resume.pdf'

const container = (delay) => ({
   hidden: { x: -100, opacity: 0 },
   visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay }
   }
})

function Hero() {
   return (
      <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
         <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
               <div className='flex flex-col items-center lg:items-start'>
                  <motion.h1
                     variants={container(0)}
                     initial='hidden'
                     animate="visible"
                     className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'
                  >
                     Tarak Moyyi
                  </motion.h1>
                  <motion.span
                     variants={container(0.5)}
                     initial='hidden'
                     animate="visible"
                     className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                     Senior Software Engineer
                  </motion.span>
                  <motion.p
                     variants={container(1)}
                     initial='hidden'
                     animate="visible"
                     className='my-2 max-w-xl py-6 font-light tracking-tight'>
                     {HERO_CONTENT}
                  </motion.p>
                  <div>
                     <a href={Resume} download="Tarak_Moyyi_Resume.pdf" className='w-6 h-6 md:w-8 md:h-8'>
                        <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-400 via-fuchsia-300 text-white mb-4">
                           <span className='block bg-zinc-800 hover:bg-zinc-400 rounded-full px-5 py-2'> Download Resume</span>
                        </button>
                     </a>
                  </div>

               </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
               <div className="flex justify-center">
                  <motion.img
                     initial={{ x: 100, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 1, delay: 1.2 }}
                     className="shadow-lg shadow-gray-500"
                     src={profilePic}
                     alt="Tarak Moyyi" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Hero