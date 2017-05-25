import axios from 'axios'

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
  categories: { [key: string]: PostCategory }
  slug: string
}

const api = 'https://public-api.wordpress.com/rest/v1.1/sites'
const siteUrl = 'oliverproudlock.wordpress.com'

export function getPosts() {
  const options = { number: 100 }
  return axios.get(`${api}/${siteUrl}/posts`, options)
    .then<Post[]>(response => response.data.posts)
}
