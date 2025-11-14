// payload/globals/LifestyleBrandingPage.ts
import { GlobalConfig } from 'payload';

export const GalleryPage: GlobalConfig = {
  slug: 'galleryPage',
  label: 'Gallery Page',
  admin: {
    group: 'Gallery Page',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        // --------------------------------------------------
        // 1) SHARED LIFESTYLE & BRANDING GALLERY
        // --------------------------------------------------
        {
          label: 'Shared Lifestyle & Branding Gallery',
          fields: [
            {
              name: 'brandingElements',
              type: 'array',
              label: 'BRANDING ELEMENTS',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'galleryPageMedia',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'textarea',
                },
              ],
            },
            {
              name: 'lifestyle',
              type: 'array',
              label: 'LIFESTYLE',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'galleryPageMedia',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'textarea',
                },
              ],
            },
            {
              name: 'architectureDesign',
              type: 'array',
              label: 'ARCHITECTURE & DESIGN',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'galleryPageMedia',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'textarea',
                },
              ],
            },
          ],
        },

        // --------------------------------------------------
        // 2) EXPLORE OUR SIGNATURE RESIDENCES
        // --------------------------------------------------
        {
          label: 'Explore Our Signature Residences',
          fields: [
            {
              name: 'signatureResidences',
              type: 'array',
              labels: {
                singular: 'Residence',
                plural: 'Residences',
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'galleryPageMedia',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'textarea',
                },
                {
                  name: 'link',
                  type: 'text', // or relationship if needed
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
