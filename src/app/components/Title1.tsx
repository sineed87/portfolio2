import { Inter } from "@next/font/google";
import { div } from "framer-motion/client";
import localFont from "next/font/local";

const inter = Inter({ weight: ["100","200","400", "500", "700"], subsets: ["latin"] });


const editoritalic = localFont ({
  src :"../fonts/editoritalic.otf"
});

const montreg = localFont({
  src: "../fonts/montreg.otf",
});



// Load custom fonts
const rot = localFont({
  src: '../fonts/rot.otf',
});

const rotnormal = localFont({
  src: '../fonts/rotnormal.otf',
});



const OurWorkTitle = () => {
  return (
    <div className="pl-10 pr-10 bg-[#121212] text-white">

      
      <h1 className="pl-2 pb-20  ">
        <div className=" top-0 left-0 pb-20 w-full border-t border-[#3a3a3a]" />
      <span className={`${montreg.className} text-xl  `} >Projects</span>{' '}
      
    </h1>
    <h1 className="max-w-[480px]">
      <span className={ `${rotnormal.className} text-5xl pl-2   `}  >Your senses called  </span>
       <span className={ `${rotnormal.className} text-5xl pl-2   `}  > We answered. </span>
    </h1>
    </div>
    
    
  );
};

export default OurWorkTitle;
