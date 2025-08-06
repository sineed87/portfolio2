import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

import localFont from "next/font/local";

const montreg = localFont ({
  src :"../fonts/montreg.otf"
});

const keywords = [
  "Innovation",
  "Efficiency",
  "Quality",
  "Scalability",
  "Reliability",
  "Security",
  "Performance",
  "User-Friendly",
  "Support",
  "Integration",
];

const containerVariants: Variants = {
  animate: (distance: number) => ({
    x: -distance,
    transition: {
      ease: "linear",
      duration: 20,
      repeat: Infinity,
    },
  }),
};

const ServiceSummary: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const scrollProgress = 1 - rect.top / windowHeight;
        controls.start({
          x: -scrollProgress * distance,
          transition: { ease: "linear", duration: 0.3 },
        });
      }
    };

    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, distance]);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap border-t border-b  bg-[#121212] text-white  border-gray-300 py-4"
      style={{ position: "relative" }}
    >
      <motion.div
        className="inline-flex space-x-8"
        animate={controls}
        initial={{ x: 0 }}
      >
        {keywords.concat(keywords).map((keyword, idx) => (
          <span
            key={idx}
            className={`${montreg.className} text-xl   flex items-center  justify-between `}
            style={{ whiteSpace: "nowrap" }}
          >
            {keyword}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceSummary;
