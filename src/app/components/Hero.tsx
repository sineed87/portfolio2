import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Roboto } from "@next/font/google";
import { ArrowUpRight } from "lucide-react";
import localFont from "next/font/local";

const montreg = localFont({
  src: "../fonts/montreg.otf",
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
    <section className="bg-[#ffffff] w-full pb-5 pl-5 pr-5">
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
      <div className={` flex items-center justify-center pt-10 ${roboto.className}`}>

        <div>
          <span
            className="relative text-2xl cursor-pointer inline-flex items-center gap-1
    after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full
    after:origin-bottom-right after:scale-x-0 after:bg-[#121212]
    after:transition-transform after:duration-300
    after:ease-[cubic-bezier(0.65_0.05_0.36_1)]
    hover:after:origin-bottom-left hover:after:scale-x-100"
          >
            See All <ArrowUpRight size={18} />
          </span>

        </div>
     

      </div>
        
    </section>
  );
}
