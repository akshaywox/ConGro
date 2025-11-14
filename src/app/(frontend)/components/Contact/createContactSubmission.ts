'use server'

import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

interface ContactFormData {
  fullName: string
  email: string
  phoneNumber: string
  projectType: string
  budgetRange: string
  visitDate: string
  visitTime: string
  message?: string
  ipAddress?: string
}

export async function createContactSubmission(data: ContactFormData) {
  const payload = await getPayloadHMR({ config: configPromise })

  const created = await payload.create({
    collection: 'contact-submissions',
    data: {
      ...data,
      status: 'new',
    },
  })

  return created
}
