import { CollectionConfig } from 'payload';

export const BlogImage: CollectionConfig = {
  slug: 'blogImage',
  labels: {
    singular: 'Update Image',
    plural: 'Update Images',
  },
    access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'alt',
    group: 'Updates',
  },
  upload: {
    staticDir: '@/media/blog-images',
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
