import React from 'react'
import LocationHero from '../../components/Location/LocationHero'
import Section from '../../components/Location/Section'

const PageClient = ({ locationPage }: { locationPage: any }) => {
  return (
    <>
      <main>
        <LocationHero />
        <Section locationPage={locationPage} />
      </main>
    </>
  )
}

export default PageClient
