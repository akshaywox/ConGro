import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'
import { ArrowUpRight } from 'lucide-react'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const GalleryHero: React.FC = () => {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 bg-black/30 z-[45] "></div>
      {/* Background Image */}
      <div className="relative w-full min-h-[35rem] sm:min-h-[50rem] h-svh md:min-h-[600px] lg:min-h-[750px]">
        <Image
          src="/gallery/ai-generated-modern-styled-entryway 1 (2).jpg"
          alt="Team at work"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-[45] flex flex-col justify-end  px-3 md:px-10 xl:px-16">
        <div className="max-w-4xl">
          {/* Fade-in animation added here */}
          <MotionWrapper>
            <h1
              className={`${cormorant.className} w-[90%] md:w-[60%] lg:w-[70%] xl:w-[90%] 2xl:w-[95%] text-[50px] lg:text-[70px] xl:text-[92px] 2xl:text-[100px] font-medium mb-6 !leading-[1.2] pb-[2rem] md:pb-16`}
            >
              Elevating <br className='hidden md:block' />
              Everyday Living
            </h1>
          </MotionWrapper>

          {/* Optional paragraph or button animations */}
          <MotionWrapper delay={0.2}>
            <p className=" flex items-center gap-2 text-[15px] lg:text-[15px] font-[350] mb-6 !leading-[1.2] pb-[3rem] md:pb-[5rem]">
              SCHEDULE A TOUR
              <ArrowUpRight className="w-5 h-5 text-white" />
            </p>
          </MotionWrapper>
        </div>
      </div>

      {/* Certification Badge */}
      <div className="absolute -bottom-16 z-[45] md:bottom-12 lg:bottom-[12px] right-3 md:right-20 pb-20">
        <div className="relative w-20 h-20 lg:w-[5rem] lg:h-[5rem]">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default GalleryHero
