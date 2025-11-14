'use client'

import React, { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'
import { link } from 'fs'
import Link from 'next/link'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function SignatureResidence({ signatureResidences }: any) {
  console.log('signatureResidences', signatureResidences)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const layouts =
    signatureResidences?.map((item: any) => ({
      id: item?.id,
      title: item.title,
      area: item.caption?.trim(),
      floorPlan: item?.image?.url || '',
      link: item?.link || '',
    })) || []

  // --- Desktop navigation handlers ---
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 2))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 2 >= layouts.length ? prev : prev + 2))
  }

  const visibleLayouts = layouts.slice(currentIndex, currentIndex + 2)

  // --- Mobile drag-scroll functionality ---
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (carouselRef.current?.offsetLeft || 0)
    scrollLeft.current = carouselRef.current?.scrollLeft || 0
  }
  const onMouseLeave = () => (isDragging.current = false)
  const onMouseUp = () => (isDragging.current = false)
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0)
    const walk = x - startX.current
    if (carouselRef.current) carouselRef.current.scrollLeft = scrollLeft.current - walk
  }

  return (
    <section className="w-full pt-[6rem] pb-[8rem] md:pt-[12rem] bg-white">
      <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Header Section */}
        <MotionWrapper className="flex flex-col md:flex-row justify-between items-start mb-8 mt-[4rem]">
          <div>
            <h2
              className={`${playfair.className} text-[40px] md:text-4xl lg:text-5xl font-serif text-gray-900 mb-8`}
            >
              Explore Our Signature Residences
            </h2>
            <p
              className={`${inter.className} text-[#7b7b7b] !leading-[1.8] w-full md:w-[65%] font-[350] text-[17px] md:text-[16px]`}
            >
              Explore dedicated photo and video galleries or take immersive 360° virtual tours of
              our residential spaces.
            </p>
          </div>

          {/* Navigation Buttons (hidden on mobile) */}
          <div className="hidden md:flex gap-4 lg:gap-8 mt-5 lg:mt-16 xl:mt-5 justify-end">
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
                currentIndex === 0
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-gray-900 hover:text-white'
              }`}
              aria-label="Previous layouts"
            >
              <Image
                src="/arrowleft1.svg"
                alt="Previous"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 2 >= layouts.length}
              className={`w-16 h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
                currentIndex + 2 >= layouts.length
                  ? 'opacity-40 cursor-not-allowed'
                  : 'hover:bg-gray-900 hover:text-white'
              }`}
              aria-label="Next layouts"
            >
              <Image
                src="/arrowright1.svg"
                alt="Next"
                width={24}
                height={24}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
        </MotionWrapper>

        {/* ✅ MOBILE: scroll all items | DESKTOP: show 2 at a time */}
        <div
          ref={carouselRef}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex md:hidden gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide mt-10 px-2"
        >
          {layouts.map((layout:any) => (
            <MotionWrapper
              key={layout?.id}
              className="flex-shrink-0 snap-start w-[85%] sm:w-[80%] md:w-auto md:flex-none md:mt-0"
            >
              <div>
                <div className="relative bg-gray-100 overflow-hidden h-[26rem]">
                  <Image src={layout?.floorPlan} alt={layout?.title} fill className="object-cover" />
                </div>

                <div className="py-6">
                  <h3 className={`${playfair.className} text-[22px] font-serif text-gray-900 mb-2`}>
                    {layout?.title}
                  </h3>
                  <p className={`${inter.className} text-[#7b7b7b] mb-6 text-[15px] font-[350]`}>
                    {layout?.area}
                  </p>

                  <Link className='w-full' href={layout?.link}>
                    <button  className="bg-[#342327] text-white uppercase px-4 py-4 w-full text-[15px] font-light flex items-center justify-center gap-4">
                      take virtual tour
                      <ArrowUpRight strokeWidth={1} size={20} />
                    </button>
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* ✅ DESKTOP GRID with navigation buttons */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mt-10">
          {visibleLayouts.map((layout:any) => (
            <MotionWrapper key={layout?.id}>
              <div>
                <div className="relative bg-gray-100 overflow-hidden h-[30rem] lg:h-[45rem]">
                  <Image src={layout?.floorPlan} alt={layout?.title} fill className="object-cover" />
                </div>
                <div className="py-8">
                  <h3 className={`${playfair.className} text-[24px] font-serif text-gray-900 mb-3`}>
                    {layout?.title}
                  </h3>
                  <p className={`${inter.className} text-[#7b7b7b] mb-8 text-[16px] font-[350]`}>
                    {layout?.area}
                  </p>

                  <Link className='' href={layout?.link}>
                    <button className="bg-[#342327] text-white uppercase px-4 py-4 w-[70%] xl:w-[50%]  text-[16px] font-light flex items-center justify-center gap-4">
                      take virtual tour
                      <ArrowUpRight strokeWidth={1} size={22} />
                    </button>
                  </Link>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
