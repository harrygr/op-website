import jsonp from 'jsonp'
import qs from 'qs'
import content from './content'
import config from './config'

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
    getPosts ({commit}, {category}) {
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
}

function getInstagramPhotos () {
  const userId = config.instagram.userId
  const params = qs.stringify({
    access_token: config.instagram.accessToken,
    count: 5,
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
