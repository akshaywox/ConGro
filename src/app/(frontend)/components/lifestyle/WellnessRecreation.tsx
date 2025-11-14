import { ArrowUpRight, Coffee, Target, Users, Briefcase } from 'lucide-react';
import { Playfair_Display, Inter } from 'next/font/google';
import React from 'react';
import MotionWrapper from '../MotionWrapper';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
});

export default function WellnessRecreation() {
  return (
    <div className="w-full bg-[#342C27] py-[5rem] md:py-12 lg:pb-[6rem] lg:pt-[6rem] ">
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t-[0.3px] border-white/20">
                {/* Header Section */}
        <div className="md:flex justify-between items-start mb-[4.6rem] xl:mt-[70px] mt-[50px]">
          <MotionWrapper>
            <div className="max-w-[71rem]">
              <h2
                className={`${playfair.className} text-[40px] lg:text-[46px] font-serif text-white mb-6 xl:mb-[2.4rem]`}
              >
                Wellness & Recreation
              </h2>
              <p className={`${inter.className} text-white/80 text-[17px] md:text-base font-[350] leading-relaxed md:w-[75%] xl:w-[100%]`}>
                From fitness to relaxation, every facility is designed to rejuvenate the mind and energize the body, offering an elevated approach to everyday wellness and leisure.

              </p>
            </div>
          </MotionWrapper>
        </div>
        <div className="flex flex-col md:flex-row gap-3 xl:gap-5">


          {/* Left Image Section */}
          <div className="relative w-full aspect-square md:aspect-auto md:w-[50%] xl:w-[64%] xl:[400px] lg:h-[567px] xl:h-[728px]">
            <MotionWrapper className="w-full h-full">
              <img
                src="/lifestyle/wellness.png"
                alt="Social living area with people enjoying outdoor seating"
                className="w-full aspect-square md:aspect-auto md:h-full object-cover"
              />
            </MotionWrapper>
          </div>
                    {/* Right Content Section */}
          <MotionWrapper className="ww-full lg:h-[567px] xl:h-[728px] md:w-[50%] xl:w-[36%]">
            <div className="bg-[#BF9E5F] w-full h-full p-8 lg:p-0 lg:py-16 xl:py-0 xl:pt-[8.8rem] lg:px-[25px] flex flex-col justify-center xl:justify-start">
              <h2 className="text-[28px] font-[250] text-white mb-[2rem] leading-tight">
                The Heart of Social Living
              </h2>
            
              <p className="text-white text-[16px] font-[350] lg:text-[16px] mb-[1.02rem] leading-relaxed">
                A destination within your community, the clubhouse is designed to bring people together in style.
              </p>
              {/* Features List */}
              <div className=" mb-[3.2rem] w-fit">
                {/* Feature 1 */}
                <div className="flex items-start py-[18px] gap-4">
                  <img src="/bed-white.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Fully equipped gym
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/80 gap-4">
                  <img src="/map-white.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Yoga and meditation decks
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/80 gap-4">
                  <img src="/rupee-white.svg" className="size-4  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Jogging and cycling trails
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/80 gap-4">
                  <img src="/rupee-white.svg" className="size-4  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Swimming pools with sun decks
                  </p>
                </div>
              </div>
              {/* CTA Button */}
              <div>
                <button className="group flex font-[350] text-[15px] items-center gap-2 text-white/90 text-sm tracking-[0.01em] lg:text-[15px] transition-colors">
                  SCHEDULE A TOUR
                  <ArrowUpRight strokeWidth={1} className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  );
}