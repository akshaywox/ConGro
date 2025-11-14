'use client'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function GallerySection({ gallery }: any) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: '/single_property/gallery.jpg',
      title: 'Living Room',
      description:
        'Build homes your clients will love with curated styles, efficient solutions, and cost-conscious options that exceed your bottom line.',
    },
    {
      image: '/aboutUs/Frame 213.jpg',
      title: 'Bedroom',
      description: 'Elegant and comfortable spaces designed for relaxation and peaceful living.',
    },
    {
      image: '/aboutUs/Frame 213.jpg',
      title: 'Kitchen',
      description: 'Modern kitchen spaces that blend functionality with contemporary design.',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  return (
    <div className="bg-[#3d3530] pt-24 pb-[4.8rem]">
      <div className="md:w-[90%] max-w-[1400px] mx-auto">
        <div className="w-[92%] mx-auto">
          {/* Image with Gallery Heading Overlay */}
          <MotionWrapper className="w-full relative">
            {/* Gallery Heading - Positioned over image */}
            <h2
              className={`${playfair.className} text-[40px] md:text-5xl font-light text-white absolute -top-12 md:-top-2  lg:top-1  xl:top-4 md:-left-[42px] xl:-left-[58px] z-10`}
            >
              Gallery
            </h2>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={gallery[currentSlide]?.url}
                alt={gallery[currentSlide]?.alt}
                fill
                className="w-full h-full object-cover mt-5 md:mt-0"
              />
            </div>
          </MotionWrapper>

          {/* Bottom Section - Three Columns */}
          <div className="md:flex mt-[3.4rem] justify-between">
            {/* Left - Counter and Title */}
            <MotionWrapper className="space-y-4 w-full md:w-[20%]">
              <div className="text-sm md:text-base font-light mt-3 md:mt-0">
                <span className="text-white">0{currentSlide + 1} — </span>
                <span className="text-white/50"> 0{gallery?.length}</span>
              </div>
              <h3
                className={`${inter.className} text-white text-3xl md:text-2xl lg:text-[20.5px] font-light`}
              >
                {gallery[currentSlide]?.name}
              </h3>
            </MotionWrapper>

            {/* Middle - Description */}
            <MotionWrapper className=" w-full md:w-[40%] xl:w-[30%] relative xl:right-5 mt-[2rem] md:mt-0">
              <p
                className={`${inter.className}  md:text-base text-white leading-relaxed font-[350] relative md:left-4 2xl:left-0 `}
              >
                {gallery[currentSlide]?.caption}
              </p>
            </MotionWrapper>

            {/* Right - Navigation Buttons */}
            <MotionWrapper className="flex gap-3 xl:gap-7 justify-end mt-[2rem] md:mt-0">
              <button
                onClick={prevSlide}
                className=" w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Previous slide"
              >
                <Image
                  src="/arrowleft.svg"
                  alt="Previous"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
              <button
                onClick={nextSlide}
                className="w-16 h-16  rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Next slide"
              >
                <Image
                  src="/arrowright.svg"
                  alt="Next"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
