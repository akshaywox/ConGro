import React from 'react'
import PageClient from './page.client'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const getLocations = async () => {
  const payload = await getPayload({ config: configPromise })
  const locationPage = await payload.findGlobal({
    slug: 'locationPage',
    depth: 5,
  })
  return locationPage
}

const page = async () => {
  const locationPage = await getLocations()
  console.log('locationPage', locationPage)
  return (
    <PageClient locationPage={locationPage} />
  )
}

export default page
