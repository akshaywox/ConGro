import React from 'react'
import GalleryHero from '../../components/Gallery/GalleryHero'
import LifestyleBrandingSection from '../../components/Gallery/LifestyleBrandingSection'
import Gallery from '../../components/Gallery/Gallery'
import VirtualBrand from '../../components/Gallery/VirtualBrand'
import BackgroundSection from '../../components/Gallery/BackgroundSection'
import SignatureResidence from '../../components/Gallery/SignatureResidence'


const PageClient = ({gallery, signatureResidences}: any) => {
  return (
    <div>
        <GalleryHero/>
        <LifestyleBrandingSection/>
        <Gallery gallery={gallery} />
        <VirtualBrand/>
        <BackgroundSection/>
        <SignatureResidence signatureResidences={signatureResidences}  />
    </div>
  )
}

export default PageClient
