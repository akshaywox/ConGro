import { CollectionConfig } from 'payload';

export const ConstructionUpdates: CollectionConfig = {
  slug: 'constructionUpdates',
  labels: {
    singular: 'Updates Image',
    plural: 'Updates Images',
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
    staticDir: '@/media/property-updates',
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
