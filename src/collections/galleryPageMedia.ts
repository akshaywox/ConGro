import { CollectionConfig } from 'payload';

export const GalleryPageMedia: CollectionConfig = {
  slug: 'galleryPageMedia',
  labels: {
    singular: 'Gallery  Image',
    plural: 'Gallery Images',
  },
    access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Gallery Page',
  },
  upload: {
    staticDir: '@/media/gallery-page-images',
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
