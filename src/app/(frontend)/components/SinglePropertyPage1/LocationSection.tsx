'use client'
import React from 'react'
import Image from 'next/image'
import { Playfair_Display, Inter } from 'next/font/google'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import mapStyle from '../../utils/mapStyle'
import MotionWrapper from '../MotionWrapper'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

export default function LocationSection({ locationPoints, mapDetails }: any) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  })
  const locationStats = [
    {
      value: '783,000 sqm',
      label: 'Residential Area',
    },
    {
      value: '783,000 sqm',
      label: 'Residential Area',
    },
    {
      value: '10-15 minutes',
      label: 'Drive to Lulu Mall',
    },
    {
      value: '20-30 minutes',
      label: 'Drive to International Airport',
    },
    {
      value: '20-30 minutes',
      label: 'Drive to Astern Hospital',
    },
  ]

  const defaultMap = {
    lat: 10.266539748341058,
    lng: 76.35755307237667,
    zoom: 15,
  }

  console.log('mapDetails', mapDetails)

  const { lat, lng, zoom, mapLink } = mapDetails

  return (
    <section className="bg-white pt-16  xl:pb-48 pb-[7rem]">
      <div className="">
        {/* Top border */}
        <div className="w-[90%] max-w-[1400px] mx-auto border-t border-gray-200 mb-12"></div>

        {/* Header */}
        <MotionWrapper className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-20">
          <h1
            className={`${playfair.className} text-[40px] md:text-5xl font-serif text-gray-900 mb-6 md:mb-0 mt-3`}
          >
            Location
          </h1>
          <div className="md:text-right md:w-[50%] lg:w-[30%] xl:w-[20%] mt-2 md:mt-10 lg:mt-2">
            <p
              className={`${inter.className}  text-[17px] md:text-[15px] text-[#7b7b7b] leading-normal`}
            >
              Discover a residential experience where innovation meets quality, sustainability
              blends with modern design, and every home.
            </p>
          </div>
        </MotionWrapper>

        {/* Map Container */}
        <MotionWrapper className="relative mb-16">
          {/* Replace this with your actual Google Maps embed or image */}
          <MotionWrapper className="w-full h-96 md:h-[450px] xl:h-[670px] bg-gray-100 rounded-sm overflow-hidden">
            {/* <Image
              src="/single_property/map.jpg"
              alt="Location Map"
              fill
              className="w-full h-full object-cover lg:object-cover"
            /> */}
            {/* Or use Google Maps iframe: */}
            {/* <iframe
              src={mapLink2}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat, lng }}
                zoom={zoom || 14}
                options={{
                  styles: mapStyle,
                  disableDefaultUI: false,
                  mapTypeControl: false,
                  streetViewControl: false,
                  fullscreenControl: true,
                }}
              >
                <Marker position={{ lat, lng }} />
              </GoogleMap>
            ) : (
              <div className="flex items-center justify-center h-96">
                <p>Loading map...</p>
              </div>
            )}
          </MotionWrapper>

          {/* View on Google Maps Button */}
          <button
            onClick={() => window.open(mapLink, '_blank')}
            className="absolute bottom-4 right-4 md:bottom-10 md:right-10 bg-[#342c27] text-white px-12 py-4 text-[15px] font-light tracking-wider hover:bg-gray-800 transition-colors"
          >
            VIEW ON GOOGLE MAPS
          </button>
        </MotionWrapper>

        {/* Location Stats */}
        <div className="w-[90%] max-w-[1400px] mx-auto flex items-center flex-wrap gap-y-[1.5rem] gap-x-[8rem] lg:gap-x-0  justify-center lg:justify-between">
          {locationPoints.map((stat: any, index: number) => (
            <MotionWrapper key={index} className="w-fit text-left">
              <h3
                className={`${playfair.className} text-xl md:text-2xl font-medium text-gray-900 mb-2`}
              >
                {stat.title}
              </h3>
              <p
                className={`${inter.className}  text-[17px] md:text-[15px] text-[#7b7b7b] font-[350]`}
              >
                {stat.subtitle}
              </p>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
