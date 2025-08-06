'use client'

import { FaReact, FaFigma, FaBolt } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel, SiReacthookform } from 'react-icons/si'


export default function Home() {
  return (
    <main className=" bg-white text-black px-6 py-10 flex flex-col justify-between">

      <h1 className='uppercase font-bold pb-20 flex items-center justify-center'>
       

Professional at
      </h1>
      {/* Top Info */}
    

      {/* Top 3 Tech Logos with dividers */}
      <div className="grid grid-cols-3 py-6 ">
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <FaReact size={60} />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <SiNextdotjs size={60} />
        </div>
        <div className="flex justify-center items-center">
          <SiTypescript size={60} />
        </div>
      </div>

      {/* Remaining Tech Logos with dividers */}
      <div className="grid grid-cols-6 py-10 ">
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <SiFramer size={60} />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <SiTailwindcss size={60} />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <SiReacthookform size={60} />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <FaBolt size={60} />
        </div>
        <div className="flex justify-center items-center border-r border-gray-300 pr-6">
          <SiVercel size={60} />
        </div>
        <div className="flex justify-center items-center">
          <FaFigma size={60} />
        </div>
      </div>

      {/* Footer Card */}
      
    </main>
  )
}
