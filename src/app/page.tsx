'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar3 from './components/Navbar3';
import Hero from './components/Hero';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Marquee from './components/Marquee';
import Servis from './components/Servis';

import End from './components/End';
import Aboutsection from "./components/Aboutsection";
import Sec from './components/Sec';


export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const loadingDuration = 3000;
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, loadingDuration + 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loadingDone) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.scrollTo(0, { immediate: true });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [loadingDone]);

  if (!loadingDone) {
    return <div>Loading...</div>;  // Or your LoadingScreen component here
  }

  return (
    <>
      <Navbar3 />
      <Hero3 /> 
      <div className='pl-10 pr-20 bg-[#EFEEEC]'>
        <Marquee/>
      </div>
     
      <Hero5/>

      <Hero4 />
      <div className="bg-[#EFEEEC]">
        <Hero />
      </div>
      <Sec/>
      <div className='p-5 bg-[#EFEEEC] '>
        <Servis/>
      </div>
      <div className='p-5 bg-[#EFEEEC]'>
        <Aboutsection/>
      </div>
      
      <End />
    </>
  );
}
