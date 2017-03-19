<template>
<div class="ph4 mt5 mw9">
  <article>
    <h1 class="f2 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>
    <time v-if="post.date" :datetime="post.date" itemprop="datePublished">{{ post.date }}</time>
    <section class="fw2 lh-copy" v-html="post.content">
    </section>
  </article>
</div>
</template>

<script>
import content from '../content'

export default {
  data () {
    return {
      post: {},
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
          return Promise.reject(err)
        })
    },
  },
}
</script>
