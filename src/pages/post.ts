import notFound from './404'
import template from './post.template.html'

export default {
  template,
  mounted () {
    this.$store.commit('setTitle', {title: this.post.title})
  },
  data () {
    return {
      notFound: false,
    }
  },
  computed: {
    post () {
      return this.$store.state.posts.find(post => post.ID === parseInt(this.$route.params.id, 10))
    },
  },
  components: { notFound },
}

