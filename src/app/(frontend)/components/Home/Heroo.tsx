'use client'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const HeroVideoSection = () => {
  const videos = [
    {
      id: 1,
      videoUrl: '/Cut-01.mp4',
      poster: '/poster1.png',
      title: 'Luxury Living',
    },
    {
      id: 2,
      videoUrl: '/CG-CUT-2.mov',
      poster: '/poster2.png',
      title: 'Modern Design',
    },
    {
      id: 3,
      videoUrl: '/CG-CUT-3.mov',
      poster: '/poster3.png',
      title: 'Urban Lifestyle',
    },
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length
      setCurrentVideoIndex(nextIndex)
      setProgress(0)
    }

    const updateProgress = () => {
      if (video.duration) {
        const progressPercent = (video.currentTime / video.duration) * 100
        setProgress(progressPercent)
      }
    }

    video.addEventListener('ended', handleVideoEnd)
    video.addEventListener('timeupdate', updateProgress)

    return () => {
      video.removeEventListener('ended', handleVideoEnd)
      video.removeEventListener('timeupdate', updateProgress)
    }
  }, [currentVideoIndex, videos.length])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.load()
      video.play().catch((err) => console.log('Auto-play prevented:', err))
      setProgress(0)
    }
  }, [currentVideoIndex])

  const handlePosterClick = (index) => {
    setCurrentVideoIndex(index)
    setProgress(0)
  }

  return (
    <div className="relative w-full min-h-[35rem] sm:min-h-[50rem] h-[100dvh] md:min-h-[600px] lg:min-h-[750px]">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          key={currentVideoIndex}
        >
          <source src={videos[currentVideoIndex].videoUrl} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className='w-full flex !mx-auto" relative h-full '>
        {/* Video Poster Thumbnails - Bottom Right */}
        <div className="absolute top-[6rem] right-[1rem] md:bottom-[5rem] lg:top-auto lg:bottom-[9.6rem] xl:bottom-[13rem] 2xl:bottom-[210px] md:right-10 xl:right-16 2xl:right-16 z-20 flex lg:flex-row flex-col gap-3 md:gap-4">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, delay: video.id * 0.2, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Poster Thumbnail */}
              <button
                onClick={() => handlePosterClick(index)}
                className={`relative w-20 h-14 md:w-28 md:h-[65px] lg:w-28 lg:h-[60px] xl:w-32 xl:h-[82px] overflow-hidden transition-all ${
                  currentVideoIndex === index ? 'opacity-100' : 'opacity-100'
                }`}
              >
                <img src={video.poster} alt={video.title} className="w-full h-full object-cover" />
                {/* Overlay on inactive thumbnails */}
                {currentVideoIndex !== index && (
                  <div className="absolute inset-0 bg-black/50"></div>
                )}
              </button>

              {/* Progress Bar */}
              <div className="absolute bottom-1.5 left-0 right-0 h-[2px] bg-black/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300 ease-linear"
                  style={{
                    width: currentVideoIndex === index ? `${progress}%` : '0%',
                  }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Badge */}
      <div className="absolute bottom-0 md:bottom-0 right-3 md:right-[2.2rem] xl:right-[3.5rem] pb-20">
        <div className="relative w-16 h-16 md:w-[70px] md:h-[70px] xl:h-[100px] xl:w-[100px] ">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Overlay Content (with fade animation) */}
      <div className="absolute text-white inset-0 flex flex-col justify-end x-6 px-[0.5rem] md:px-10 xl:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideoIndex} // triggers fade when video changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
          >
            <div className="max-w-4xl">
              <h2
                className={`playflair text-[44px] md:text-5xl lg:text-[58px] xl:text-[78px] 2xl:text-[91px] font-normal mb-6 leading-tight xl:leading-[1.2] lg:pb-[30px] xl:pb-[62px]`}
              >
                Crafting Landmark <br className="hidden md:block" /> Residences{' '}
                <br className="hidden md:block" /> with Purpose
              </h2>
            </div>
            <div className="flex gap-5 items-center pb-[80px] xl:pb-[92px]">
              <p className="text-white font-inter text-[14px] uppercase xl:text-[14px] font-normal">
                download luxury brochure
              </p>
              <img className="w-3.2 h-3.2" src="/home/arrow-light.svg" alt="Button Icon" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default HeroVideoSection
