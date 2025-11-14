import { CollectionConfig } from 'payload'

export const PropertyTypes: CollectionConfig = {
  slug: 'propertyTypes',
  access: {
    create: () => true,
    delete: () => true,
    read: () => true,
    update: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Single Property',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
}
