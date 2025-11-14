'use client'

import React from 'react'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'

// Import Playfair Display
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function BackgroundImageSection() {
  return (
    <div className="relative w-full h-[760px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/aboutUs/about img.png"
          alt="Background"
          fill
          className="object-cover w-full h-full"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content - Left Center */}
      <div className="relative h-full w-[90%] max-w-[1400px] mx-auto flex items-center">
        <MotionWrapper className="max-w-2xl">
          <h1
            className={`${playfair.className} text-5xl md:text-[48px]  xl:text-[60px] text-white !leading-[1.3]`}
          >
            Shaping Modern Living Through Expertise.
          </h1>
        </MotionWrapper>
      </div>
    </div>
  )
}
