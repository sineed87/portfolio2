'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import localFont from 'next/font/local';

const montreg = localFont({
  src: '../fonts/montreg.otf',
});

const helvetica = localFont({
  src: '../fonts/HelveticaNeueMedium.otf',
});

export default function FullWidthBigText() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current.children, {
        color: '#121212',
        duration: 2,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }
  }, []);

  return (
    <div className="w-full  items-center min-h-[30rem] relative overflow-hidden bg-[#FCFFFF] p-10 pt-20 pb-20">
      {/* Left-aligned Animated Text */}
      <h1
        ref={textRef}
        className={`${helvetica.className} text-9xl tracking-tighter  z-10 flex flex-col `}
      >
        
           <span style={{ color: '#121212' }}>We build bold ideas</span>
       
       
       

        <span style={{ color: '#aaa' }}>Into unforgettable digital</span>
        <span style={{ color: '#aaa' }}>Experiences. </span>
      </h1>

      <div className='pt-20 flex justify-between  text-sm'>
        <h1>SCROLL DOWN</h1>

        <h1 className='underline'>EXPLORE IDEAS</h1>
      </div>

      {/* Sidebar */}

    </div>
  );
}
