import SharedLifestyleSectionServer from '@/app/(frontend)/components/Single-Blog/SharedLifestyleSectionServer'
import ReadNextSectionServer from '@/app/(frontend)/components/Single-Blog/ReadNextSectionServer'

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div>
      <SharedLifestyleSectionServer slug={slug} />
      <ReadNextSectionServer currentSlug={slug} />
    </div>
  )
}
