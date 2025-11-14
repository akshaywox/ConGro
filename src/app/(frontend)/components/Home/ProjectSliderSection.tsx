'use client'
import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const ProjectSliderSection = ({ showcases }: any) => {
  const mobileProjects = showcases

  console.log('mobileProjects', mobileProjects)

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mobileProjects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mobileProjects.length - 1 ? 0 : prev + 1))
  }

  const currentProject = mobileProjects[currentIndex]

  const [columns, setColumns] = useState(5)

  // Update columns based on screen size
  React.useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(3)
      } else {
        setColumns(5)
      }
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const columnVariants = {
    hidden: { scaleX: 0 },
    visible: (i: any) => ({
      scaleX: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  }

  const titleVariants = {
    enter: {
      y: -30,
      opacity: 0,
      rotateX: -15,
    },
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
    },
    exit: {
      y: 30,
      opacity: 0,
      rotateX: 15,
    },
  }

  const fadeVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <div className="w-full relative bg-black h-[98svh] md:h-[600px] xl:min-h-[808px] lg:min-h-[600px] items-center justify-center">
      <AnimatePresence initial={false}>
        <motion.div key={currentIndex} className="absolute inset-0">
          <div className="absolute inset-0 flex">
            {[...Array(columns)].map((_, i) => (
              <AnimatePresence key={i} mode="wait">
                <motion.div
                  key={currentIndex}
                  className="absolute inset-0"
                  variants={fadeVariants} // use fadeVariants instead of column split
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 2, ease: 'easeInOut' }}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${currentProject?.showcaseImage?.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="w-[95%] lg:w-[90%] mx-auto h-full max-w-[1400px] relative">
        {/* Main Slider Container */}
        <div className="relative w-full h-full md:h-[600px] lg:h-[700px] xl:h-[800px] rounded-2xl overflow-hidden">
          {/* Content Overlay */}
          <div className="relative h-full flex flex-col justify-between lg:px-3 pt-[60px] pb-0 xl:pb-[20px] xl:pt-[76px] xl:px-3">
            {/* Title */}
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentIndex + 'title'}
                  variants={fadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    duration: 0.5,
                    // delay: 0.3,
                    // ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="text-[36px] md:text-[42px] lg:text-[50px] leading-[42px] playflair md:leading-[58px] xl:leading-[66px] text-white font-serif"
                >
                  {currentProject?.showcaseTitle}
                </motion.h2>
              </AnimatePresence>

              {/* Mobile View Project Link */}
              <div className="md:hidden mt-4 lg:text-center">
                <AnimatePresence mode="wait">
                  <motion.a
                    key={currentIndex + 'link-mobile'}
                    variants={fadeVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    href="#"
                    className="text-white text-[15px] font-normal font-sans uppercase tracking-[0.02em] hover:underline inline-flex items-center gap-2"
                  >
                    <span>View Project</span>
                    <img src="/home/arrow-light.svg" alt="Icon Arrow" />
                  </motion.a>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Bar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex + 'bottom'}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex items-center mb-[2rem] md:mb-[3rem] lg:mb-[10rem] xl:mb-[25px] justify-between"
              >
                {/* Project Name and Link */}
                <div className="flex items-center gap-6 md:gap-12">
                  <div className="text-white">
                    <h3 className="text-[28px] xl:text-[42px] font-bold tracking-wide">Quooker</h3>
                  </div>
                </div>
                <div className="hidden justify-center items-center md:flex">
                  <div className="border-r-[1px] py-1.5 px-8 border-white">
                    <a
                      href={`/properties/${currentProject?.slug}`}
                      className="text-white text-sm xl:text-[20px] font-extralight font-inter hover:underline flex items-center gap-2"
                    >
                      View Project
                    </a>
                  </div>
                  <div className="py-1 xl:pt-1 px-8 ">
                    <span className="font-extralight text-sm xl:text-[19px] text-white ">
                      {String(currentIndex + 1).padStart(1, '0')} —{' '}
                      {String(mobileProjects.length).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                {/* Pagination and Navigation */}
                {mobileProjects.length > 1 && (
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-4 lg:gap-2 xl:gap-[30px]">
                      <button
                        onClick={handlePrev}
                        className="size-14 md:w-12 md:h-12 xl:size-16 rounded-full border-[1px] border-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all flex items-center justify-center text-white"
                        aria-label="Previous project"
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
                        onClick={handleNext}
                        className="size-14 md:w-12 md:h-12 xl:size-16 rounded-full border-[1px] border-white bg-transparent hover:bg-white hover:bg-opacity-20 transition-all flex items-center justify-center text-white"
                        aria-label="Next project"
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
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectSliderSection
