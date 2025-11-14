'use client'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import DesktopMenu from './DesktopMenu'

const Header = ({ params }: any) => {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector('.hero')?.clientHeight || 500
      setScrolled(window.scrollY > heroHeight - 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isInsightsDynamic = pathname.startsWith('/insights/') && pathname !== '/insights'

  // Force scrolled style for specific routes
  const isStaticPage =
    pathname === '/terms-and-conditions' ||
    pathname === '/privacy-policy' ||
    pathname === '/contact' ||
    pathname === '/single-blog-page' ||
    isInsightsDynamic

  const isScrolled = scrolled || isStaticPage

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <button onClick={() => setIsOpen(true)} className="menu-button">
        <img
          loading="lazy"
          src={isScrolled ? '/home/menu-dark.png' : '/home/menu.png'}
          alt="Menu Button"
          decoding="async"
          referrerPolicy="no-referrer"
          className="next-image"
        />
      </button>

      <DesktopMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="navbar">
        <div className="nav-items">
          <a className="nav-item" href="/about">
            ABOUT
          </a>
          <a className="nav-item" href="/properties">
            PROPERTIES
          </a>
          <a className="nav-item" href="/lifestyle">
            LIFESTYLE
          </a>
        </div>
        <button onClick={() => redirect('/')} className="logo">
          <img
            loading="lazy"
            src={isScrolled ? '/home/logo-dark.svg' : '/home/logo-white.png'}
            alt="Logo"
            decoding="async"
            referrerPolicy="no-referrer"
            className="next-image"
          />
        </button>
      </div>

      <div className="buttons">
        <div className="message-button">
          <img
            loading="lazy"
            src={isScrolled ? '/home/message-dark.png' : '/home/message.png'}
            alt="Message"
            decoding="async"
            referrerPolicy="no-referrer"
            className="next-image"
          />
        </div>
        <div className="call-button">
          <img
            loading="lazy"
            src={isScrolled ? '/home/call-dark.png' : '/home/call.png'}
            alt="Call"
            decoding="async"
            referrerPolicy="no-referrer"
            className="next-image"
          />
        </div>
      </div>
    </header>
  )
}

export default Header
