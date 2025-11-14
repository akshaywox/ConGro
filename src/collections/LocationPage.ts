// payload/globals/LocationPage.ts
import { GlobalConfig } from 'payload';

export const LocationPage: GlobalConfig = {
  slug: 'locationPage',
  label: 'Location Page',
  admin: {
    group: 'Location Page',
  },
  fields: [

    {
      name: 'places',
      type: 'array',
      label: 'Places',
      labels: {
        singular: 'Place',
        plural: 'Places',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Location Label',
          required: true,
        },
        {
          name: 'lat',
          type: 'number',
          label: 'Latitude',
          required: true,
        },
        {
          name: 'lng',
          type: 'number',
          label: 'Longitude',
          required: true,
        },
        {
          name: 'zoom',
          type: 'number',
          label: 'Zoom Level',
          min: 1,
          max: 22,
          defaultValue: 14,
        },
        {
          name: 'mapLink',
          type: 'text',
          label: 'Google Maps Link',
        },

        {
          name: 'locationPoints',
          type: 'array',
          label: 'Location Points',
          maxRows: 5,
          fields: [
            { name: 'title', type: 'text', label: 'Title' },
            { name: 'subtitle', type: 'text', label: 'Subtitle' },
          ],
        },
      ],
    },
  ],
};
