'use client';

import { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

import Navbar3 from './components/Navbar3';
import Hero from './components/Hero';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import TitleMaskEffect from './components/TitleMaskEffect';
import Mask1 from './components/Mask1';
import SimultaneousWords from './components/SimultaneousWords';
import Title1 from './components/Title1';
import Servis from './components/Servis';
import Marquee from './components/Marquee';
import TextSection from './components/TextSection1';
import Services from './components/Services';
import End from './components/End';

import LoadingScreen from './components/LoadingScreen';
import Aboutsection from "./components/Aboutsection"



export default function Home() {
  const [loadingDone, setLoadingDone] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollPosition = useRef(0);

  // Lock scroll with position: fixed when loading
  useEffect(() => {
    if (!loadingDone) {
      // Save scroll position
      scrollPosition.current = window.scrollY || window.pageYOffset;
      // Fix body position and offset by scrollY to freeze scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPosition.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
    } else {
      // Remove fixed positioning and restore scroll
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPosition.current);
    }

    return () => {
      // Cleanup in case component unmounts
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [loadingDone]);

  useEffect(() => {
    const loadingDuration = 3000;
    const timer = setTimeout(() => {
      setLoadingDone(true);
    }, loadingDuration + 500);

    return () => clearTimeout(timer);
  }, []);

  // Initialize Lenis only after loading finishes
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

  return (
    <>
      {!loadingDone && <LoadingScreen />}
      <div
        className={`bg-[#ffffff] text-black transition-opacity duration-500 ${
          loadingDone ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Navbar3 />
        <Hero3 /> <Mask1 />
        <Hero4 />

        <div className="bg-white">
          <Hero />
        </div>
        <div className='p-5 '>
            <Servis/>
        </div>

        <div className='p-5 '>
           <Aboutsection/>
        </div>

        <Services/>
      
      

        
       

       

        

       
       

       

        
        

        <End />
      </div>
    </>
  );
}
