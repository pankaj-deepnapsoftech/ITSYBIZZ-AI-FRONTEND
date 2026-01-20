import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#031c2d]">
      {/* Soft background glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative flex flex-col items-center">
        {/* Logo */}
        <img
          src="/itsybizz.png"
          alt="ITSYBIZZ"
          className="w-28 h-28 object-contain animate-fadeScale"
        />

        {/* Minimal loading bar */}
        <div className="mt-8 w-40 h-[2px] bg-white/20 overflow-hidden rounded-full">
          <div className="h-full w-1/2 bg-gradient-to-r from-cyan-400 to-green-400 animate-loadingBar"></div>
        </div>

        {/* Text */}
        <p className="mt-6 text-xs tracking-[0.3em] text-white/70 uppercase">
          Initializing Experience....
        </p>
      </div>
    </div>
  );
};

export default Loader;
