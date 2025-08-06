import Image from "next/image";
import { Roboto } from "next/font/google";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import { AlignJustify, ArrowBigRight } from "lucide-react";
import ButtonCreativeRight from "./ButtonCreativeRight";
import ExtraContent from "./Menu";
import localFont from "next/font/local";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });
const inter = Inter({ weight: ["100", "200", "400", "500", "700"], subsets: ["latin"] });

const editorlightitalic = localFont({
  src: "../fonts/editorlightitalic.otf"
});

const montreg = localFont({
  src: "../fonts/montreg.otf"
});

const underlineHoverClass =
  "relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 " +
  "after:bg-white after:transition-transform after:duration-700 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] " +
  "hover:after:origin-bottom-left hover:after:scale-x-100";

const Navbar = () => {
  return (
    <nav className="absolute w-full">
      <div className={`${montreg.className} px-4 py-4 flex justify-center relative`}>
        <div className="flex items-center gap-8 text-white text-[14px] font-normal tracking-wider bg-[#121212] px-6 py-3 rounded-[10px]">
          <ul className="flex gap-8">
            <li><a href="#" className={underlineHoverClass}>Work</a></li>
            <li><a href="#" className={underlineHoverClass}>Services</a></li>
            <li><a href="#" className={underlineHoverClass}>Approach</a></li>
            <li><a href="#" className={underlineHoverClass}>About</a></li>
          </ul>
          <div className={`${inter.className}`}>
            <ButtonCreativeRight />
          </div>
        </div>
        <div className="absolute right-4 top-4">
          <ExtraContent />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
