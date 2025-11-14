'use client'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import MotionWrapper from '../MotionWrapper'
import { Inter, Playfair_Display } from 'next/font/google'
import mapStyle from '../../utils/mapStyle'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const locationPoints = [
  { title: '783,000 sqm', subtitle: 'Residential Area' },
  { title: '783,000 sqm', subtitle: 'Residential Area' },
  { title: '10-15 minutes', subtitle: 'Drive to Lulu Mall' },
  { title: '20-30 minutes', subtitle: 'Drive to International Airport' },
  { title: '20-30 minutes', subtitle: 'Drive to Astern Hospital' },
]

const Section = ({ locationPage }: { locationPage: any }) => {
  const { places } = locationPage
  const [selectedPlace, setSelectedPlace] = useState(places[0] || null)

  useEffect(() => {
    if (!places.length) return

    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`
    script.async = true

    // Prevent loading multiple times
    if (!window.googleMapScriptLoaded) {
      document.body.appendChild(script)
      window.googleMapScriptLoaded = true
    }

    window.initMap = () => {
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
        zoom:  8,
        center: {
          lat: places[0].lat,
          lng: places[0].lng,
        },
        styles: mapStyle,
        gestureHandling: 'cooperative',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      })

      // Add markers
      places.forEach((place: any) => {
        const marker = new google.maps.Marker({
          position: { lat: place.lat, lng: place.lng },
          map,
          title: place.label,
        })

        marker.addListener('click', () => {
          setSelectedPlace(place)
          map.panTo({ lat: place.lat, lng: place.lng })
        })
      })
    }

    return () => {
      delete window.initMap
    }
  }, [places])

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`
  //   script.async = true
  //   document.body.appendChild(script)

  //   // Simulate fetching from admin or API
  //   const locations = [
  //     { name: 'Thrissur Temple', lat: 10.5231, lng: 76.2711 },
  //     { name: 'Guruvayur', lat: 10.5945, lng: 76.041 },
  //     { name: 'Chalakudy', lat: 10.3103, lng: 76.3318 },
  //     { name: 'Athirapally Falls', lat: 10.2859, lng: 76.5697 },
  //     { name: 'Vazhachal', lat: 10.2831, lng: 76.6011 },
  //   ]

  //   window.initMap = () => {
  //     const map = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 10,
  //       center: { lat: 10.45, lng: 76.35 },
  //       styles: [
  //         // paste your Snazzy JSON here
  //       ],
  //     })

  //     // Add markers dynamically
  //     locations.forEach((loc) => {
  //       const marker = new google.maps.Marker({
  //         position: { lat: loc.lat, lng: loc.lng },
  //         map,
  //         title: loc.name,
  //       })

  //       const info = new google.maps.InfoWindow({
  //         content: `<div style="font-size:14px; font-weight:500;">${loc.name}</div>`,
  //       })

  //       marker.addListener('click', () => {
  //         info.open(map, marker)
  //       })
  //     })
  //   }

  //   return () => {
  //     delete window.initMap
  //   }
  // }, [])
  return (
    <section className="w-full bg-white relative">
      {/* </div> */}
      <div className="w-full pt-[40px] md:pt-[75px] lg:pt-[103px] lg:pb-[177px]">
        <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto border-t-[0.5px] border-black/30 ">
          {/* Title */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center pt-[50px] pb-[60px] lg:pt-[50px] lg:pb-[82px] justify-between ">
            <h2 className="lg:text-[48px] text-black text-[40px] leading-10 lg:leading-normal xl:text-[46px] playflair">
              Seamless Access <br className="hidden md:block" />
              Effortless Living
            </h2>
            <div className="flex flex-col font-sans lg:mt-0 mt-[2rem] md:mt-5  leading-5 lg:leading-5 tracking-[0.02em] lg:tracking-wide text-left lg:text-right text-[17px]  lg:text-[15px] text-black/50 ">
              <p className="hidden lg:block">Discover a residential experience</p>
              <p className="hidden lg:block"> where innovation meets quality,</p>
              <p className="hidden lg:block">sustainability blends with modern</p>
              <p className="hidden lg:block">design, and every home.</p>
              <p className="lg:hidden max-w-[450px]">
                Discover a residential experience where innovation meets quality, sustainability
                blends with modern design, and every home.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* Map */}
          <div className="w-full">
            {/* Map Section */}
            <div className="w-full aspect-[2/3] md:aspect-[16/7.095] bg-gray-100">
              <div id="map" className="w-full h-full" />

              <div className="w-[95%] relative lg:w-[90%] max-w-[1400px] mx-auto">
                {/* Get Directions Button */}
                <button
                  onClick={() => {
                    if (selectedPlace) {
                      window.open(selectedPlace?.mapLink, '_blank')
                    }
                  }}
                  className="absolute lg:bottom-10 bottom-5 right-0 bg-[#342C27] text-white px-6 py-3 lg:py-[18px] lg:px-[5.1rem] flex items-center gap-2 hover:bg-gray-800 transition-colors shadow-lg"
                >
                  <span className="text-sm font-[300]">GET DIRECTIONS</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 mb-11 md:mt-[38px] md:mb-[38px] lg:mb-0 ">
          {/* Map */}
          <div className="w-[90%] max-w-[1400px] mx-auto flex md:flex-row flex-col items-start md:items-center gap-y-[2rem] flex-wrap md:gap-y-[1.5rem] md:gap-x-[8rem] lg:gap-x-0  justify-center lg:justify-between">
            {selectedPlace?.locationPoints?.map((stat: any, index: number) => (
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
      </div>
    </section>
  )
}

export default Section
