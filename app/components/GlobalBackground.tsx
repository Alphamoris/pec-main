




"use client";
import React from "react";
import dynamic from "next/dynamic";

interface GlobalBackgroundProps {
  onGlobeLoad?: () => void;
}

// Dynamically import the globe component with SSR disabled
const GlobeDemo = dynamic(() => import("./ui/GlobeComponent").then((m) => ({ default: m.GlobeDemo })), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading...</div>
});

export function GlobalBackground({ onGlobeLoad }: GlobalBackgroundProps) {
  return (
    <div className="relative w-full min-h-screen md:mt-10 lg:h-screen">
      {/* Main hero section */}
      <div className="relative w-full h-full flex flex-col lg:flex-row">
        {/* Mobile globe section - positioned at top on mobile */}
        <div className="lg:hidden mt-14 w-full h-80 flex items-center justify-center order-1 py-4 px-4">
          <div className="w-full max-w-xs aspect-square opacity-0 animate-bounce-in-up animation-delay-150">
            <GlobeDemo onLoad={onGlobeLoad} />
          </div>
        </div>
        
        {/* Hero content - takes full width on mobile, left half on desktop */}
        <div className="w-full lg:w-1/2 h-auto lg:h-full flex items-center justify-center lg:justify-start px-6 md:px-12 lg:px-20 order-2 lg:order-1 py-2 lg:py-0">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-transformers mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 bg-clip-text text-transparent tracking-wider opacity-0 animate-slide-in-left animation-delay-300">
              PEC HACKS 3.0
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed opacity-0 animate-slide-in-right animation-delay-600">
              Embark on a cosmic journey of innovation and creativity. Join the ultimate hackathon experience where ideas transform into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-bounce-in-up animation-delay-900">
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/30 border border-transparent relative overflow-hidden">
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="group px-8 py-4 border-2 border-gray-400 hover:border-cyan-400 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-teal-600/10 hover:shadow-xl hover:shadow-cyan-500/30 relative overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Globe section for desktop - right half */}
        <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center order-3 lg:order-2 p-8">
          <div className="w-full aspect-square max-w-lg opacity-0 animate-bounce-in-up animation-delay-150">
            <GlobeDemo onLoad={onGlobeLoad} />
          </div>
        </div>
      </div>
    </div>
  );
}
