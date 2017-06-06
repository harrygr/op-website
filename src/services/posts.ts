import axios from 'axios'

import config from '../config'

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

export function getPosts() {
  const options = { number: 100 }
  return axios.get(`${api}/${config.posts.url}/posts`, options)
    .then<Post[]>(response => response.data.posts)
}

export function getCategorySlug(post: Post) {
  const categories = extractPostCategories(post.categories)
    .map(cat => cat.slug)
  return categories.length ? categories[0] : 'uncategorised'
}

export function getCategoryName(post: Post) {
  const categories = extractPostCategories(post.categories)
    .map(cat => cat.name)
  return categories.length ? categories[0] : 'Uncategorised'
}

function extractPostCategories(categories: Record<string, PostCategory>) {
  return Object.keys(categories)
    .map(key => categories[key])
}

export function filterPostsByCategory(posts: Post[], category: string) {
  return posts.filter(post => {
    return Object.keys(post.categories).some(key => post.categories[key].slug === category)
  })
}