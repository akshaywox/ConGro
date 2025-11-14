import { getPayload } from 'payload'
import { getLastTwoBlogs, getProperties } from '../../page'
import PageClient from './page.client'
import configPromise from '@payload-config'

const getPropertyTypes = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: propertyTypes } = await payload.find({
    collection: 'propertyTypes',
    depth: 9999,
  })
  return propertyTypes
}

const getLocations = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: propertyTypes } = await payload.find({
    collection: 'locations',
    depth: 9999,
  })
  return propertyTypes
}

const getBedrooms = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: propertyTypes } = await payload.find({
    collection: 'bedrooms',
    depth: 9999,
  })
  return propertyTypes
}

const getPriceRanges = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: propertyTypes } = await payload.find({
    collection: 'priceRanges',
    depth: 9999,
  })
  return propertyTypes
}

const page = async () => {
  const posts = await getLastTwoBlogs()
  const propertyTypes = await getPropertyTypes()
  const locations = await getLocations()
  const bedrooms = await getBedrooms()
  const priceRanges = await getPriceRanges()
  const properties = await getProperties()

  return (
    <PageClient
      properties={properties}
      propertyTypes={propertyTypes}
      locations={locations}
      bedrooms={bedrooms}
      priceRanges={priceRanges}
      posts={posts}
    />
  )
}

export default page
