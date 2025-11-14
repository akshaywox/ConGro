import React from 'react'
import SegmentOverview from '../../components/SegmentOverviewPage/SegmentOverviewHero'
import OurVisionAndPhilosophy from '../../components/SegmentOverviewPage/OurVisionAndPhilosophy'
import WhatsSet from '../../components/SegmentOverviewPage/WhatsSet'
import CertificationsSection from '../../components/AboutUs/CertificationsSection'
import InsightsAndUpdates from '../../components/AboutUs/InsightsAndUpdates'

const PageClient = ({posts}:any) => {
  return (
    <div>
      <SegmentOverview />
      <OurVisionAndPhilosophy />
      <WhatsSet />
      <CertificationsSection />
      <section className="bg-white min-h-[5rem] xl:min-h-[12rem]"></section>
      <InsightsAndUpdates posts={posts} />
    </div>
  )
}

export default PageClient
