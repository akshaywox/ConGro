import { CollectionConfig } from 'payload'

export const HomeGallery: CollectionConfig = {
  slug: 'homeGallery',
  labels: {
    singular: 'HomePage Gallery',
    plural: 'HomePage Gallery',
  },
  access: {
    read: () => true,
    update: () => true,
    delete: () => true,
    create: () => true
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Home Page',
  },
  upload: {
    staticDir: '@/media/home',
    mimeTypes: ['image/*'], // Only allow image uploads
    adminThumbnail: 'url',  // Automatically shows the uploaded image as thumbnail
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
