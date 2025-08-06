import { div } from "framer-motion/client"

import localFont from 'next/font/local';

// Load custom font
const rot = localFont({
    src: '../fonts/rot.otf',
});

const rotnormal = localFont({
    src: '../fonts/rotnormal.otf',
});

const liber = localFont({
    src: '../fonts/Liber.otf',
});

const rothlight = localFont({
    src: '../fonts/rothlight.otf',
});


const ButtonHoverUnderLine = () => {
  return (
    <div className={` ${rothlight.className} `}>
           <button
      className='relative tracking-tighter  after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-black
      after:bg-neutral-800 after:transition-transform text-7xl after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100'
    >
      Let's Talk
    </button>
    </div>
 
  );
};

export default ButtonHoverUnderLine;
