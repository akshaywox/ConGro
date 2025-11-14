import React from 'react'
import PageClient from './page.client'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const getGalleryPage = async () => {
  const payload = await getPayload({ config: configPromise })
  const galleryPage = await payload.findGlobal({
    slug: 'galleryPage',
    depth: 5,
  })
  return galleryPage
}

const page = async () => {
  const galleryPage = await getGalleryPage()
  const { lifestyle, brandingElements, architectureDesign, signatureResidences } = galleryPage

  const branding = brandingElements?.map(({ image, name, caption }) => ({
    image: typeof image === 'string' ? null : image?.url,
    name,
    caption,
  }))

  const lifestyles = lifestyle?.map(({ image, name, caption }) => ({
    image: typeof image === 'string' ? null : image?.url,
    name,
    caption,
  }))

  const architecture = architectureDesign?.map(({ image, name, caption }) => ({
    image: typeof image === 'string' ? null : image?.url,
    name,
    caption,
  }))

  const gallery = {
    branding,
    lifestyles,
    architecture,
  }


  // const

  return <PageClient gallery={gallery} signatureResidences={signatureResidences} />
}

export default page
