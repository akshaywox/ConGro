'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import SegmentUpdatesHero from '../../components/segment-updates/SegmentUpdatesHero'
import ReactLenis, { useLenis } from 'lenis/react'
import LatestUpdates from '../../components/segment-updates/LatestUpdates'
import Segments, { formatDate, SegmentArray } from '../../components/segment-updates/Segments'

export interface SegmentProps {
  categories: {
    title: string
  }
  meta: {
    title: string
    description: string
  }
  heroImage: {
    url: string
  }
  publishedAt: string
  slug: string
  title: string
  readTime: string
}

const PageClient = ({ posts }: any) => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  const segmentsRef = useRef<HTMLDivElement | null>(null)
  const isFirstRender = useRef(true)

  const segments = posts.map(
    (
      { categories, meta, heroImage, slug, title, readTime, publishedAt }: SegmentProps,
      { index }: { index: number },
    ) => ({
      id: index + 1,
      category: categories.title,
      description: meta.description,
      image: heroImage.url,
      date: formatDate({ dateString: publishedAt }),
      slug,
      title,
      readTime,
    }),
  )

  console.log('segments', segments)

  function soething() {
    segments.map((seg: SegmentArray, index: number) => {
      console.log(`(${index + 1}) ${seg?.category}`)
    })
  }

  soething()

  const [activeFilter, setActiveFilter] = useState('ALL POSTS')

  const filteredSegments = useMemo(() => {
    if (activeFilter === 'ALL POSTS') {
      console.log('(2) Clicked ALL POSTS, so showing all posts')
      return segments
    }
    console.log('(2) Clicked ' + activeFilter + ', so showing ' + activeFilter + ' posts')
    return segments.filter((seg: SegmentArray, index: number) => {
      console.log(`(3.${index + 1}) Checking if  ${seg?.category} ==  ${activeFilter}`)
      return seg?.category?.toLowerCase() == activeFilter.toLowerCase()
    })
  }, [segments, activeFilter])

  // Scroll when filter changes
  // ✅ Scroll only on user-triggered filter changes (skip on first load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    if (segmentsRef.current) {
      // Native smooth scroll
      lenis?.scrollTo(segmentsRef.current, { offset: -100, duration: 0.6, easing: (t) => t })

      // Or, if you prefer Lenis smooth scroll
      // lenis?.scrollTo(segmentsRef.current, { offset: -100, duration: 1.2 })
    }
  }, [activeFilter])

  return (
    <>
      <ReactLenis root />
      <main>
        <SegmentUpdatesHero />
        <LatestUpdates activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <div ref={segmentsRef}>
          <Segments segments={filteredSegments} />
        </div>
      </main>
    </>
  )
}

export default PageClient
