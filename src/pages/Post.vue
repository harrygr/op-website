<template>
<div class="ph4 mt5-ns pt4 mw9">
  <post v-if="post" :post="post"></post>
  <not-found v-if="!post"></not-found>
</div>
</template>

<script>
import notFound from './404'

export default {
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
</script>
