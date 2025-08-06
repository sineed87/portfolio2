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


const ButtonCrossArrow = () => {
  return (
    <>
    <div className={` ${rothlight.className} `}>
      
        <button className='group relative inline-flex h-12 items-center border border-white [box-shadow:5px_5px_rgb(128_128_128)]
  justify-center overflow-hidden rounded-full p-10 pl-15 pr-15  text-xl bg-gradient-to-r  bg-[#121212] px-6  dark:text-white text-black transition-all duration-400 hover:[box-shadow:5px_5px_rgb(128_128_128)]
 translate-x-[3px] uppercase hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] 
 dark:hover:[box-shadow:5px_5px_rgb(76_100_255)]dark:active:[box-shadow:0px_0px_rgb(76_100_255)] active:[box-shadow:0px_0px_rgb(38_51_129)] active:translate-y-[3px] active:translate-x-[3px]'>
        All Projects
      </button>
    </div>
      
    </>
  );
};

export default ButtonCrossArrow;
