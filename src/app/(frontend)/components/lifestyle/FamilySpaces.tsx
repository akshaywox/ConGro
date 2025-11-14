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

export default function FamilySpaces() {
  return (
    <div className="w-full bg-white py-[5rem] md:py-12 lg:pb-[12rem] lg:pt-[12rem] ">
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Header Section */}
        <div className="md:flex justify-between items-start mb-[4.6rem] mt-[50px]">
          <MotionWrapper>
            <div className="max-w-[64rem]">
              <h2
                className={`${playfair.className} text-[40px] lg:text-[46px] font-serif text-gray-900 mb-6 xl:mb-[3.5rem]`}
              >
                Family and Community living spaces
              </h2>
              <p
                className={`${inter.className} text-[#7b7b7b] text-[17px] font-[350] leading-relaxed md:w-[75%] xl:w-[100%]`}
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
          {/* Left Content Section */}
          <MotionWrapper className="w-full lg:h-[567px] xl:h-[728px] md:w-[50%] xl:w-[36%]">
            <div className="bg-[#F2F0EA] w-full h-full p-8 lg:p-0 lg:py-16 xl:py-0 xl:pt-[8.8rem] lg:px-[25px] flex flex-col justify-center xl:justify-start">
              <h2 className="text-[28px] font-[300] text-black mb-[2rem] leading-tight">
                The Heart of Social Living
              </h2>
              <p className="text-black/50 text-[16px] fnot-[350] lg:text-[16px] mb-[1.02rem] leading-relaxed">
                A destination within your community, the clubhouse is designed to bring people
                together in style.
              </p>
              {/* Features List */}
              <div className=" mb-[3.2rem]">
                {/* Feature 1 */}
                <div className="flex items-start py-[18px] gap-4">
                  <img src="/bed.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Work and Productivity Spaces

                  </p>
                </div>
                {/* Feature 2 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/map.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Golf Putting 

                  </p>
                </div>
                {/* Feature 3 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/rupee.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    The Sky Lounge
                  </p>
                </div>
                {/* Feature 4 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/rupee.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Community Comforts

                  </p>
                </div>
                {/* Feature 5 */}
                <div className="flex items-start py-[18px] border-t-[0.3px] border-[#B8976A]/20 gap-4">
                  <img src="/rupee.svg" className="w-5 h-5  flex-shrink-0 mt-[2px]" />
                  <p className="text-black/50 text-[16px] lg:text-[15px] leading-relaxed">
                    Senior Friendly Rooms


                  </p>
                </div>
              </div>
              {/* CTA Button */}
              <div>
                <button className="group flex items-center gap-2 text-black/90 font-normal text-sm tracking-[0.01em] text-[15px] transition-colors">
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
            <MotionWrapper className='w-full h-full'>
              <img
                src="/lifestyle/smart.png"
                alt="Social living area with people enjoying outdoor seating"
                className="w-full aspect-square md:aspect-auto md:h-full object-cover"
              />
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
