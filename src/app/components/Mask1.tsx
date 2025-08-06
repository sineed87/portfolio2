import { motion, useScroll, useTransform } from "motion/react";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.9],
    [
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 34% 40%, 34% 83%, 72% 83%, 72% 40%, 32% 40%)",
      "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    ]
  );

  const slideUp = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const imageDown = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <div ref={scrollRef} className="relative h-[230vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 -z-10">
  <motion.video
    className="w-full object-cover"
    style={{ y: imageDown }}
    src="videos/port1.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</div>

          <motion.div
            className="absolute inset-0 flex bg-[#121212] text-white z-10"
            style={{
              clipPath: clipPath,
            }}
          >
            <motion.h1
              className="text-[6vw] font-extrabold uppercase tracking-tighter"
              style={{ y: slideUp }}
            >
              <span className="text-5xl inline-block -mx-3"></span>
              {/* Add your heading text here */}
            </motion.h1>
            <motion.p className="text-2xl font-serif" style={{ opacity: fadeOut }}>
              {/* Add your paragraph text here */}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default App;
