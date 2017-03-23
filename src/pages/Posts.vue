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
      this.setPageTitle()
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
      setPageTitle () {
        this.$store.commit('setTitle', {title: `${capitalizeWords(this.category)} | Posts`})
      },
    },
    watch: {
      category () {
        this.fetchPosts()
        this.setPageTitle()
      },
    },
  }

  function capitalizeWords (words) {
    return words.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
  }
</script>
