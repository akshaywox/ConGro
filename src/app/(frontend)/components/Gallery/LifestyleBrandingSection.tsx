"use client";

import React from "react";
import MotionWrapper from "../MotionWrapper"; 

const LifestyleBrandingSection = () => {
  return (
    <section className="py-20 md:pt-[6.5rem] 2xl:pt-28 md:pb-[4.5rem] 2xl:pb-20 bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-1 xl:gap-12 border-t border-gray-200">
        
        {/* Left: Heading */}
        <MotionWrapper className="w-full md:w-1/2 flex items-start mt-12">
          <h2
            className="text-[40px] md:text-5xl font-light text-black !leading-[1.4] w-[90%] md:w-full lg:w-[98%] xl:w-[90%] 2xl:w-[95%] "
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Shared Lifestyle And Branding Gallery
          </h2>
        </MotionWrapper>

        {/* Right: Description */}
        <MotionWrapper
          className="w-full md:w-1/2 flex md:items-end md:justify-end md:pl-8 mt-5 md:mt-1"
          delay={0.2}
        >
          <p
            className="text-gray-500 text-[17px] md:text-[15px] !leading-[1.7] md:!leading-[1.3] 2xl:leading-relaxed md:text-right w-full md:w-[90%] lg:w-[70%] xl:w-[40%] font-[350] relative bottom-6 2xl:bottom-0"
            style={{ fontFamily: "inter" }}
          >
            Discover a residential experience where innovation meets quality, sustainability blends with modern design, and every home.
          </p>
        </MotionWrapper>

      </div>
    </section>
  );
};

export default LifestyleBrandingSection;
