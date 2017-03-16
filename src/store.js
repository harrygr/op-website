import content from './content'

const contentIds = {
  posts: '2wKn6yEnZewu2SCCkus4as',
}

export default {
  state: {
    invertNav: true,
    posts: [],
  },
  mutations: {
    setNavInverted (state, inverted) {
      state.invertNav = inverted
    },
    setPosts  (state, {posts}) {
      state.posts = posts
    },
  },
  actions: {
    getPosts ({commit}) {
      content.getEntries({
        content_type: contentIds.posts,
      }).then(entries => commit('setPosts', {posts: entries.items.map(post => post.fields)}))
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
