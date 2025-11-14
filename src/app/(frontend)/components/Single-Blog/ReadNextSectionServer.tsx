import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import ReadNextSectionClient from './ReadNextSectionClient'

export default async function ReadNextSectionServer({
  currentSlug,
}: {
  currentSlug: string
}) {
  const payload = await getPayloadHMR({ config: configPromise })

  // Fetch the current post by slug
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: currentSlug } },
    depth: 3, // ✅ Ensures relatedPosts data is fully populated
    limit: 1,
    select: {
      title: true,
      slug: true,
      content: true,
      publishedAt: true,
      readTime: true,
      meta: true,
      relatedPosts: true, // ✅ just true — not nested
    },
  })

  const currentPost = docs?.[0]
  const relatedPost =
    typeof currentPost?.relatedPosts === 'object'
      ? currentPost.relatedPosts
      : null

  if (!currentPost) return null

  // Debug: check what data you get
  // console.log('Related Post Data:', relatedPost)

  return (
    <ReadNextSectionClient
      currentPost={currentPost}
      relatedPost={relatedPost}
    />
  )
}
