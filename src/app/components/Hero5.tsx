import React from 'react';

import localFont from 'next/font/local';
import { ArrowUpRight } from 'lucide-react';


const helvetica = localFont({
    src: '../fonts/HelveticaNeueMedium.otf',
});

const helveticalight = localFont({
    src: '../fonts/HelveticaNeueLight.otf',
});

export default function LeftRightText() {
    return (
        <div className=" px-6 py-30 bg-[#EFEEEC]">
            <div className={` ${helvetica.className} flex justify-between  `}>
                <p className="max-w-md text-[#222222] text-[24px] tracking-tighter">
                    A global team of search-first content marketers engineering semantic relevancy & category signals for both the internet and people
                </p>
                <div className="pr-20 flex flex-col">
                    <div className="text-[80px] tracking-tighter leading-16 text-[#222222]">
                        <p>
                            Driving
                            Demand
                            &
                        </p>
                        <p>Discovery</p>
                    </div>
                    <div className='pt-8 flex items-center'>
                        <div className='group relative cursor-pointer  pl-10 pr-10 pt-3 pb-3  bg-[#222222] text-white rounded-full overflow-hidden  text-center'>
                            <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
                                <div className='flex items-center'>
                                    <h1 className={` ${helveticalight.className} text-[26px] `}> About Us </h1>
                                    <div className='ml-2'>
                                        <ArrowUpRight size={24} />
                                    </div>

                                </div>

                            </span>
                            <div className='flex  gap-2 text-white bg-[#121212] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none '>
                                <div className='flex items-center gap-4'>
                                    <h1 className={` ${helveticalight.className} text-[26px] `}> About Us </h1>
                                    <div className=''>
                                        <ArrowUpRight size={24} />
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='flex items-center ml-5  rounded-full '>
                            <h1 className={` ${helveticalight.className} text-[26px] max-w-fit   `}>

                                <button
                                    className='relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-black 
      after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
                                >
                                    Our Services
                                </button> </h1>
                            <div className='ml-2'>
                                <ArrowUpRight className='' size={24} />
                            </div>



                        </div>
                    </div>

                </div>



            </div>


        </div>
    );
}
