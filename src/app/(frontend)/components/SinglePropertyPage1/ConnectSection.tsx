import React from 'react'

import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import MotionWrapper from "../MotionWrapper"; 

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function ContactSection({connection}:any) {
  const {email, phone, locationText, paragraph, personImage, name, role } = connection
  return (
    <div className=" bg-[#342c27] text-white">
      <div className="w-[90%] max-w-[1400px] mx-auto  py-16 md:py-[8.5rem]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start border-t border-[#7b7b7b] border-opacity-15 ">
          {/* Left Column - Header and Image */}
          <div className=" mt-[3.5rem]">
            <MotionWrapper className=''>
              <h2
                className={`${playfair.className} text-[40px] md:text-5xl  font-serif mb-6 !leading-[1.3]`}
              >
                Your Connection to
                <br />
                Confident Living
              </h2>
            </MotionWrapper>

            <MotionWrapper className="w-full h-[400px] md:h-[600px]  lg:h-[800px] relative">
              <Image
                src="/single_property/img4.jpg"
                alt="Professional woman on phone"
                fill
                className="xl:object-contain object-cover"
              />
            </MotionWrapper>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-12 lg:pt-0">
            <MotionWrapper
              className={`${inter.className} lg:text-right  text-[17px] md:text-[15px] leading-relaxed text-gray-200 lg:w-[80%] xl:w-[65%] lg:ml-auto  lg:mt-[5.5rem] font-[350]`}
            >
              At Confident Projects, we believe every conversation is the start of a lasting
              relationship. Whether youre exploring our residences, seeking partnership projects,
              our team is here to assist you with care.
            </MotionWrapper>

            <div className="space-y-6 lg:pt-32 xl:pt-40 lg:pl-3 xl:pr-28">
              <MotionWrapper>
                <h2 className={`${playfair.className} text-3xl md:text-[2rem] font-serif mb-3`}>{name}</h2>
                <p className={`${inter.className} text-[#7b7b7b] text-sm md:text-[15px] font-[350] `}>{role}</p>
              </MotionWrapper>

              <div className="h-[1.5px] bg-[#cdb6a4] opacity-20 w-full"></div>

              <MotionWrapper className="space-y-6 text-gray-300">
                <p className={`${inter.className}  text-[17px] md:text-[15px] !leading-[1.8] w-[90%] font-[350] mt-9`}>{paragraph} </p>

                <div className="space-y-5 pt-12">
                  {/* Phone */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/single_property/iconamoon_phone-thin.svg" // 🖼️ your phone icon image path
                      alt="Phone icon"
                      width={24}
                      height={24}
                      className="opacity-70"
                    />
                    <span className=" text-[17px] md:text-base">{phone}</span>
                  </div>

                  <div className="h-[0.5px] bg-[#cdb6a4] w-full"></div>

                  {/* Mail */}
                  <div className="flex items-center gap-3">
                    <Image
                      src="/single_property/material-symbols-light_mail-outline-sharp.svg" // 🖼️ your mail icon image path
                      alt="Mail icon"
                      width={24}
                      height={24}
                      className="opacity-70"
                    />
                    <span className=" text-[17px] md:text-base">{email}</span>
                  </div>

                  <div className="h-[0.5px] bg-[#cdb6a4] w-full"></div>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <Image
                      src="/single_property/circum_map-pin.svg" // 🖼️ your location icon image path
                      alt="Map pin icon"
                      width={24}
                      height={24}
                      className=" opacity-70"
                    />
                    <span className=" text-[17px] md:text-base">{locationText} </span>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
