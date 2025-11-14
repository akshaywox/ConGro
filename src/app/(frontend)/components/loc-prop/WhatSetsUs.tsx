'use client'

import React, { useState } from 'react'
import { Playfair_Display, Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function WhatSetsUs() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const layouts = [
    {
      id: 1,
      title: 'Smart Living',
      area: 'Contemporary homes with modern amenities.',
      floorPlan: '/single_property/img6.jpg',
      status: 'Ongoing',
    },
    {
      id: 2,
      title: 'Sustainability',
      area: 'Contemporary homes with modern amenities.',
      floorPlan: '/single_property/img7.jpg',
      status: 'Ongoing',
    },
    {
      id: 3,
      title: 'Smart Living',
      area: 'Contemporary homes with modern amenities.',
      floorPlan: '/single_property/img6.jpg',
      status: 'Ongoing',
    },
    {
      id: 4,
      title: 'Sustainability',
      area: 'Contemporary homes with modern amenities.',
      floorPlan: '/single_property/img7.jpg',
      status: 'Ongoing',
    },
  ]

  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 2))
  const handleNext = () => setCurrentIndex((prev) => (prev + 2 >= layouts.length ? prev : prev + 2))

  const visibleLayouts = layouts.slice(currentIndex, currentIndex + 2)

  return (
    <div className="w-full bg-white py-[4rem] lg:pt-[192px] lg:pb-[9.5rem]">
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        {/* Animated Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', staggerChildren: 0.15 }}
        >
          {/* Header Section */}
          <div className="md:flex justify-between items-start mb-6 md:mb-12 mt-[72px]">
            <div className="max-w-[50rem]">
              <h2
                className={`${playfair.className} text-4xl lg:text-[46px] font-serif text-gray-900 mb-6`}
              >
                What Sets Our Luxury Homes Apart
              </h2>
              <p
                className={`${inter.className} text-[#7b7b7b] font-[350] text-[17px] leading-relaxed md:w-[75%]`}
              >
                Experience the perfect harmony of design, innovation, and sophistication - where every home reflects a lifestyle of distinction and enduring value.
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden md:flex gap-4 md:gap-8 mt-5 md:mt-0">
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
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
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full border border-gray-900 flex items-center justify-center transition-all duration-300 ${
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
          </div>

          {/* Layout Cards Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 gap-4 lg:gap-[30px]">
            {visibleLayouts.map((layout) => (
              <motion.div
                key={layout.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Floor Plan Image */}
                <div className="mt-[34px]">
                  <div className="relative flex items-center justify-center overflow-hidden h-[400px] md:h-[300px] lg:h-[410px] xl:h-[719px]">
                    <Image
                      src={layout.floorPlan}
                      alt={`${layout.title} floor plan`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-[28px]">
                  <h3
                    className={`${playfair.className} text-[24px] font-serif text-gray-900 mb-[8px] tracking-wide`}
                  >
                    {layout.title}
                  </h3>
                  <p className={`${inter.className} text-[#7b7b7b] md:mb-10 text-[17px]`}>
                    {layout.area}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Layout Cards Scroll - Mobile */}
          <div
            className="md:hidden flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {layouts.map((layout) => (
              <motion.div
                key={layout.id}
                className="w-[94%] snap-start flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Floor Plan Image */}
                <div className="w-full mt-[34px]">
                  <div className="relative w-full aspect-[3/2] flex items-center justify-center overflow-hidden">
                    <Image
                      src={layout.floorPlan}
                      alt={`${layout.title} floor plan`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="mt-[10px]">
                  <h3
                    className={`${playfair.className} text-[24px] font-serif text-gray-900 mb-[5px] tracking-wide`}
                  >
                    {layout.title}
                  </h3>
                  <p className={`${inter.className} text-[#7b7b7b] font-light md:text-[14px] text-[17px]`}>
                    {layout.area}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
