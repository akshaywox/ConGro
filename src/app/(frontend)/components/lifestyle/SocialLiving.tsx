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

export default function SocialLivingSection() {
  return (
    <div className="w-full bg-white py-[5rem] md:py-12 lg:pb-[12rem] lg:pt-[6rem] ">
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Header Section */}
        <div className="md:flex justify-between items-start mb-[4.6rem] mt-[50px]">
          <MotionWrapper>
            <div className="max-w-[71rem]">
              <h2
                className={`${playfair.className} text-[40px] lg:text-[46px] font-serif text-gray-900 mb-6 xl:mb-[3.5rem]`}
              >
                The Clubhouse Experience
              </h2>
              <p
                className={`${inter.className} text-[#7b7b7b] font-[350] text-[17px] md:text-base leading-relaxed md:w-[75%] xl:w-[100%]`}
              >
                The clubhouse provides sophisticated avenues for relaxation and community
                interaction, ensuring a lifestyle that feels distinctly elevated. Every detail is
                curated to elevate daily living, turning single moments into truely enriching
                experiences.
              </p>
            </div>
          </MotionWrapper>
        </div>
        <div className="flex flex-col md:flex-row gap-3 xl:gap-5">
          {/* Left Content Section */}
          <MotionWrapper className="w-full lg:h-[567px] xl:h-[728px] md:w-[50%] xl:w-[36%]">
            <div className="bg-[#F2F0EA] h-full w-full p-8 lg:p-0 lg:py-16 xl:py-0 xl:pt-[8.8rem] lg:px-[25px] flex flex-col justify-center xl:justify-start">
              <h2 className="text-[28px] font-[300] text-black mb-[2rem] leading-tight">
                The Heart of Social Living
              </h2>

              <p className="text-black/50 text-[16px] lg:text-[16px] mb-[1.02rem] font-[350] leading-relaxed">
                A destination within the community designed to bring people together, where shared
                moments become cherished occasions. Ideal for intimate events and refined social
                experiences.
              </p>
              {/* Features List */}
              <div className="font-[350] mb-[3.2rem]">
                {/* Feature 1 */}
                <div className="flex items-start py-[18px] gap-4">
                  <img src="/bed.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Spacious lounges and community halls for gatherings
                  </p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/map.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Indoor games, reading corners, and event spaces
                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/rupee.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Exclusive residents' lounges and entertainment areas
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/rupee.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Dedicated spaces for co-working or relaxation
                  </p>
                </div>
              </div>
              {/* CTA Button */}
              <div>
                <button className="group font-[350] flex items-center gap-2 text-black/90 text-[15px] tracking-[0.01em] lg:text-[15px] transition-colors">
                  SCHEDULE A TOUR
                  <ArrowUpRight
                    strokeWidth={1}
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </MotionWrapper>

          {/* Right Image Section */}
          <div className="relative w-full aspect-square md:aspect-auto md:w-[50%] xl:w-[64%] xl:[400px] lg:h-[567px] xl:h-[728px]">
            <MotionWrapper className="w-full h-full">
              <img
                loading="lazy"
                decoding="async"
                src="/lifestyle/social.png"
                alt="Social living area with people enjoying outdoor seating"
                className="w-full aspect-square md:aspect-auto md:h-full object-cover object-fit:cover object-position:center"
              />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
