import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#121212] text-white px-6 py-20 md:py-32 overflow-hidden">
      {/* Background Video */}
     

      {/* Footer Content */}
      <div className="relative z-10 max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="flex-1">
          <h2 className="text-9xl md:text-9xl font-bold leading-24">
            NOIRHAUS STUDIOS
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-lg md:text-xl">
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest text-gray-400">Explore</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gray-300">Inspiration</a></li>
              <li><a href="#" className="hover:text-gray-300">Articles</a></li>
              <li><a href="#" className="hover:text-gray-300">Showcase</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest text-gray-400">Community</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gray-300">Submit Site</a></li>
              <li><a href="#" className="hover:text-gray-300">Nominees</a></li>
              <li><a href="#" className="hover:text-gray-300">Winners</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 uppercase text-[12px] tracking-widest text-gray-400">About</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-gray-300">Our Mission</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 mt-20 text-sm text-gray-500 text-center border-t border-gray-800 pt-8">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
