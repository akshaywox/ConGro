import React, { useState } from 'react'

export interface FilterButtonsProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export default function FilterButtons({ activeFilter, onFilterChange }: FilterButtonsProps) {
  const filters = ['ALL POSTS', 'NEWS', 'EVENT', 'BLOGS']

  return (
    <div className="relative w-full">
      {/* Absolute positioned filter buttons */}
      <div className="md:absolute w-full mb-4 md:mt-0 flex justify-center xl:-top-[188px] z-[48]">
        <div className="bg-white p-4 overflow-hidden">
          <div className="md:flex grid grid-cols-2 flex-wrap gap-5 md:gap-0 sm:flex-nowrap">
            {filters.map((filter, index) => (
              <div
                key={filter}
                className={`px-4 ${index === 0 ? '' : 'md:border-l-[0.4px] md:border-[#BF9E5F]'} w-full `}
              >
                <button
                  onClick={() => {
                    onFilterChange(filter)
                    console.log('(1) onFilterChange function call with: ', filter)
                  }}
                  className={`px-10 lg:px-[46px] py-4 lg:py-4 w-full text-sm lg:text-sm font-[350] tracking-wide transition-colors whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-[#342C27] text-white'
                      : 'bg-white text-gray-700 border-[0.8px] border-[#342C27] hover:bg-gray-50'
                  }`}
                >
                  {filter}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// // Usage Example Component showing how to integrate with a section
// export function SectionWithFilters() {
//   return (
//     <div className="relative w-full bg-gray-100 pt-20 pb-12">
//       {/* Filter Buttons positioned absolutely */}
//       <FilterButtons />

//       {/* Your section content */}
//       <div className="w-[90%] max-w-[1400px] mx-auto">
//         <h2 className="text-3xl font-bold text-gray-900 mb-8">
//           Latest Updates
//         </h2>
//         {/* Your content here */}
//         <div className="bg-white p-8 rounded-lg">
//           <p className="text-gray-600">Your content goes here...</p>
//         </div>
//       </div>
//     </div>
//   );
// }
