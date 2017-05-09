import template from './posts.template.html'

export default {
  template,
  data () {
    return {
      number: 10,
    }
  },
  mounted () {
    this.setPageTitle()
  },
  computed: {
    category () {
      return this.$route.params.category
    },
    posts () {
      return this.$store.getters.postsInCategory(this.category).slice(0, this.number)
    },
  },
  methods: {
    setPageTitle () {
      this.$store.commit('setTitle', { title: `${capitalizeWords(this.category)} | Posts` })
    },
  },
  watch: {
    category () {
      this.setPageTitle()
    },
  },
}

function capitalizeWords (words: string) {
  return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}
