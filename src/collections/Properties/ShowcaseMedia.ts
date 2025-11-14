import { CollectionConfig } from 'payload';

export const ShowcaseMedia: CollectionConfig = {
  slug: 'showcaseMedia',
  labels: {
    singular: 'HomePage Showcase Image',
    plural: 'HomePage Showcase Images',
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
    staticDir: '@/media/showcase-media',
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
