'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import  ScrollContainer from 'react-indiana-drag-scroll'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function ScrollSection() {
  const insights = [
    {
      title: 'Clubhouses',
      description:
        'Our fully equipped gym features the latest cardio and strength-training machines, functional training zones, and personalized wellness programs. Designed to cater to all fitness levels.',
      image: '/aboutUs/blog1.jpg',
    },
    {
      title: 'Wellness and Fitness',
      description:
        'Our fully equipped gym features the latest cardio and strength-training machines, functional training zones, and personalized wellness programs. Designed to cater to all fitness levels.',
      image: '/aboutUs/blog2.jpg',
    },
    {
      title: 'Fitness',
      description:
        'Our fully equipped gym features the latest cardio and strength-training machines, functional training zones, and personalized wellness programs. Designed to cater to all fitness levels.',
      image: '/aboutUs/blog1.jpg',
    },
  ]



    const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }

  return (
    <section className="bg-[#342c27] pt-[80px] pb-[90px] lg:pb xl:pt-[140px] xl:pb-0">
      {/* Wrapper with border on top */}
      <div className="w-full  xl:pb-[7rem]">
        {/* Header */}
        <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start pb-20 lg:mb-20 border-t-[0.4px] border-white/20 pt-20 lg:pt-16">
          <div>
            <motion.h2
                          initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeShow}
              className={`${playfair.className} text-[36px] xl:text-5xl md:text-[42px] leading-10 md:leading-[58px] lg:leading-normal text-white mb-12 lg:mb-7`}
            >
              Designed for Modern Living
            </motion.h2>
            <motion.p
                          initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeShow}
              className={`${inter.className} text-white/90 ml-[2px] md:max-w-[65%] mt-5 lg:mt-0 font-extralight tracking-[0.02em] lg:tracking-wide text-[16px] lg:text-[16px] !leading-[1.6]  md:leading-[22px] !lg:leading-[1.8] `}
            >
              A flagship residential development combining engineering excellence, smart technology,
              and luxurious living.
            </motion.p>
          </div>
           <Link
      href="/properties" 
      className={`${inter.className} text-black self-end text-[15px] font-light w-[300px] px-6 py-5 hidden md:flex items-center justify-center gap-4 bg-white transition-colors mt-4 md:mt-0 hover:bg-neutral-200`}
    >
      EXPLORE MORE <ArrowUpRight strokeWidth={1} size={23} />
    </Link>
        </div>

        {/* Horizontal Scroll Carousel */}
       <ScrollContainer
  nativeMobileScroll={true}
  hideScrollbars={false}
  className="
    flex gap-4 ml-3 md:ml-0
    md:gap-[1.5rem] xl:gap-[2.2rem] 
    px-6 md:px-[3.5rem] xl:px-20 
    2xl:px-[calc((100vw-1400px)/2)]   /* aligns with heading at 2xl */
    overflow-x-auto scroll-smooth snap-x snap-mandatory sm:snap-none 
    scrollbar-hide
  "
>

          {insights.map((insight, index) => (
            <div
              key={index}
              className="lg:min-w-[300px] w-[98%] md:w-[60%] xl:w-[57.5%] 2xl:w-[50%] xl:max-w-[700px] flex-shrink-0 snap-start space-y-4"
            >
              <div className="relative h-[260px] md:h-[300px] xl:h-[432px] 2xl:h-[500px] overflow-hidden group mb-6">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="lg:space-y-5 mt-5 lg:mt-0 font-light">
                <h3 className={`${inter.className} text-2xl xl:text-[28px] text-white font-light`}>
                  {insight.title}
                </h3>
                <p
                  className={`${inter.className} text-white/50 font-extralight mt-3 lg:mt-3 text-[16px] xl:text-[16px] tracking-[0.02em] lg:tracking-wide !leading-[1.6] md:leading-[22px] lg:leading-relaxed`}
                >
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollContainer>
        <div className='w-[95%] mx-auto md:hidden'>
          <button
            className={`${inter.className} text-black text-[15px] font-light mt-16 w-full h-[60px] flex md:hidden items-center justify-center gap-4 bg-white transition-colors `}
          >
            EXPLORE MORE <ArrowUpRight strokeWidth={1} size={23} />
          </button>
        </div>
      </div>
    </section>
  )
}
