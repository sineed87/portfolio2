import React from "react";

export default function HeaderBanner() {
  return (
    <div className="w-full flex justify-between items-center px-6 py-2  text-black text-sm">
      {/* Left */}
      <div className="text-left">
        est 2024
      </div>

      {/* Center */}
      <div className="animate-blink  ">
        [scroll down]
      </div>

      {/* Right */}
      <div className="text-right">
        Craft Matters ( C )
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .animate-blink {
          animation: blink 1.2s infinite steps(2, start);
        }

        .text-pixel {
          font-family: 'Press Start 2P', cursive;
        }
      `}</style>

      {/* Add this to your index.html or _document.tsx */}
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}
