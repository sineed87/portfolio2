import React from "react";

import localFont from 'next/font/local';


const helvetica = localFont({
    src: '../fonts/HelveticaNeueMedium.otf',
});

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#121212] text-white px-6 py-20 overflow-hidden">
      {/* Footer Content */}
      <div className="relative z-10 pl-8 mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        {/* Left Section - Email Signup */}
        <div className="flex-1 ">
          <p className="text-2xl mb-2">Stay updated with Noirhaus news</p>
          <div className="flex items-center bg-[#282828] rounded-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent text-white p-2 w-full focus:outline-none placeholder-gray-400"
            />
            
          </div>
          <div className="flex space-x-4 mt-4 text-sm">
            <a href="#" className="hover:text-gray-300">f</a>
            <a href="#" className="hover:text-gray-300">x</a>
            <a href="#" className="hover:text-gray-300">in</a>
            <a href="#" className="hover:text-gray-300">n</a>
            <a href="#" className="hover:text-gray-300">o</a>
            <a href="#" className="hover:text-gray-300">t</a>
            <a href="#" className="hover:text-gray-300">b</a>
            <a href="#" className="hover:text-gray-300">e</a>
          </div>
        </div>

        {/* Right Section - Navigation */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest leading-4 text-gray-400">Explore</h3>
            <ul className=" text-2xl">
              <li><a href="#" className="hover:text-gray-300">Inspiration</a></li>
              <li><a href="#" className="hover:text-gray-300">Articles</a></li>
              <li><a href="#" className="hover:text-gray-300">Showcase</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest text-gray-400">Community</h3>
            <ul className=" text-2xl">
              <li><a href="#" className="hover:text-gray-300">Submit Site</a></li>
              <li><a href="#" className="hover:text-gray-300">Nominees</a></li>
              <li><a href="#" className="hover:text-gray-300">Winners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest text-gray-400">About</h3>
            <ul className=" text-2xl">
              <li><a href="#" className="hover:text-gray-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="relative z-10 mt-20 text-center">
        <h2 className={`text-[clamp(100px,20vw,200px)] leading-none font-bold ${helvetica.className}`}>
          Noirhaus Studios<span className="font-normal">®</span>
        </h2>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-8 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Noirhaus Studios Ltd. All rights reserved. • Company Number: XXXXXXXX • VAT Registration: XX XXXXXXXX • <a href="#" className="hover:text-gray-300">Privacy Policy</a> • <a href="#" className="hover:text-gray-300">Terms & conditions</a>
        </div>
        <div className="mt-4 md:mt-0 text-center md:text-right">
          Website MadeByShape
        </div>
      </div>
    </footer>
  );
};

export default Footer;