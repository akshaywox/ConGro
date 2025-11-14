'use client'
import React from 'react'
import ExcellenceSection from '../../components/AboutUs/ExcellenceSection'
import ProvenExcellenceSection from '../../components/AboutUs/ProvenExcellenceSection'
import CertificationsSection from '../../components/AboutUs/CertificationsSection'
import ConfidentLivingSection from '../../components/AboutUs/ConfidentLivingSection'
import InsightsAndUpdates from '../../components/AboutUs/InsightsAndUpdates'
import BackgroundImageSection from '../../components/AboutUs/BackgroundImageSection'
import LegacySection from '../../components/AboutUs/AboutUsHero'
import ReactLenis, { useLenis } from 'lenis/react'

const PageClient = ({ posts }: any ) => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <div>
        <LegacySection />
        <ExcellenceSection />
        <BackgroundImageSection />
        <ProvenExcellenceSection />
        <CertificationsSection />
        <ConfidentLivingSection />
        <InsightsAndUpdates posts={posts} />
      </div>
    </>
  )
}

export default PageClient
