'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import Link from 'next/link'
import MotionWrapper from '../MotionWrapper'

// Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export interface PostProps {
  heroImage: {
    alt: string
    url: string
  }
  title: string
  slug: string
  meta: {
    title: string
    description: string
  }
}

export default function InnerUpdates({ posts }: { posts: PostProps[] }) {
  const insights = [
    {
      title: 'Smart, IoT-enabled residences',
      description:
        'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
      image: '/aboutUs/blog1.jpg',
    },
    {
      title: 'Automated Safety & Security',
      description:
        'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
      image: '/aboutUs/blog2.jpg',
    },
    {
      title: 'Sustainable Living Spaces',
      description:
        'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
      image: '/aboutUs/blog1.jpg',
    },
    {
      title: 'Modern Architecture Design',
      description:
        'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
      image: '/aboutUs/blog2.jpg',
    },
  ]

  const carouselRef = useRef<HTMLDivElement>(null)

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

  console.log('posts updates: ', posts)

  const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } }

  return (
    <section className="bg-white">
      <MotionWrapper className="pb-16 xl:pb-44 ">
        {/* Header */}
        <div className="flex flex-col w-[95%] lg:w-[90%] max-w-[1400px] mx-auto h-fit md:flex-row justify-between items-start mb-[4.95rem] border-t border-gray-200 pt-16  ">
          <MotionWrapper>
            <h2
              className={`${playfair.className} text-[40px] md:text-5xl text-gray-900 mb-[2rem] md:mb-[1.35rem]`}
            >
              Insights and Updates
            </h2>
            <p
              className={`${inter.className}  text-[#7b7b7b] mt-0 font-[350] md:max-w-[65%] text-[16px] md:text-[16px] !leading-[1.7] `}
            >
              A flagship residential masterpiece, elevating life through engineering excellence, advanced smart technology and a lifestyle defined by timeless luxury.

            </p>
          </MotionWrapper>
          <Link
            href="/insights"
            className={`${inter.className} text-white text-[15px] font-light w-[400px] lg:w-[300px] px-6 py-5 hidden md:flex items-center justify-center gap-4 bg-[#342c27] hover:bg-gray-800 transition-colors mt-4 md:mt-[4rem]`}
          >
            EXPLORE MORE <ArrowUpRight strokeWidth={1} size={22} />
          </Link>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-4 ml-4 md:ml-0
    md:gap-[1.5rem] xl:gap-[2.2rem] 
    px-[1rem] md:px-[1.5rem] lg:px-[3.5rem] xl:px-20 
    2xl:px-[calc((100vw-1400px)/2)]   /* aligns with heading at 2xl */
    overflow-x-auto scroll-smooth snap-x snap-mandatory sm:snap-none 
    scrollbar-hide"
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onMouseMove={onMouseMove}
        >
          {posts.map((insight, index) => (
            <MotionWrapper
              key={index}
              className="md:min-w-[300px] w-[95%] md:w-[48.5%] lg:w-[49%] xl:w-[49%] 2xl:w-[49%] flex-shrink-0 snap-start md:space-y-4"
            >
              <div className="relative  aspect-[3/2] xl:aspect-auto xl:h-[567px] overflow-hidden group md:mb-6">
                <Image
                  src={insight?.heroImage?.url || '/home/cf1.jpg'}
                  alt={insight?.heroImage?.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="md:space-y-5 mt-5 md:mt-0 font-light">
                <h3
                  className={`${inter.className} text-2xl leading-[30px] md:leading-8 md:text-[26px] xl:text-[28px] text-gray-900 font-light`}
                >
                  {insight?.title}
                </h3>
                <p
                  className={`${inter.className} text-[#7b7b7b] text-[16px] md:text-[14px] xl:text-[15px] tracking-[0.02em] md:tracking-wide mt-3 md:mt-0 line-clamp-3 leading-[1.5] md:leading-relaxed`}
                >
                  {insight?.meta?.description}
                </p>
              </div>
            </MotionWrapper>
          ))}
        </div>
        <button
          className={`${inter.className} text-white text-[15px] md:hidden font-light w-[93%] md:w-full mx-auto mt-10 px-6 py-5 flex items-center justify-center gap-4 bg-[#342c27] hover:bg-gray-800 transition-colors `}
        >
          EXPLORE MORE <ArrowUpRight strokeWidth={1} size={22} />
        </button>
      </MotionWrapper>
    </section>
  )
}
