"use client";

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

export default function ExcellenceSection() {
  return (
    <section className="bg-white pb-16 pt-[8rem] 2xl:pt-[135px]">
      <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        <div className="flex flex-col md:flex-row items-start justify-between md:gap-16 lg:gap-28 mt-6">

          {/* Left Side */}
          <MotionWrapper className="xl:w-1/2 w-full relative">
            <h2
              
              className={`${playfair.className} text-4xl md:text-5xl xl:text-5xl text-gray-900 !leading-[1.3] md:mb-10`}
            >
              <span className="font-normal text-7xl xl:text-[6rem]">19</span> Years
              <br />
              Of Excellence.
            </h2>

            {/* Dotted Background */}
            <div className="hidden md:flex relative w-[97%] h-52 -mt-2">
              <Image
                src="/aboutUs/Frame 213.jpg"
                alt="Dotted background"
                fill
                className="object-cover "
              />
            </div>
          </MotionWrapper>

          {/* Right Side */}
          <MotionWrapper
            
            className={`${inter.className} xl:w-1/2 w-full text-[#7b7b7b] text-[16px] md:text-[16px] !leading-[1.7] space-y-8 mt-8 font-[350]`}
          >
            <p>
              With nearly two decades of trust, Confident Group stands strong as one of South India’s top home builders - delivering a new era of thoughtfully designed premium apartments, flats, and villas. For 19 years, we have stood ahead of the curve - achieving milestones that many only envision, backed by a strong purpose, clear vision, and a commitment to deliver excellence in every square foot we build.
            </p>

            <p>
              Our promise is simple - to create homes that are truly worth every rupee our customers invest. With four distinct housing verticals across four unique segments, we cater to every dream - from smart and semi luxury residences to premium lifestyle spaces. Blending innovation, thoughtful design, and our signature style, we take pride in creating homes where everyone can confidently belong.
            </p>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
