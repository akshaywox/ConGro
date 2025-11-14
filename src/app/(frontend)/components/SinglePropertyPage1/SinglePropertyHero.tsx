import React from 'react'
import Image from 'next/image'
import { Cormorant_Garamond } from 'next/font/google'
import { Inter } from 'next/font/google'
import { ArrowUpRight } from 'lucide-react'
import MotionWrapper from '../MotionWrapper'

// Font import
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // adjust weights if needed
})

const SinglePropertyHero = ({ heroImage, title, qrImage, reraId, websiteUrl }: any) => {
  console.log('qrImage', qrImage)
  return (
    <section className="relative text-white">
      <div className="absolute inset-0 bg-black/40 z-[45] "></div>
      {/* Background Image */}
      <MotionWrapper className="relative w-full  min-h-[35rem] sm:min-h-[50rem] h-svh md:min-h-[600px] lg:min-h-[750px]">
        <Image src={heroImage?.url} alt="Team at work" fill className="object-cover object-top " />
      </MotionWrapper>

      {/* Overlay Content */}
      <div className="absolute inset-0 z-[47] flex flex-col justify-end x-6 px-6 md:px-10 xl:px-16">
        <MotionWrapper className="md:max-w-[24rem] lg:max-w-[28rem] xl:max-w-[52rem] 2xl:max-w-[50rem] ">
          <h1
            className={`playflair text-5xl lg:text-[70px] xl:text-[92px] 2xl:text-[100px] font-medium mb-6 !leading-[1.2] pb-8`}
          >
            {title}
          </h1>
          <p
            className={`${inter.className} flex items-center gap-2 text-[15px] font-light mb-6 !leading-[1.2] pb-20`}
          >
            BOOK SITE VISIT
            <ArrowUpRight className="w-5 h-5 text-white" />
          </p>
        </MotionWrapper>
      </div>

      <div
        className={`absolute top-[8.3rem] z-[47] right-6 md:right-10 lg:right-12  xl:right-[5.5rem] 2xl:right-36 text-white flex items-center gap-4  ${inter.className}`}
      >
        {/* QR Code */}
        <MotionWrapper className="relative size-[4.8rem] flex-shrink-0">
          <Image src={qrImage?.url} alt="QR Code" fill className="object-contain" />
        </MotionWrapper>

        {/* RERA Info Text */}
        <MotionWrapper className="text-[15px] font-light">
          <p>RERA REG NO:</p>
          <p>{reraId}</p>
          <a
            href={websiteUrl}
            className="text-white hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {websiteUrl}
          </a>
        </MotionWrapper>
      </div>

      {/* Certification Badge */}
      <div className="absolute z-[47] bottom-6 right-3 md:right-20 pb-20">
        <MotionWrapper className="relative size-[5.3rem]">
          <Image
            src="/aboutUs/PREMIUM LIFESTYLE LOGO FINAL (1) (1) 2.svg"
            alt="Certification Badge"
            fill
            className="object-contain"
          />
        </MotionWrapper>
      </div>
    </section>
  )
}

export default SinglePropertyHero
