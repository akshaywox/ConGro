import { getPayload } from 'payload'
import configPromise from '@payload-config' // your payload.config.ts export path
import { cache } from 'react'
import PageClient from './page.client'

const getPosts = cache(async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: posts } = await payload.find({
    collection: 'posts',
    depth: 9999,
  })
  return posts
})

const page = async () => {
  const posts = await getPosts()
  console.log('posts', posts)
  return <PageClient posts={posts} />
}

export default page
