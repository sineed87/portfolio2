// app/components/Hero.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import localFont from "next/font/local";
import Menu from "./Menu";
import ButtonCreativeTop from "./ButtonCreativeRight";

const editoritalic = localFont({
  src: "../fonts/editoritalic.otf"
});


const montreg = localFont({
  src: "../fonts/montreg.otf",
});

const brooklyn1 = localFont({
  src: "../fonts/brooklyn1.otf",
});

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [counterValue, setCounterValue] = useState(0);

  // Counter animation from 0 to 100
  useEffect(() => {
    const duration = 2; // Duration in seconds
    let startTime = Date.now();

    const updateCounter = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Time in seconds
      const progress = Math.min(elapsed / duration, 1); // Clamp to 0-1
      const value = Math.round(progress * 100); // 0 to 100
      setCounterValue(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setIsLoading(false);
        // GSAP smooth dropdown animation
        gsap.fromTo(
          ".hero-section",
          { y: "-100%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out", // Awwwards-style easing
          }
        );
      }
    };

    requestAnimationFrame(updateCounter);

    return () => {
      startTime = 0; // Reset to stop animation
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-[#121212] flex items-center justify-center z-50"
        >
          <span
            className={`${brooklyn1.className} text-black text-6xl md:text-8xl`}
          >
            {counterValue}%
          </span>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        className={`${montreg.className} hero-section relative w-full h-screen p-3`}
      >
        {/* Dark Background Container */}
        <div className=" items-center flex   w-full h-full p-2  overflow-hidden relative">
          <div className=" pl-5">
            <h1 className={`${montreg.className} text-7xl tracking-tighter  w-[500px]  `}
            >We empower brands to inspire people</h1>
            <div className="flex items-center ">
              <h2 className={`${montreg.className}   tracking-tighter underline pt-10 justify-end  `}>
                EXPLORE OUR UNIVERSE
              </h2>
            </div>
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-10">
              <video
                className=" top-0 left-0 w-250 h-120 object-cover"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/vid1.mp4"
              />
              <h1 className="flex items-center gap-2 text-black text-sm -rotate-90">
                <span className="w-2 h-2 bg-black rounded-full" />
                //Scroll Down
              </h1>
            </div>

          </div>
          {/* Background Video */}


          {/* Bottom-left: Text */}
          <div className="absolute bottom-20 left-6 right-6 flex justify-between items-center text-black z-10">
            {/* Left-aligned <p> */}
            <p className="text-sm opacity-80">100+ happy customers</p>

            {/* Centered Navbar with montreg font */}
            

            {/* Spacer div for layout symmetry */}
            <div className="w-[150px]" />
          </div>




          {/* Bottom-right: CTA */}

        </div>
      </section>
    </>
  );
};

export default Hero;