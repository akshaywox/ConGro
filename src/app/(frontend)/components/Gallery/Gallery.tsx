'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion'

const Gallery = ({ gallery }: { gallery: any }) => {
  console.log('GALLERY', gallery)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('BRANDING ELEMENTS')

  const tabs = ['BRANDING ELEMENTS', 'LIFESTYLE', 'ARCHITECTURE & DESIGN']


  const mappedSlides: Record<string, { image: string; title: string; description: string }[]> = {
    'BRANDING ELEMENTS':
      gallery.branding?.map((item: any) => ({
        image: item.image,
        title: item.name,
        description: item.caption,
      })) || [],

    LIFESTYLE:
      gallery.lifestyles?.map((item: any) => ({
        image: item.image,
        title: item.name,
        description: item.caption,
      })) || [],

    'ARCHITECTURE & DESIGN':
      gallery.architecture?.map((item: any) => ({
        image: item.image,
        title: item.name,
        description: item.caption,
      })) || [],
  }

  const slides = mappedSlides[activeTab]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentSlide(0)
  }

  // Animation variants
  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.4, ease: easeIn },
    },
  }

  return (
    <div className="bg-[#342c27] pt-24 pb-24">
      <div className="md:w-[90%] max-w-[1400px] mx-auto px-4">
        {/* Tabs */}
        <MotionWrapper>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-2 md:gap-0 mb-12 md:mb-20 overflow-x-auto flex-nowrap md:whitespace-nowrap scrollbar-hide">
            {tabs.map((tab, index) => (
              <React.Fragment key={tab}>
                <button
                  onClick={() => handleTabChange(tab)}
                  className={`pr-4 md:px-4 py-2 text-[17px] md:text-[15px] custom:text-[14px] tracking-wider transition-colors w-full text-left md:text-center ${
                    activeTab === tab
                      ? 'text-white font-[350]'
                      : 'text-[#7b7b7b] font-[350] hover:text-[#a0a0a0]'
                  }`}
                >
                  {tab}
                </button>

                {index < tabs.length - 1 && (
                  <div className="hidden md:block w-px h-10 bg-[#7b7b7b] self-center mx-8 lg:mx-12" />
                )}
              </React.Fragment>
            ))}
          </div>
        </MotionWrapper>

        {/* Image with animation */}
        <MotionWrapper delay={0.1}>
          <div className="relative aspect-square md:aspect-video overflow-hidden mb-8 md:mb-24 2xl:mb-28 rounded-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].image} // re-trigger animation on slide change
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  fill
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </MotionWrapper>

        {/* Bottom Section */}
        <MotionWrapper delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12 xl:gap-44 2xl:gap-24 items-start">
            {/* Left */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].title}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="space-y-2"
              >
                <div className="text-sm md:text-base font-light">
                  <span className="text-white">0{currentSlide + 1} — </span>
                  <span className="text-gray-400">0{slides.length}</span>
                </div>
                <h3 className="text-white text-3xl md:text-2xl lg:text-[20.5px] font-light">
                  {slides[currentSlide].title}
                </h3>
              </motion.div>
            </AnimatePresence>

            {/* Middle */}
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[currentSlide].description}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <p className="text-gray-300 text-[17px] md:text-base leading-relaxed font-[350] relative md:left-4 2xl:left-0">
                  {slides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Right (buttons) */}
            <div className="flex gap-3 lg:gap-7 2xl:gap-8 justify-end">
              <button
                onClick={prevSlide}
                className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
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
                className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
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
            </div>
          </div>
        </MotionWrapper>
      </div>
    </div>
  )
}

export default Gallery
