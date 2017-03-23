<template>
  <div class="ph4 mt5 pt4 mw9">
    <p v-if="!posts.length && !$store.state.loading">No Posts</p>

    <transition-group name="fade">
      <post v-for="post in posts" :post="post" :excerpt="true" :key="post.slug" class="cb pv4 bb"></post>
    </transition-group>

  </div>
</template>

<script>
  export default {
    mounted () {
      this.fetchPosts()
    },
    computed: {
      category () {
        return this.$route.params.category
      },
      posts () {
        return this.$store.state.posts
      },
    },
    methods: {
      fetchPosts () {
        if (!this.posts.length || this.category !== this.$store.postCategory) {
          this.$store.commit('setPosts', {posts: [], category: this.category})
          this.$store.commit('setLoading', {loading: true})
          this.$store.dispatch('getPosts', {category: this.category})
        }
      },
    },
    watch: {
      category () {
        this.fetchPosts()
      },
    },
  }
</script>
