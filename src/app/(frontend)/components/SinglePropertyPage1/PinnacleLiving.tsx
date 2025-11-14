import React from 'react';
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import MotionWrapper from "../MotionWrapper"; 

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function PinnacleLiving({aboutParagraph, aboutSubtitle, aboutTitle}: any) {
  return (
    <div className="w-full bg-white">
      {/* Mobile: flex-col, Desktop: flex-row */}
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Section */}
        <div className="w-full lg:w-[43%] bg-[#bf9e57] text-white px-4 md:px-12  xl:px-20 pt-[100px] pb-[120px] flex flex-col justify-center">
          <MotionWrapper className="lg:max-w-xl">
            <p className={`${inter.className} text-[16px] uppercase opacity-90 font-light`}>{aboutSubtitle}</p>

            {/* Small top border */}
            <div className="w-56 h-[1px] bg-white mb-4 opacity-10 mt-7"></div>

            <h1
              className={`${playfair.className} text-[40px] md:text-5xl font-light mb-8 md:mb-6 !leading-[1.3] md:w-[90%] xl:w-[80%] mt-12`}
            >{aboutTitle}</h1>

            <p className={`${inter.className}  text-[17px] md:text-[16px] !leading-[1.8] opacity-90 font-light md:w-full lg:w-[95%] xl:w-[88%]`}>{aboutParagraph}</p>
          </MotionWrapper>
        </div>

        {/* Right Image Section */}
        <MotionWrapper className="w-full lg:w-[57%] relative min-h-[300px] lg:min-h-screen">
          <Image
            src="/single_property/img1.jpg"
            alt="Luxury living room interior with modern lighting and elegant furniture"
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
        </MotionWrapper>
      </div>
    </div>
  );
}
