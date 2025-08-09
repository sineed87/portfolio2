import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  { id: 1, color: "#FF6B6B" },
  { id: 2, color: "#6BCB77" },
  { id: 3, color: "#4D96FF" },
  { id: 4, color: "#FFC75F" },
];

const SmoothScrollSections: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionElements = gsap.utils.toArray<HTMLElement>(".section");

    sectionElements.forEach((section) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom+=100% top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.to(section, {
        scale: 0.8,
        autoAlpha: 0,
        ease: "power1.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }}>
      {sections.map(({ id, color }) => (
        <section
          key={id}
          className="section"
          style={{
            height: "100vh",
            backgroundColor: color,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "4rem",
            color: "#fff",
            fontWeight: "bold",
            userSelect: "none",
          }}
        >
          Section {id}
        </section>
      ))}
    </div>
  );
};

export default SmoothScrollSections;
