'use client'

import React from 'react'
import { Inter, Playfair_Display } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'

// Import fonts
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const certifications = [
  {
    title: 'ISO-Certified Standards',
    description:
      'Ensuring consistency, safety, and international-grade quality in every project. Committed to eco-friendly materials, energy efficiency, and responsible development.',
  },
  {
    title: 'Green Building Recognition',
    description:
      'Ensuring consistency, safety, and international-grade quality in every project. Committed to eco-friendly materials, energy efficiency, and responsible development.',
  },
  {
    title: 'Quality Assurance Audits',
    description:
      'Ensuring consistency, safety, and international-grade quality in every project. Committed to eco-friendly materials, energy efficiency, and responsible development.',
  },
]

export default function CertificationsSection() {
  return (
    <section className={`${inter.className} bg-[#342c27] text-white pt-[5.7rem] pb-28`}>
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Section Heading */}
        <MotionWrapper className="mb-12 max-w-3xl">
          <div className="border-t-[1px] border-white opacity-10 w-56"></div>

          <h2 className={`${playfair.className} text-[40px] md:text-5xl mb-4 !leading-[1.3] mt-12`}>
            Certifications And <br /> Accreditations
          </h2>

          <p className="text-[16px] md:text-[16px] text-[#d2d1cf] !leading-[1.7] md:w-[70%] mt-8 mb-16 font-[350]">
            Ensuring consistency, safety, and international-grade quality in every project.
            Committed to eco-friendly materials, energy efficiency, and responsible development.
          </p>
        </MotionWrapper>

        {/* Certification Items */}
        <MotionWrapper className="space-y-[4.5rem]">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="border-t border-white border-opacity-10 pt-[4rem] flex flex-col md:flex-row md:items-start md:justify-between lg:pl-24 lg:pr-20"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-8 md:gap-24 md:w-1/2">
                <div>
                  <Image
                    src="/aboutUs/carbon_certificate-check.svg"
                    alt="Check Icon"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-light">{item.title}</h3>
              </div>

              {/* Description */}
              <div className="md:w-[45%] text-[#a1a1a1cc] text-[16px] md:text-[15px] leading-relaxed mt-5 md:mt-0 font-[350]">
                {item.description}
              </div>
            </div>
          ))}

          {/* Bottom Border */}
          <div className="border-t border-white border-opacity-10"></div>
        </MotionWrapper>
      </div>
    </section>
  )
}
