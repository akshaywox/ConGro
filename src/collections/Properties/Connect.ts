import { CollectionConfig } from 'payload';

export const ConnectUs: CollectionConfig = {
  slug: 'connectUs',
  labels: {
    singular: 'Connect Profile Image',
    plural: 'Connect Profile Images',
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Single Property',
  },
  upload: {
    staticDir: '@/media/property-connection',
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
};
