'use client'
import React, { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const LuxuryHomeBuilders = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('custom-home-builders')

  const accordionItems = [
    {
      id: 'architects-1',
      title: 'Superior Construction Standards',
      content:
        'Each development is built with precision engineering and top-grade materials to ensure unmatched quality and longevity.',
      image: '/home/cf4.png',
    },
    {
      id: 'architects-2',
      title: 'Architectural Distinction',
      content:
        'Every project reflects innovative design concepts and meticulous planning that enhance both aesthetics and functionality.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
    },
    {
      id: 'architects-3',
      title: 'Decades of Proven Excellence',
      content:
        'A long-standing legacy shaped by consistent performance, unwavering commitment, and an exceptional track record across every project delivered.',
      image: '/home/cf2.png',
    },
    {
      id: 'architects-4',
      title: 'Zero-Debt Financial Strength',
      content:
        'A solid, debt-free foundation that ensures financial stability, timely project delivery, and complete peace of mind for every homebuyer.',
      image: '/home/cf3.png',
    },
  ]

  const [currentImage, setCurrentImage] = useState(
    accordionItems.find((item) => item.id === 'custom-home-builders')?.image,
  )

  //   '/home/cf1.png',
  // '/home/cf2.png',
  // '/home/cf3.png',
  // '/home/cf4.png',

  const toggleAccordion = (id: string) => {
    if (id === 'custom-home-builders') return
    if (openAccordion === id) {
      // Closing the currently open one
      setOpenAccordion(null)

      // Open default accordion only if it's different from the currently displayed one
      const defaultItem = accordionItems.find((item) => item.id === 'custom-home-builders')
      if (currentImage !== defaultItem?.image) {
        setTimeout(() => {
          setOpenAccordion('custom-home-builders')
          setCurrentImage(defaultItem?.image)
        }, 310)
      }
    } else {
      const newItem = accordionItems.find((item) => item.id === id)
      setOpenAccordion(null)
      setTimeout(() => {
        setOpenAccordion(id)
        if (newItem?.image !== currentImage) setCurrentImage(newItem?.image)
      }, 310)
    }
  }

  return (
    <section className="w-full lg:h-[660px] xl:h-[768px] bg-white">
      <div className="grid lg:grid-cols-2 h-full">
        {/* Left Side - Dark Panel */}
        {/* Left Side - Dark Panel */}
        <motion.div
          className="bg-[#342C27] overflow-hidden text-white py-14 md:p-12 lg:p-16 xl:p-[4.3rem] 2xl:px-0 2xl:py-[4.3rem] 2xl:flex justify-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.15 }}
        >
          {/* Header + Accordion wrapper */}
          <motion.div
            className="flex w-[95%] mx-auto flex-col 2xl:mr-[11.5rem] xl:w-[530px]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
            }}
          >
            <motion.div
              className="mb-12 lg:mb-[80px] xl:mb-[126px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              <h1
                className="text-4xl md:text-[38px] text-white/80 lg:text-[42px] xl:text-[45px] mb-4 lg:mb-[24px] font-light xl:leading-[59px]"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Luxury Home <br className="hidden lg:block " />
                Builders
              </h1>
              <p className="text-white/80 md:text-sm text-[17px] font-[300] lg:text-[15px] tracking-[0.01em] md:leading-[26px] lg:max-w-[300px]">
                Build homes your clients will love with protect your bottom line.
              </p>
            </motion.div>

            {/* Accordion Items */}
            <motion.div
              className="lg:max-w-[530px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
              }}
            >
              {accordionItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`border-b-[0.4px] ${
                    openAccordion === item.id ? 'border-white' : 'border-white/40'
                  } `}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between py-2 md:py-2 lg:py-[14.5px] text-left group hover:text-gray-300 transition-colors"
                  >
                    <span
                      className={`text-lg md:text-xl lg:text-[25.5px] ${
                        openAccordion === item.id
                          ? 'text-white font-extralight'
                          : 'text-white/50 font-[100]'
                      } tracking-[0.04em]`}
                    >
                      {item.title}
                    </span>
                    <span
                      className={`${openAccordion === item.id ? 'text-white' : 'text-white/50'}  transition-colors`}
                    >
                      {openAccordion === item.id ? (
                        <Minus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
                      ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1} />
                      )}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 lg:duration-300 ease-[cubic-bezier(0.4, 0, 1, 1)] lg:ease-in-out ${
                      openAccordion === item.id ? 'xl:max-h-48 h-auto pb-6' : 'max-h-0'
                    }`}
                  >
                    {item.content && (
                      <>
                        <p className="text-gray-300 text-[17px] md:text-[14.5px] tracking-[0.02em] mt-[7px] leading-[26px] pr-8">
                          {item.content}
                        </p>
                        <div className="w-full lg:hidden aspect-[3/2] mt-4 mb-4">
                          {accordionItems.find((item) => item.id === openAccordion)?.image && (
                            <img
                              decoding="async"
                              loading="lazy"
                              src={
                                accordionItems.find((item) => item?.id === openAccordion)?.image ||
                                ''
                              }
                              alt="Luxury interior design"
                              className="w-full h-full object-cover "
                            />
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side - Image Panel */}
        <div className="bg-[#BF9E5F] xl:h-[768px] relative h-full">
          <div className="absolute inset-0 flex items-center justify-center 2xl:justify-start 2xl:items-start p-8 md:p-12 lg:p-16 xl:p-[6.5rem] 2xl:p-0 2xl:ml-[7rem] 2xl:py-[8rem]">
            <div className="w-full max-w-[578px] h-full">
              <motion.img
                key={currentImage} // change triggers fade
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                decoding="async"
                loading="lazy"
                src={currentImage}
                alt="Luxury interior design"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LuxuryHomeBuilders
