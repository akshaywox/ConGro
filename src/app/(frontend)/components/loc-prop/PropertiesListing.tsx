'use client'
import { ArrowUpRight, BedDouble, ChevronDown, IndianRupee, MapPin } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { Playfair_Display, Inter } from 'next/font/google'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const LocationProperties = ({
  propertyTypes,
  locations,
  bedrooms,
  priceRanges,
  properties,
}: any) => {
  // Creating Filter Type
  const PropertyTypes = ['Any', ...propertyTypes.map((item: any) => item?.title)]
  const Locations = ['All Location', ...locations.map((item: any) => item?.title)]
  const Bedrooms = ['Any', ...bedrooms.map((item: any) => item?.title)]
  const PriceRanges = ['Any', ...priceRanges.map((item: any) => item?.title)]

  // States for Filter Type
  const [propertyType, setPropertyType] = useState('Any')
  const [bedroom, setBedroom] = useState('Any')
  const [priceRange, setPriceRange] = useState('Any')
  const [location, setLocation] = useState('All Location')

  // State for each location's carousel
  const [carouselIndices, setCarouselIndices] = useState<{ [key: string]: number }>({})

  // Filter properties based on selected filters
  const getFilteredProperties = (props: any[]) => {
    return props.filter((property) => {
      const typeMatch =
        propertyType === 'Any' ||
        property.propertyType?.title?.toLowerCase() === propertyType.toLowerCase()

      const bedroomMatch =
        bedroom === 'Any' || property.bedroom?.title?.includes(bedroom.replace(' BHK', '').trim())

      const priceMatch = priceRange === 'Any' || property.priceRange?.title === priceRange

      const locationMatch =
        location === 'All Location' ||
        property.location?.title?.toLowerCase() === location.toLowerCase()

      return typeMatch && bedroomMatch && priceMatch && locationMatch
    })
  }

  // Get filtered properties
  const filteredProperties = getFilteredProperties(properties)

  // Group properties by location
  const getPropertiesByLocation = () => {
    const grouped: { [key: string]: any[] } = {}

    filteredProperties.forEach((property) => {
      const loc = property.location?.title || 'Unknown'
      if (!grouped[loc]) {
        grouped[loc] = []
      }
      grouped[loc].push(property)
    })

    return grouped
  }

  const propertiesByLocation = getPropertiesByLocation()
  const locationKeys = Object.keys(propertiesByLocation)

  // Initialize carousel indices for each location
  useEffect(() => {
    const initialIndices: { [key: string]: number } = {}
    locationKeys.forEach((loc) => {
      initialIndices[loc] = 0
    })
    setCarouselIndices(initialIndices)
  }, [location, propertyType, bedroom, priceRange])

  // Handle carousel navigation
  const handlePrev = (locationName: string) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [locationName]:
        prev[locationName] === 0
          ? propertiesByLocation[locationName].length - 1
          : prev[locationName] - 1,
    }))
  }

  const handleNext = (locationName: string) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [locationName]:
        prev[locationName] >= propertiesByLocation[locationName].length - 1
          ? 0
          : prev[locationName] + 1,
    }))
  }

  // Get visible properties for desktop (2 at a time)
  const getVisibleProperties = (locationName: string) => {
    const currentIndex = carouselIndices[locationName] || 0
    return propertiesByLocation[locationName]?.slice(currentIndex, currentIndex + 2) || []
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  }
  // Render single location section
  const renderLocationSection = (locationName: string, index: number) => {
    const properties = propertiesByLocation[locationName]
    const visibleProperties = getVisibleProperties(locationName)
    const isFirst = index === 0
    const isLast = index === locationKeys.length - 1

    // Determine padding classes
    const topPadding = isFirst
      ? 'pt-[180px] md:pt-[180px] lg:pt-[132px]'
      : 'pt-[40px] md:pt-[75px] lg:pt-0'
    const bottomPadding = isLast ? 'pb-20 md:pb-[75px] lg:pb-[128px]' : 'lg:pb-[95px]'

    return (
      <div key={locationName} className={`w-full ${topPadding} ${bottomPadding}`}>
        <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t-[0.5px] border-black/30">
          {/* Title */}
          <motion.div
            className="flex items-center lg:items-center pt-[50px] pb-[60px] lg:pt-[60px] lg:pb-[82px] justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="lg:text-[48px] text-black text-[34px] leading-10 lg:leading-normal xl:text-[46px]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Residences in {locationName}
            </h2>

            {/* Navigation Buttons */}
            <div className="hidden lg:flex items-center gap-4 lg:gap-2 xl:gap-[30px] mt-6 md:mt-0">
              <button
                onClick={() => handlePrev(locationName)}
                className="size-10 md:w-12 md:h-12 xl:size-16 rounded-full border-[1px] border-black bg-transparent hover:bg-black hover:bg-opacity-10 transition-all flex items-center justify-center text-black"
                aria-label="Previous project"
              >
                <Image
                  src="/arrowleft1.svg"
                  alt="Previous"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
              <button
                onClick={() => handleNext(locationName)}
                className="size-10 md:w-12 md:h-12 xl:size-16 rounded-full border-[1px] border-black bg-transparent hover:bg-black hover:bg-opacity-10 transition-all flex items-center justify-center text-black"
                aria-label="Next project"
              >
                <Image
                  src="/arrowright1.svg"
                  alt="Next"
                  width={24}
                  height={24}
                  className="w-5 h-5 md:w-6 md:h-6"
                />
              </button>
            </div>
          </motion.div>

          {/* Property Cards - Desktop (lg and above) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 lg:gap-[36px]">
            {visibleProperties?.map((property: any) => (
              <motion.div
                key={property.id}
                className="bg-[#f2f0ea] overflow-hidden flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                {/* Property Image */}
                <div className="w-full h-[350px] xl:h-[370px] overflow-hidden">
                  <img
                    src={property.heroImage?.url || property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Property Details */}
                <div className="px-[22px] pb-[50px] pt-[42px] flex flex-col flex-grow">
                  <h3 className="text-[28px] font-[250] text-[#2c2c2c] mb-4 xl:mb-[24px]">
                    {property.title}
                  </h3>

                  <p className="text-black/60 tracking-wide leading-normal font-[350] line-clamp-3 text-[12px] xl:text-[15px] mb-6 xl:mb-[32px] flex-grow">
                    {property.overviewParagraph1 || property.description}
                  </p>

                  {/* Property Info */}
                  <div className="flex flex-wrap h-auto items-center gap-0 mb-6 xl:mb-[64px] text-black/60">
                    <div className="flex items-center gap-2 pr-7">
                      <img src="/bed.svg" className="size-[22px] text-[#B8976A]" />
                      <span className="text-[12px] xl:text-[15px] font-[350]">
                        {property.bedroom?.title}
                      </span>
                    </div>
                    <div className="w-[0.2px] h-[70%] bg-[#B8976A]/70"></div>
                    <div className="flex items-center border-x-0 border-[#B8976A] gap-2 px-7">
                      <img src="/map.svg" className="size-[18px] text-[#B8976A]" />
                      <span className="text-[12px] xl:text-[15px] font-[350]">
                        {property.location?.title}
                      </span>
                    </div>
                    <div className="w-[0.2px] h-[70%] bg-[#B8976A]/70"></div>
                    <div className="flex items-center gap-2 pl-7">
                      <img src="/rupee.svg" className="size-[18px] text-[#B8976A]" />
                      <span className="text-[12px] xl:text-[15px] font-[350]">
                        {property.priceRange?.title}
                      </span>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Link href={`/properties/${property.slug}`}>
                    <button className="group font-light flex items-center gap-3 text-[#2c2c2c] text-[15px] uppercase tracking-wider hover:gap-3 transition-all">
                      EXPLORE PROPERTY
                      <ArrowUpRight
                        strokeWidth={1}
                        className="w-5 font-light h-5 xl:size-[22px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Property Cards - Tablet and Mobile (below lg) */}
          <div
            className="lg:hidden flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {properties.map((property: any) => (
              <motion.div
                key={property.id}
                className="min-w-[94%] md:min-w-[70%] snap-start bg-[#f2f0ea] overflow-hidden flex flex-col"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
              >
                {/* Property Image */}
                <div className="w-full h-[250px] md:h-[350px] overflow-hidden">
                  <img
                    src={property.heroImage?.url || property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Property Details */}
                <div className="p-4 md:px-8 md:pb-8 md:pt-[42px] flex flex-col flex-grow">
                  <h3 className="text-[24px] md:text-[28px] font-light text-[#2c2c2c] mb-4 xl:mb-[24px]">
                    {property.title}
                  </h3>

                  <p className="text-black/60 text-[17px] line-clamp-3 tracking-[0.02em] md:tracking-wide leading-5 md:leading-normal md:text-[16px] mb-6 xl:mb-[32px] flex-grow">
                    {property.overviewParagraph1 || property.description}
                  </p>

                  {/* Property Info */}
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-6 xl:mb-[64px] text-[#2c2c2c]">
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 md:w-5 md:h-5 text-[#B8976A]" />
                      <span className="text-[12px] md:text-base">{property.bedroom?.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#B8976A]" />
                      <span className="text-[12px] md:text-base">{property.location?.title}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-4 h-4 md:w-5 md:h-5 text-[#B8976A]" />
                      <span className="text-[12px] md:text-base">{property.priceRange?.title}</span>
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Link className="" href={`/properties/${property?.slug}`}>
                    <button className="group font-light flex items-center gap-3 text-[#2c2c2c] text-sm md:text-base uppercase tracking-wider hover:gap-3 transition-all">
                      EXPLORE PROPERTY
                      <ArrowUpRight
                        strokeWidth={1}
                        className="w-4 h-4 md:w-5 font-light md:h-5 xl:size-[22px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="w-full bg-white relative">
      {/* Top Bar Section - Absolute positioned to overlap hero */}
      <div className="absolute -top-[20px] left-1/2 -translate-x-1/2 w-[95%] xl:w-[86.5%] max-w-[1400px] z-20">
        <div className="bg-white ">
          <div className="grid z-[999] grid-cols-1 md:grid-cols-2 lg:gap-0 md:gap-3 gap-3 lg:grid-cols-5 py-[0.5rem] lg:divide-x divide-[#bf9e5f]">
            {/* Property Type */}
            <FilterDropdown
              label="PROPERTY TYPE"
              value={propertyType}
              options={PropertyTypes}
              onChange={setPropertyType}
            />

            {/* Bedroom */}
            <FilterDropdown
              label="BEDROOM"
              value={bedroom}
              options={Bedrooms}
              onChange={setBedroom}
            />

            {/* Price Range */}
            <FilterDropdown
              label="PRICE RANGE"
              value={priceRange}
              options={PriceRanges}
              onChange={setPriceRange}
            />

            {/* Location */}
            <FilterDropdown
              label="LOCATION"
              value={location}
              options={Locations}
              onChange={setLocation}
            />

            {/* Download Brochure Button */}
            <div className="col-span-2 md:col-span-1 flex justify-center items-center lg:px-[22px]">
              <button className="w-full  bg-[#342C27] text-white px-4 py-[14px] text-[15px] font-[250] tracking-[0.02em] hover:bg-[#2d2620] transition-colors">
                SEARCH PROPERTIES
              </button>
            </div>
          </div>
        </div>
      </div>

      {locationKeys.length > 0 ? (
        locationKeys.map((locationName, index) => renderLocationSection(locationName, index))
      ) : (
        <div className="w-full py-20 text-center">
          <p className="text-xl text-black/60">No properties found matching your criteria.</p>
        </div>
      )}
    </section>
  )
}

export default LocationProperties

const FilterDropdown = ({ label, value, options, onChange }: any) => {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative col-span-2 md:col-span-1 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 lg:px-6 py-[6px] flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <div>
          <div className="text-[13px] lg:text-[15px] text-[#7b7b7b] font-normal mb-1 uppercase tracking-wide">
            {label}
          </div>
          <div className="text-[12px] lg:text-base text-gray-900 font-normal">{value}</div>
        </div>
        <ChevronDown
          className={`w-4 h-4 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[46]" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 right-0 top-full bg-white border border-gray-200 shadow-lg z-[999] max-h-60 overflow-y-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option)
                  setIsOpen(false)
                }}
                className={`w-full text-left text-black px-4 lg:px-6 py-3 text-sm hover:bg-gray-50 transition-colors ${
                  value === option ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
