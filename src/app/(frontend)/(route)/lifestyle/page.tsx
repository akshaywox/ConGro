'use client'
import React from 'react'
import LifestyleHero from '../../components/lifestyle/LifestyleHero'
import SocialLivingSection from '../../components/lifestyle/SocialLiving'
import WellnessRecreation from '../../components/lifestyle/WellnessRecreation'
import SmartLivingFeatures from '../../components/lifestyle/SmartLivingFeatures'
import GreenLiving from '../../components/lifestyle/GreenLiving'
import FamilySpaces from '../../components/lifestyle/FamilySpaces'
import ReactLenis, { useLenis } from 'lenis/react'

const page = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <main>
        <LifestyleHero />
        <SocialLivingSection />
        <WellnessRecreation />
        <SmartLivingFeatures />
        <GreenLiving />
        <FamilySpaces />
      </main>
    </>
  )
}

export default page
