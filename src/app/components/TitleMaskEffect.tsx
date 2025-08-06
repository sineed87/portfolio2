import React from "react";
import localFont from "next/font/local";
import { ArrowUpRight } from "lucide-react";

const rot = localFont({
  src: "../fonts/rot.otf",
});

const editoritalic = localFont({
  src: "../fonts/editoritalic.otf",
});

const montreg = localFont({
  src: "../fonts/montreg.otf",
});

const brooklyn1 = localFont({
  src: "../fonts/brooklyn1.otf",
});

const MAX_CONTAINER_WIDTH = 1800;

const ImageTrail: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: `${MAX_CONTAINER_WIDTH}px`,
        margin: "0 auto",
        height: "820px",
        overflow: "hidden",
        pointerEvents: "auto",
        userSelect: "none",
      }}
    >
      {/* Background video */}
      <video
        src="/videos/promo2.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />

      {/* Scroll Indicator */}
      <h1
        className="flex items-center gap-2 text-white text-sm -rotate-90"
        style={{
          position: "absolute",
          top: "50%",
          right: 0,
          transform: "translateY(-50%)",
          zIndex: 30,
          userSelect: "none",
          cursor: "default",
        }}
      >
        <span className="w-2 h-2 bg-white rounded-full" />
        Scroll Down
      </h1>

      {/* Bottom-left "lets chat" button */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "500px",
          height: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          userSelect: "none",
          zIndex: 25,
          color: "white",
          fontSize: "12px",
          fontWeight: "600",
          fontFamily: montreg.style.fontFamily,
          gap: "6px",
          padding: "0 8px",
        }}
        onClick={() => {
          alert("Chat clicked!");
        }}
      >
        <span>lets chat</span>
        <ArrowUpRight />
      </div>
    </div>
  );
};

export default ImageTrail;
