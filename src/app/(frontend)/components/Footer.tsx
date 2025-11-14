'use client'

import React from 'react'
import { ArrowUpRight, Heart } from 'lucide-react'
import { Playfair_Display, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// Font setup
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const links = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Properties',
    href: '/properties',
  },
  {
    label: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    label: 'Segment Overview',
    href: '/segment-overview',
  },
  {
    label: 'Location',
    href: '/location',
  },
]

export default function PremiumFooter() {
  return (
    <footer className={`bg-black text-white py-16 ${inter.className}`}>
      <div className="w-[90%] max-w-[1400px] mx-auto">
        {/* Top Section - Newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 pb-16 border-b border-white border-opacity-20">
          <div>
            <h2
              className={`${playfair.className} text-4xl md:text-5xl lg:text-[48px] !leading-[1.3]`}
            >
              Take the Next Step
              <br />
              Towards Premium Living
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-5  text-[15px]">
            <input
              type="email"
              placeholder="Enter your mail"
              className="xl:w-[320px] flex-1 bg-transparent border border-white border-opacity-20 px-6 py-3 text-[15px] font-light placeholder-white/30 placeholder:text-base focus:outline-none focus:border-gray-500 transition-colors"
            />

            <button className="bg-white text-black px-8 py-4 xl:w-[230px] text-[15px] font-light hover:bg-gray-100 transition-colors whitespace-nowrap">
              JOIN NOW
            </button>
          </div>
        </div>

        {/* Middle Section - Contact & Links */}
        <div className="py-16 flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
          {/* Contact Column */}
          <div className="lg:w-1/3">
            <h3 className={`${playfair.className} text-[24px] font-light mb-7 mt-2`}>
              Get in Touch
            </h3>

            <Link
              href="/contact"
              className="bg-white w-full md:w-[72%] text-black px-6 py-5 text-sm font-normal md:font-light hover:bg-gray-100 transition-colors flex items-center justify-center gap-4 mb-8"
            >
              CONTACT US
              <ArrowUpRight strokeWidth={1} size={20} />
            </Link>

            <button className="text-[15px] md:text-[13px] xl:text-[15px] text-white font-light hover:text-white transition-colors flex items-center gap-4 mt-20">
              EXPLORE CONFIDENT GROUP'S LEGACY
              <ArrowUpRight strokeWidth={1} size={20} />
            </button>
          </div>

          {/* Links Wrapper */}
          <div className="flex flex-row gap-12  lg:gap-24">
            {/* Links Column 1 */}
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[16px] text-white font-light hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {/* Links Column 2 */}
            <div className="space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-[16px] text-white font-light hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 pb-12 mt-4">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/aboutUs/pajamas_twitter.svg"
              alt="X (Twitter)"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/aboutUs/circum_instagram.svg"
              alt="Instagram"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Image
              src="/aboutUs/uit_facebook-f.svg"
              alt="Facebook"
              width={32}
              height={32}
              className="object-contain"
            />
          </a>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="pt-8 border-t border-white border-opacity-20 flex flex-col sm:flex-row justify-between items-center gap-4 text-[15px] text-white font-light">
          <p>Copyright 2025 ConfidentGroup . All rights reserved.</p>
          <p className="flex items-center gap-1 text-[#cacaca]">
            Crafted with <Heart size={12} className="fill-current" /> by Woxro
          </p>
        </div>
      </div>
    </footer>
  )
}
