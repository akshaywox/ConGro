// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import { Properties } from './collections/Properties'
import { PropertyGalleryMedia } from './collections/Properties/Gallery'
import { Icons } from './collections/Icons'
import { PropertyLayouts } from './collections/Properties/Layouts'
import { ConnectUs } from './collections/Properties/Connect'
import { ConstructionUpdates } from './collections/Properties/Updates'
import { PropertiesHero } from './collections/Properties/Hero'
import { ShowcaseMedia } from './collections/Properties/ShowcaseMedia'
import { BlogImage } from './collections/Posts/BlogImage'
import { HomeGallery } from './collections/Home/HomeGallery'
import { PropertyTypes } from './collections/Properties/propertyTypes'
import { Bedrooms } from './collections/Properties/bedrooms'
import { PriceRanges } from './collections/Properties/priceRanges'
import { Locations } from './collections/Properties/locations'
import { ContactSubmissions } from './collections/contact'
import { LocationPage } from './collections/LocationPage'
import { GalleryPage } from './collections/GalleryPage'
import { GalleryPageMedia } from './collections/galleryPageMedia'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below.
      // beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,
    PropertyGalleryMedia,
    Properties,
    Icons,
    PropertyLayouts,
    ConnectUs,
    ConstructionUpdates,
    PropertiesHero,
    ShowcaseMedia,
    BlogImage,
    HomeGallery,
    PropertyTypes,
    PriceRanges,
    Bedrooms,
    Locations,
    ContactSubmissions,
    GalleryPageMedia
  ],
  cors: [getServerSideURL(), 'https://676tvp6c-3001.inc1.devtunnels.ms/', 'https://676tvp6c-3001.inc1.devtunnels.ms'].filter(Boolean),
  // globals: [Header, Footer],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  globals: [LocationPage, GalleryPage],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
