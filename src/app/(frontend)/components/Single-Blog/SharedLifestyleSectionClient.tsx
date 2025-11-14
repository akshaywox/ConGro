'use client'

import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'

export default function SharedLifestyleSectionClient({ post }: { post: any }) {
  const imageUrl =
    typeof post.heroImage === 'object' && post.heroImage?.url
      ? post.heroImage.url
      : '/single-blog/image1.jpg'

  return (
    <section className="bg-white">
      <div className="py-20 md:pt-[6.5rem] md:pb-[4.5rem] 2xl:pb-10">
        <div className="mt-16 w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-1 xl:gap-12 border-t border-gray-200">
          <MotionWrapper className="w-full md:w-1/2 flex items-start mt-12">
            <h2
              className="text-[36px] lg:text-5xl font-light text-black !leading-[1.4]"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {post.title}
            </h2>
          </MotionWrapper>

          <MotionWrapper
            className="w-full md:w-[22%] flex md:items-end md:justify-end md:pl-8 mt-5 md:mt-1"
            delay={0.2}
          >
            <p
              className="text-gray-500 text-[17px] md:text-[15px] !leading-[1.3] md:text-right font-[350]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {post.meta?.description ||
                'Discover a residential experience where innovation meets quality.'}
            </p>
          </MotionWrapper>
        </div>

        <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center md:mt-16">
          <p
            className="text-gray-700 text-[16px] font-normal"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {typeof post.categories === 'object' && 'title' in post.categories
              ? post.categories.title
              : 'Lifestyle'}{' '}
            <span className="text-[#bf9e5f]">
              –{' '}
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short', // e.g. "Nov"
                    day: 'numeric', // e.g. "3"
                    year: 'numeric', // e.g. "2025"
                  })
                : ''}
            </span>
          </p>

          <p
            className="text-[#bf9e5f] text-[16px] font-normal mt-2 md:mt-0"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {post.readTime ? `${post.readTime} read` : '5 min read'}
          </p>
        </div>
      </div>

      <MotionWrapper className="relative w-full md:h-screen h-[250px]">
        <Image
          src={imageUrl}
          alt={post.title}
          fill
          className="md:object-cover md:object-center object-contain"
          priority
        />
      </MotionWrapper>
    </section>
  )
}
