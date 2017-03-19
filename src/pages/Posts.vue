<template>
  <div class="ph4 mt5 mw9">
    <p v-if="!posts.length && !$store.state.loading">No Posts</p>

    <transition-group name="fade">
      <article v-for="post in posts" :key="post.slug">
        <router-link :to="`/posts/${category}/${post.ID}`" class="link black">
        <h1 class="f2 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>
        </router-link>
        <time v-if="post.date" :datetime="post.date" itemprop="datePublished">{{ post.date }}</time>
        <section class="fw2 lh-copy" v-html="post.excerpt">
        </section>
      </article>
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
