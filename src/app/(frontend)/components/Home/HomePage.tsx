'use client'

import React, { useEffect, useRef, useState } from 'react'
import ProjectSliderSection from './ProjectSliderSection'
import GlimpseFutureHome from './GlimpseFutureHome'
import InsightsAndUpdates from '../AboutUs/InsightsAndUpdates'
import ScrollSection from './ScrollSection'
import HomesRightPlace from './Section'
import HeroVideoSection from './Herooo'
import { ReactLenis, useLenis } from 'lenis/react'
import Timeline from './Timeline'
import Banner from './Banner'

const HomePage = ({showcases, gallery, posts}:any) => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  const fadeShow = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  }



  return (
    <>
      <ReactLenis root />
      <main className="w-full">
        <HeroVideoSection />

        <Timeline />

        <Banner />

        <ProjectSliderSection showcases={showcases} />
        <ScrollSection />
        <GlimpseFutureHome gallery={gallery} />
        <HomesRightPlace />
        <section className="bg-white min-h-[5rem] xl:min-h-[12rem]"></section>
        <InsightsAndUpdates posts={posts} />
      </main>
    </>
  )
}

export default HomePage
