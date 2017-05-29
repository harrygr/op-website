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

export function getCategorySlug(post: Post) {
  const categories = Object.keys(post.categories)
    .map(key => post.categories[key])
    .map(cat => cat.slug)
  return categories.length ? categories[0] : 'uncategorised'
}

export function filterPostsByCategory(posts: Post[], category: string) {
  return posts.filter(post => {
    return Object.keys(post.categories).some(key => post.categories[key].slug === category)
  })
}