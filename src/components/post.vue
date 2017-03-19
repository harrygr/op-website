<template>
  <article class="post">
    <router-link v-if="excerpt" :to="`/posts/${category}/${post.ID}`" class="link black">
      <h1 class="f2 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>
    </router-link>
    <h1 v-if="!excerpt" class="f2 mv0 lh-copy fw3 ttu">{{ post.title }}</h1>

    <time v-if="post.date" :datetime="post.date" itemprop="datePublished">{{ post.date }}</time>
    <section class="fw2 lh-copy" v-html="excerpt ? post.excerpt : post.content"></section>
  </article>
</template>

<script>
  export default {
    props: {
      excerpt: {
        type: Boolean,
        default: false,
      },
      post: {
        type: Object,
        required: true,
      },
    },

    computed: {
      category () {
        const categories = Object.keys(this.post.categories)
        return categories.length ? this.post.categories[categories[0]].slug : 'uncategorized'
      },
    },
  }
</script>

<style>

</style>
