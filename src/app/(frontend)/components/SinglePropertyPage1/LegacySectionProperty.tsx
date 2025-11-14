import React from 'react'

import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

interface LegacySectionProps {
  legacyParagraph: string
  legacyPoints: [{ title: string; subtitle: string }]
}

export default function LegacySectionProperty({
  legacyParagraph,
  legacyPoints,
}: LegacySectionProps) {
  const certifications = [
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
    {
      title: 'ISO-Certified Standards',
      subtitle: 'sustainability blends with modern',
    },
  ]

  return (
    <div className="bg-white py-16 md:py-24 lg:pt-48 lg:pb-52">
      <div className="w-[90%] max-w-[1400px] mx-auto ">
        {/* Top border line */}
        <div className="border-t border-gray-300 w-full mb-12"></div>

        {/* Header Section */}
        <MotionWrapper className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12 md:mb-16">
          <h1 className={`${playfair.className} text-[40px] md:text-5xl  font-serif text-gray-900`}>
            Legacy Of Acheivement
          </h1>

          <div className="lg:text-right  lg:w-[30%] xl:w-[20%]  lg:mt-20 xl:mt-0">
            <p
              className={`${inter.className}  text-[17px] md:text-[15px] text-[#7b7b7b] leading-relaxed`}
            >
              Discover a residential experience where innovation meets quality, sustainability
              blends with modern design, and every home
            </p>
          </div>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper className="mb-16 md:mb-20">
          <p
            className={`${inter.className}  text-[17px] md:text-base text-[#7b7b7b] !leading-[1.6] lg:w-[82%] font-[350]`}
          >
            {legacyParagraph}
          </p>
        </MotionWrapper>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-8 md:gap-y-16 lg:gap-x-16 lg:gap-y-28">
          {legacyPoints.map((cert, index) => (
            <div key={index} className="flex items-start gap-4">
              <MotionWrapper className="flex-shrink-0 w-[80px] h-[80px] relative">
                <Image
                  src="/single_property/ph_certificate-thin.svg"
                  alt="Award icon"
                  fill
                  className="object-contain"
                />
              </MotionWrapper>

              <MotionWrapper className="pt-3">
                <h3 className={`${inter.className} text-[24px] font-light text-gray-900 mb-1`}>
                  {cert.title}
                </h3>
                <p
                  className={`${inter.className}  text-[17px] md:text-[14px] text-[#7b7b7b] font-[350]`}
                >
                  {cert.subtitle}
                </p>
              </MotionWrapper>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
