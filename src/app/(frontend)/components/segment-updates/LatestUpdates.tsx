'use client'

import { ArrowUpRight, Coffee, Target, Users, Briefcase } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import FilterButtons, { FilterButtonsProps } from '../../(route)/insights/FIlterButtons'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function LatestUpdates({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: string
  onFilterChange: (filter: string) => void
}) {

  return (
    <div className="w-full relative bg-white py-10 md:py-12 lg:pb-[4rem] lg:pt-[9.5rem] 3xl:pt-0 ">
      <FilterButtons  activeFilter={activeFilter} onFilterChange={onFilterChange}/>
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t border-gray-200">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 }}
        >
          {/* Header Section */}
          <div className="md:flex justify-between items-start mb-[4.8rem] mt-[50px]">
            <div className="max-w-[70rem]">
              <h2
                className={`${playfair.className} text-[40px] lg:text-[46px] font-serif text-gray-900 mb-6 xl:mb-[4.05rem]`}
              >
                Latest Updates
              </h2>
              <p
                className={`${inter.className} text-[#7b7b7b] leading-relaxed text-[17px] md:text-base md:w-[75%] xl:w-[100%]`}
              >
                Confident Crest Residence embodies the perfect harmony of elegance, comfort, and
                modern living. Set amidst a peaceful neighborhood surrounded by nature, it offers an
                elevated residential experience designed for those who appreciate calm, quality, and
                sophistication.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[2.43fr,1fr] gap-8 lg:gap-[40px]">
            {/* Left - Featured Article */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="relative aspect-[16/10] lg:aspect-[16/10.3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                  alt="Family gardening together"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                <div className="flex flex-col mt-[26px] md:flex-row md:justify-between md:items-center">
                  <h3
                    className={` text-[27px] lg:text-[28px] font-[300] text-gray-900 leading-snug`}
                  >
                    Smart, IoT-enabled residences
                  </h3>
                  <p
                    className={`${inter.className} text-[15px] mt-2 md:mt-0 lg:text-[15px] font-[350] text-[#BF9E5F]`}
                  >
                    20 min read
                  </p>
                </div>

                <p
                  className={`${inter.className} text-[#666] mt-[17px] text-[17px] font-[350px] lg:text-[14px] leading-relaxed`}
                >
                  Experience next generation living with homes equipped with smart automation,
                  intelligent security, and connected controls that bring comfort and convenience to
                  your lifestyle.
                </p>

                <div className="flex items-center gap-1 lg:mt-[30px] text-[17px] mt-[20px] lg:text-[15px] font-[350] text-[#BF9E5F]">
                  <span className={`${inter.className} text-black`}>Family and Community</span>
                  <span className={inter.className}>- Oct 10, 2025</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Featured Sidebar */}
            <motion.div
              className="space-y-6 lg:relative lg:space-y-0 lg:pl-[40px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="absolute top-0 left-0 h-[91%] min-w-[0.2px] bg-gray-300"></div>

              <h4
                className={`${playfair.className} text-xl lg:text-[1.9rem] font-[400] text-gray-900`}
              >
                Featured
              </h4>

              {/* Article 1 */}
              <div className="pb-[0.88rem] border-b-[0.4px] border-gray-200">
                <div className="flex items-center gap-3 lg:mt-[54px] text-xs lg:text-[15px] font-[350] text-[#BF9E5F]">
                  <span className={inter.className}>Oct 10, 2025 - 20 min read</span>
                </div>

                <h5
                  className={`text-lg lg:text-xl mt-[19px] font-[300] text-gray-900 leading-snug`}
                >
                  The Heart of Social Living
                </h5>

                <p
                  className={`${inter.className} text-[#666] mt-[23px] text-sm font-[350] leading-[1.88]`}
                >
                  A destination within your community, clubhouse is designed to bring people
                  together in style.
                </p>

                <button
                  className={`${inter.className} text-sm text-gray-900 hover:text-gray-600 mt-[9px] transition-colors`}
                >
                  Read more
                </button>
              </div>

              {/* Article 2 */}
              <div className="pb-[0.88rem] border-b-[0.4px] border-gray-200">
                <div className="flex items-center gap-3 lg:mt-[52px] text-xs lg:text-[15px] font-[350] text-[#BF9E5F]">
                  <span className={inter.className}>Oct 10, 2025 - 20 min read</span>
                </div>

                <h5
                  className={`text-lg lg:text-xl mt-[19px] font-[300] text-gray-900 leading-snug`}
                >
                  The Heart of Social Living
                </h5>

                <p
                  className={`${inter.className} text-[#666] mt-[23px] text-sm font-[350] leading-[1.88]`}
                >
                  A destination within your community, clubhouse is designed to bring people
                  together in style.
                </p>

                <button
                  className={`${inter.className} text-sm text-gray-900 mt-[9px] hover:text-gray-600 transition-colors`}
                >
                  Read more
                </button>
              </div>

              {/* Article 3 */}
              <div className="pb-[0.88rem] border-b-[0.4px] border-gray-200">
                <div className="flex items-center gap-3 lg:mt-[54px] text-xs lg:text-[15px] font-[350] text-[#BF9E5F]">
                  <span className={inter.className}>Oct 10, 2025 - 20 min read</span>
                </div>

                <h5
                  className={`text-lg lg:text-xl mt-[19px] font-[300] text-gray-900 leading-snug`}
                >
                  The Heart of Social Living
                </h5>

                <p
                  className={`${inter.className} text-[#666] mt-[23px] text-sm font-[350] leading-[1.88]`}
                >
                  A destination within your community, clubhouse is designed to bring people
                  together in style.
                </p>

                <button
                  className={`${inter.className} text-sm mt-[9px] text-gray-900 hover:text-gray-600 transition-colors`}
                >
                  Read more
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
