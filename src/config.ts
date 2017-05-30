import { ImageCollection } from './models/grams'

interface InstagramCreds {
  userId: string
  token: string
}

interface Config {
  mode: 'development' | 'production'
  instagram: Record<ImageCollection, InstagramCreds>
  posts: { url: string }
  contact: { email: string }
}

const config: Config = {
  mode: process.env.NODE_ENV,
  contact: {
    email: process.env.REACT_APP_CONTACT_EMAIL || 'email@example.com',
  },
  posts: {
    url: 'oliverproudlock.wordpress.com',
  },
  instagram: {
    footer: {
      userId: '21686064',
      token: '21686064.1677ed0.7157aa5ab77e47809b1b2d3753005e71',
    },
    homePage: {
      userId: '1793053169',
      token: '1793053169.1677ed0.355f2352a70541f4aac229b746b637ad',
    },
  },
}
export default config