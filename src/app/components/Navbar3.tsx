'use client'

import localFont from 'next/font/local'
import { ArrowUpRight } from 'lucide-react'
import { Roboto } from "@next/font/google";

const helvetica = localFont({
  src: '../fonts/HelveticaNeueMedium.otf',
});

const helveticalight = localFont({
  src: '../fonts/HelveticaNeueLight.otf',
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export default function CreativeIntro() {
  return (
    <div
      className={`${helveticalight.className} flex justify-between items-start w-full bg-[#ffffff] text-[#121212] px-12 pt-8 `}
    >
      {/* Left section */}
      <div className="max-w-md">
        <h1 className="text-3xl tracking-wide leading-tighter mb-8">
          Ideas in motion.<br />
          Digitally shaped by <span className="font-semibold">Noirhaus</span>.
        </h1>

        <div className={`${helveticalight.className} `}>
          <button className='group relative h-12 bg-[#2c2c2c] rounded-full   px-5 dark:text-white text-neutral-950 transition-colors duration-500'>
            <span className='relative inline-flex overflow-hidden'>
              <div className='translate-y-0 p-2 flex items-center skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12
                            dark:group-hover:text-white text-sm group-hover:text-white'>
                Explore our impact <ArrowUpRight size={20} />
              </div>
              <div className='absolute p-2 text xs flex items-center translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0
                            dark:group-hover:text-white group-hover:text-white text-sm'>
                Explore our impact <ArrowUpRight size={20} />
              </div>
            </span>
          </button>
        </div>

      </div>

      {/* Right section - navigation in a single row */}
      <div className="flex text-xl justify-between items-center w-full max-w-3xl ml-16">
        <div className="space-x-4">
          <button
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Work
          </button>
          <button
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            About
          </button>
          <button
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Careers
          </button>
        </div>

         <div className={`${helveticalight.className} `}>
          <button
            className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 
    after:bg-[#121212] after:transition-transform after:duration-300 
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  )
}
