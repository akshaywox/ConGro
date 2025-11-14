'use client'
import React, { useEffect, useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
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

const GlimpseFutureHome = ({ gallery }: any) => {
  const column1Ref = useRef(null)
  const column2Ref = useRef(null)
  const horizontalScrollRef = useRef(null)
  const horizontalScroll2Ref = useRef(null)
  // Split gallery array into 2 roughly equal halves
  const mid = Math.ceil(gallery.length / 2)
  const column1Images = gallery.slice(0, mid).map((item: any) => item.url)
  const column2Images = gallery.slice(mid).map((item: any) => item.url)

  const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }

  useEffect(() => {
    const column1 = column1Ref.current
    const column2 = column2Ref.current

    let scrollPosition1 = 0
    let scrollPosition2 = 0

    const scroll = () => {
      if (column1) {
        scrollPosition1 += 0.5
        if (scrollPosition1 >= column1.scrollHeight / 2) {
          scrollPosition1 = 0
        }
        column1.scrollTop = scrollPosition1
      }

      if (column2) {
        scrollPosition2 -= 0.7 // scroll up (opposite direction)
        if (scrollPosition2 <= 0) {
          scrollPosition2 = column2.scrollHeight / 2
        }
        column2.scrollTop = scrollPosition2
      }

      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  // Horizontal scroll effect for mobile - Two rows
  useEffect(() => {
    const horizontalScroll = horizontalScrollRef.current
    const horizontalScroll2 = horizontalScroll2Ref.current

    let scrollPosition = 0
    let scrollPosition2 = 0

    const scroll = () => {
      // Row 1 - Scroll right
      if (horizontalScroll) {
        scrollPosition += 0.8
        if (scrollPosition >= horizontalScroll.scrollWidth / 2) {
          scrollPosition = 0
        }
        horizontalScroll.scrollLeft = scrollPosition
      }

      // Row 2 - Scroll left (opposite direction)
      if (horizontalScroll2) {
        scrollPosition2 -= 0.8
        if (scrollPosition2 <= 0) {
          scrollPosition2 = horizontalScroll2.scrollWidth / 2
        }
        horizontalScroll2.scrollLeft = scrollPosition2
      }

      requestAnimationFrame(scroll)
    }

    const animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="w-full bg-white md:py-0 pt-[50px] pb-[60px] xl:py-0">
      <div className="md:w-[95%] lg:w-[90%] max-w-[1400px] mx-auto">
        <div className="md:grid md:grid-cols-12 xl:grid-cols-12 gap-8 md:gap-12 lg:gap-16 h-full items-start">
          {/* Left Side - Text Content */}
          <div className="w-[95%] mx-auto md:w-full space-y-6 h-full flex flex-col col-span-6 xl:col-span-4 items-start justify-center xl:space-y-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeShow}
            >
              <h2
                className="text-[36px] md:text-[42px] lg:text-[48px] leading-10 md:leading-[58px] lg:leading-[70px] text-[#2c2c2c] lg:mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A Glimpse of
                <br />
                Your Future Home
              </h2>
              <p className="text-black/50 mt-5 ml-[2px] lg:mt-0 text-[16px] tracking-[0.02em] md:text-base leading-[1.6rem] lg:leading-relaxed md:max-w-[365px]">
                Experience the elegance, design, and lifestyle of our flagship development - captured through stunning visuals.

              </p>
            </motion.div>

            <Link
              href="/gallery"
              className={`${inter.className} text-white text-[16px] ml-[2px] font-light mt-10 w-[325px] h-[60px] md:flex hidden items-center justify-center gap-4 bg-[#342C27] transition-colors `}
            >
              JOURNEY THROUGH
            </Link>
          </div>

          {/* Right Side - Image Columns */}
          <div className="hidden md:grid grid-cols-2 mt-[40px] md:mt-0 gap-3 col-span-6 xl:col-span-8 md:gap-4 h-[500px] md:h-[600px] xl:h-[1200px]">
            {/* Column 1 */}
            <div
              ref={column1Ref}
              className="overflow-hidden"
              style={{
                height: '100%',
                overflowY: 'hidden',
              }}
            >
              <div className="space-y-3 md:space-y-4">
                {[...column1Images, ...column1Images].map((img, idx) => (
                  <div
                    key={idx}
                    className={`overflow-hidden w-full ${idx % 3 === 0 ? 'h-[200px] lg:h-[400px] xl:aspect-square' : idx % 3 === 1 ? 'h-[250px] lg:h-[400px] xl:aspect-square' : 'h-[280px] lg:h-[400px] xl:aspect-square'} `}
                    // style={{
                    //   height: idx % 3 === 0 ? '600px xl:480px' : idx % 3 === 1 ? '600px xl:650px' : '500px xl:600px',
                    // }}
                  >
                    <img
                      src={img}
                      alt={`Interior ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div
              ref={column2Ref}
              className="overflow-hidden"
              style={{
                height: '100%',
                overflowY: 'hidden',
              }}
            >
              <div className="space-y-3 md:space-y-4 pt-12">
                {[...column2Images, ...column2Images].map((img, idx) => (
                  <div
                    key={idx}
                    className={`overflow-hidden w-full ${idx % 3 === 0 ? 'h-[200px] lg:h-[400px] xl:-aspect-square' : idx % 3 === 1 ? 'h-[250px] lg:h-[400px] xl:aspect-square' : 'h-[280px] lg:h-[400px] xl:aspect-square'} `}
                    // style={{
                    //   height: idx % 3 === 0 ? 'lg:620px' : idx % 3 === 1 ? 'lg:480px' : 'lg:650px',
                    // }}
                  >
                    <img
                      src={img}
                      alt={`Exterior ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Scroll (Mobile) - Two Rows */}
          <div className="md:hidden mt-[40px] w-full space-y-3">
            {/* Row 1 - Scrolls Right */}
            <div
              ref={horizontalScrollRef}
              className="overflow-hidden"
              style={{
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              <div className="flex gap-3">
                {[...column1Images, ...column1Images].map((img: string, idx: number) => (
                  <div key={idx} className="flex-shrink-0 w-[250px] h-[180px] overflow-hidden">
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scrolls Left */}
            <div
              ref={horizontalScroll2Ref}
              className="overflow-hidden"
              style={{
                width: '100%',
                overflowX: 'hidden',
              }}
            >
              <div className="flex gap-3">
                {[...column2Images, ...column2Images].map((img: string, idx: number) => (
                  <div key={idx} className="flex-shrink-0 w-[250px] h-[180px] overflow-hidden">
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            className={`${inter.className} text-white text-[15px] font-light mt-10 w-[95%] mx-auto md:w-full h-[60px] flex md:hidden items-center justify-center gap-4 bg-[#342C27] transition-colors `}
          >
            EXPLORE MORE <ArrowRight strokeWidth={1} size={23} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default GlimpseFutureHome
