'use client';
import { ReactLenis } from 'lenis/react';
import { useTransform, motion, useScroll, MotionValue } from 'motion/react';
import { useRef } from 'react';
import { Inter } from "@next/font/google";
import localFont from "next/font/local";

const inter = Inter({ weight: ["100", "200", "400", "500", "700"], subsets: ["latin"] });

const editoritalic = localFont({
    src: "../fonts/editoritalic.otf"
});

const projects = [
    {
        title: 'Sprints',
        description:
            'Fast, focused engagements to explore, test, or move a critical piece forward—without getting bogged down. Tightly scoped, clearly defined, and built to create momentum.',
        color: '#ede9d0',
        text: 'black',
    },
    {
        title: 'Zissou',
        description:
            'Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal.',
        color: '#ED4C22',
        text: 'white',
    },
    {
        title: 'Mathias Svold',
        description:
            'The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers.',
        color: '#1E1C1B',
        text: 'white',
    },
];

interface SplitTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text, delay = 0.08, className = '' }) => {
  const words = text.split(' ');

  return (
    <div className={`overflow-hidden inline-block ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-2"
          initial={{ y: '100%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: i * delay,
            duration: 0.7,
            ease: 'easeInOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

export default function index(): React.JSX.Element {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <ReactLenis root>
            <main className=' rounded-t-[20px] ' ref={container}>
                <section className='  w-full text-[#121212] bg-[#ffffff]'>

                    <h1 className="pl-8 pt-10 underline">
                        <span className={`${inter.className} text-5xl tracking-tighter font-normal`}>Our</span>{' '}
                        <span className={`${editoritalic.className} text-7xl `}> Approach *</span>
                    </h1>
                    <div className='flex justify-between'>
                        <SplitText 
                          className="max-w-5xl text-5xl p-8" 
                          text="Teams are different. Needs shift. And not every engagement looks the same. That’s why we shape our approach around how you work—and what you’re trying to achieve."
                          delay={0.08}
                        />
                        <h1 className={`${editoritalic.className} pr-5 text-7xl`}>[1]</h1>
                    </div>
                </section>

                <section className='w-full bg-[#ffffff]'>
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                title={project.title}
                                color={project.color}
                                description={project.description}
                                textColor={project.text}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </section>

                <footer className='group bg-[#ffffff]'>
                    <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
                        ui-layout
                    </h1>
                    <div className='bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
                </footer>
            </main>
        </ReactLenis>
    );
}

interface CardProps {
    i: number;
    title: string;
    description: string;
    color: string;
    textColor: string;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}

const AnimatedSVGs = [
    () => (
        <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
            <circle cx="100" cy="100" r="90" stroke="black" strokeWidth="2" fill="none" />
        </motion.svg>
    ),
    () => (
        <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
        >
            <rect x="40" y="40" width="120" height="120" stroke="white" strokeWidth="2" fill="none" />
        </motion.svg>
    ),
    () => (
        <motion.svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ repeat: Infinity, duration: 4 }}
        >
            <polygon points="100,10 40,198 190,78 10,78 160,198" stroke="white" strokeWidth="2" fill="none" />
        </motion.svg>
    ),
];

export const Card: React.FC<CardProps> = ({
    i,
    title,
    description,
    color,
    textColor,
    progress,
    range,
    targetScale,
}) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    const SvgComponent = AnimatedSVGs[i % AnimatedSVGs.length];

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, backgroundColor: color }}
                className={`relative flex w-[98%] max-w-9xl h-[600px] rounded-[40px] p-10 text-${textColor}`}
            >
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <span className={`text-sm ${textColor === 'white' ? 'text-gray-200' : 'text-gray-500'}`}>(0{i + 1})</span>
                        <h2 className="text-5xl font-bold mt-2">{title.toUpperCase()}</h2>
                    </div>
                    <p className={`text-base max-w-md ${textColor === 'white' ? 'text-gray-100' : 'text-gray-800'}`}>{description}</p>
                </div>
                <div className="w-[250px] h-[250px] flex items-center justify-center relative">
                    <SvgComponent />
                </div>
            </motion.div>
        </div>
    );
};
