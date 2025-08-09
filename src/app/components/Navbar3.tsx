'use client'

import localFont from 'next/font/local'
import { ArrowUpRight } from 'lucide-react'




const helveticalight = localFont({
  src: '../fonts/HelveticaNeueLight.otf',
});



export default function CreativeIntro() {
  return (
    <div
      className={`${helveticalight.className} flex flex-col md:flex-row justify-between items-start w-full bg-[#EFEEEC] text-[#121212] px-6 sm:px-12 pt-8`}
    >
      {/* Left section */}
      <div className="max-w-md mb-8 md:mb-0">
        <h1 className="text-2xl sm:text-3xl tracking-wide leading-tight mb-6 sm:mb-8">
          Ideas in motion.<br />
          Digitally shaped by <span className="font-semibold">Noirhaus</span>.
        </h1>

        <div className={`${helveticalight.className}`}>
          <button className='group relative h-12 bg-[#2c2c2c] rounded-full px-5 dark:text-white text-neutral-950 transition-colors duration-500 w-full sm:w-auto'>
            <span className='relative inline-flex overflow-hidden'>
              <div className='translate-y-0 p-2 flex items-center skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12
                            dark:group-hover:text-white text-sm group-hover:text-white'>
                Explore our impact <ArrowUpRight size={20} />
              </div>
              <div className='absolute p-2 text-xs flex items-center translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0
                            dark:group-hover:text-white group-hover:text-white '>
                Explore our impact <ArrowUpRight size={20} />
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Right section - navigation in a single row on desktop, stacked on mobile */}
      <div className="flex flex-wrap md:flex-nowrap text-lg md:text-xl justify-between items-center w-full max-w-3xl ml-0 md:ml-16 gap-4 md:gap-8">
        <div className="flex space-x-6 md:space-x-4 flex-wrap md:flex-nowrap">
          {['Work', 'About', 'Careers'].map((label) => (
            <button
              key={label}
              className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
            >
              {label}
            </button>
          ))}
        </div>

        <div className={`${helveticalight.className} w-full md:w-auto`}>
          <button
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 w-full md:w-auto text-center md:text-left"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
