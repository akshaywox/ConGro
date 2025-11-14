"use client"
import React from 'react'
import ReactLenis, { useLenis } from 'lenis/react'
import ContactPage from '../../components/Contact/ContactPage'

const page = () => {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })
  return (
    <>
      <ReactLenis root />
      <div>
        <ContactPage />
      </div>
    </>
  )
}

export default page
