import { Models } from './'
import {getPosts, Post} from '../services/posts'

interface State {
  posts: Post[]
}

interface Reducers {
  setPosts: Helix.Reducer<Models, State, Post[]>
 }

interface Effects {
  fetchPosts: Helix.Effect0<Models>
}
type Actions = Helix.Actions<Reducers, Effects>

export const namespace: keyof Namespace = 'posts'
export interface Namespace { 'posts': ModelApi }

export type ModelApi = Helix.ModelApi<State, Actions>

export function model(): Helix.ModelImpl<Models, State, Reducers, Effects> {
  return {
    state: {
      posts: [],
    },
    reducers: {
      setPosts(_state, posts) {
        return {posts}
      },
    },
    effects: {
      fetchPosts(state, send) {
        return getPosts()
          .then(send.posts.setPosts)
      },
    },
  }
}
