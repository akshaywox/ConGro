"use client";
import React from 'react';
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { motion } from "framer-motion"; 
import MotionWrapper from "../MotionWrapper";

// import { Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const LegacySection: React.FC = () => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="relative w-full h-svh">
        <Image
          src="/aboutUs/ai-generated-modern-styled-entryway 1.jpg"
          alt="Team at work"
          fill
          className="object-cover object-top"
        />

        {/* 🔥 Black Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 xl:px-16 z-[2]">
        <MotionWrapper className="max-w-4xl">
          <h2
            
            className={`${cormorant.className} text-5xl lg:text-[96px] font-medium  !leading-[1.2] pb-8`}
          >
            Our Legacy <br /> Of Excellence.
          </h2>
        </MotionWrapper>
      </div>

      {/* Certification Badge */}
      <div className="absolute bottom-1 right-3 md:right-20 pb-7 z-[2]">
        <MotionWrapper className="relative size-[5.3rem]">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </MotionWrapper>
      </div>
    </section>
  );
};

export default LegacySection;
