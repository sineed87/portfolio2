// app/components/HeaderBar.tsx

import localFont from "next/font/local";

const brooklyn1 = localFont({
  src: "../fonts/brooklyn1.otf"
});

const montreg = localFont({
  src: "../fonts/montreg.otf",
});

const HeaderBar = () => {
  return (
    <header className="absolute z-50 text-black w-full flex justify-between items-center pt-5 pr-4 pl-4  bg-transparent">
      {/* Left: Alleyway Studios + SVG */}
      <div className="flex items-center space-x-1 text-black p-5 opacity-80">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 480 480"
          className="w-3 h-3 fill-black"
          aria-hidden="true"
          focusable="false"
        >
          <path d="m240 240 120 120-120 120-120-120zM240 0l120 120-120 120-120-120z" />
        </svg>
        <span className={`${brooklyn1.className} text-sm uppercase tracking-tight`}>
          Alleyway Studios
        </span>
      </div>

      {/* Right: Work + Pricing */}
      <div className="flex items-center space-x-4 ">
        <nav
              className={`mx-auto  backdrop-blur rounded-full px-12 py-4 flex gap-5 uppercase text-sm text-black   ${montreg.className}`}
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Portfolio</a>
              <a href="#">Contact</a>
            </nav>
        
      </div>
    </header>
  );
};

export default HeaderBar;
