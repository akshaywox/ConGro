import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

interface IconItem {
  id: string
  title: string
  tagline: string
  icon?: {
    url?: string
    alt?: string
  }
}

export default function RefinedLiving({
  refinedParagraph,
  refinedIcons,
}: {
  refinedParagraph: string
  refinedIcons: IconItem[]
}) {
  const amenities = [
    {
      icon: '/single_property/streamline-ultimate_golf-ball.svg', // Replace with your icon path
      title: 'Private Golf Putting Green',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
    {
      icon: '/single_property/guidance_bar.svg', // Replace with your icon path
      title: 'Sky Lounge & Rooftop Bar',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
    {
      icon: '/single_property/fluent_swimming-pool-48-regular.svg', // Replace with your icon path
      title: 'Infinity Pool with Lounge',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
    {
      icon: '/single_property/material-symbols-light_spa-outline.svg', // Replace with your icon path
      title: 'Luxury Spa & Wellness',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
    {
      icon: '/single_property/hugeicons_yoga-02.svg', // Replace with your icon path
      title: 'Yoga Pavilion & Garden',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
    {
      icon: '/single_property/carbon_cafe.svg', // Replace with your icon path
      title: 'Gourmet Café & Bistro',
      description: 'An exclusive enclave for golf enthusiasts to unwind and perfect surroundings.',
    },
  ]
  console.log(refinedIcons)
  return (
    <section className="bg-white py-[4rem]  md:py-[11.5rem] ">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Top border */}
        <div className="border-t border-gray-200 mb-12"></div>

        {/* Header */}
        <MotionWrapper className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[50px] md:mb-[75px]">
          <h2
            className={`${playfair.className} text-[40px] md:text-5xl font-serif text-gray-900 mb-6 md:mb-0`}
          >
            Refined Living
          </h2>
          <div className="md:text-right md:w-[30%] xl:w-[20%] mt-2">
            <p
              className={`${inter.className} text-[17px] md:text-[15px] text-[#7b7b7b] leading-tight font-[350]`}
            >
              Discover a residential experience where innovation meets quality, sustainability
              blends with modern design, and every home.
            </p>
          </div>
        </MotionWrapper>

        {/* Description */}
        <MotionWrapper className="mb-20">
          <p
            className={`${inter.className} text-[17px] md:text-[16px] text-[#7b7b7b] !leading-[1.7] lg:w-[82%] font-[350]`}
          >
            {refinedParagraph}{' '}
          </p>
        </MotionWrapper>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-20 xl:px-12 lg:gap-x-6">
          {refinedIcons.map((amenity, index) => (
            <MotionWrapper
              key={index}
              className="flex flex-col md:items-center md:text-center relative"
            >
              {/* Right border for desktop - not on last column */}
              {(index + 1) % 3 !== 0 && index !== refinedIcons.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
              )}

              {/* Right border for tablet - not on even columns */}
              {(index + 1) % 2 !== 0 && index !== refinedIcons.length - 1 && (
                <div className="hidden md:block lg:hidden absolute right-0 top-0 bottom-0 w-px bg-gray-200"></div>
              )}

              {/* Icon - Replace img src with your actual icon paths */}
              <div className="mb-6">
                <div className="w-20 h-20 flex items-center justify-center relative">
                  <Image
                    src={amenity?.icon?.url || ''}
                    alt={amenity?.icon?.alt || ''}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                className={`${playfair.className} text-[20px] xl:text-[24px] font-serif text-gray-900 mb-3`}
              >
                {amenity.title}
              </h3>

              {/* Description */}
              <p
                className={`${inter.className}  text-[17px] md:text-[15px] text-[#7b7b7b] leading-tight md:w-[80%] font-[350]`}
              >
                {amenity.tagline}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
