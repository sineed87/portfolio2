import React from 'react'
import localFont from 'next/font/local'
import { ArrowUpRight } from 'lucide-react'

const montreg = localFont({
  src: '../fonts/montreg.otf',
})

const FeaturedLayout = () => {
  return (
    <div className={`${montreg.className} w-full px-8 py-12  text-[#121212]`}>
      {/* Prva vrstica */}
      <div className="flex justify-between items-center w-full">
        {/* Leva pika */}
        <div className="flex items-center justify-center w-10">
          <span className="text-[8px]">●</span>
        </div>

        {/* Sredinski tekst */}
        
        {/* Desna pika */}
        <div className="flex items-center justify-center w-10">
          <span className="text-[8px]">●</span>
        </div>
      </div>

      {/* Druga vrstica */}
      <div className="flex justify-between items-end ">
        {/* Levi tekst */}
        <div className="space-y-0 text-9xl  tracking-tight font-bold  text-[#121212] ">
          <p className="">WORK '25</p>
          
         
        </div>

        {/* Desna pika z tekstom */}
        <div className="flex items-center space-x-2 text-[#121212]">
          <span className="text-[8px]">●</span>
          <span className="text-sm font-bold uppercase ">Featured Work</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedLayout
