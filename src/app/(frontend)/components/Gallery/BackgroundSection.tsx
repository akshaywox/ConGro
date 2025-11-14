"use client";

import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from 'next/image'
import MotionWrapper from "../MotionWrapper"; 

// Import Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function BackgroundSection() {
  return (
    <div className="relative w-full h-[760px] overflow-hidden">
      {/* ✅ GIF Background */}
      <div className="absolute inset-0">
        <Image
          src="/gallery/gif.gif" // replace with your actual GIF path
          alt="Animated background"
          fill
          className="object-cover w-full h-full"
        />
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content - Left Center */}
       <MotionWrapper className="relative h-full w-[90%] max-w-[1400px] mx-auto flex items-center">
        <div className="max-w-2xl">
          <h1
            className={`${playfair.className} text-5xl md:text-[48px] xl:text-[60px]  text-white !leading-[1.4]`}
          >
            A Cinematic Journey into Modern Living
          </h1>
        </div>
     </MotionWrapper>
    </div>
  );
}
