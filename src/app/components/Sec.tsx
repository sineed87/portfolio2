import React from 'react'

import localFont from 'next/font/local';
import { ArrowUpRight } from 'lucide-react';


const helvetica = localFont({
    src: '../fonts/HelveticaNeueMedium.otf',
});


function Sec() {
    return (
        <div >
            <div className={`bg-[#EFEEEC]  ${helvetica.className} `}>

                <div className="flex justify-between items-end border-b border-gray-300 p-8">
                   
                    <div className="space-y-0 text-8xl    text-[#222222] ">
                        <p className="max-w-xl">Our Services </p>


                    </div>

                    {/* Desna pika z tekstom */}
                    <div className="flex items-center space-x-2 text-[#121212]">
                        <button className='group relative mb-2 h-12  bg-[#ffffff] rounded-full px-5 dark:text-black text-black transition-colors duration-500 w-full sm:w-auto'>
                            <span className='relative inline-flex overflow-hidden'>
                                <div className='translate-y-0 p-2 flex items-center skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12
                            dark:group-hover:text-white text-sm group-hover:text-white'>
                                    View All Services <ArrowUpRight size={20} />
                                </div>
                                <div className='absolute p-2 text-sm flex items-center translate-y-[114%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0
                            dark:group-hover:text-black group-hover:text-white '>
                                    View All Services <ArrowUpRight size={20} />
                                </div>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='p-9 text-5xl flex  gap-50 '>
                    <div className='leading-18 w-[700px]  '>
                        <h1 className='border-b border-gray-300 '>
                            Digital PR
                        </h1>
                         <h1 className='border-b border-gray-300'>
                           Search & Growth Strategy
                        </h1>
                         <h1>
                            Data & Insights
                        </h1>

                    </div>

                    <div>
                        <div className='leading-18 w-[700px] '>
                        <h1 className='border-b border-gray-300'>
                            Social Search
                        </h1>
                         <h1 className='border-b border-gray-300'>
                           Content Experience
                        </h1>
                         <h1>
                            Onsite SEO
                        </h1>

                    </div>

                    </div>
                </div>
            </div>





        </div>

    )
}

export default Sec
