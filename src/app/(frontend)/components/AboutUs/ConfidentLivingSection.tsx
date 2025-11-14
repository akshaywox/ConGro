'use client'

import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500'] })

export default function ConfidentLivingSection() {
  const services = [
   {
  title: 'Smart Home Integration',
  description: 'Smart systems that improve comfort and convenience.',
  image: '/aboutUs/Frame.jpg',
},
{
  title: 'Automated Safety & Security',
  description: 'Automated protection for safer, more secure spaces.',
  image: '/aboutUs/digital-banking-transparent-screen 1.jpg',
},
{
  title: 'Sustainable Building Tech',
  description: 'Eco-friendly innovations for efficient modern living.',
  image: '/aboutUs/view-futuristic-looking-city 1.jpg',
},
{
  title: 'Digital Design & Precision Engineering',
  description: 'Advanced digital tools for accurate engineering.',
  image: '/aboutUs/cad-engineer-working-with-manufacturing-software-develop-industrial-machinery-gears-model-engineering-technical-machine-product-computer-construction-industry-development 1.jpg',
},

  ]

  return (
    <section className="bg-white py-20 md:py-48">
      {/* Border Wrapper */}
      <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200 pt-16 space-y-6">
        {/* Header Section */}
        <MotionWrapper className="flex flex-col lg:flex-row justify-between items-start mb-16 lg:px-6">
          <h2 className={`${playfair.className} text-4xl md:text-5xl text-gray-900 !leading-[1.3]`}>
            Your Connection to
            <br />
            Confident Living
          </h2>

          <p
            className={`${inter.className} text-[16px] md:text-[15px] text-[#7b7b7b] lg:max-w-[31%] mt-4 md:mt-8 lg:text-right leading-relaxed `}
          >
            At Confident Projects, we believe every conversation is the start of a lasting
            relationship. Whether youre exploring our residences, seeking partnership projects, our
            team is here to assist you with care.
          </p>
        </MotionWrapper>

        {/* Grid Section */}
        <div className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-[54%_44%] gap-5 h-[550px] md:h-[355px]">
            {services.slice(0, 2).map((service, index) => (
              <MotionWrapper key={index} className="relative overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-7 text-white font-light">
                  <h3 className={`${playfair.className} text-[24px] mb-2`}>{service.title}</h3>
                  <p className={`${inter.className} text-[16px] w-[240px]`}>
                    {service.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[36%_62%] gap-5 h-[550px] md:h-[355px]">
            {services.slice(2, 4).map((service, index) => (
              <MotionWrapper key={index} className="relative overflow-hidden group">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-7 text-white font-light">
                  <h3 className={`${playfair.className} text-[24px] mb-2`}>{service.title}</h3>
                  <p className={`${inter.className} text-[16px] w-[240px]`}>
                    {service.description}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
