import React from 'react'
import { ArrowUpRight } from 'lucide-react'
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

export default function OverviewSection({overviewParagraph1, overviewParagraph2}: any) {
  return (
    <section className="bg-white relative">
      {/* Top Bar Section - Absolute positioned to overlap hero */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[95%] 2xl:w-[95%] max-w-[1500px] z-[47] ">
        <div className="bg-white ">
          {/* Desktop Layout */}
          <div className="hidden xl:flex items-center">
            {/* 360° View */}
            <div className="flex items-center justify-between pl-10 pr-6 py-6 cursor-pointer hover:bg-gray-50 transition-colors gap-x-12 2xl:gap-x-28">
              <div>
                <h3 className=" text-xl 2xl:text-2xl font-serif font-medium text-gray-900">
                  360° View
                </h3>
                <p className="text-base text-[#7b7b7b] mt-1 font-light">Explore</p>
              </div>
              <ArrowUpRight strokeWidth={1} className="w-6 h-6 text-black" />
            </div>

            {/* Separator */}
            <div className="h-16 w-px bg-[#bf9e5f] self-center"></div>

            {/* Price Range */}
            <div className="flex items-center pl-7 pr-10 py-6">
              <div>
                <h3 className="text-xl 2xl:text-2xl font-serif font-medium text-gray-900">
                  2.3 Cr - 4.1 Cr
                </h3>
                <p className="text-base text-[#7b7b7b] mt-1 font-light">Price Range</p>
              </div>
            </div>

            {/* Separator */}
            <div className="h-16 w-px bg-[#bf9e5f] self-center"></div>

            {/* RERA Certificate Button */}
            <div className="flex items-center px-8 py-6">
              <button className="bg-[#3d3530] text-white px-14 py-4 text-sm font-light hover:bg-[#2d2620] transition-colors whitespace-nowrap">
                RERA CERTIFICATE
              </button>
            </div>

            {/* Separator */}
            <div className="h-16 w-px bg-[#bf9e5f] self-center"></div>

            {/* Reserve a Spot Button */}
            <div className="flex items-center px-8 py-6">
              <button className="bg-[#3d3530] text-white px-14 py-4 text-sm font-light hover:bg-[#2d2620] transition-colors whitespace-nowrap">
                RESERVE A SPOT
              </button>
            </div>

            {/* Separator */}
            <div className="h-16 w-px bg-[#bf9e5f] self-center"></div>

            {/* Download Brochure Button */}
            <div className="flex items-center px-8 py-6">
              <button className="bg-[#3d3530] text-white px-14 py-4 text-sm font-light hover:bg-[#2d2620] transition-colors whitespace-nowrap">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="xl:hidden divide-y divide-[#bf9e5f]">
            {/* 360° View */}
            <div className="flex items-center justify-between px-6 py-5 cursor-pointer active:bg-gray-50 transition-colors">
              <div>
                <h3 className="text-xl font-serif font-medium text-gray-900">360° View</h3>
                <p className="text-sm text-[#7b7b7b] mt-1 font-light">Explore</p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-600" />
            </div>

            {/* Price Range */}
            <div className="px-6 py-5">
              <h3 className="text-xl font-serif font-medium text-gray-900">2.3 Cr - 4.1 Cr</h3>
              <p className="text-sm text-[#7b7b7b] mt-1 font-light">Price Range</p>
            </div>

            {/* RERA Certificate Button */}
            <div className="px-6 py-5">
              <button className="w-full bg-[#3d3530] text-white py-4 text-sm font-light active:bg-[#2d2620] transition-colors">
                RERA CERTIFICATE
              </button>
            </div>

            {/* Reserve a Spot Button */}
            <div className="px-6 py-5">
              <button className="w-full bg-[#3d3530] text-white py-4 text-sm font-light active:bg-[#2d2620] transition-colors">
                RESERVE A SPOT
              </button>
            </div>

            {/* Download Brochure Button */}
            <div className="px-6 py-5">
              <button className="w-full bg-[#3d3530] text-white py-4 text-sm font-light active:bg-[#2d2620] transition-colors">
                DOWNLOAD BROCHURE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Content Section */}
      <div className="pb-28 pt-32">
        <MotionWrapper className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
          {/* Top section - Heading left, small text right */}
          <div className="flex flex-col lg:flex-row justify-between items-start md:gap-16 lg:gap-28 mt-16 mb-12">
            {/* Left side - Overview heading */}
            <MotionWrapper className="lg:w-1/3">
              <h2
                className={`${playfair.className} text-[40px] md:text-5xl font-normal text-gray-900 leading-tight mt-64 xl:mt-0`}
              >
                Overview
              </h2>
            </MotionWrapper>

            {/* Right side - Small text */}
            <div className="lg:w-2/3">
              <MotionWrapper className="lg:text-right">
                <p
                  className={`${inter.className} text-[17px] md:text-[16px] lg:text-[15px] text-[#9c9c9c] lg:w-[50%] xl:w-[30%] ml-auto mt-4 md:mt-0 font-[350]`}
                >
                  Discover a residential experience where innovation meets quality, sustainability
                  blends with modern design, and every home.
                </p>
              </MotionWrapper>
            </div>
          </div>

          {/* Full width content paragraphs */}
          <MotionWrapper
            className={`${inter.className} space-y-8 text-[#7b7b7b] text-[17px] md:text-[16px] leading-relaxed lg:w-[90%] font-[350]`}
          >
            <p>{overviewParagraph1}</p>

            <p>{overviewParagraph2}</p>
          </MotionWrapper>
        </MotionWrapper>
      </div>
    </section>
  )
}
