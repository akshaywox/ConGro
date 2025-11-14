import { CollectionConfig } from 'payload';

export const PropertyLayouts: CollectionConfig = {
  slug: 'propertyLayouts',
  labels: {
    singular: 'Layout',
    plural: 'Layouts',
  },
    access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Single Property',
  },
  upload: {
    staticDir: '@/media/property-layouts',
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
