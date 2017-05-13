import jsonp from 'jsonp'
import qs from 'qs'
import content, { Post } from './content'
import config from './config'

export interface State {
  invertNav: boolean
  posts: Post[]
  instagrams: Record<string, any[]>
  postCategory: string
  loading: boolean
  title: string | null
}

const store = {
  state: {
    invertNav: true,
    posts: [],
    instagrams: {},
    postCategory: null,
    loading: false,
    title: null,
  },
  mutations: {
    setNavInverted(state, inverted) {
      state.invertNav = inverted
    },
    setLoading(state, loading) {
      state.loading = loading
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setInstagrams(state, { instagrams, user}) {
      state.instagrams = { [user]: formatGrams(instagrams) }
    },
    setTitle(state, title) {
      state.title = title
    },
  },
  actions: {
    getPosts({ commit }, { category = null }) {
      commit('setLoading', true)
      content.getPosts(category).then(posts => {
        commit('setPosts', posts)
        commit('setLoading', false)
      }).catch(err => {
        commit('setLoading', false)
        return Promise.reject(err)
      })
    },
    getInstagrams({ commit }) {
      Object.keys(config.instagram).forEach(user => {
        getInstagramPhotos(config.instagram[user].userId, config.instagram[user].accessToken)
          .then(instagrams => commit('setInstagrams', { instagrams, user}))
          .catch(err => console.warn(err))
      })
    },
  },
  getters: {
    postsInCategory(state) {
      return category => state.posts.filter(post => {
        return Object.keys(post.categories).some(key => post.categories[key].slug === category)
      })
    },
    latestPost(state) {
      return state.posts.slice(0, 1).find(post => post.ID)
    },
  },
}

function getInstagramPhotos(userId: string, accessToken: string) {
  const params = qs.stringify({
    access_token: accessToken,
    count: 10,
  })
  return new Promise<any[]>((resolve, reject) => {
    jsonp(`https://api.instagram.com/v1/users/${userId}/media/recent/?${params}`, null, (err, response) => {
      if (err) {
        return reject(err)
      }
      if (response.meta && (response.meta.code < 200 || response.meta.code > 399)) {
        return reject(response.meta)
      }
      return resolve(response.data || [])
    })
  })
}

function formatGrams(grams) {
  return grams.map(gram => ({
    image: gram.images.standard_resolution.url,
    link: gram.link,
    caption: gram.caption.text,
  }))
}

export default store
