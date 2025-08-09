import React from 'react'
import localFont from 'next/font/local'

const helvetica = localFont({
  src: '../fonts/HelveticaNeueMedium.otf',
});

const FeaturedLayout = () => {
  return (
    <div className={`${helvetica.className} w-full px-8 py-12 bg-[#EFEEEC] text-[#121212]`}>
      {/* Prva vrstica */}

      {/* Druga vrstica */}
      <div className="flex justify-between items-end">
        {/* Levi tekst */}
        <div className="space-y-0 text-5xl tracking-tight text-[#222222]">
          <p className="">
            Work <span className={`${helvetica.className}`}>&apos;25</span>
          </p>
        </div>

        {/* Desna pika z tekstom */}
        <div className="flex items-center space-x-2 text-[#121212]">
          <span className="text-[8px]">●</span>
          <span className="text-sm font-bold uppercase">Featured Work</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedLayout
