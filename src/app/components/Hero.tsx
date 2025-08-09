import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Roboto } from "next/font/google";
import { ArrowUpRight } from "lucide-react";
import localFont from "next/font/local";

const helveticalight = localFont({
  src: '../fonts/HelveticaNeueLight.otf',
});



gsap.registerPlugin(ScrollTrigger);

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

type BentoCardProps = {
  imageSrc: string;
  title: string;
  labels: string[];
  className?: string;
};

function BentoCard({ imageSrc, title, labels, className = "" }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={cardRef} className={`flex flex-col w-full ${className}`}>
      <div className="w-full h-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={600}
          className="w-full h-full object-cover rounded-[16px]"
        />
      </div>
      <div className="flex justify-between items-start text-white text-sm pt-2 px-1">
        <h2 className="font-medium">{title}</h2>
        <div className="flex gap-1 flex-wrap justify-end">
          {labels.map((label, idx) => (
            <span key={idx} className="text-xs text-white">
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="bg-[bg-[#EFEEEC]] w-full pb-5 pl-5 pr-5">
      <div
        className={`grid grid-cols-2 gap-4 w-full ${roboto.className}`}
      >
        <BentoCard
          imageSrc="/images/p5.jpg"
          title="Werkplek Creative"
          labels={["Creative", "UI/UX", "Frontend"]}
          className="bg-[#121212] p-4 rounded-[24px]"
        />
        <BentoCard
          imageSrc="/images/pp1.webp"
          title="Jouw Digitale"
          labels={["Branding", "Motion", "Concept"]}
          className="bg-[#121212] p-4 rounded-[24px]"
        />
      </div>
      <div className={` flex items-center justify-center pt-15 ${roboto.className}`}>

        <div className='group relative cursor-pointer  pl-10 pr-10 pt-3 pb-3  bg-[#222222] rounded-full overflow-hidden text-white text-center'>
          <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
            <div className='flex items-center'>
              <h1 className={` ${helveticalight.className} text-[26px]  `}>  Our Work </h1>
              <div className='ml-2'>
                <ArrowUpRight size={24} />
              </div>

            </div>

          </span>
          <div className='flex  gap-2 text-white bg-[#222222] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none '>
            <div className='flex items-center gap-4'>
              <h1 className={` ${helveticalight.className} text-[26px] `}> See All </h1>
              <div className=''>
                <ArrowUpRight size={24} />
              </div>

            </div>
          </div>

        </div>


      </div>

    </section>
  );
}
