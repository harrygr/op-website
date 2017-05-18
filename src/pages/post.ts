import notFound from './404'
import template from './post.template.html'
import {Post} from '../content'

export default {
  template,
  mounted () {
    this.$store.commit('setTitle', this.post.title)
  },
  data () {
    return {
      notFound: false,
    }
  },
  computed: {
    post () {
      return this.$store.state.posts.find((post: Post) => post.slug === this.$route.params.slug, 10)
    },
  },
  components: { notFound },
}
