import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import localFont from "next/font/local";

const rot = localFont({
  src: "../fonts/rot.otf",
});

const rotnormal = localFont({
  src: "../fonts/rotnormal.otf",
});

const montreg = localFont({
  src: "../fonts/montreg.otf",
});

gsap.registerPlugin(ScrollTrigger);

const sentences = [
  "We craft beautiful digital experiences",
  "Our team designs with passion",
  "Creativity drives every project we",
  "deliver innovative solutions tailored perfectly",
  "Customer satisfaction is our priority",
  "Collaboration fuels our creative process",
  "Let us bring your vision.",
];

const AboutUsWordsAnimated: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll<HTMLSpanElement>(".word");

    gsap.killTweensOf(words);

    gsap.fromTo(
      words,
      {
        x: 150,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div style={{ height: "200vh", backgroundColor: "#121212", paddingTop:"120px" }}>
      <div
        ref={containerRef}
        className={`${montreg.className}`}
        style={{
          position: "sticky",
          top: 20,
          boxSizing: "border-box",
          fontSize: "4.6rem",
          lineHeight: 1.1,
          userSelect: "none",
          backgroundColor: "#121212",
          color: "#ffffff",
          marginBottom: "120px",
          zIndex: 10,
        }}
      >
        {sentences.map((sentence, i) => (
          <p
            key={i}
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            {sentence.split(" ").map((word, idx) => (
              <span
                key={idx}
                className="word"
                style={{
                  display: "inline-block",
                  marginRight: idx === sentence.split(" ").length - 1 ? 0 : "0.5rem",
                  opacity: 0,
                }}
              >
                {word}
              </span>
              
            ))}
          </p>
          
        ))}
      </div>
      
    </div>
  );
};

export default AboutUsWordsAnimated;
