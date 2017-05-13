import axios from 'axios'
import config from './config'

interface PostAttachment {
  ID: number
  URL: string
  height: number
  width: number
}

interface PostCategory {
  ID: number
  description: string
  name: string
  post_count: number
  slug: string
}

export interface Post {
  ID: number
  URL: string
  title: string
  content: string
  excerpt: string
  date: string
  modified: string
  post_thumbnail: PostAttachment
  categories: {[key: string]: PostCategory}
}

const api = 'https://public-api.wordpress.com/rest/v1.1/sites'

export default {
  getPosts (category: string | null) {
    const defaultOptions = {number: 100}
    const options = category
      ? {...defaultOptions, params: {category}}
      : defaultOptions

    return axios.get(`${api}/${config.content.siteUrl}/posts`, options)
      .then<Post[]>(response => response.data.posts)
  },

  getPost (id: number) {
    return axios.get(`${api}/${config.content.siteUrl}/posts/${id}`)
      .then<Post>(response => response.data)
  },
}
