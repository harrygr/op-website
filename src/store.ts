import jsonp from 'jsonp'
import qs from 'qs'
import content from './content'
import config from './config'

interface State {
  invertNav: boolean
  posts: any[]
  instagrams: any[]
  postCategory: string
  loading: boolean
  title: string | null
}

export default {
  state: {
    invertNav: true,
    posts: [],
    instagrams: [],
    postCategory: null,
    loading: false,
    title: null,
  },
  mutations: {
    setNavInverted (state, inverted) {
      state.invertNav = inverted
    },
    setLoading (state, {loading}) {
      state.loading = loading
    },
    setPosts (state, {posts, postCategory}) {
      state.posts = posts
      state.postCategory = postCategory
    },
    setInstagrams (state, {instagrams}) {
      state.instagrams = instagrams
    },
    setTitle (state, {title}) {
      state.title = title
    },
  },
  actions: {
    getPosts ({commit}, {category = null}) {
      commit('setLoading', {loading: true})
      content.getPosts({category}).then(posts => {
        commit('setPosts', {posts, postCategory: category})
        commit('setLoading', {loading: false})
      }).catch(err => {
        commit('setLoading', {loading: false})
        return Promise.reject(err)
      })
    },
    getInstagrams ({commit}) {
      getInstagramPhotos()
        .then(instagrams => commit('setInstagrams', {instagrams}))
    },
  },
  getters: {
    postsInCategory (state) {
      return category => state.posts.filter(post => {
        return Object.keys(post.categories).some(key => post.categories[key].slug === category)
      })
    },
    latestPost (state) {
      return state.posts.slice(0, 1).find(post => post.ID)
    },
  },
}

function getInstagramPhotos () {
  const userId = config.instagram.userId
  const params = qs.stringify({
    access_token: config.instagram.accessToken,
    count: 10,
  })
  return new Promise((resolve, reject) => {
    jsonp(`https://api.instagram.com/v1/users/${userId}/media/recent/?${params}`, null, (err, response) => {
      if (err) {
        reject(err)
      }
      resolve(response.data)
    })
  })
}
