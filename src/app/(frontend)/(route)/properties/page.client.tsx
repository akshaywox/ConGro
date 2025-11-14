'use client'
import ReactLenis, { useLenis } from 'lenis/react'
import React from 'react'
import LegacySection from '../../components/AboutUs/AboutUsHero'
import LocationProperties from '../../components/loc-prop/PropertiesListing'
import LuxuryHomeBuilders from '../../components/loc-prop/LuxuryBuilders'
import HomesRightPlace from '../../components/Home/Section'
import InsightsAndUpdates from '../../components/AboutUs/InsightsAndUpdates'
import WhatSetsUs from '../../components/loc-prop/WhatSetsUs'
import LocationPropPropertyHero from '../../components/loc-prop/Hero'

const PageClient = ({ posts, propertyTypes, locations, bedrooms, priceRanges, properties }: any) => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <main>
        <LocationPropPropertyHero /> 
        <LocationProperties properties={properties} propertyTypes={propertyTypes} locations={locations} bedrooms={bedrooms} priceRanges={priceRanges} />
        <LuxuryHomeBuilders />
        <WhatSetsUs />
        <HomesRightPlace />
        <section className="bg-white min-h-[5rem] xl:min-h-[12rem]"></section>
        <InsightsAndUpdates posts={posts} />
      </main>
    </>
  )
}

export default PageClient
