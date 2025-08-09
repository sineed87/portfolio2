'use client';

import React, { useRef } from 'react';
import localFont from 'next/font/local';

const italic = localFont({
  src: '../fonts/Aster Italic.ttf',
});

const helvetica = localFont({
  src: '../fonts/HelveticaNeueMedium.otf',
});

export default function FullWidthBigText() {
  const textRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="w-full items-center min-h-[30rem] relative overflow-hidden bg-[#EFEEEC] leading-[1] p-10 pt-20 pb-10">
      {/* Left-aligned Animated Text */}
      <h1
        ref={textRef}
        className={`${helvetica.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[1.1] z-10 flex flex-col`}
      >
        <span>
          We build{' '}
          <span className={`${italic.className} text-6xl sm:text-7xl md:text-8xl lg:text-9xl z-10`}>
            bold ideas
          </span>{' '}
        </span>

        <span>Into unforgettable digital</span>

        <div className="flex flex-col sm:flex-row sm:items-center">
          <span>Experiences</span>

          <video
            src="/videos/port1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-40 sm:w-44 h-auto pl-0 sm:pl-4 mt-4 sm:mt-0"
          />
        </div>
      </h1>

      <div className="pt-10 flex justify-end text-sm">
        <h1 className="underline cursor-pointer">EXPLORE IDEAS</h1>
      </div>
    </div>
  );
}
