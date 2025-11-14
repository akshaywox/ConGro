import { CollectionConfig } from 'payload'

export const Icons: CollectionConfig = {
  slug: 'icons',
  labels: {
    singular: 'Icon',
    plural: 'Icons',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticDir: '@/media/icons',
    mimeTypes: ['image/*'], // Only allow image uploads
    adminThumbnail: 'url', // Automatically shows the uploaded image as thumbnail
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      label: 'Alt Text',
    },
  ],
}
