<template>
  <div class="ph4 mt5 mw9">
   <transition-group name="fade">
  <article v-for="post in posts" :key="post.slug">
    <h1 class="f2 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>
    <time v-if="post.date" :datetime="post.date" itemprop="datePublished">{{ post.date }}</time>
    <section class="fw2 lh-copy" v-html="post.body">
    </section>
  </article>
  </transition-group>
  </div>
</template>

<script>
  import marked from 'marked'

  export default {
    computed: {
      posts () {
        return this.$store.getters.postsInCategory(this.$route.params.category).map(post => {
          return Object.assign({}, post, {
            body: marked(post.body),
          })
        }) || []
      },
    },
  }
</script>
