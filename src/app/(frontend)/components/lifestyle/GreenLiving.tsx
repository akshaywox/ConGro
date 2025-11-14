import { ArrowUpRight, Coffee, Target, Users, Briefcase } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import React from 'react'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function GreenLiving() {
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
                Green Living & Sustainability
              </h2>
              <p
                className={`${inter.className} text-white/80 text-[17px] md:text-base font-[350] leading-relaxed md:w-[75%] xl:w-[100%]`}
              >
                Confident Crest Residence embodies the perfect harmony of elegance, comfort, and
                modern living. Set amidst a peaceful neighborhood surrounded by nature, it offers an
                elevated residential experience designed for those who appreciate calm, quality, and
                sophistication. The development captures the essence of a refined lifestyle through
                exceptional design, spacious interiors, and a community that values both privacy and
                connection.
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
          <MotionWrapper className="w-full lg:h-[567px] xl:h-[728px] md:w-[50%] xl:w-[36%]">
            <div className="bg-[#BF9E5F] h-full w-full  p-8 lg:p-0 lg:py-16 xl:py-0 xl:pt-[8.8rem] lg:px-[25px] flex flex-col justify-center xl:justify-start">
              <h2 className="text-[28px] font-[250] text-white mb-[2rem] leading-tight">
                The Heart of Social Living
              </h2>
              <p className="text-white text-[16px] font-[350] lg:text-[16px] mb-[1.02rem] leading-relaxed">
                A destination within your community, the clubhouse is designed to bring people
                together in style.
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
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/20 gap-4">
                  <img src="/map-white.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Yoga and meditation decks
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/20 gap-4">
                  <img src="/rupee-white.svg" className="size-4  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Jogging and cycling trails
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[white]/20 gap-4">
                  <img src="/rupee-white.svg" className="size-4  flex-shrink-0 mt-[2px]" />
                  <p className="text-white font-[350] text-[16px] lg:text-[15px] leading-relaxed">
                    Swimming pools with sun decks
                  </p>
                </div>
              </div>
              {/* CTA Button */}
              <div>
                <button className="group flex items-center gap-2 text-white/90 font-[350] text-sm tracking-[0.01em] text-[15px] transition-colors">
                  SCHEDULE A TOUR
                  <ArrowUpRight
                    strokeWidth={1}
                    className="size-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </div>
  )
}
