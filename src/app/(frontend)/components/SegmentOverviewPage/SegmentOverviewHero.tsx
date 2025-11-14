import React from 'react';
import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import { Inter } from "next/font/google";
import { ArrowUpRight } from 'lucide-react';
import MotionWrapper from "../MotionWrapper"; 

// Font import
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], // adjust weights if needed
});

const SegmentOverview: React.FC = () => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <MotionWrapper className="relative w-full min-h-[35rem] sm:min-h-[50rem] h-svh md:min-h-[600px] lg:min-h-[750px]">
       <Image
  src="/SegmentOverview/hero.jpg"
  alt="Team at work"
  fill
  className="object-cover object-top "
/>
 {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </MotionWrapper>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end x-6 px-6 md:px-10 xl:px-16">
        <MotionWrapper className="max-w-4xl">
          <h1 className={`${cormorant.className} text-[50px] md:text-4xl lg:text-[96px] font-medium mb-6 !leading-[1.15] pb-6`}>
            Redefining
 <br /> Luxury Living
          </h1>
          <p
  className={`${inter.className} flex items-center gap-2 text-[15px] font-light mb-6 !leading-[1.2] pb-8`}
>
  REQUEST A CONSULTATION
  <ArrowUpRight  strokeWidth={1} className="w-5 h-5 text-white" />
</p>

        </MotionWrapper>
      </div>


     <div className={`absolute top-36 md:right-10 lg:right-12  xl:right-28 2xl:right-36 bg-white/5 text-white p-4 rounded-md flex items-center gap-4  ${inter.className}`}>
  {/* QR Code */}
  {/* <div className="relative w-20 h-20 flex-shrink-0">
    <Image
      src="/aboutUs/QR CODE.svg"
      alt="QR Code"
      fill
      className="object-contain"
    />
  </div> */}

  {/* RERA Info Text */}
  {/* <div className="text-[15px] font-light">
    <p>RERA REG NO:</p>
    <p>K-RERA/PRJ/TVM/136/2025</p>
    <a
      href="https://www.rera.kerala.gov.in"
      className="text-white hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      www.rera.kerala.gov.in
    </a>
  </div> */}
</div>

      {/* Certification Badge */}
      <div className="absolute bottom-10 right-3 md:right-20 ">
        <div className="relative w-20 h-20 md:w-[5rem] md:h-[5rem] ">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SegmentOverview;
