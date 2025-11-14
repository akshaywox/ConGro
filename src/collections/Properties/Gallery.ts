import { CollectionConfig } from 'payload';

export const PropertyGalleryMedia: CollectionConfig = {
  slug: 'propertyGalleryMedia',
  labels: {
    singular: 'Gallery',
    plural: 'Gallery',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'name',
    group: 'Single Property',
  },
  upload: {
    staticDir: '@/media/property-gallery',
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
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      label: 'Caption',
      required: true,
    },
  ],
};
