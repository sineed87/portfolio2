'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function InteractiveCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const circle = circleRef.current;
    const container = containerRef.current;
    if (!circle || !container) return;

    const bounds = container.getBoundingClientRect();
    const hw = bounds.width / 2;
    const hh = bounds.height / 2;

    const onMouseMove = (e: MouseEvent) => {
      const x = clamp(e.clientX - bounds.left - hw, -hw, hw);
      const y = clamp(e.clientY - bounds.top - hh, -hh, hh);
      setCoords({ x, y });

      gsap.to(circle, {
        x,
        y,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black text-white"
    >
      <div
        ref={circleRef}
        className="absolute w-[300px] h-[300px] rounded-full border-4 border-white/20 flex flex-col items-center justify-center text-center pointer-events-none"
      >
        <div className="text-sm opacity-70 mb-2">
          X: {coords.x.toFixed(2)} | Y: {coords.y.toFixed(2)}
        </div>
        <div className="text-2xl font-semibold">CLICK HERE</div>
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(value, max));
}
