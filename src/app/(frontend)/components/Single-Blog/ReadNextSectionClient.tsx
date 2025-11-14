'use client'

import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import MotionWrapper from '../MotionWrapper'
import Link from 'next/link'
import RichText from '@/components/RichText'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export default function ReadNextSectionClient({
  currentPost,
  relatedPost,
}: {
  currentPost: any
  relatedPost?: any
}) {
  return (
    <section className="w-full bg-white py-[5.5rem]">
      <div className="w-[90%] max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-28">

        {/* ============ Left Sidebar (Related Post Only) ============ */}
        <MotionWrapper>
          <aside className="lg:flex-[0_0_24%]">
            <h3 className={`${playfair.className} text-[32px] font-serif text-gray-900 mb-9`}>
              Read Next
            </h3>

            {relatedPost ? (
              <div>
                <p className={`${inter.className} text-[16px] text-[#bf9e5f] mb-5`}>
                  {relatedPost?.publishedAt
                    ? new Date(relatedPost.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : '—'}{' '}
                  -{' '}
                  {relatedPost?.readTime
                    ? relatedPost.readTime.includes('min')
                      ? `${relatedPost.readTime} read`
                      : `${relatedPost.readTime} min read`
                    : '5 min read'}
                </p>

                <h4 className={`${inter.className} text-[20px] font-light text-gray-900 mb-6`}>
                  {relatedPost?.title}
                </h4>

                <p
                  className={`${inter.className} text-[15px] text-[#7b7b7b] mb-3 !leading-[1.7] xl:w-[98%]`}
                >
                  {relatedPost?.meta?.description ||
                    'A destination within your community, clubhouse is designed to bring people together in style.'}
                </p>

                <Link
                  href={`/posts/${relatedPost?.slug || '#'}`}
                  className="text-[15px] text-[#342c27] font-normal hover:underline"
                >
                  Read more
                </Link>

                <div className="border-t border-gray-200 mt-4"></div>

                <div className="flex lg:flex-col gap-5 mt-5 lg:mt-20 lg:justify-end lg:items-end">
                  <Image src="/single-blog/twitter.svg" alt="Twitter" width={22} height={22} />
                  <Image src="/single-blog/instagram.svg" alt="Instagram" width={22} height={22} />
                  <Image src="/single-blog/facebook.svg" alt="Facebook" width={22} height={22} />
                </div>
              </div>
            ) : (
              <p className="text-[#7b7b7b] leading-relaxed">No related post found for this blog.</p>
            )}
          </aside>
        </MotionWrapper>

        {/* ============ Right Section (Current Blog Content) ============ */}
       <div className="lg:flex-[0_0_66%]">
      <MotionWrapper>
        {currentPost?.content ? (
          <div
  className={`${inter.className} prose prose-lg w-full !m-0 !p-0 !mx-0 !px-0
    prose-headings:font-light prose-headings:text-black 
    prose-p:text-[#7b7b7b] prose-p:leading-relaxed prose-p:!max-w-full
    prose-a:text-[#bf9e5f] prose-a:no-underline hover:prose-a:underline
    prose-img:rounded-lg prose-img:shadow-md
    [&_*]:!max-w-full [&_*]:!mx-0 [&_*]:!px-0
    [&_h1]:!mt-2 [&_h2]:!mt-2 [&_h3]:!mt-2 [&_h4]:!mt-2 [&_h5]:!mt-2 [&_h6]:!mt-2
    [&_h1]:!pt-0 [&_h2]:!pt-0 [&_h3]:!pt-0 [&_h4]:!pt-0 [&_h5]:!pt-0 [&_h6]:!pt-0
  `}
  style={{
    maxWidth: 'none',
    marginLeft: '0',
    marginRight: '0',
    paddingLeft: '0',
    paddingRight: '0',
  }}
>
  <RichText data={currentPost.content} />
</div>


        ) : (
          <p className="text-[#7b7b7b] leading-relaxed">
            No content available for this post.
          </p>
        )}
      </MotionWrapper>
    </div>

      </div>
    </section>
  )
}
