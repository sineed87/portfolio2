'use client';

import React from 'react';
import localFont from 'next/font/local';
import AboutButton from './AboutButton';
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["100", "200", "400", "500", "700"], subsets: ["latin"] });

// Load custom fonts
const rot = localFont({
    src: '../fonts/rot.otf',
});

const rotnormal = localFont({
    src: '../fonts/rotnormal.otf',
});

const rothlight = localFont({
    src: '../fonts/rothlight.otf',
});

const CustomerSuccess: React.FC = () => {
    return (
        <div className="relative mb-10 flex items-center justify-between p-10 bg-[#121212] text-white min-h-screen">
            <div>
                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full border-t border-white opacity-20" />

                {/* Heading */}
                <h1 className={`text-[14px] gap-1 z-10 flex uppercase ${rot.className} items-center pt-8 text-white`}>
                    <svg className="w-3 h-3 pb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480">
                        <g fill="white">
                            <circle cx="240" cy="240" r="240" />
                        </g>
                    </svg>
                    &nbsp; about us
                </h1>

                {/* Paragraph */}
                <div className={`max-w-[700px] text-[14px] relative z-10 leading-tight pt-8 pb-6 ${inter.className} text-white opacity-90`}>
                    <p className="pb-2">
                        At the core of our studio lies a simple principle: embrace complexity. We thrive in intricate design environments, approaching each challenge with precision and care. Our solutions are not only innovative, but built to adapt in a world that moves fast.
                    </p>

                    <p className="pb-2">
                        Before any idea takes shape, we focus on insights before ideation. Every project begins with a deep understanding of your users, business goals, and context. These insights ground our creativity, ensuring that every concept we craft has real meaning and measurable impact.
                    </p>

                    <p className="pb-2">
                        We're partners, not hired hands. Collaboration is central to everything we do. We embed ourselves within your team, sharing in your goals and co-creating solutions that reflect a shared vision for success.
                    </p>

                    <p>
                        Finally, we believe in beauty with purpose. Our designs aren’t just visually compelling—they’re strategically crafted to perform. We merge aesthetics and intention, creating experiences that look great and work even better.
                    </p>
                </div>
            </div>

            {/* Button Component */}
            <div>
                <AboutButton />
            </div>

            {/* Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full border-t border-white opacity-20" />
        </div>
    );
};

export default CustomerSuccess;
