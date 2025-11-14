import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import { SegmentProps } from '../../(route)/insights/page.client'
import Link from 'next/link'


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

export function formatDate({ dateString }: { dateString: string }) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export interface SegmentArray {
  id: number
  category: string
  description: string
  image: string
  date: string
  slug: string
  title: string
  readTime: string
}

export default function LatestUpdates({ segments }: { segments: SegmentArray[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 8

  const articles = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `https://images.unsplash.com/photo-${
      [
        '1600210492486-724fe5c67fb0',
        '1556909114-f6e7ad7d3136',
        '1600607687644-c7171b42498f',
        '1511632765486-a01980e01a18',
        '1600585154340-be6161a56a0c',
        '1600566753190-17f0baa2a6c3',
        '1600047509807-ba8f99d2cdde',
        '1600585154526-990dced4db0d',
      ][i % 8]
    }?w=800&q=80`,
    category: 'Event',
    readTime: '20 min read',
    date: 'Oct 10, 2025',
    title: 'The Heart of Social Living',
    description:
      'Experience next generation living with homes equipped with smart automation, intelligent security, and connected controls that bring comfort and convenience to your lifestyle.',
  }))

  const totalPages = Math.ceil(segments.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = segments.slice(startIndex, endIndex)

  const handlePageChange = ({ page }: any) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const getPageNumbers = () => {
    const pages = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <div className="w-full bg-white py-12 lg:pb-16 lg:pt-[5.2rem] ">
      <div className="w-[95%] lg:w-[90%] max-w-[1400px] mx-auto">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-x-[40px] lg:gap-y-[112px] mb-12 lg:mb-[6.9rem]">
          {currentArticles.map((article, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative aspect-square xl:aspect-auto xl:h-[573px] overflow-hidden mb-4 lg:mb-5">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="">
                {/* Meta Info */}
                <div className="flex items-center gap-1 lg:mt-[33px] text-xs lg:text-[15.5px] font-[350] text-[#BF9E5F]">
                  <span className="text-black">{`${article.category} -`}</span>
                  <span className="">{article.readTime}</span>
                  <span className="ml-auto ">{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg lg:text-xl mt-5 xl:mt-[21.4px] font-[300] text-gray-900 leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p
                  className={`${inter.className} text-[#666] mt-3 xl:mt-[20px] text-sm font-[350px] lg:text-[14px] leading-relaxed`}
                >
                  {article.description}
                </p>

                {/* Read More */}
                <Link href={`/insights/${article.slug}`}>
                  <button className="text-sm mt-[12.5px] text-gray-900 hover:text-gray-600 transition-colors font-[400]">
                    Read more
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-[0.6rem] mb-[127px] flex-wrap">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`w-10 h-10 xl:w-[46px] xl:h-[46px] flex items-center justify-center ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft
              strokeWidth={0.5}
              className="w-10 h-10 xl:w-[46px] xl:h-[46px] text-black"
            />
          </button>

          {/* Page Numbers */}
          {getPageNumbers().map((page, index) => (
            <React.Fragment key={index}>
              {page === '...' ? (
                <span className="w-10 h-10 flex items-center justify-center text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 xl:w-[46px] xl:h-[46px] text-sm flex items-center justify-center transition-colors ${
                    page === currentPage
                      ? 'bg-black text-white'
                      : 'border-[1px] border-black text-black hover:bg-black/80'
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`w-10 h-10 xl:w-[46px] xl:h-[46px] flex items-center justify-center  ${
              currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight
              strokeWidth={0.5}
              className="w-10 h-10 xl:w-[46px] xl:h-[46px] text-black"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
