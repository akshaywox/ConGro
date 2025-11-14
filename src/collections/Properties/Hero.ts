import { CollectionConfig } from 'payload';

export const PropertiesHero: CollectionConfig = {
  slug: 'propertiesHero',
  labels: {
    singular: 'Hero Image',
    plural: 'Hero Images',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Single Property',
  },
  upload: {
    staticDir: '@/media/property-hero',
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
