import { Models } from './'
import { getPosts, getPostBySlug, Post } from '../services/posts'

interface State {
  currentPost: Post | null
  blogPosts: Post[]
  stylePosts: Post[]
}

interface Reducers {
  setCurrentPost: Helix.Reducer<Models, State, Post | null>
  setBlogPosts: Helix.Reducer<Models, State, Post[]>
  setStylePosts: Helix.Reducer<Models, State, Post[]>
}

interface Effects {
  getSinglePost: Helix.Effect<Models, string>
  fetchBlogPosts: Helix.Effect0<Models>
  fetchStylePosts: Helix.Effect0<Models>
}
type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'posts'
export interface Namespace { 'posts': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      currentPost: null,
      blogPosts: [],
      stylePosts: [],
    },
    reducers: {
      setCurrentPost(_state, currentPost) {
        return { currentPost }
      },
      setBlogPosts(_state, blogPosts) {
        return { blogPosts }
      },
      setStylePosts(_state, stylePosts) {
        return { stylePosts }
      },
    },
    effects: {
      fetchBlogPosts(state, send) {
        return getPosts()
          .then(send.posts.setBlogPosts)
      },
      fetchStylePosts(state, send) {
        return getPosts({ category: 'style' })
          .then(send.posts.setStylePosts)
      },
      getSinglePost(state, send, slug) {
        const post = state.posts.blogPosts.find(p => p.slug === slug)
        if (post) {
          return Promise.resolve(send.posts.setCurrentPost(post))
        }
        return getPostBySlug(slug).then(send.posts.setCurrentPost)
      },
    },
  }
}
