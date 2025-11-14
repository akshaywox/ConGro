import React from 'react'
import HomePage from './components/Home/HomePage'
import { getPayload } from 'payload'
import configPromise from '@payload-config' // your payload.config.ts export path
import { cache } from 'react'
import { SwitchLayoutGroupContext } from 'framer-motion'

export const getProperties = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: properties } = await payload.find({
    collection: 'properties',
    depth: 9999,
  })
  return properties
})

export const getLastTwoBlogs = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 2,
    sort: '-date',
  })
  return posts
}

const getGalleryImages = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: galleryImages } = await payload.find({
    collection: 'homeGallery',
    depth: 9999,
  })
  return galleryImages
})

const page = async () => {
  const properties = await getProperties()
  const galleryImages = await getGalleryImages()
  const posts = await getLastTwoBlogs()

  console.log('properties', properties)

  // Create a new array with only showcaseTitle and showcaseImage
  const showcases = properties.map(({ showcaseTitle, showcaseImage, slug }) => ({
    slug,
    showcaseTitle,
    showcaseImage,
  }))

  const gallery = galleryImages.map(({ url }) => ({
    url,
  }))


  return (
    <>
      <HomePage posts={posts} gallery={gallery} showcases={showcases} />
    </>
  )
}

export default page
