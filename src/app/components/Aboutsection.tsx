'use client'

import { ArrowUpRight } from 'lucide-react'
import React from 'react'

import localFont from 'next/font/local'

import { Roboto } from "@next/font/google";


const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});



const montreg = localFont({
  src: '../fonts/montreg.otf',
});

export default function AboutPage() {
  return (
    <div className={`${montreg.className} p-10 space-y-8 text-[#1C1C1C] bg-[#EAF9FB] rounded-[24px] min-h-screen box-border `} >
      {/* Top Row */}
      <div className="flex justify-between items-center w-full mb-28">
        <div>
          <h1 className="text-xs font-semibold">About Us</h1>
        </div>
        <div className="text-center">
          <p className="text-xs">IP Australia No. 2250905</p>
        </div>
        <div className="text-right">
          <p className="text-xs">Class 35</p>
        </div>
      </div>

      {/* NOIRHOUSE full width */}
      <h1 className="text-9xl font-bold tracking-wide w-full">Noirhaus creative studio<span className='font-light'>®</span></h1>

      {/* Second row: two halves with 50px margin top */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mt-42">
        {/* Left half (50%) */}
        <div className="w-full lg:w-1/2 flex justify-start">
          {/* Inner content half of that half (25%) */}
          <div className="w-1/2 flex flex-col space-y-4">
            <video
              src="/videos/vid1.mp4"
              width={500}
              height={100}
              className="rounded-md"
              muted
              autoPlay
              loop
            />

            <div className="flex justify-between text-xs">
              <span>10 seconds</span>
              <span className="underline cursor-pointer">Play reel</span>
            </div>

            <p className={`${roboto.className} text-sm font-normal max-w-80 `}>
             Our approach is shaped by an integrated agency model and a fiercely collaborative spirit—fueling bold, original work that drives impact and defines culture.
            </p>

            <div className={`${roboto.className} text-xs `}>
                  <button className="group relative h-12 bg-[#2c2c2c] px-4 rounded-full text-[#EAF9FB] transition-colors duration-500">
              <span className="relative inline-flex overflow-hidden">
                <div className="translate-y-0 p-2 flex items-center skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12 group-hover:text-white">
                  Contact Us <ArrowUpRight size={20} className="ml-2" />
                </div>
                <div className="absolute p-2 flex items-center translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 group-hover:text-white">
                 Contact Us<ArrowUpRight size={20} className="ml-2" />
                </div>
              </span>
            </button>
            </div>

          
          </div>
          {/* empty space to fill right half of left 50% */}
          <div className="w-1/2"></div>
        </div>

        {/* Right half (50%) */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h1 className="text-5xl font-semibold">
            Noirhaus is defined by one promise: unmatched Return on Ideas measurable, meaningful, and made to last.
          </h1>

          <h1 className="text-5xl font-semibold">
            Creativity is the single most valuable investment a brand can make, because it multiplies everything else.
          </h1>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <h2 className="text-3xl font-bold whitespace-nowrap">HAUSideas® 
                </h2>
            <ul className="space-y-2 text-lg">
              <li>#1 in Sports on the App Store</li>
              <li>+162% diverse stem cell donors</li>
              <li>11.6M active monthly users</li>
              <li>2.8B TikTok views globally</li>
              <li>$57M startup funding secured</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
