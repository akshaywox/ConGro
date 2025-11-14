"use client";

import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { Inter } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion' // ✅ added

// Font import
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const LocationPropPropertyHero: React.FC = () => {
  return (
    <section className="relative text-white">
      {/* Background Image */}
      <div className="relative w-full h-screen">
        <Image
          src="/single_property/singlehero.jpg"
          alt="Team at work"
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-end x-6 px-6 md:px-10 xl:px-16">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0,}}
            whileInView={{ opacity: 1, }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8,  ease: 'easeInOut' }}
            className={`${cormorant.className} text-5xl lg:text-[92px] font-medium mb-6 !leading-[1.2] pb-8`}
          >
            Confident Residential <br /> Developments Ahead
          </motion.h2>

          <motion.p
            initial={{ opacity: 0,  }}
            whileInView={{ opacity: 1,  }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className={`${inter.className} flex items-center gap-2 text-[14px] lg:text-[15px] font-light mb-4 !leading-[1.2] pb-20`}
          >
            DOWNLOAD LUXURY BROCHURE
            <ArrowUpRight className="w-5 h-5 text-white" />
          </motion.p>
        </div>
      </div>

      {/* Certification Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="absolute bottom-4 lg:bottom-[12px] right-3 md:right-20 pb-20"
      >
        <div className="relative w-20 h-20 lg:w-[5rem] lg:h-[5rem]">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default LocationPropPropertyHero
