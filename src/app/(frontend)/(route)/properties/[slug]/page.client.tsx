import React from 'react'
import OverviewSection from '../../../components/SinglePropertyPage1/OverviewSection'
import GallerySection from '../../../components/SinglePropertyPage1/GallerySection'
import RefinedLiving from '../../../components/SinglePropertyPage1/RefinedLiving'
import LocationSection from '../../../components/SinglePropertyPage1/LocationSection'
import PinnacleLiving from '../../../components/SinglePropertyPage1/PinnacleLiving'
import AvailableLayouts from '../../../components/SinglePropertyPage1/AvailableLayouts'
import ConnectSection from '../../../components/SinglePropertyPage1/ConnectSection'
import LegacySectionProperty from '../../../components/SinglePropertyPage1/LegacySectionProperty'
import PremiumLivingForm from '../../../components/SinglePropertyPage1/PremiumLivingForm'
import Construction from '../../../components/SinglePropertyPage1/Construction'
import SinglePropertyHero from '../../../components/SinglePropertyPage1/SinglePropertyHero'

const Pageclient = ({ property }: any) => {
  const {
    heroImage,
    title,
    qrImage,
    reraId,
    websiteUrl,
    overviewParagraph1,
    overviewParagraph2,
    gallery,
    refinedParagraph,
    refinedIcons,
    locationPoints,
    aboutSubtitle,
    aboutParagraph,
    aboutTitle,
    availableLayouts,
    legacyParagraph,
    legacyPoints,
    mapLink,
    latitude,
    longitude,
    zoom
  } = property

  const connection = {
    email: property.connectionEmail,
    phone: property.connectionPhone,
    name: property.connectionName,
    paragraph: property.connectionParagraph,
    locationText: property.connectionLocationText,
    personImage: property.connectionPersonImage,
    role: property.connectionRole,
  }

  const mapDetails = {
    mapLink,
    lat: Number(latitude),
    lng: Number(longitude),
    zoom
  }

  return (
    <div>
      <SinglePropertyHero qrImage={qrImage} reraId={reraId} websiteUrl={websiteUrl} title={title} heroImage={heroImage} />
      <OverviewSection
        overviewParagraph1={overviewParagraph1}
        overviewParagraph2={overviewParagraph2}
      />
      <GallerySection gallery={gallery} />
      <RefinedLiving refinedParagraph={refinedParagraph} refinedIcons={refinedIcons} />
      <LocationSection  mapDetails={mapDetails} locationPoints={locationPoints} />
      <PinnacleLiving
        aboutSubtitle={aboutSubtitle}
        aboutParagraph={aboutParagraph}
        aboutTitle={aboutTitle}
      />
      <AvailableLayouts availableLayouts={availableLayouts} />
      <ConnectSection connection={connection} />
      <LegacySectionProperty legacyParagraph={legacyParagraph} legacyPoints={legacyPoints} />
      <PremiumLivingForm />
      <Construction />
     
    </div>
  )
}

export default Pageclient
