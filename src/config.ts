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
  videos: {video1: string, video2: string}
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
      userId: process.env.REACT_APP_INSTA1_USER || '21686064',
      token: process.env.REACT_APP_INSTA1_TOKEN || '21686064.1677ed0.7157aa5ab77e47809b1b2d3753005e71',
    },
    homePage: {
      userId: process.env.REACT_APP_INSTA1_USER || '1793053169',
      token: process.env.REACT_APP_INSTA2_TOKEN || '1793053169.1677ed0.355f2352a70541f4aac229b746b637ad',
    },
  },
  videos: {
    video1: process.env.REACT_APP_VIDEO1 || 'iK14HYxHNvI',
    video2: process.env.REACT_APP_VIDEO2 || '2JRyZd9U-zk',
  },
}

export default config
