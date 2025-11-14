import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import SharedLifestyleSectionClient from './SharedLifestyleSectionClient'

export default async function SharedLifestyleSectionServer({ slug }: { slug: string }) {
  const payload = await getPayloadHMR({ config: configPromise })

  const { docs: posts } = await payload.find({
    collection: 'posts',
    limit: 1,
    where: {
      slug: {
        equals: slug,
      },
      _status: {
        equals: 'published',
      },
    },
  })

  const post = posts?.[0]

  if (!post) {
    return <p className="text-center py-12">No post found for this slug.</p>
  }

  return <SharedLifestyleSectionClient post={post} />
}
