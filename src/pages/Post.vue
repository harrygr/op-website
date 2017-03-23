<template>
<div class="ph4 mt5 pt4 mw9">
  <post v-if="post" :post="post"></post>
  <not-found v-if="notFound"></not-found>
</div>
</template>

<script>
import content from '../content'
import notFound from './404'

export default {
  data () {
    return {
      post: {},
      notFound: false,
    }
  },
  mounted () {
    this.fetchPost()
  },
  methods: {
    fetchPost () {
      this.$store.commit('setLoading', {loading: true})
      content.getPost({id: this.$route.params.id})
        .then(post => {
          this.post = post
          this.$store.commit('setLoading', {loading: false})
        }).catch(err => {
          this.$store.commit('setLoading', {loading: false})
          if (err.response.status === 404) {
            this.notFound = true
          }
          return Promise.reject(err)
        })
    },
  },
  components: { notFound },
}
</script>
