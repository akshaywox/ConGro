'use client'
import React, { useState } from 'react'
import { X, Instagram, Menu, Facebook } from 'lucide-react'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const DesktopMenu = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  const menuItems = [
    {
      label: 'ABOUT',
      href: '/about',
    },
    {
      label: 'PROJECTS',
      href: '/properties',
    },
    {
      label: 'LIFESTYLE',
      href: '/lifestyle',
    },
    {
      label: 'GALLERY',
      href: '/gallery',
    },
    {
      label: 'SEGMENT OVERVIEW',
      href: '/segment-overview',
    },
    {
      label: 'SEGMENT UPDATES',
      href: '/insights',
    },
    {
      label: 'LOCATION',
      href: '/location',
    },
    {
      label: 'CONTACT',
      href: '/contact',
    },
  ]
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
    >
      {/* Left Sidebar - Dark */}
      <div
        className={`absolute left-0 top-0 h-full w-full lg:w-[375px] xl:w-[400px] bg-[#342C27] transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col h-full p-6 xl:p-8">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-[0.5rem] xl:mb-9 text-white hover:opacity-80 transition-opacity"
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={1} />
          </button>

          {/* Logo */}
          <div className="mb-[2rem] xl:mb-12">
            <img className="w-auto h-10" src="/home/logo-white.png" alt="" />
          </div>

          {/* Menu Items */}
          <nav className="flex-1 flex flex-col gap-8 lg:gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-white ${inter.className} font-[250] text-[15px] xl:text-[17px] 2xl:text-[17px] hover:opacity-60 transition-opacity duration-300`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 mt-8">
            <a href="#twitter" className="text-white " aria-label="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth={0.5} fill="white">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#instagram" className="text-white " aria-label="Instagram">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#facebook" className="text-white " aria-label="Facebook">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
          </div>

          {/* CTA Button */}
          <button className="mt-8 w-full py-5 text-white bg-white/10 text-base font-light tracking-widest hover:bg-white hover:text-[#342C27] transition-all duration-300">
            TAKE THE NEXT STEP
          </button>
        </div>
      </div>

      {/* Right Side - Hero Image */}
      <div
        className={`absolute right-0 top-0 h-full w-0 lg:w-[calc(100%-375px)] xl:w-[calc(100%-400px)] bg-cover bg-center transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage:
            'url("/home/hamburgerbg.png")',
        }}
      >
        <div className="relative h-full w-full bg-gradient-to-r  to-transparent">
          <div className="absolute left-8 bottom-6 xl:bottom-8 max-w-2xl 2xl:max-w-3xl text-white">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-20 h-[1px] bg-white"></div>
              <span className="text-[17px] font-[250] tracking-widest">Welcome Home</span>
            </div>

            <h1 className="text-[44px] xl:text-[50px] 2xl:text-[56px] playflair mb-5 leading-tight">
              Your Confident Way of Living
            </h1>

            <p className="text-[14px] xl:text-[18px] font-[250] w-[98%] leading-relaxed">
              Experience next generation living with homes equipped with smart automation,
              intelligent security, and connected controls that bring comfort and convenience to
              your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesktopMenu
