import { CollectionConfig } from 'payload';

export const PriceRanges: CollectionConfig = {
  slug: 'priceRanges',
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
