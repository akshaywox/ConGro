import React from 'react'
import PageClient from './page.client'
import { getPayload } from 'payload';
import configPromise from '@payload-config' // your payload.config.ts export path

interface Props {
  params: {
    slug: string
  }
}

const PropertyLayout = async ({ params }: Props) => {
const payload = await getPayload({ config: configPromise });

  // Find the property that matches the current slug
  const { docs: properties } = await payload.find({
    collection: 'properties',
    where: {
      slug: {
        equals: params.slug,
      },
    },
    depth: 9999, // optionally include related media/documents
  })

  const property = properties?.[0]

  if (!property) {
    // You can handle 404 here or redirect
    return <div>Property not found</div>
  }



  return (
    <>
      <PageClient property={property} />
    </>
  )
}

export default PropertyLayout
