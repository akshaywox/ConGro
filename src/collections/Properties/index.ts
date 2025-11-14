import { CollectionConfig } from 'payload'

export const Properties: CollectionConfig = {
  slug: 'properties',
  labels: {
    singular: 'Property',
    plural: 'Properties',
  },
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'slug',
    defaultColumns: ['slug', 'createdAt'],
    group: 'Single Property',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        description: 'Used for dynamic routing (e.g., /properties/[slug])',
      },
    },
    {
      name: 'priceRange',
      type: 'relationship',
      relationTo: 'priceRanges',
      label: 'Price Range',
      required: true,
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
      label: 'Locations',
      required: true,
    },
    {
      name: 'bedroom',
      type: 'relationship',
      relationTo: 'bedrooms',
      label: 'Bedroom Types',
      required: true,
    },
    {
      name: 'propertyType',
      type: 'relationship',
      relationTo: 'propertyTypes',
      label: 'Property Types',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        // ---------------- HERO ----------------
        {
          label: 'Hero',
          fields: [
            { name: 'title', type: 'text', label: 'Title' },
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'propertiesHero',
              label: 'Hero Image',
            },
            {
              name: 'qrImage',
              type: 'upload',
              relationTo: 'propertiesHero',
              label: 'QR Image',
            },
            {
              name: 'reraId',
              type: 'text',
              label: 'RERA REG NO:',
            },
            {
              name: 'websiteUrl',
              type: 'text',
              label: 'Website Url',
            },
          ],
        },
        // ---------------- HOMEPAGE SHOWCASE ----------------
        {
          label: 'HomePage Showcase',
          fields: [
            { name: 'showcaseTitle', type: 'text', label: 'Title' },
            {
              name: 'showcaseImage',
              type: 'upload',
              relationTo: 'showcaseMedia',
              label: 'Hero Image',
            },
          ],
        },
        // ---------------- OVERVIEW ----------------
        {
          label: 'Overview',
          fields: [
            { name: 'overviewParagraph1', type: 'textarea', label: 'Paragraph 1' },
            { name: 'overviewParagraph2', type: 'textarea', label: 'Paragraph 2' },
          ],
        },

        // ---------------- GALLERY ----------------

        {
          label: 'Gallery',
          fields: [
            {
              name: 'gallery',
              type: 'relationship',
              relationTo: 'propertyGalleryMedia',
              hasMany: true,
              required: true,
            },
          ],
        },
        // ---------------- REFINED LIVING ----------------
        {
          label: 'Refined Living',
          fields: [
            { name: 'refinedParagraph', type: 'textarea', label: 'Main Paragraph' },
            {
              name: 'refinedIcons',
              type: 'array',
              label: 'Icons & Points',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'icons',
                  label: 'Icon',
                },
                { name: 'title', type: 'text', label: 'Title' },
                { name: 'tagline', type: 'textarea', label: 'Tagline' },
              ],
            },
          ],
        },

        // ---------------- LOCATION ----------------
        {
          label: 'Location Map',
          fields: [
            { name: 'mapLink', type: 'text', label: 'Map Link (URL)' },
            { name: 'latitude', type: 'number', label: 'Latitude' },
            { name: 'longitude', type: 'number', label: 'Longitude' },
            { name: 'zoom', type: 'number', label: 'Zoom' },
            {
              name: 'locationPoints',
              type: 'array',
              label: 'Location Points',
              fields: [
                { name: 'title', type: 'text', label: 'Title' },
                { name: 'subtitle', type: 'text', label: 'Subtitle' },
              ],
            },
          ],
        },

        // ---------------- ABOUT ----------------
        {
          label: 'About',
          fields: [
            { name: 'aboutSubtitle', type: 'text', label: 'Subtitle' },
            { name: 'aboutTitle', type: 'text', label: 'Title' },
            { name: 'aboutParagraph', type: 'textarea', label: 'Paragraph' },
          ],
        },

        // ---------------- AVAILABLE LAYOUTS ----------------
        {
          label: 'Available Layouts',
          fields: [
            {
              type: 'array',
              name: 'availableLayouts',
              label: 'Layouts',
              fields: [
                {
                  name: 'layoutImage',
                  type: 'upload',
                  relationTo: 'propertyLayouts',
                  label: 'Layout Image',
                },
                { name: 'layoutTitle', type: 'text', label: 'Title' },
                { name: 'layoutSubParagraph', type: 'textarea', label: 'Sub Paragraph' },
              ],
            },
          ],
        },

        // ---------------- CONNECTION TO CONFIDENT LIVING ----------------
        {
          label: 'Connection to Confident Living',
          fields: [
            {
              name: 'connectionPersonImage',
              type: 'upload',
              relationTo: 'connectUs',
              label: 'Person Image',
            },
            { name: 'connectionName', type: 'text', label: 'Name' },
            { name: 'connectionRole', type: 'text', label: 'Role' },
            { name: 'connectionParagraph', type: 'textarea', label: 'Paragraph' },
            { name: 'connectionPhone', type: 'text', label: 'Phone Number' },
            { name: 'connectionEmail', type: 'email', label: 'Email' },
            { name: 'connectionLocationText', type: 'text', label: 'Location Text' },
          ],
        },

        // ---------------- LEGACY OF ACHIEVEMENT ----------------
        {
          label: 'Legacy of Achievement',
          fields: [
            { name: 'legacyParagraph', type: 'textarea', label: 'Main Paragraph' },
            {
              name: 'legacyPoints',
              type: 'array',
              label: 'Achievement Points',
              fields: [
                { name: 'title', type: 'text', label: 'Title' },
                { name: 'subtitle', type: 'text', label: 'Subtitle' },
              ],
            },
          ],
        },

        // ---------------- CONSTRUCTION UPDATES ----------------
        {
          label: 'Construction Updates',
          fields: [
            {
              name: 'constructionUpdates',
              type: 'array',
              label: 'Construction Updates',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'constructionUpdates',
                  label: 'Update Image',
                },
                { name: 'status', type: 'text', label: 'Status' },
                { name: 'title', type: 'text', label: 'Title' },
                { name: 'text', type: 'textarea', label: 'Paragraph' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
