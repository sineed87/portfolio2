import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import localFont from 'next/font/local';
import ButtonCreativeTop from './ButtonCreativeRight';

// Load custom font
const rot = localFont({
    src: '../fonts/rot.otf',
});

const rotnormal = localFont({
    src: '../fonts/rotnormal.otf',
});

const TripleMarquee: React.FC = () => {
    const leftMarqueeRef = useRef<HTMLDivElement>(null);
    const rightMarqueeRef = useRef<HTMLDivElement>(null);
    const thirdMarqueeRef = useRef<HTMLDivElement>(null);
    const leftWords = ['Awesome', 'Creative', 'Dynamic', 'Innovative'];
    const rightWords = ['Bold', 'Vibrant', 'Unique', 'Stellar'];
    const thirdWords = ['Epic', 'Visionary', 'Radiant', 'Pioneer'];

    useEffect(() => {
        // First row: Left-moving (faster)
        const leftMarquee = leftMarqueeRef.current;
        if (leftMarquee) {
            const singleSetWidth = leftMarquee.scrollWidth;
            const repeatCount = Math.ceil((2 * window.innerWidth) / singleSetWidth) + 1;
            leftMarquee.innerHTML = leftMarquee.innerHTML.repeat(repeatCount);
            const totalWidth = leftMarquee.scrollWidth / repeatCount;
            const duration = totalWidth / 60; // Faster: 60 pixels per second

            gsap.to(leftMarquee, {
                x: -totalWidth,
                duration,
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    x: (x) => `${parseFloat(x) % totalWidth}px`,
                },
            });
        }

        // Second row: Right-moving
        const rightMarquee = rightMarqueeRef.current;
        if (rightMarquee) {
            const singleSetWidth = rightMarquee.scrollWidth;
            const repeatCount = Math.ceil((2 * window.innerWidth) / singleSetWidth) + 1;
            rightMarquee.innerHTML = rightMarquee.innerHTML.repeat(repeatCount);
            const totalWidth = rightMarquee.scrollWidth / repeatCount;
            const duration = totalWidth / 50; // Original speed: 50 pixels per second

            gsap.set(rightMarquee, { x: -totalWidth });
            gsap.to(rightMarquee, {
                x: 0,
                duration,
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    x: (x) => `${(parseFloat(x) % totalWidth) - totalWidth}px`,
                },
            });
        }

        // Third row: Left-moving
        const thirdMarquee = thirdMarqueeRef.current;
        if (thirdMarquee) {
            const singleSetWidth = thirdMarquee.scrollWidth;
            const repeatCount = Math.ceil((2 * window.innerWidth) / singleSetWidth) + 1;
            thirdMarquee.innerHTML = thirdMarquee.innerHTML.repeat(repeatCount);
            const totalWidth = thirdMarquee.scrollWidth / repeatCount;
            const duration = totalWidth / 50; // Original speed: 50 pixels per second

            gsap.to(thirdMarquee, {
                x: -totalWidth,
                duration,
                ease: 'linear',
                repeat: -1,
                modifiers: {
                    x: (x) => `${parseFloat(x) % totalWidth}px`,
                },
            });
        }
    }, []);

    return (
        <div className="bg-[#121212] min-h-screen text-white overflow-hidden pt-10 pr-6 pl-6">
            {/* Heading and Paragraph with Lines */}
            <div className="relative mb-40 flex items-center justify-between ">
                <div>
                    {/* Top Line */}
                    <div className="absolute top-0 left-0 w-full border-t border-white opacity-20"></div>

                    {/* Content */}
                    <h1 className={`text-[14px] gap-1 z-10 flex uppercase items-center pt-8 ${rot.className} text-white`}>
                        <svg
                            className="w-2 h-2 b-2 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 480 480"
                        >
                            <g>
                                <circle cx="240" cy="240" r="240" />
                            </g>
                        </svg>
                        customer success stories
                    </h1>

                    <p className={`max-w-[400px] text-[17px] relative z-10 leading-tight pt-8 pb-6 ${rotnormal.className} text-white opacity-80`}>
                        We ensure the reputation and cx of top brands, discover the benefits of working with us!
                    </p>
                </div>

                <div>
                    <ButtonCreativeTop />
                </div>

                {/* Bottom Line */}
                <div className="absolute bottom-0 left-0 w-full border-t border-white opacity-20"></div>
            </div>

            {/* First row: Left-moving (faster) */}
            <div className="whitespace-nowrap flex items-center leading-[60px]">
                <div ref={leftMarqueeRef} className="inline-flex">
                    {leftWords.map((word, index) => (
                        <span
                            key={`left-${index}`}
                            className={`text-[14rem] ${rotnormal.className} align-middle text-white`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {/* Second row: Right-moving */}
            <div className="whitespace-nowrap mb-1 flex items-center leading-200px]">
                <div ref={rightMarqueeRef} className="inline-flex">
                    {rightWords.map((word, index) => (
                        <span
                            key={`right-${index}`}
                            className={`text-[14rem] mx-4 ${rot.className} align-middle text-white`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>

            {/* Third row: Left-moving */}
            <div className="whitespace-nowrap flex items-center leading-[60px]">
                <div ref={thirdMarqueeRef} className="inline-flex">
                    {thirdWords.map((word, index) => (
                        <span
                            key={`third-${index}`}
                            className={`text-[12rem] ${rotnormal.className} align-middle text-white`}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripleMarquee;
