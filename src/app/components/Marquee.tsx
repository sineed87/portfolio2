import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import localFont from 'next/font/local';

import { FaReact, FaFigma, FaBolt } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiVercel } from 'react-icons/si';

const helvetica = localFont({
  src: '../fonts/HelveticaNeueMedium.otf',
});

const iconSize = 68; // bigger icons
const iconColor = '#000000';

// Store icon components instead of JSX elements
const iconComponents = [
  FaReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  FaBolt,
  SiVercel,
  FaFigma,
];

const SingleMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const singleSetWidth = marquee.scrollWidth;
      const repeatCount = Math.ceil((2 * window.innerWidth) / singleSetWidth) + 1;

      marquee.innerHTML = marquee.innerHTML.repeat(repeatCount);

      const totalWidth = marquee.scrollWidth / repeatCount;
      const duration = totalWidth / 20;

      gsap.to(marquee, {
        x: -totalWidth,
        duration,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });
    }
  }, []);

  return (
    <div className="relative flex items-center h-[100px] bg-[#EFEEEC]">
      {/* Static text on the left */}
      <div
        className={`${helvetica.className} text-black font-medium bg-[#EFEEEC]`}
        style={{ minWidth: '160px', zIndex: 20 }}
      >
        Technology Used
      </div>

      {/* Marquee container */}
      <div className="relative flex-1 overflow-hidden whitespace-nowrap">
        {/* Left blur overlay */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            pointerEvents: 'none',
            background: 'linear-gradient(to right, #EFEEEC 0%, transparent 100%)',
            zIndex: 10,
          }}
        />

        {/* Right blur overlay */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            pointerEvents: 'none',
            background: 'linear-gradient(to left, #EFEEEC 0%, transparent 100%)',
            zIndex: 10,
          }}
        />

        <div
          ref={marqueeRef}
          className="inline-flex items-center space-x-56 px-4 bg-[#EFEEEC]"
        >
          {iconComponents.map((Icon, index) => (
            <span key={index} className="inline-block">
              <Icon size={iconSize} color={iconColor} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleMarquee;
