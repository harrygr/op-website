import jsonp from 'jsonp'
import qs from 'qs'
import content from './content'
import config from './config'

const contentIds = {
  posts: '2wKn6yEnZewu2SCCkus4as',
}

export default {
  state: {
    invertNav: true,
    posts: [],
    instagrams: [],
  },
  mutations: {
    setNavInverted (state, inverted) {
      state.invertNav = inverted
    },
    setPosts  (state, {posts}) {
      state.posts = posts
    },
    setInstagrams (state, {instagrams}) {
      state.instagrams = instagrams
    },
  },
  actions: {
    getPosts ({commit}) {
      content.getEntries({
        content_type: contentIds.posts,
      }).then(entries => commit('setPosts', {posts: entries.items.map(post => post.fields)}))
    },
    getInstagrams ({commit}) {
      getInstagramPhotos()
        .then(instagrams => commit('setInstagrams', {instagrams}))
    },
  },
  getters: {
    postsInCategory: (state) => (category) => {
      return state.posts.filter(post => getPostCategory(post).toLowerCase() === category.toLowerCase())
    },
  },
}

function getPostCategory (post) {
  return (post.category && post.category.length) ? post.category[0].fields.title : ''
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
